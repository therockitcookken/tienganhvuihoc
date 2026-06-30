import React from 'react';
import { Card } from '../components/ui/Card';

export const Register: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <Card glass className="p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Đăng ký</h2>
          <p className="text-gray-500 mt-2">Bắt đầu hành trình học tập ngay hôm nay</p>
        </div>
        <p className="text-center text-gray-500">Form đăng ký (Mock)</p>
      </Card>
    </div>
  );
};
