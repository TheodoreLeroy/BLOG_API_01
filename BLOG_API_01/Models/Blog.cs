namespace BLOG_API_01.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string BlogContent { get; set; }
        public string BlogType { get; set; }
        public DateTime BlogCreatedTime { get; private set; }
        public int UserId { get; set; }
    }
}
