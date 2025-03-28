"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInAnimatorInterface {
  duration?: number;
  children?: React.ReactNode;
}

export const FadeInAnimator: React.FC<FadeInAnimatorInterface> = ({
  duration = 1.5,
  children,
}) => {
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

export const OnScrollFadeInAnimator: React.FC<FadeInAnimatorInterface> = ({
  duration = 1.5,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};
