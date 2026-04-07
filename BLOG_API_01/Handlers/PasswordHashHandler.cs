using System.Security.Cryptography;
using System.Text;
namespace BLOG_API_01.Handlers
{
    public class PasswordHashHandler
    {

        public string HashPassword(string password)
        {
            // 1. Tạo một Salt ngẫu nhiên (để tăng tính bảo mật)
            using var hmac = new HMACSHA512();
            var salt = hmac.Key; // HMACSHA512 tự tạo Key ngẫu nhiên 64 bytes
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

            // 2. Gom cả Salt và Hash vào một chuỗi duy nhất để lưu xuống Database
            // Định dạng: Salt.Hash (Dùng Base64 để lưu dưới dạng chuỗi)
            return Convert.ToBase64String(salt) + "." + Convert.ToBase64String(hash);
        }

        public bool VerifyHashedPassword(string hashedPassword, string providedPassword)
        {
            
            var parts = hashedPassword.Split('.');
            Console.WriteLine(parts.Length);
            if (parts.Length != 2) return false;

            var salt = Convert.FromBase64String(parts[0]);
            var originalHash = Convert.FromBase64String(parts[1]);
            // 2. Dùng Salt cũ để băm lại Password mà người dùng vừa nhập vào
            using var hmac = new HMACSHA512(salt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(providedPassword));

            // 3. So sánh từng byte một để tránh tấn công Timing Attack
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != originalHash[i]) return false;
            }

            return true;
        }
    }
}
