"""
T2V Near AI Agent Backend API.

This module provides a FastAPI backend for the T2V Near AI Agent,
offering health checks, example endpoints, and environment information.
"""

import sys
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from api.controller import agent, auth, profile
from middleware.security.base import SecurityMiddleware
from middleware.security.cors_config import CORSConfig
from middleware.security.user_rate_limiter import UserSpecificRateLimitMiddleware
from middleware.security.input_sanitizer import InputSanitizationMiddleware
from middleware.security.api_key_auth import APIKeyAuthMiddleware
from middleware.security.security_logger import SecurityLoggingMiddleware
from middleware.security.security_monitor import SecurityMonitoringMiddleware
from utils.environment_manager import EnvironmentManager, EnvironmentValidationError
from utils.logger import logger

# Load environment variables
load_dotenv()

# Validate environment variables on startup
try:
    env_manager = EnvironmentManager()
    validation_status = env_manager.get_validation_status()
    logger.info(f"Environment validation status: {validation_status}")
except EnvironmentValidationError as e:
    logger.error(f"Environment validation failed: {e}")
    sys.exit(1)
except Exception as e:
    logger.error(f"Unexpected error during environment validation: {e}")
    sys.exit(1)

# Create FastAPI instance
app = FastAPI(
    title="API Project",
    description="Work in progress",
    version="0.1",
    swagger_ui_parameters={"docExpansion": "none"},
)

# Configure security middleware stack
# Order matters: security middleware should be added from outermost to innermost

# 1. Security monitoring (outermost - monitors all requests)
app.add_middleware(SecurityMonitoringMiddleware, enable_monitoring=True)

# 2. Security logging
app.add_middleware(SecurityLoggingMiddleware, log_level="INFO")

# 3. Base security headers
app.add_middleware(SecurityMiddleware, security_headers=True)

# 4. CORS with production-ready configuration
cors_config = CORSConfig()
cors_config.create_cors_middleware(app)

# 5. Rate limiting with user-specific tiers
app.add_middleware(UserSpecificRateLimitMiddleware)

# 6. Input sanitization
app.add_middleware(
    InputSanitizationMiddleware,
    strict_mode=False,
    sanitize_query_params=True,
    sanitize_json_body=True,
    block_suspicious=True
)

# 7. API key authentication (innermost - closest to routes)
app.add_middleware(
    APIKeyAuthMiddleware,
    protected_paths=["/api/agent", "/api/profile"],
    header_name="X-API-Key",
    query_param_name="api_key"
)


# Pydantic models
class HealthResponse(BaseModel):
    """Response model for health check endpoints."""

    status: str
    message: str


# Routes
@app.get("/", response_model=HealthResponse)
async def root():
    """Root endpoint - health check"""
    return HealthResponse(
        status="healthy", message="T2V Near AI Agent Backend is running"
    )


@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Basic health check endpoint"""
    return HealthResponse(status="healthy", message="Service is up and running")


@app.get("/health/detailed")
async def detailed_health_check():
    """Detailed health check with service dependencies"""
    health_status = {"status": "healthy", "checks": {}, "timestamp": None}
    
    # Import here to avoid circular imports
    from datetime import datetime
    from utils.database import Database
    import requests
    import os
    
    health_status["timestamp"] = datetime.utcnow().isoformat()
    
    # Check database connectivity
    try:
        db = Database("health_check")
        # Simple ping to check if MongoDB is accessible
        db.client.admin.command('ping')
        health_status["checks"]["database"] = {
            "status": "healthy",
            "message": "MongoDB connection successful"
        }
    except Exception as e:
        health_status["checks"]["database"] = {
            "status": "unhealthy", 
            "message": f"Database connection failed: {str(e)}"
        }
        health_status["status"] = "degraded"
    
    # Check NEAR network connectivity (if configured)
    try:
        near_network = os.getenv("NEAR_NETWORK", "testnet")
        if near_network == "mainnet":
            near_rpc = "https://rpc.mainnet.near.org"
        else:
            near_rpc = "https://rpc.testnet.near.org"
        
        response = requests.get(f"{near_rpc}/status", timeout=5)
        if response.status_code == 200:
            health_status["checks"]["near_network"] = {
                "status": "healthy",
                "message": f"NEAR {near_network} network accessible"
            }
        else:
            health_status["checks"]["near_network"] = {
                "status": "unhealthy",
                "message": f"NEAR network returned status {response.status_code}"
            }
            health_status["status"] = "degraded"
    except Exception as e:
        health_status["checks"]["near_network"] = {
            "status": "unhealthy",
            "message": f"NEAR network check failed: {str(e)}"
        }
        health_status["status"] = "degraded"
    
    # Check environment configuration
    try:
        env_manager = EnvironmentManager(validate_on_init=False)
        missing_vars = env_manager.get_missing_variables()
        if not missing_vars:
            health_status["checks"]["environment"] = {
                "status": "healthy",
                "message": "All required environment variables present"
            }
        else:
            health_status["checks"]["environment"] = {
                "status": "unhealthy",
                "message": f"Missing variables: {', '.join(missing_vars)}"
            }
            health_status["status"] = "degraded"
    except Exception as e:
        health_status["checks"]["environment"] = {
            "status": "unhealthy",
            "message": f"Environment check failed: {str(e)}"
        }
        health_status["status"] = "degraded"
    
    # Add service version info
    health_status["version"] = {
        "service": "T2V NEAR AI Agent",
        "version": "0.1.0",
        "environment": os.getenv("OS", "dev")
    }
    
    return health_status


@app.get("/security/stats")
async def security_stats():
    """Get security monitoring statistics"""
    # This endpoint would typically require admin authentication
    from fastapi import Depends
    
    # Get security stats from monitoring middleware
    # Note: In a real implementation, you'd access the middleware instance
    return {
        "message": "Security monitoring active",
        "features": [
            "Rate limiting with user tiers",
            "Input sanitization and validation", 
            "API key authentication",
            "Security event logging",
            "Real-time threat monitoring",
            "CORS protection",
            "Security headers"
        ]
    }


@app.get("/environment/status")
async def environment_status():
    """Get environment validation status and configuration info"""
    try:
        # Create a new instance without validation to avoid startup issues
        env_manager = EnvironmentManager(validate_on_init=False)
        validation_status = env_manager.get_validation_status()
        
        return {
            "status": "success",
            "validation": validation_status,
            "message": "Environment status retrieved successfully"
        }
    except Exception as e:
        return {
            "status": "error",
            "message": f"Failed to get environment status: {str(e)}",
            "validation": None
        }


routers = [auth.router, agent.router, profile.router]
for router in routers:  # routers_test
    app.include_router(router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
