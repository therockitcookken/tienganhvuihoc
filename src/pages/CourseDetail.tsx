import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Flashcard } from '../components/learning/Flashcard';
import { Quiz } from '../components/learning/Quiz';
import { HanziWriterComponent } from '../components/learning/HanziWriterComponent';
import { playAudio } from '../lib/speech';

export const CourseDetail: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock course loading. Usually id would be the course id
  const course = mockCourses[0]; 

  const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz' | 'writing'>('flashcard');

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
      
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="text-gray-500 mt-2">{course.description}</p>
        </div>
        <Button variant="outline" onClick={() => playAudio(course.title, course.language)}>
          🔊 Phát âm
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
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
        {course.language === 'zh' && (
          <Button 
            variant={activeTab === 'writing' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('writing')}
          >
            Luyện viết (Hán tự)
          </Button>
        )}
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
            <div className="relative group">
              <Flashcard frontContent={course.language === 'zh' ? '你好' : 'Hello'} backContent="Xin chào" pinyin={course.language === 'zh' ? 'nǐ hǎo' : undefined} />
              <button onClick={() => playAudio(course.language === 'zh' ? '你好' : 'Hello', course.language)} className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow hover:bg-yellow-100 z-10 transition-colors">🔊</button>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="py-8">
            <Quiz 
              question="Từ nào có nghĩa là 'Xin chào'?"
              options={["Goodbye", "Hello / 你好", "Sorry", "Thank you"]}
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

        {activeTab === 'writing' && course.language === 'zh' && (
          <div className="flex justify-center py-8">
             <HanziWriterComponent character="你" width={200} height={200} />
          </div>
        )}
      </motion.div>
    </div>
  );
};
