using System.ComponentModel.DataAnnotations;

namespace BLOG_API_01.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string? Role { get; set; }
        public virtual ICollection<Blog> Blogs { get; set; }
    }
}
