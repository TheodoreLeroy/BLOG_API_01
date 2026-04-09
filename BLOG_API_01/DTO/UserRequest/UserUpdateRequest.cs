using System.ComponentModel.DataAnnotations;

namespace BLOG_API_01.DTO.UserRequest
{
    public class UserUpdateRequest
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
