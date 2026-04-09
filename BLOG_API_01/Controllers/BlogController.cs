using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Mvc;

namespace BLOG_API_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly PostgresDbContext _context;
        public BlogController(PostgresDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBlogs()
        {

            return Ok();
        }
    }
}
