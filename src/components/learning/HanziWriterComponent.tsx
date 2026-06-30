import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { Button } from '../ui/Button';

interface HanziWriterProps {
  character: string;
  width?: number;
  height?: number;
}

export const HanziWriterComponent: React.FC<HanziWriterProps> = ({ character, width = 150, height = 150 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [isQuizzing, setIsQuizzing] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize or re-initialize writer when character changes
    if (writerRef.current) {
      containerRef.current.innerHTML = ''; // clear previous svg
    }

    writerRef.current = HanziWriter.create(containerRef.current, character, {
      width,
      height,
      padding: 5,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 100,
      strokeColor: '#b45309', // yellow-700
      radicalColor: '#ea580c', // orange-600
      outlineColor: '#fef08a', // yellow-200
      drawingColor: '#333',
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [character, width, height]);

  const handleAnimate = () => {
    if (writerRef.current) {
      setIsQuizzing(false);
      writerRef.current.animateCharacter();
    }
  };

  const handleQuiz = () => {
    if (writerRef.current) {
      setIsQuizzing(true);
      writerRef.current.quiz({
        onComplete: () => {
          setIsQuizzing(false);
          // Optional: XP callback here
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div 
        ref={containerRef} 
        className="bg-white rounded-2xl shadow-sm border border-yellow-200 flex items-center justify-center cursor-pointer"
        style={{ width: width + 20, height: height + 20 }}
      />
      <div className="flex gap-2">
        <Button variant={!isQuizzing ? "primary" : "secondary"} size="sm" onClick={handleAnimate}>
          Xem nét vẽ
        </Button>
        <Button variant={isQuizzing ? "primary" : "secondary"} size="sm" onClick={handleQuiz}>
          Luyện viết
        </Button>
      </div>
    </div>
  );
};
