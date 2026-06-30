import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { mockCourses, mockLessons } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Flashcard } from '../components/learning/Flashcard';
import { Quiz } from '../components/learning/Quiz';
import { HanziWriterComponent } from '../components/learning/HanziWriterComponent';
import { playAudio } from '../lib/speech';

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const course = mockCourses.find(c => c.id === id);
  const lessons = mockLessons.filter(l => l.courseId === id);
  const firstLesson = lessons[0];
  const words = firstLesson?.content?.words || [];

  const [activeTab, setActiveTab] = useState<'flashcard' | 'quiz' | 'writing' | 'notes'>('flashcard');
  const [xpGained, setXpGained] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>('');

  if (!course) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy khóa học</h2>
        <Button onClick={() => navigate('/dashboard')}>Quay lại Dashboard</Button>
      </div>
    );
  }

  const handleQuizComplete = (isCorrect: boolean) => {
    if (isCorrect) {
      setXpGained(prev => prev + 10);
    }
  };

  const toggleFavorite = (word: string) => {
    setFavorites(prev => 
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
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
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <Button variant={activeTab === 'flashcard' ? 'primary' : 'secondary'} onClick={() => setActiveTab('flashcard')}>
          Từ vựng (Flashcard)
        </Button>
        <Button variant={activeTab === 'quiz' ? 'primary' : 'secondary'} onClick={() => setActiveTab('quiz')}>
          Trắc nghiệm (Quiz)
        </Button>
        {course.language === 'zh' && (
          <Button variant={activeTab === 'writing' ? 'primary' : 'secondary'} onClick={() => setActiveTab('writing')}>
            Luyện viết (Hán tự)
          </Button>
        )}
        <Button variant={activeTab === 'notes' ? 'primary' : 'secondary'} onClick={() => setActiveTab('notes')}>
          Ghi chú (Notes)
        </Button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'flashcard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {words.length === 0 && <p className="text-gray-500 italic">Chưa có từ vựng cho bài học này.</p>}
            {words.map((item: any, idx: number) => {
              const mainWord = course.language === 'zh' ? item.word : item.word;
              const isFav = favorites.includes(mainWord);
              return (
                <div key={idx} className="relative group">
                  <Flashcard 
                    frontContent={mainWord} 
                    backContent={item.meaning} 
                    pinyin={item.pinyin} 
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                    <button 
                      onClick={() => playAudio(mainWord, course.language)} 
                      className="bg-white/80 p-2 rounded-full shadow hover:bg-yellow-100 transition-colors"
                      title="Phát âm"
                    >
                      🔊
                    </button>
                    <button 
                      onClick={() => toggleFavorite(mainWord)} 
                      className={`p-2 rounded-full shadow transition-colors ${isFav ? 'bg-red-100' : 'bg-white/80 hover:bg-gray-100'}`}
                      title="Yêu thích"
                    >
                      {isFav ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="py-8">
            {words.length > 0 ? (
              <Quiz 
                question={`Từ nào có nghĩa là '${words[0].meaning}'?`}
                options={[
                  words[0].word,
                  words[1]?.word || "Apple",
                  words[2]?.word || "Banana",
                  words[3]?.word || "Orange"
                ].sort(() => Math.random() - 0.5)}
                correctAnswer={words[0].word}
                onComplete={handleQuizComplete}
              />
            ) : (
              <p className="text-gray-500">Chưa đủ từ vựng để tạo Quiz.</p>
            )}
            
            {xpGained > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mt-8 text-center text-2xl font-bold text-yellow-600"
              >
                + {xpGained} XP! 🎉
              </motion.div>
            )}
          </div>
        )}

        {activeTab === 'writing' && course.language === 'zh' && (
          <div className="flex flex-col items-center py-8">
            <p className="text-gray-600 mb-6">Chọn từ để luyện viết:</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {words.map((item: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow border border-gray-100">
                  <HanziWriterComponent character={item.word.charAt(0)} width={150} height={150} />
                  <p className="text-center mt-2 text-sm text-gray-500">{item.pinyin}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="py-8 w-full max-w-3xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sổ tay ghi chép</h3>
            <textarea
              className="w-full h-64 p-4 border border-yellow-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-yellow-50/50 shadow-inner"
              placeholder="Ghi lại các ngữ pháp quan trọng hoặc từ vựng khó nhớ vào đây..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <Button onClick={() => alert('Đã lưu ghi chú thành công!')}>Lưu ghi chú</Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
