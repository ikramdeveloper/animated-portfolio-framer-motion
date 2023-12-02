import { motion } from "framer-motion";
import Link from "next/link";
import { linksList } from "@/data";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  return (
    <motion.div
      variants={variants}
      className={
        "absolute w-full h-full flex flex-col items-center justify-center gap-5"
      }
    >
      {linksList.map(item => (
        <Link
          key={item.value}
          href={`#${item.value}`}
          className="text-xl md:text-4xl hover:scale-110 hover:transition-transform"
        >
          <motion.span
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {item.label}
          </motion.span>
        </Link>
      ))}
    </motion.div>
  );
};
