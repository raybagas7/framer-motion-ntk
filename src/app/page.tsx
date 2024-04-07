'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useInView,
  useAnimation,
  useTransform,
} from 'framer-motion';
import { Input } from './components/Input';

const Home = () => {
  const { scrollYProgress: completionProgress } = useScroll();

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

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(16, 185, 129, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgba(16, 185, 129, 1)',
    },
  };

  const containerRef = useRef(null);
  const isInview = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const pOneValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const pTwoValue = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  useEffect(() => {
    if (isInview) {
      mainControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInview]);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
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
        >
          <motion.div
            className="size-1/3 bg-yellow-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="size-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              style={{ scaleY: completionProgress }}
              className="size-full bg-gray-400 rounded-xl origin-bottom"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox={'0 0 24 24'}
            className="size-1/2 stroke-emerald-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: 'easeIn',
                  delay: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-5xl tracking-wide text-slate-100 text-center"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
        >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: pOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ex impedit nemo incidunt, sed vel similique quae quidem cum nisi
          aspernatur quod qui pariatur dolorum aperiam neque quas, dolor eius.
        </motion.p>
        <motion.p
          style={{ translateX: pTwoValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem
          natus iusto veniam numquam facere nulla iste suscipit aut
          exercitationem recusandae dignissimos, deleniti impedit animi a
          aperiam sint ea nisi.
        </motion.p>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        // animate="show"
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex min-h-screen justify-center items-center gap-10"
        variants={gridContainerVariants}
      >
        <motion.div
          drag
          dragConstraints={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          animate={{ x, y, rotate }}
          transition={{ type: 'spring' }}
          className="w-1/6 rounded-xl cursor-grab aspect-square border-emerald-500 border-2 border-dotted"
        />
        <div className="flex flex-col gap-3">
          <Input value={x} set={setX} min={-100} max={100}>
            X
          </Input>
          <Input value={y} set={setY} min={-100} max={100}>
            y
          </Input>
          <Input value={rotate} set={setRotate} min={-360} max={360}>
            Rotate
          </Input>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
