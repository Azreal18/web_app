# Import the calculate_weight function from calculate.py
from .calculate import calculate_weight

# Optional: Add a docstring for the package
"""
API package for fabric weight calculation.

Contains the calculate module with the core logic for weight computation.
"""

# Expose calculate_weight directly when the package is imported
__all__ = ["calculate_weight"]