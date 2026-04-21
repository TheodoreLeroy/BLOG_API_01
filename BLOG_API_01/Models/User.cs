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
        [Required]
        public required string Password { get; set; }
        public required string UserName { get; set; }
        public string? Role { get; set; }
        public virtual ICollection<Blog> blogId { get; set; }
    }
}
