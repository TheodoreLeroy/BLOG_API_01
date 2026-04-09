using BLOG_API_01.DTO.UserRequest;
using BLOG_API_01.Models;
using BLOG_API_01.Services;
using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BLOG_API_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserController : ControllerBase
    {
        private readonly PostgresDbContext _context;
        public UserController(PostgresDbContext context)
        {
            _context = context;
        }

        //GET: Get all user        
        [HttpGet("Users")]
        [Authorize]
        public async Task<IActionResult> GetUsersRequest()
        {
            var userList = await _context.Users.ToListAsync();
            return Ok(userList);
        }

        // DELETE: Delete user
        [HttpDelete("DeleteUser")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> DeleteUserRequest(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            if(user is null)
            {
                return BadRequest(new { messege = "No user found!" });
            }
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok(new { messege = "User " + user.UserName + " have been delete!" });
        }

        // UPDATE: Update user
        [HttpPut("UpdateInfor")]
        [Authorize]
        public async Task<IActionResult> UpdateUserRequest(int id, UserUpdateRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
            {
                return BadRequest("No user found!");
            }
            if (!string.IsNullOrEmpty(request.Email))
            {
                user.Email = request.Email;
            }

            if (!string.IsNullOrEmpty(request.Name))
            {
                user.Name = request.Name;
            }

            if (!string.IsNullOrEmpty(request.Password))
            {
                
                user.Password = request.Password;
            }
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
