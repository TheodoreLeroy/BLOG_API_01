namespace BLOG_API_01.DTO
{
    public class UserLoginResponse
    {
        public string? UserName { get; set; }
        public string? AccessToken { get; set; }
        public int ExpireIn { get; set; }
    }
}
