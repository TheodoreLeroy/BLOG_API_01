using BLOG_API_01.DTO.BlogRequest;
using BLOG_API_01.Models;
using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        // GET: Get all blogs
        [HttpGet("blogs")]
        [AllowAnonymous]
        public async Task<IActionResult> GetBlogsRequest()
        {
            var blogs = await _context.Blogs.ToListAsync();
            return Ok(blogs);
        }

        // POST: Create new blog
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateNewBlogRequest(CreateBlogRequest request)
        {
            if (request == null)
            {
                return BadRequest("Request null!");
            }
            var blog = new Blog
            {
                BlogTitle = request.BlogTitle,
                BlogContent = request.BlogContent,
                BlogCreateTime = DateTime.Now,
                UserId = request.UserId,
            };
            await _context.Blogs.AddAsync(blog);
            await _context.SaveChangesAsync();
            return Ok(blog);
        }
    }
}
