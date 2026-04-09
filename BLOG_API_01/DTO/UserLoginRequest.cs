namespace BLOG_API_01.DTO
{
    public class UserLoginRequest
    {
        public string? Password { get; set; }
        public string UserName { get; set; }
        = string.Empty;
    }
}
