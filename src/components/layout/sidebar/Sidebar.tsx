import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";
import { ToggleButton } from "./ToggleButton";
import { cn } from "@/utils";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(24px at 48px 46px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpened(pre => !pre);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      animate={isSidebarOpened ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        variants={variants}
        className={cn("z-40 inset-0 bg-white w-48 md:w-96", {
          fixed: isLoaded,
        })}
      >
        <Links />
      </motion.div>
      <ToggleButton handleToggle={handleToggle} />
    </motion.div>
  );
};
