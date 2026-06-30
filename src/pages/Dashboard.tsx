import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">
          Chào mừng trở lại, {user?.displayName}! 🎉
        </h1>
        <p className="text-gray-500 mt-2">Hôm nay bạn muốn học gì nào?</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card glass className="bg-gradient-to-br from-yellow-50 to-pastel-yellow-100 border-none">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Tiến độ học tập</h3>
          <div className="text-4xl font-extrabold text-yellow-600 mb-2">{user?.xp} XP</div>
          <p className="text-gray-600">Streak: 🔥 {user?.streak} ngày liên tiếp</p>
        </Card>
        
        <Card glass className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/course/c_en_a1')}>
          <div className="text-4xl mb-4">🇬🇧</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">English Zone</h3>
          <p className="text-gray-600">Tiếp tục bài học Tiếng Anh Giao Tiếp</p>
        </Card>

        <Card glass className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/course/c_zh_hsk1')}>
          <div className="text-4xl mb-4">🇨🇳</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Chinese Zone</h3>
          <p className="text-gray-600">Tiếp tục bài học Tiếng Trung HSK</p>
        </Card>
      </div>
    </div>
  );
};
