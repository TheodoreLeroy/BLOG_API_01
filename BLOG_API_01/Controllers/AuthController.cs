using System.Buffers.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using BLOG_API_01.DTO.UserRequest;
using BLOG_API_01.Handlers;
using BLOG_API_01.Models;
using BLOG_API_01.Services;
using BLOG_API_01.WebDbContext;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BLOG_API_01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class AuthController : ControllerBase
    {
        private readonly PostgresDbContext _context;
        private readonly JwtService _jwtService;
        private readonly ILogger<CustomExceptionHandler> _logger;
        public AuthController(PostgresDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        // POST: User login
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> UserLoginRequest(UserLoginRequest request)
        {
            var result = await _jwtService.Authenticate(request);
            if (result is null)
            {
                return Unauthorized("No");
            }

            return Ok(result);
        }

        // POST: Register a new user
        [AllowAnonymous]
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
                Password = _jwtService.HashUserPassword(request.Password),
                UserName = request.UserName,
                Role = request.Role
            };
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok();
        }


        // GET: Get me
        [Authorize]
        [HttpPost("getme")] // Note: Conventionally, this should probably be [HttpGet("getme")]
        public async Task<IActionResult> GetMe()
        {
            // Cách 1: Tối ưu nhất (Khuyên dùng)
            // Vì bạn đã có [Authorize], ASP.NET Core đã tự động validate và parse JWT.
            // Bạn có thể lấy trực tiếp username từ User claims mà không cần phải tự giải mã JWT nữa:
            var role = User.FindFirst(ClaimTypes.Role)?.Value;
            
            // Cách 2: Nếu bạn vẫn muốn dùng JWT Service của bạn tự viết (Tháo comment để dùng)
            /*
            var authHeader = Request.Headers.Authorization.ToString();
            if (string.IsNullOrEmpty(authHeader) || !authHeader.StartsWith("Bearer "))
                return Unauthorized();
            
            var token = authHeader.Substring(7); // Cắt bỏ chữ "Bearer " để lấy mỗi chuỗi token
            var decode = _jwtService.GetUsernameFromToken(token); // Truyền đúng chuỗi token vào (chứ không phải mảng)
            */

            return Ok(new { Role = role });
        }
    }
}
