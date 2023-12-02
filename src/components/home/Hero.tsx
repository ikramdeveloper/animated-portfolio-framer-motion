import { motion } from "framer-motion";
import Link from "next/link";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -220,
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div className="h-[calc(100vh-96px)] overflow-hidden relative">
      <motion.article
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="container max-w-7xl mx-auto h-full xl:h-3/4 flex flex-col gap-4 md:gap-8 items-center justify-center text-center"
      >
        <motion.h2
          variants={textVariants}
          className="text-2xl md:text-4xl text-purple-shade spacing tracking-widest uppercase"
        >
          Ikram Ul Haq
        </motion.h2>
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-6xl 2xl:text-8xl capitalize"
        >
          Full Stack Developer
        </motion.h1>
        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row gap-4 z-10"
        >
          <Link href={"#portfolio"}>
            <motion.button
              type="button"
              variants={textVariants}
              className="p-2 md:p-4 border border-white rounded-lg bg-transparent text-white font-light text-base cursor-pointer"
            >
              See the Latest Works
            </motion.button>
          </Link>
          <Link href={"#contact"}>
            <motion.button
              variants={textVariants}
              className="p-2 md:p-4 border border-white rounded-lg bg-white text-black font-light text-base"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
        <motion.img
          src="/assets/scroll.png"
          alt="scroll"
          variants={textVariants}
          animate="scrollButton"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </motion.article>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[50vh] -bottom-28 whitespace-nowrap text-hero-bottom w-1/2 font-bold"
      >
        Programmer, Developer, Problem Solver
      </motion.div>
      {/* <figure className="h-1/2 md:h-full w-full md:w-auto absolute top-auto md:top-0 bottom-0 md:bottom-auto right-0">
        <Image
          src="/assets/hero.png"
          alt="ikramdeveloper"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </figure> */}
    </div>
  );
};
