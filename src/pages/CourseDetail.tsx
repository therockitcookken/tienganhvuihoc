import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Flashcard } from '../components/learning/Flashcard';
import { Quiz } from '../components/learning/Quiz';

export const CourseDetail: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock course loading. Usually id would be the course id
  const course = mockCourses[0]; 

  const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz'>('flashcard');

  // Gamification states
  const [xpGained, setXpGained] = useState(0);

  const handleQuizComplete = (isCorrect: boolean) => {
    if (isCorrect) {
      setXpGained(10);
      // Show XP popup animation here
    }
  };

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mb-4">
        &larr; Quay lại Dashboard
      </Button>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-gray-500 mt-2">{course.description}</p>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button 
          variant={activeTab === 'flashcard' ? 'primary' : 'secondary'}
          onClick={() => setActiveTab('flashcard')}
        >
          Từ vựng (Flashcard)
        </Button>
        <Button 
          variant={activeTab === 'quiz' ? 'primary' : 'secondary'}
          onClick={() => setActiveTab('quiz')}
        >
          Trắc nghiệm (Quiz)
        </Button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'flashcard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Flashcard frontContent="Hello" backContent="Xin chào" />
            <Flashcard frontContent="Goodbye" backContent="Tạm biệt" />
            <Flashcard frontContent="Thank you" backContent="Cảm ơn" />
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="py-8">
            <Quiz 
              question="Từ nào có nghĩa là 'Xin chào'?"
              options={["Goodbye", "Hello", "Sorry", "Thank you"]}
              correctAnswerIndex={1}
              onComplete={handleQuizComplete}
            />
            {xpGained > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mt-8 text-center text-2xl font-bold text-yellow-600"
              >
                + {xpGained} XP! 🎉
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
