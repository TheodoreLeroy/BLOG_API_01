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
                    { 1, "HA@gmail.com", "HA", "8LOW4OrE3h0wlXm1P9ewPEwXO3PtaJrHdqjLEVSzi86YWMLsU9LM+YHOQSrBIXS4yT5rJa4WdnGRPNfTMMP0+hnk3zwOPkgHJDf8IrlUiFXNo+oYkWBi84jEVCNQyAdZionJZUljE7yDg22luIiznWSgnHciUt0kb+/89ObWhBo=.FemWYCzSGQxTlyEU9Ow6XqQhv7DxlIm8kX7kil33sUHdo74VatWGMbSqLXminFtr3b8S93ilD7Fo6zypUcIECw==", "admin", "kenshin4125" },
                    { 2, "TQ@gmail.com", "TQ", "lb2737W9dE5LNuZrugTsXWgyzwUzla55DkAu6A/CFK37gDeOWMHu4vCWQdPfQ8AzMzKJr5TDKJto/hVFStlRbgYhmcn5il55lZV1X8m/iqXjmt+NkkTyYdWQI3wuPT2JASTrv49bLJ5XrZ9yj4GdFWB4JkK/W6/eoPmLFBlbhiE=.sBG0ljosNDKWD9A+LvUE8neRTB2XC4z1eGHCPt2o3l8uybivqFsw0wcvLBlTQEcMLzYocpLyLpmceOkvoRuSLA==", "user", "cuteyb" },
                    { 3, "he@gmail.com", "hehe1", "ng61X4d8J/mNag2fkDjuOLFI9voWLvRcxhVgIO0a31HkCeePhFPPCcImkz/WbMG55WI+hNGz/QUgyRhejSCY5AR8TLsIqOPwSW9ImDAw+IZZS4bNRCZ/tFLGcrtTZGepU4dU5OZgWXBNQjS2+HOxm8GPsRg2yheWRtjAlT93L80=.h4+JZdoASMhWhMs++nRFI9ysTL80vAgrvDT57WvuTTbtomSNAfetEWcIaibvNp3gBlLckPaHlt2c5uQxMJpeRw==", "user", "hehe" }
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "BlogContent", "BlogCreateTime", "BlogTitle", "UserId" },
                values: new object[,]
                {
                    { 1, "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe", new DateTime(2026, 4, 9, 12, 27, 50, 170, DateTimeKind.Utc).AddTicks(6534), "Nghị luận xã hội 1", 1 },
                    { 2, "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe", new DateTime(2026, 4, 9, 12, 27, 50, 170, DateTimeKind.Utc).AddTicks(6537), "Nghị luận xã hội 2", 2 },
                    { 3, "qwefuhudvuohwuefquowegfyqwbefhshdhbdkvawe", new DateTime(2026, 4, 9, 12, 27, 50, 170, DateTimeKind.Utc).AddTicks(6538), "Nghị luận xã hội 3", 2 }
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
