namespace BLOG_API_01.DTO.UserRequest
{
    public class UserLoginRequest
    {
        public string? Password { get; set; }
        public string UserName { get; set; }
        = string.Empty;
    }
}
