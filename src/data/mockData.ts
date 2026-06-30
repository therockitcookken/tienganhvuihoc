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
];

export const mockKeys: ActivationKey[] = [
  { id: 'k1', code: 'TA-1Y-2026-ABCD', status: 'unused', durationDays: 365, createdBy: 'u1', createdAt: new Date() },
  { id: 'k2', code: 'TA-1Y-2026-WXYZ', status: 'used', durationDays: 365, createdBy: 'u2', createdAt: new Date(Date.now() - 10000000), usedBy: 'u4', usedAt: new Date() },
];

export const mockCourses: Course[] = [
  { id: 'c_en_a1', language: 'en', level: 'A1', title: 'Tiếng Anh Căn Bản (A1)', description: 'Nền tảng tiếng Anh cho người mới bắt đầu.', thumbnail: '/assets/en_a1.png' },
  { id: 'c_zh_hsk1', language: 'zh', level: 'HSK1', title: 'Tiếng Trung Sơ Cấp (HSK1)', description: 'Làm quen tiếng Trung giản thể & Pinyin.', thumbnail: '/assets/zh_hsk1.png' },
];

export const mockLessons: Lesson[] = [
  {
    id: 'l_en_a1_1',
    courseId: 'c_en_a1',
    title: 'Greetings & Introductions',
    type: 'vocabulary',
    language: 'en',
    level: 'A1',
    content: {
      words: [
        { word: 'Hello', meaning: 'Xin chào', example: 'Hello, how are you?' },
        { word: 'Goodbye', meaning: 'Tạm biệt', example: 'Goodbye, see you later!' }
      ]
    }
  },
  {
    id: 'l_zh_hsk1_1',
    courseId: 'c_zh_hsk1',
    title: 'Chào hỏi cơ bản',
    type: 'vocabulary',
    language: 'zh',
    level: 'HSK1',
    content: {
      words: [
        { word: '你好', pinyin: 'nǐ hǎo', meaning: 'Xin chào', example: '你好吗？ (nǐ hǎo ma?)' },
        { word: '谢谢', pinyin: 'xièxie', meaning: 'Cảm ơn', example: '谢谢你！ (xièxie nǐ!)' }
      ]
    }
  }
];
