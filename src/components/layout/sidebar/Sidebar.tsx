import { useState } from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";
import { ToggleButton } from "./ToggleButton";

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
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggle = () => {
    setOpenSidebar(pre => !pre);
  };

  return (
    <motion.div
      animate={openSidebar ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        variants={variants}
        className="z-40 fixed inset-0 bg-white w-48 md:w-96"
      >
        <Links />
      </motion.div>
      <ToggleButton handleToggle={handleToggle} />
    </motion.div>
  );
};
