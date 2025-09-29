"""
Standard API Response Wrapper

Provides consistent response format across all API endpoints.
"""

from typing import Any, Dict, Optional, Union
from pydantic import BaseModel
from datetime import datetime


class StandardResponse(BaseModel):
    """Standard API response format"""
    success: bool
    message: str
    data: Optional[Any] = None
    error: Optional[Dict[str, Any]] = None
    timestamp: str
    request_id: Optional[str] = None

    class Config:
        arbitrary_types_allowed = True


class ResponseWrapper:
    """Utility class for creating standardized API responses"""

    @staticmethod
    def success(
        message: str = "Operation completed successfully",
        data: Any = None,
        request_id: Optional[str] = None
    ) -> StandardResponse:
        """Create a success response"""
        return StandardResponse(
            success=True,
            message=message,
            data=data,
            timestamp=datetime.utcnow().isoformat(),
            request_id=request_id
        )

    @staticmethod
    def error(
        message: str = "An error occurred",
        error_code: Optional[str] = None,
        error_details: Optional[Dict[str, Any]] = None,
        request_id: Optional[str] = None,
        status_code: int = 400
    ) -> StandardResponse:
        """Create an error response"""
        error_info = {
            "code": error_code,
            "details": error_details,
            "status_code": status_code
        }
        
        return StandardResponse(
            success=False,
            message=message,
            error=error_info,
            timestamp=datetime.utcnow().isoformat(),
            request_id=request_id
        )

    @staticmethod
    def validation_error(
        message: str = "Validation failed",
        validation_errors: Optional[Dict[str, Any]] = None,
        request_id: Optional[str] = None
    ) -> StandardResponse:
        """Create a validation error response"""
        return ResponseWrapper.error(
            message=message,
            error_code="VALIDATION_ERROR",
            error_details={"validation_errors": validation_errors},
            request_id=request_id,
            status_code=422
        )

    @staticmethod
    def not_found(
        message: str = "Resource not found",
        resource: Optional[str] = None,
        request_id: Optional[str] = None
    ) -> StandardResponse:
        """Create a not found response"""
        return ResponseWrapper.error(
            message=message,
            error_code="NOT_FOUND",
            error_details={"resource": resource},
            request_id=request_id,
            status_code=404
        )

    @staticmethod
    def unauthorized(
        message: str = "Unauthorized access",
        request_id: Optional[str] = None
    ) -> StandardResponse:
        """Create an unauthorized response"""
        return ResponseWrapper.error(
            message=message,
            error_code="UNAUTHORIZED",
            request_id=request_id,
            status_code=401
        )

    @staticmethod
    def forbidden(
        message: str = "Forbidden access",
        request_id: Optional[str] = None
    ) -> StandardResponse:
        """Create a forbidden response"""
        return ResponseWrapper.error(
            message=message,
            error_code="FORBIDDEN",
            request_id=request_id,
            status_code=403
        )

    @staticmethod
    def server_error(
        message: str = "Internal server error",
        error_details: Optional[Dict[str, Any]] = None,
        request_id: Optional[str] = None
    ) -> StandardResponse:
        """Create a server error response"""
        return ResponseWrapper.error(
            message=message,
            error_code="INTERNAL_ERROR",
            error_details=error_details,
            request_id=request_id,
            status_code=500
        )
