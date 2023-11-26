import { useRef } from "react";
import { cn } from "@/utils";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxProps {
  type: "services" | "portfolio";
}

export const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full relative flex items-center justify-center overflow-hidden",
        {
          "bg-past-work-gradient": type === "services",
          "bg-portfolio-gradient": type === "portfolio",
        },
      )}
    >
      <motion.h1
        style={{ y: yText }}
        className="capitalize text-center md:text-start text-8xl md:text-6xl"
      >
        {type === "services" ? "What We Do?" : "What We did?"}
      </motion.h1>
      <motion.div
        className={cn(
          "bg-mountains-image bg-contain bg-no-repeat md:bg-repeat md:bg-cover bg-bottom w-full h-full absolute z-30",
        )}
      />
      <motion.div
        style={{
          y: yBg,
        }}
        className={cn(
          "bg-contain bg-no-repeat md:bg-cover md:bg-repeat bg-bottom w-full h-full absolute z-20",
          {
            "bg-planets-image": type === "services",
            "bg-sun-image": type === "portfolio",
          },
        )}
      />
      <motion.div
        style={{ x: yBg }}
        className={cn(
          "bg-stars-image bg-cover bg-bottom w-full h-full absolute z-10",
        )}
      />
    </div>
  );
};
