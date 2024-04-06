'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSquareVariant = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
        variants={gridContainerVariants}
      >
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="size-20 bg-stone-100 rounded-lg"
            animate={{ opacity: [0, 1, 0], y: [100, 0, 100] }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
          <motion.div
            className="size-20 bg-stone-100 rounded-full"
            animate={{ opacity: [0, 1, 0], y: [-100, 0, -100] }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="size-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 1, 2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: [0, 50, 100, 50, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: '#e2e2e2',
              color: 'black',
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
          >
            Click Me!
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
