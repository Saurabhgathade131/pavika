import logging
import sys
import structlog

def setup_logging(log_level: str = "INFO"):
    """
    Setup structlog for enterprise-grade JSON logging.
    """
    logging.basicConfig(format="%(message)s", stream=sys.stdout, level=getattr(logging, log_level.upper()))
    
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.contextvars.merge_contextvars,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )
