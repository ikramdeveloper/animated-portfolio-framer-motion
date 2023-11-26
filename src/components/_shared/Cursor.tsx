import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseListener = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseListener);

    return () => window.removeEventListener("mousemove", mouseListener);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x + 10, y: position.y + 10 }}
      className="w-12 h-12 rounded-full border border-white fixed z-50"
    />
  );
};
