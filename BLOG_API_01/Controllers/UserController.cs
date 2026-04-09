using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BLOG_API_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly PostgresDbContext _context;
        public UserController(PostgresDbContext context)
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

        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> DeleteUser(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);
            if (user == null)
            {
                return BadRequest("No user found!");
            }
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok("Delete successful");
        }
    }
}
