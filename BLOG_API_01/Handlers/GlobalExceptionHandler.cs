using Microsoft.AspNetCore.Diagnostics;

namespace BLOG_API_01.Handlers
{
    public class CustomExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<CustomExceptionHandler> _logger;
        public CustomExceptionHandler(ILogger<CustomExceptionHandler> logger)
        {
            _logger = logger;
        }
        public ValueTask<bool> TryHandleAsync(
            HttpContext httpContext, 
            Exception exception, 
            CancellationToken cancellationToken)
        {
            var exceptionMessage = exception.Message;
            _logger.LogError(
                "Error Message: {exceptionMessage}, Time of occurence {time}",
                exceptionMessage, DateTime.UtcNow);
            return ValueTask.FromResult(false);
        }
    }
}
