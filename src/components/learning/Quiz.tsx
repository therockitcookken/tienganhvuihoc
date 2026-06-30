import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';

interface QuizProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

export const Quiz: React.FC<QuizProps> = ({ question, options, correctAnswer, onComplete }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    
    // Add XP / streak logic here usually triggered by onComplete
    setTimeout(() => {
      onComplete(options[idx] === correctAnswer);
    }, 1500);
  };

  return (
    <Card glass className="w-full max-w-2xl mx-auto p-6 sm:p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{question}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence>
          {options.map((option, idx) => {
            const isSelected = selectedIdx === idx;
            const isCorrect = option === correctAnswer;
            
            let btnClass = "bg-white border-2 border-gray-200 text-gray-700 hover:border-yellow-400";
            if (isAnswered) {
              if (isCorrect) btnClass = "bg-green-100 border-2 border-green-500 text-green-800";
              else if (isSelected && !isCorrect) btnClass = "bg-red-100 border-2 border-red-500 text-red-800";
              else btnClass = "opacity-50 border-2 border-gray-200 bg-white";
            }

            return (
              <motion.button
                key={idx}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`p-4 rounded-xl text-lg font-semibold transition-all ${btnClass}`}
              >
                {option}
                {isAnswered && isCorrect && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-2">✅</motion.span>}
                {isAnswered && isSelected && !isCorrect && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-2">❌</motion.span>}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </Card>
  );
};
