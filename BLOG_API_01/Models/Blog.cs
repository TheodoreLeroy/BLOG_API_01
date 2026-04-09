using System.ComponentModel.DataAnnotations;

namespace BLOG_API_01.Models
{
    public class Blog
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string BlogTitle { get; set; }
        [Required]
        public string BlogContent { get; set; }
        [Required]
        public DateTime BlogCreateTime { get; set; }
        [Required]
        public int UserId { get; set; }
    }
}
