export type Role = 'super_admin' | 'admin' | 'teacher' | 'student';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: Role;
  xp: number;
  streak: number;
  vipStatus: 'active' | 'expired' | 'none';
  vipExpiresAt?: Date;
}

export interface ActivationKey {
  id: string;
  code: string;
  status: 'unused' | 'used' | 'expired';
  durationDays: number;
  createdBy: string;
  createdAt: Date;
  usedBy?: string;
  usedAt?: Date;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  type: 'vocabulary' | 'grammar' | 'conversation' | 'listening' | 'writing';
  language: 'en' | 'zh';
  level: string; // A1, A2, HSK1, HSK2, etc.
  content: any; // Flexible content structure
}

export interface Course {
  id: string;
  language: 'en' | 'zh';
  level: string;
  title: string;
  description: string;
  thumbnail: string;
}

export const mockUsers: User[] = [
  { uid: 'u1', email: 'superadmin@tienganhvuihoc.com', displayName: 'Super Admin', role: 'super_admin', xp: 9999, streak: 365, vipStatus: 'active' },
  { uid: 'u2', email: 'admin@tienganhvuihoc.com', displayName: 'Admin User', role: 'admin', xp: 5000, streak: 120, vipStatus: 'active' },
  { uid: 'u3', email: 'teacher@tienganhvuihoc.com', displayName: 'Teacher Sarah', role: 'teacher', xp: 3000, streak: 50, vipStatus: 'active' },
  { uid: 'u4', email: 'student1@gmail.com', displayName: 'Student One', role: 'student', xp: 1500, streak: 15, vipStatus: 'active', vipExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) },
  { uid: 'u5', email: 'student2@gmail.com', displayName: 'Student Two', role: 'student', xp: 200, streak: 2, vipStatus: 'none' },
  { uid: 'u6', email: 'alice@gmail.com', displayName: 'Alice Wonderland', role: 'student', xp: 4500, streak: 45, vipStatus: 'active' },
  { uid: 'u7', email: 'bob@gmail.com', displayName: 'Bob Builder', role: 'student', xp: 3200, streak: 28, vipStatus: 'active' },
  { uid: 'u8', email: 'charlie@gmail.com', displayName: 'Charlie Brown', role: 'student', xp: 2800, streak: 21, vipStatus: 'active' },
  { uid: 'u9', email: 'david@gmail.com', displayName: 'David Beckham', role: 'student', xp: 1900, streak: 14, vipStatus: 'active' },
  { uid: 'u10', email: 'emma@gmail.com', displayName: 'Emma Watson', role: 'student', xp: 1200, streak: 7, vipStatus: 'none' },
  { uid: 'u11', email: 'fiona@gmail.com', displayName: 'Fiona Gallagher', role: 'student', xp: 800, streak: 5, vipStatus: 'none' },
  { uid: 'u12', email: 'george@gmail.com', displayName: 'George Lucas', role: 'student', xp: 500, streak: 3, vipStatus: 'none' },
];

export const mockKeys: ActivationKey[] = [
  { id: 'k1', code: 'TA-1Y-2026-ABCD', status: 'unused', durationDays: 365, createdBy: 'u1', createdAt: new Date() },
  { id: 'k2', code: 'TA-1Y-2026-WXYZ', status: 'used', durationDays: 365, createdBy: 'u2', createdAt: new Date(Date.now() - 10000000), usedBy: 'u4', usedAt: new Date() },
];

export const mockCourses: Course[] = [
  { id: 'c_en_a1', language: 'en', level: 'A1', title: 'Tiếng Anh Căn Bản (A1)', description: 'Nền tảng tiếng Anh cho người mới bắt đầu. Bao gồm chào hỏi, giới thiệu bản thân.', thumbnail: '/assets/en_a1.png' },
  { id: 'c_en_a2', language: 'en', level: 'A2', title: 'Tiếng Anh Giao Tiếp Sơ Cấp (A2)', description: 'Mở rộng vốn từ vựng và ngữ pháp để giao tiếp hàng ngày tự tin hơn.', thumbnail: '/assets/en_a2.png' },
  { id: 'c_en_b1', language: 'en', level: 'B1', title: 'Tiếng Anh Công Sở (B1)', description: 'Tiếng Anh dùng trong môi trường văn phòng, viết email, thuyết trình.', thumbnail: '/assets/en_b1.png' },
  { id: 'c_en_b2', language: 'en', level: 'B2', title: 'Tiếng Anh Thương Mại (B2)', description: 'Từ vựng đàm phán, marketing, và sales chuyên nghiệp.', thumbnail: '/assets/en_b2.png' },
  
  { id: 'c_zh_hsk1', language: 'zh', level: 'HSK1', title: 'Tiếng Trung Sơ Cấp (HSK1)', description: 'Làm quen tiếng Trung giản thể & Pinyin. 150 từ vựng cốt lõi.', thumbnail: '/assets/zh_hsk1.png' },
  { id: 'c_zh_hsk2', language: 'zh', level: 'HSK2', title: 'Tiếng Trung Sơ Cấp (HSK2)', description: 'Mở rộng câu giao tiếp cơ bản, 300 từ vựng.', thumbnail: '/assets/zh_hsk2.png' },
  { id: 'c_zh_hsk3', language: 'zh', level: 'HSK3', title: 'Tiếng Trung Trung Cấp (HSK3)', description: 'Giao tiếp công việc, du lịch. 600 từ vựng.', thumbnail: '/assets/zh_hsk3.png' },
  { id: 'c_zh_hsk4', language: 'zh', level: 'HSK4', title: 'Tiếng Trung Thương Mại (HSK4)', description: 'Tiếng Trung dùng trong đàm phán, xuất nhập khẩu.', thumbnail: '/assets/zh_hsk4.png' },
];

