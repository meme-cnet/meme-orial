
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

const AnimatedComponent: React.FC = () => {

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
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}px`,
      transition: { duration: 0.8 }
    })
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        }}
        className="relative min-w-80 h-80"
      >
        <Image
          src="/images/rojo-w/rojo-w9.webp"
          alt="Imagen central"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>

      
      <div ref={ref} className="ml-[10%] relative w-[25%] -mt-[13%]">
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-xl"
        >
          <span className="font-satoshi-bold text-[1.125rem]">NFT explanation</span>
          <p className="font-satoshi-regular text-[1.125rem] text-justify">
            The title of the meme tries to represent both the notable event and the broader sociological context of it.
            <br />
            <br />
          </p>
        </motion.div>

        
        <motion.div
          initial="hidden"
          animate={controls}
          custom={100}
          variants={lineVariants}
          className="absolute top-[25%] left-[-40%] h-[2px] bg-black flex items-center"
        >
          
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-black ml-auto"></div>
        </motion.div>

        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.2 }}
          className="ml-[40%] "
        >
          <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
            The violet element in the meme relates to the extra collective information regarding the event.
            <br />
            <br />
          </p>
        </motion.div>

        
        <motion.div
          initial="hidden"
          animate={controls}
          custom={350}
          variants={lineVariants}
          transition={{ delay: 0.2 }}
          className="absolute top-[62%] left-[-80%] h-[2px] bg-black flex items-center"
        >
          
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[12px] border-r-black"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedComponent;
