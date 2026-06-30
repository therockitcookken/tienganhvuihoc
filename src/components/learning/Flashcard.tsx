import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlashcardProps {
  frontContent: string;
  backContent: string;
  pinyin?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ frontContent, backContent, pinyin }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-64 sm:h-80 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="absolute w-full h-full backface-hidden glass-card flex flex-col items-center justify-center p-6 text-center border-2 border-yellow-200 bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900">{frontContent}</h2>
          {pinyin && <p className="mt-4 text-xl text-gray-500">{pinyin}</p>}
          <p className="absolute bottom-4 text-sm text-gray-400 animate-pulse">Chạm để lật</p>
        </div>

        {/* Back */}
        <div 
          className="absolute w-full h-full backface-hidden glass-card flex flex-col items-center justify-center p-6 text-center bg-pastel-yellow-100 border-2 border-yellow-300"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">{backContent}</h2>
        </div>
      </motion.div>
    </div>
  );
};
