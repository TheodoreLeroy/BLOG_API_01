using BLOG_API_01.DTO;
using BLOG_API_01.Handlers;
using BLOG_API_01.WebDbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BLOG_API_01.Services
{
    public class JwtService
    {
        private readonly PostgresDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly PasswordHashHandler _passwordHashHandler = new PasswordHashHandler();

        public JwtService(PostgresDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<UserLoginResponse> Authenticate(UserLoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrEmpty(request.Password))
                return null;

            var userAccount = await _context.Users.FirstOrDefaultAsync(u => u.UserName == request.UserName);
            if (userAccount is null || !_passwordHashHandler.VerifyHashedPassword(userAccount.Password, request.Password))
            {
                return null;
            }
            var issuer = _configuration["JwtSettings:Issuer"];
            var audience = _configuration.GetSection("JwtSettings")["Audience"];
            var key = _configuration.GetSection("JwtSettings")["Key"];
            var tokenValidateMins = _configuration["JwtSettings:ValidationInMinutes"];
            var tokenExpireTimeStamp = DateTime.Now.AddMinutes(double.Parse(tokenValidateMins));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("username", userAccount.UserName),
                    new Claim(ClaimTypes.Role, userAccount.Role)
                }),
                Expires = tokenExpireTimeStamp,
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(key)), SecurityAlgorithms.HmacSha512),
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var accessToken = tokenHandler.WriteToken(securityToken);

            return new UserLoginResponse
            {
                AccessToken = accessToken,
            };
        }

        public ClaimsPrincipal? DecodeToken(string token)
        {
            if (string.IsNullOrWhiteSpace(token))
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]);

            try
            {
                var principal = tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = _configuration["JwtSettings:Issuer"],

                    ValidateAudience = true,
                    ValidAudience = _configuration["JwtSettings:Audience"],

                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),

                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                return principal;
            }
            catch
            {
                return null;
            }
        }

        public string? GetUsernameFromToken(string token)
        {
            var principal = DecodeToken(token);
            if (principal == null) return null;

            return principal.FindFirst("username")?.Value;
        }
    }
}
