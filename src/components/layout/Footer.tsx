import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-yellow-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-yellow-600 flex items-center gap-2 mb-4">
              <span className="text-3xl">🌟</span> tienganhvuihoc
            </span>
            <p className="text-gray-500 text-sm">
              Học tiếng Anh và tiếng Trung thương mại hiệu quả, thú vị qua các bài học tương tác và trò chơi.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Khóa Học</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-base text-gray-500 hover:text-yellow-600">Tiếng Anh Giao Tiếp</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-yellow-600">Tiếng Trung HSK</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-yellow-600">Dành Cho Người Đi Làm</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-base text-gray-500 hover:text-yellow-600">Hướng Dẫn Kích Hoạt</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-yellow-600">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-yellow-600">Liên Hệ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-yellow-100 pt-8 flex items-center justify-between">
          <p className="text-base text-gray-400">&copy; 2026 tienganhvuihoc.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
