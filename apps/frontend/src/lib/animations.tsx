"use client";
import { motion } from "framer-motion";

interface FadeInAnimatorInterface {
  duration?: number;
  children?: React.ReactNode;
};

export const FadeInAnimator: React.FC<FadeInAnimatorInterface> = ({ duration=1.5 , children }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};