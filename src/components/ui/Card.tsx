import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLMotionProps<'div'> {
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={twMerge(
          'rounded-2xl p-6 shadow-md bg-white border border-yellow-100',
          glass && 'glass-card',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';
