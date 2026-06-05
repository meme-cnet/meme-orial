"use client"

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

const ResponsiveAnimatedComponent: React.FC = () => {
  const controls = useAnimation();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-screen px-[4%] -my-10 relative">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="mb-[10%] text-center"
      >
        <span className="font-satoshi-bold text-lg sm:text-xl block mb-2">NFT explanation</span>
        <p className="font-satoshi-regular text-sm sm:text-base text-center max-w-md">
          The title of the meme tries to represent both the notable event and the broader sociological context of it.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        }}
        className="relative w-[300px] h-[300px]"
      >
        <Image
          src="/images/rojo-w/LANDINGONHOLLYWOODSTUDIOS.webp"
          alt="Imagen central"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <p className="font-satoshi-regular text-sm sm:text-base max-w-md">
          The violet element in the meme relates to the extra collective information regarding the event.
        </p>
      </motion.div>
    </div>
  );
};

export default ResponsiveAnimatedComponent;