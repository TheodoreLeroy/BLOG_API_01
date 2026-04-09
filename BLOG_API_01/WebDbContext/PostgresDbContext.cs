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

            // Cấu hình Entity User
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(u => u.Password)
                      .HasConversion(
                          v => passwordHashHandler.HashPassword(v),
                          v => v
                      );
                entity.HasMany(u => u.Blogs)
                      .WithOne()
                      .HasForeignKey("UserId");
            });
        }
    }
}
