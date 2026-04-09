using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BLOG_API_01.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    UserName = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BlogTitle = table.Column<string>(type: "text", nullable: false),
                    BlogContent = table.Column<string>(type: "text", nullable: false),
                    BlogCreateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Blogs_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Name", "Password", "Role", "UserName" },
                values: new object[,]
                {
                    { 1, "HA@gmail.com", "HA", "wWX71uyG0FBhhrJYi3DvoticP3X1EyVjXlVanzVH9bruG/l1gahbOG1kouLbhDJ7HLQq72NZIOtZn8tHGQUDSfRtAEm/BMlm5rE9NUP/TWnWbIBKhM0AOkTB2et2jw6tFOmiZOf8Dd1GnYLQP7NEqqqXeVrJ6FCb9BYAxIi4/8o=.eFAT5NHpAVIOFx2V4UxHOPU5iA5s67Fqloamp8PGmPiDVcMKjRe/BeWOL7KyCNYOn9UFPyG/S1kPhGeREsXcog==", "admin", "kenshin4125" },
                    { 2, "TQ@gmail.com", "TQ", "cENlO0nEtBxskcA5y12SeLgmfR2Ap5ZWSwDD1iYevSZpHFfFF5Ykj2xWh5eq0HYttlCC8cHwVEb4E9OuBAEvV0F2qRlOnPcJf5G5VNDOkd/7uumxS5lTnXkDWXZuyUwyZ77x8L0cnlB3XDGYTOSqd9R9esInwXMm4CP6gOYv2AU=.98C08JQdxgBufmra/bjYVIljiS1H8NWj8zta9uAyNlCpZMQbO0qr0iBTF8ORUbkNU0F+MtjZVnR5gB4+HAwRwg==", "user", "cuteyb" },
                    { 3, "he@gmail.com", "hehe1", "Uh7KJzez2JdpkgZhtpR+wdhXj/ij4VgrS29P1CQf5n85h5EehlM/i9cY6PjNBNAfmGDdxCYS/qReUtbKaLG+2YlLw2cVOqMTWD1RarHl7xRoslCgu/y8+pnXZQSsvpkyF+0Zyiks3A4FJ1SnV/QnPZuG7j5EuPJZYyuaDCKj0v4=.K1/xQx8dIZdgmdyBQ9jT6bWhRyRs7RXJDE8whKvLGBDmZech8KXsKcWL37M0Zpoa+Oml8ubQ4+JTrSYA3UEpbg==", "user", "hehe" }
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "BlogContent", "BlogCreateTime", "BlogTitle", "UserId" },
                values: new object[,]
                {
                    { 1, "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe", new DateTime(2026, 4, 9, 5, 57, 54, 298, DateTimeKind.Utc).AddTicks(5265), "Nghị luận xã hội 1", 1 },
                    { 2, "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe", new DateTime(2026, 4, 9, 5, 57, 54, 298, DateTimeKind.Utc).AddTicks(5268), "Nghị luận xã hội 2", 2 },
                    { 3, "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe", new DateTime(2026, 4, 9, 5, 57, 54, 298, DateTimeKind.Utc).AddTicks(5271), "Nghị luận xã hội 3", 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Blogs_UserId",
                table: "Blogs",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
