import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Học <span className="text-yellow-500">Tiếng Anh</span> & <span className="text-red-500">Tiếng Trung</span> 
            <br className="hidden md:block"/> Thương Mại Đỉnh Cao
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Hệ thống học tập gamification giúp bạn ghi nhớ nhanh hơn, học vui hơn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-4 shadow-xl hover:shadow-2xl">
                Bắt đầu học ngay 🚀
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-10 py-4">
                Xem Bảng Giá
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
