import React from 'react';
import { Card } from '../ui/Card';
import { mockUsers } from '../../data/mockData';
import { motion } from 'framer-motion';

export const Leaderboard: React.FC = () => {
  // Normally this would fetch from Firestore: query(collection(db, 'users'), orderBy('xp', 'desc'), limit(10))
  const topUsers = [...mockUsers].sort((a, b) => b.xp - a.xp).slice(0, 10);

  return (
    <Card glass className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">🏆 Bảng Xếp Hạng</h3>
        <span className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">Tuần này</span>
      </div>

      <div className="space-y-4">
        {topUsers.map((user, index) => {
          let rankColor = "text-gray-500";
          let bgRank = "bg-gray-100";
          if (index === 0) { rankColor = "text-yellow-500"; bgRank = "bg-yellow-100"; }
          else if (index === 1) { rankColor = "text-gray-400"; bgRank = "bg-gray-200"; }
          else if (index === 2) { rankColor = "text-orange-400"; bgRank = "bg-orange-100"; }

          return (
            <motion.div 
              key={user.uid}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${bgRank} ${rankColor}`}>
                  {index + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{user.displayName}</div>
                  <div className="text-sm text-gray-500">🔥 {user.streak} ngày</div>
                </div>
              </div>
              <div className="font-bold text-yellow-600">
                {user.xp} XP
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};
