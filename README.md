# tienganhvuihoc.com - Nền Tảng Học Ngoại Ngữ Thương Mại

Dự án Web App học Tiếng Anh và Tiếng Trung với hệ thống Gamification mạnh mẽ, giao diện UI/UX cao cấp (màu vàng pastel, glassmorphism), kết hợp Animation mượt mà.

## 🚀 Công Nghệ Sử Dụng

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS v4 + Framer Motion
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Backend & Database:** Firebase (Auth, Firestore, Storage)

## ✨ Chức Năng Chính

- **Student Dashboard:** Quản lý điểm XP, Chuỗi ngày học (Streak), Lịch học.
- **English Zone & Chinese Zone:** Cung cấp bài học từ A1-C2 (Tiếng Anh) và HSK1-6 (Tiếng Trung).
- **Gamification:** 
  - Thẻ nhớ (Flashcard 3D).
  - Trắc nghiệm (Quiz) với hiệu ứng chúc mừng.
  - Bảng xếp hạng (Leaderboard) & Thú cưng đồng hành (Mascot).
- **Admin Panel:** Quản lý người dùng, tạo mã kích hoạt (Activation Key).
- **Phân Quyền:** Super Admin, Admin, Teacher, Student.

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/       # Các components tái sử dụng
│   ├── auth/         # Phân quyền, Guard routes
│   ├── layout/       # Navbar, Footer, MainLayout
│   ├── learning/     # Flashcard, Quiz components
│   └── ui/           # Button, Card (Glassmorphism)
├── data/             # Mock data (để test trước khi nối Firestore)
├── lib/              # Cấu hình Firebase
├── pages/            # Các trang giao diện (Home, Login, Dashboard...)
└── store/            # Zustand stores (Auth, Progress)
```

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Local

1. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

2. **Cấu hình môi trường:**
   Tạo file `.env` từ `.env.example` và điền thông tin Firebase:
   ```bash
   cp .env.example .env
   ```

3. **Chạy dự án (Development):**
   ```bash
   npm run dev
   ```

4. **Build dự án:**
   ```bash
   npm run build
   ```

## 🔑 Hướng Dẫn Cấu Hình Firebase

1. Tạo dự án trên [Firebase Console](https://console.firebase.google.com/).
2. Kích hoạt **Authentication** (Email/Password).
3. Kích hoạt **Firestore Database**.
4. Kích hoạt **Firebase Storage**.
5. Lấy các key cấu hình dán vào `.env`.

## 🛡️ Ghi Chú Bảo Mật

- **KHÔNG** commit file `.env` thật lên GitHub. File này đã được thêm vào `.gitignore`.
- Mã kích hoạt (Activation Key) sẽ được mã hóa và lưu trữ an toàn trên Firestore.

## 📈 Roadmap Nâng Cấp

- [ ] Tích hợp API Text-to-Speech phát âm chuẩn.
- [ ] Thêm module Luyện Viết chữ Hán.
- [ ] Mở rộng kho tàng Game (Nối chữ, Kéo thả).
- [ ] Báo cáo chi tiết quá trình học tập cho Giáo viên.
