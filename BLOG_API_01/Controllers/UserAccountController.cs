using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BLOG_API_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserAccountController : ControllerBase
    {
        private readonly PostgresDbContext _context;
        public UserAccountController(PostgresDbContext context)
        {
            _context = context;
        }
        //GET: Get all user        
        [HttpGet("Users")]
        public async Task<IActionResult> GetUsersRequest()
        {
            var userList = await _context.Users.ToListAsync();
            return Ok(userList);
        }
    }
}
