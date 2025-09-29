import os
from typing import Any, Dict, Generator, List, Optional

from dotenv import dotenv_values

from utils.constants.environment_keys import (EnvironmentKeys,
                                              TestEnvironmentKeys)
from utils.logger import logger


class EnvironmentValidationError(Exception):
    """Raised when required environment variables are missing."""
    pass


class EnvironmentManager:
    environment_values: Dict[str, str] = {}

    def __init__(self, env_file_name=".env", validate_on_init=True):
        env = os.getenv(EnvironmentKeys.OS.value)
        if env == "prod":
            for key in EnvironmentKeys:
                self.environment_values[key.value] = os.getenv(key.value)
        elif env == "test":
            for key in TestEnvironmentKeys:
                self.environment_values[key.value] = os.getenv(key.value)
        else:
            self.environment_values = dotenv_values(env_file_name)
        
        if validate_on_init:
            self.validate_required_variables()

    def get_key(self, key) -> str:
        if key in self.environment_values:
            return self.environment_values[key]
        raise KeyError(f"Key '{key}' not found in environment values.")

    def has_key(self, key) -> bool:
        """Check if a key exists in the environment values."""
        return key in self.environment_values

    def get_required_variables(self) -> List[str]:
        """Get list of required environment variables based on current environment."""
        env = os.getenv(EnvironmentKeys.OS.value, "dev")
        
        if env == "prod":
            # Required variables for production
            return [
                EnvironmentKeys.CONNECTION_STRING.value,
                EnvironmentKeys.SECRET_KEY.value,
                EnvironmentKeys.ALGORITHM.value,
                EnvironmentKeys.OTP_SECRET.value
            ]
        elif env == "test":
            # Required variables for testing
            return [
                TestEnvironmentKeys.CONNECTION_STRING.value,
                TestEnvironmentKeys.SECRET_KEY.value,
                TestEnvironmentKeys.OTP_SECRET.value,
                TestEnvironmentKeys.ALGORITHM.value
            ]
        else:
            # Required variables for development
            return [
                EnvironmentKeys.SECRET_KEY.value,
                EnvironmentKeys.ALGORITHM.value,
                EnvironmentKeys.OTP_SECRET.value
            ]

    def get_missing_variables(self) -> List[str]:
        """Get list of missing required environment variables."""
        required_vars = self.get_required_variables()
        missing_vars = []
        
        for var in required_vars:
            if not self.environment_values.get(var):
                missing_vars.append(var)
        
        return missing_vars

    def validate_required_variables(self) -> None:
        """Validate that all required environment variables are present and not empty."""
        missing_vars = self.get_missing_variables()
        
        if missing_vars:
            env = os.getenv(EnvironmentKeys.OS.value, "dev")
            error_message = (
                f"Missing required environment variables for '{env}' environment:\n"
                f"  - {', '.join(missing_vars)}\n\n"
                f"Please check your .env file or environment configuration.\n"
                f"See .env.example for required variables."
            )
            logger.error(error_message)
            raise EnvironmentValidationError(error_message)
        
        logger.info(f"Environment validation passed. All required variables present.")

    def get_validation_status(self) -> Dict[str, Any]:
        """Get detailed validation status for debugging."""
        required_vars = self.get_required_variables()
        missing_vars = self.get_missing_variables()
        
        return {
            "environment": os.getenv(EnvironmentKeys.OS.value, "dev"),
            "required_variables": required_vars,
            "missing_variables": missing_vars,
            "validation_passed": len(missing_vars) == 0,
            "total_loaded_vars": len([k for k, v in self.environment_values.items() if v])
        }


def get_environment_manager() -> Generator[EnvironmentManager, Any, None]:
    ev_manager = EnvironmentManager()
    try:
        logger.info("Environment manager init is done")
        yield ev_manager
    except Exception as e:
        logger.error(e)
