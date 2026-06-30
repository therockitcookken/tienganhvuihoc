import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Home: React.FC = () => {
  const navigate = useNavigate();
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
        </motion.div>
          <motion.p 
          className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nền tảng học Tiếng Anh và Tiếng Trung Thương Mại hàng đầu với phương pháp Gamification giúp bạn học không nhàm chán.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="text-lg px-8 py-4 shadow-xl shadow-yellow-200" onClick={() => navigate('/register')}>
            Bắt đầu học miễn phí
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white/50 backdrop-blur" onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Xem bảng giá
          </Button>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Đầu tư cho tương lai của bạn</h2>
            <p className="mt-4 text-xl text-gray-500">Mở khóa toàn bộ khóa học và tính năng cao cấp.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-gray-100 hover:border-yellow-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gói Miễn Phí</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">0đ</div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li>✅ Truy cập bài học cơ bản (A1 / HSK1)</li>
                <li>✅ Hệ thống Flashcard 3D</li>
                <li>❌ Không có Luyện viết chữ Hán</li>
                <li>❌ Không có tính năng Đọc AI</li>
              </ul>
              <Button variant="secondary" className="w-full" onClick={() => navigate('/register')}>Bắt đầu ngay</Button>
            </Card>

            <Card className="p-8 border-2 border-yellow-400 bg-yellow-50 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">PHỔ BIẾN NHẤT</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gói VIP (1 Năm)</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">499.000đ<span className="text-lg text-gray-500 font-normal">/năm</span></div>
              <ul className="space-y-4 mb-8 text-gray-800">
                <li>⭐ Mở khóa toàn bộ khoá học (A1-C2, HSK1-6)</li>
                <li>⭐ Luyện viết chữ Hán động (Hanzi Writer)</li>
                <li>⭐ Phát âm giọng bản xứ (US/UK/CN)</li>
                <li>⭐ Bảng xếp hạng & Thú cưng</li>
              </ul>
              <Button className="w-full" onClick={() => navigate('/register')}>Mua mã kích hoạt</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-t from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Học viên nói gì về chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-left">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"Tính năng luyện viết chữ Hán thực sự tuyệt vời. Tôi nhớ mặt chữ nhanh hơn hẳn so với việc học qua sách."</p>
              <div className="font-bold text-gray-900">- Nguyễn Văn A</div>
            </Card>
            <Card className="p-6 text-left transform md:-translate-y-4">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"Giao diện rất sáng sủa và đẹp mắt. Việc cộng điểm XP giúp tôi có động lực học mỗi ngày mà không bị chán."</p>
              <div className="font-bold text-gray-900">- Trần Thị B</div>
            </Card>
            <Card className="p-6 text-left">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"Khóa học giao tiếp Tiếng Anh rất thực tế, tính năng đọc AI giúp tôi chỉnh sửa phát âm đáng kể."</p>
              <div className="font-bold text-gray-900">- Lê Hoàng C</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