export const mockLessons: Lesson[] = [
  // English A1
  {
    id: 'l_en_a1_1', courseId: 'c_en_a1', title: 'Greetings & Introductions', type: 'vocabulary', language: 'en', level: 'A1',
    content: {
      words: [
        { word: 'Hello', meaning: 'Xin chào', example: 'Hello, how are you?' },
        { word: 'Goodbye', meaning: 'Tạm biệt', example: 'Goodbye, see you later!' },
        { word: 'Morning', meaning: 'Buổi sáng', example: 'Good morning, everyone.' },
        { word: 'Name', meaning: 'Tên', example: 'My name is John.' },
        { word: 'Nice', meaning: 'Tốt, vui', example: 'Nice to meet you.' }
      ]
    }
  },
  // English B1
  {
    id: 'l_en_b1_1', courseId: 'c_en_b1', title: 'Office Vocabulary', type: 'vocabulary', language: 'en', level: 'B1',
    content: {
      words: [
        { word: 'Meeting', meaning: 'Cuộc họp', example: 'We have a meeting at 10 AM.' },
        { word: 'Deadline', meaning: 'Hạn chót', example: 'The deadline for this project is Friday.' },
        { word: 'Schedule', meaning: 'Lịch trình', example: 'Let me check my schedule.' },
        { word: 'Report', meaning: 'Báo cáo', example: 'Please send me the report.' },
        { word: 'Attach', meaning: 'Đính kèm', example: 'I have attached the file to this email.' }
      ]
    }
  },
  // Chinese HSK1
  {
    id: 'l_zh_hsk1_1', courseId: 'c_zh_hsk1', title: 'Chào hỏi cơ bản', type: 'vocabulary', language: 'zh', level: 'HSK1',
    content: {
      words: [
        { word: '你好', pinyin: 'nǐ hǎo', meaning: 'Xin chào', example: '你好吗？ (nǐ hǎo ma?)' },
        { word: '谢谢', pinyin: 'xièxie', meaning: 'Cảm ơn', example: '谢谢你！ (xièxie nǐ!)' },
        { word: '再见', pinyin: 'zàijiàn', meaning: 'Tạm biệt', example: '明天再见 (míngtiān zàijiàn)' },
        { word: '对不起', pinyin: 'duìbuqǐ', meaning: 'Xin lỗi', example: '对不起，我迟到了。' },
        { word: '没关系', pinyin: 'méi guānxi', meaning: 'Không có gì', example: '没关系。' }
      ]
    }
  },
  // Chinese HSK4
  {
    id: 'l_zh_hsk4_1', courseId: 'c_zh_hsk4', title: 'Đàm phán kinh doanh', type: 'vocabulary', language: 'zh', level: 'HSK4',
    content: {
      words: [
        { word: '合同', pinyin: 'hétong', meaning: 'Hợp đồng', example: '我们签合同吧。 (Chúng ta ký hợp đồng nhé)' },
        { word: '价格', pinyin: 'jiàgé', meaning: 'Giá cả', example: '这个价格太高了。 (Giá này cao quá)' },
        { word: '合作', pinyin: 'hézuò', meaning: 'Hợp tác', example: '希望我们合作愉快。 (Hy vọng chúng ta hợp tác vui vẻ)' },
        { word: '质量', pinyin: 'zhìliàng', meaning: 'Chất lượng', example: '质量第一。 (Chất lượng là số 1)' },
        { word: '交货', pinyin: 'jiāohuò', meaning: 'Giao hàng', example: '什么时候交货？ (Khi nào giao hàng?)' }
      ]
    }
  }
];
