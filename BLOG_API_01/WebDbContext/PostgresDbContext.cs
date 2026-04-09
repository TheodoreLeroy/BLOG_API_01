using BLOG_API_01.Handlers;
using BLOG_API_01.Models;
using Microsoft.EntityFrameworkCore;

namespace BLOG_API_01.WebDbContext
{
    public class PostgresDbContext : DbContext
    {
        // Configure database
        public PostgresDbContext(DbContextOptions<PostgresDbContext> options) : base(options)
        {
        }

        // provide table
        public DbSet<User> Users { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            PasswordHashHandler passwordHashHandler = new PasswordHashHandler();

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasData(
                    new User
                    {
                        Id = 1,
                        UserName = "kenshin4125",
                        Password = passwordHashHandler.HashPassword("05032002"),
                        Name = "HA",
                        Email = "HA@gmail.com",
                        Role = "admin"
                    },
                    new User
                    {
                        Id = 2,
                        UserName = "cuteyb",
                        Password = passwordHashHandler.HashPassword("05032002"),
                        Name = "TQ",
                        Email = "TQ@gmail.com",
                        Role = "user"
                    },
                    new User
                    {
                        Id = 3,
                        UserName = "hehe",
                        Password = passwordHashHandler.HashPassword("05032002"),
                        Name = "hehe1",
                        Email = "he@gmail.com",
                        Role = "user"
                    }
                );
            modelBuilder.Entity<Blog>()
                .HasData(
                    new Blog
                    {
                        Id = 1,
                        BlogTitle = "Nghị luận xã hội 1",
                        BlogContent = "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe",
                        BlogCreateTime = DateTime.UtcNow,
                        UserId = 1,
                    },
                    new Blog
                    {
                        Id = 2,
                        BlogTitle = "Nghị luận xã hội 2",
                        BlogContent = "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe",
                        BlogCreateTime = DateTime.UtcNow,
                        UserId = 2,
                    },
                    new Blog
                    {
                        Id = 3,
                        BlogTitle = "Nghị luận xã hội 3",
                        BlogContent = "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe",
                        BlogCreateTime = DateTime.UtcNow,
                        UserId = 2,
                    }
                );

            modelBuilder.Entity<Blog>()
           .HasOne<User>()        // Blog có một User
           .WithMany(u => u.blogId)    // User có nhiều Blog (blogId là tên bạn đặt)
           .HasForeignKey(b => b.UserId) // Khóa ngoại là UserId
           .OnDelete(DeleteBehavior.Cascade); // Xóa user thì xóa luôn blog
            
        }
    }
}
