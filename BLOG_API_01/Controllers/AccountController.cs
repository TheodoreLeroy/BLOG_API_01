using BLOG_API_01.DTO;
using BLOG_API_01.Models;
using BLOG_API_01.Services;
using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BLOG_API_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly PostgresDbContext _context;
        private readonly JwtService _jwtService;
        public AccountController(PostgresDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        // POST: User login

        [HttpPost("Login")]
        public async Task<IActionResult> UserLoginRequest(UserLoginRequest request)
        {
            var result = await _jwtService.Authenticate(request);
            if (result is null)
                return Unauthorized("No");

            return Ok(result);
        }

        // POST: Register a new user
        [HttpPost("Register")]
        public async Task<IActionResult> RegistNewUserRequest(UserRegistRequest request)
        {
            if (request == null)
            {
                return BadRequest();
            }
            var user = new User
            {
                Name = request.Name,
                Email = request.Email,
                Password = request.Password,
                UserName = request.UserName,
                Role = request.Role
            };
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }
    }
}
