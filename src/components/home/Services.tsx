import { servicesData } from "@/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate="animate"
      className="h-full flex flex-col gap-4 justify-between p-4"
    >
      <motion.article
        variants={variants}
        className="flex-1 self-center md:self-end flex flex-col md:flex-row items-center gap-4 text-center md:text-start"
      >
        <p className="max-w-[30ch] font-extralight text-xl text-gray-500 text-right">
          I focus on helping your brand grow and move forward
        </p>
        <hr className="w-72 md:w-96 border-0 border-t border-gray-500" />
      </motion.article>
      <motion.article
        variants={variants}
        className="flex-[2] flex flex-col gap-4 items-center w-full md:w-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-start">
          <Image
            src="/assets/people.webp"
            alt="people"
            width={288}
            height={96}
            className="hidden sm:block w-48 lg:w-56 2xl:w-72 h-12 lg:h-20 2xl:h-24 rounded-3xl object-cover"
          />
          <h4 className="capitalize text-4xl lg:text-6xl 2xl:text-8xl font-thin">
            <b className="font-semibold text-white hover:text-orange-500">
              Unique
            </b>{" "}
            Ideas
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-start">
          <h4 className="capitalize text-4xl lg:text-6xl 2xl:text-8xl font-thin">
            <b className="font-semibold text-white hover:text-orange-500">
              For Your
            </b>{" "}
            Business
          </h4>
          <button
            type="button"
            className="uppercase w-36 lg:w-48 2xl:w-64 h-12 lg:h-16 2xl:h-20 rounded-[50px] text-black bg-orange-400 border-none text-base lg:text-xl 2xl:text-2xl cursor-pointer hover:bg-orange-500"
          >
            What we do?
          </button>
        </div>
      </motion.article>
      <motion.article
        variants={variants}
        className="flex-[2] flex flex-col md:flex-row w-full max-w-7xl m-auto"
      >
        {servicesData.map(item => (
          <motion.div
            key={item.title}
            className="border-0 md:border border-gray-500 flex flex-col items-center justify-between gap-4 p-2 md:p-6 2xl:p-8 text-gray-100 hover:bg-gray-100 hover:text-black rounded-md"
          >
            <h5 className="text-xl font-semibold">{item.title}</h5>
            <p className="hidden md:block line-clamp-2">{item.description}</p>
            <button
              type="button"
              className="bg-transparent md:bg-orange-400 border border-orange-400 md:border-none rounded-lg text-orange-400 md:text-black w-full p-2 cursor-pointer md:hover:bg-orange-500"
            >
              Go
            </button>
          </motion.div>
        ))}
      </motion.article>
    </motion.div>
  );
};
