namespace BLOG_API_01.DTO
{
    public class UserRegistRequest
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string? Role { get; set; }
    }
}
