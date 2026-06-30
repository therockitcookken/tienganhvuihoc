import React from 'react';
import { Card } from '../components/ui/Card';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
};
