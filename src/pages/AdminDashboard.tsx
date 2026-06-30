import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export const AdminDashboard: React.FC = () => {
  const [generatedKeys, setGeneratedKeys] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateKey = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Mock generating a 12 character alphanumeric key
      const newKey = Math.random().toString(36).substring(2, 8).toUpperCase() + '-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setGeneratedKeys(prev => [newKey, ...prev]);
      setIsGenerating(false);
      // In a real app, we would write this to Firestore collection 'activation_keys'
    }, 500);
  };

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card glass>
          <h3 className="text-lg font-semibold text-gray-700">Tổng Users</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
        </Card>
        <Card glass>
          <h3 className="text-lg font-semibold text-gray-700">Mã kích hoạt</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">56</p>
        </Card>
        <Card glass>
          <h3 className="text-lg font-semibold text-gray-700">Bài học tiếng Anh</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">120</p>
        </Card>
        <Card glass>
          <h3 className="text-lg font-semibold text-gray-700">Bài học tiếng Trung</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">85</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 border-yellow-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Quản lý Mã Kích Hoạt</h2>
            <Button onClick={handleGenerateKey} disabled={isGenerating}>
              {isGenerating ? 'Đang tạo...' : '+ Tạo mã VIP (1 Năm)'}
            </Button>
          </div>
          
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {generatedKeys.length === 0 ? (
              <p className="text-gray-500 italic text-center py-4">Chưa có mã nào được tạo mới.</p>
            ) : (
              generatedKeys.map((key) => (
                <motion.div 
                  key={key} 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <code className="text-lg font-bold text-yellow-700 tracking-wider">{key}</code>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">Mới</span>
                </motion.div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
