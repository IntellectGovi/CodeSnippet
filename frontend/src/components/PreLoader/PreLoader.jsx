// Preloader.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false); // ensure onComplete called once

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          // small pause so user sees 100% for a moment
          setTimeout(() => setExiting(true), 300);
          return 100;
        }
        return p + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      // initial visible, when `exiting` becomes true we'll animate up
      initial={{ y: 0, opacity: 1 }}
      animate={exiting ? { y: "-100%", opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (exiting && !finishedRef.current) {
          finishedRef.current = true;
          // call parent's onComplete after the exit finishes
          onComplete && onComplete();
        }
      }}
      className="fixed inset-0 bg-black z-[9999] flex items-end justify-end p-8"
    >
      <div className="flex flex-col items-end">
        <h1 className="text-white text-4xl font-bold">{progress}%</h1>
        <p className="text-gray-300 text-lg mt-2">A Great Experience Ahead</p>
      </div>
    </motion.div>
  );
};

export default Preloader;
