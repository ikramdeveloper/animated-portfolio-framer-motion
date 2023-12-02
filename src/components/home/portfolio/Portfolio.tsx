import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ProjectDetails } from "./ProjectDetails";
import { portfolioData } from "@/data";

export const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="relative">
      <article className="sticky top-0 left-0 pt-4 md:pt-10 flex flex-col gap-2">
        <h2 className="text-center text-orange-400 text-2xl md:text-5xl">
          Featured works
        </h2>
        <motion.div style={{ scaleX }} className="h-2 bg-white" />
      </article>
      {portfolioData.map(item => (
        <ProjectDetails key={item.id} {...item} />
      ))}
    </div>
  );
};
