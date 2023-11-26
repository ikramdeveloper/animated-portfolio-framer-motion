import { motion } from "framer-motion";
import { Sidebar } from "../layout/sidebar";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="h-24">
      <Sidebar />
      <article className="max-w-6xl m-auto flex items-center justify-end md:justify-between h-full p-4 md:p-0">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="none md:inline font-bold text-white uppercase"
        >
          Ikram Developer
        </motion.span>
        <div className="flex gap-4">
          <a href="#">
            <Image
              src="/assets/facebook.png"
              alt="facebook/ikramdeveloper"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/instagram.png"
              alt="instagram/ikramdeveloper"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/youtube.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/dribble.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>
      </article>
    </nav>
  );
};
