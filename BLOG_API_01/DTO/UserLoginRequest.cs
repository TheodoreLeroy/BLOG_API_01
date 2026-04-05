namespace BLOG_API_01.DTO
{
    public class UserLoginRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string UserName { get; set; }
        = string.Empty;
    }
}
