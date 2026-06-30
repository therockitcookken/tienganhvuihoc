import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
              <span className="text-3xl">🌟</span> tienganhvuihoc
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md font-medium">Khóa Học</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md font-medium">Bảng Giá</Link>
            {!!user && (
              <Link to="/dashboard" className="text-yellow-700 font-bold hover:text-yellow-800 px-3 py-2 rounded-md">
                Khu Học Tập
              </Link>
            )}
            {user?.role === 'admin' || user?.role === 'super_admin' ? (
              <Link to="/admin" className="text-red-500 font-bold hover:text-red-700 px-3 py-2 rounded-md">
                Quản Trị
              </Link>
            ) : null}
          </div>

          <div className="flex items-center space-x-4">
            {!!user ? (
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-sm font-semibold text-gray-900">{user?.displayName}</span>
                  <span className="text-xs text-yellow-600 font-bold">{user?.xp} XP 🔥 {user?.streak} ngày</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout}>Đăng xuất</Button>
              </div>
            ) : (
              <>
                <Link to="/login"><Button variant="ghost" size="sm">Đăng nhập</Button></Link>
                <Link to="/register"><Button variant="primary" size="sm">Đăng ký</Button></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
