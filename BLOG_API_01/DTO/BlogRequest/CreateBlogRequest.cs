using System.ComponentModel.DataAnnotations;

namespace BLOG_API_01.DTO.BlogRequest
{
    public class CreateBlogRequest
    {
        public string BlogTitle { get; set; }
        public string BlogContent { get; set; }
        public int UserId { get; set; }
    }
}
