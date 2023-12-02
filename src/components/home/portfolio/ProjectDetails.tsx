import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProjectDetailsProps {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

export const ProjectDetails = ({
  title,
  image,
  description,
  link,
}: ProjectDetailsProps) => {
  const ref = useRef(null);

  return (
    <div className="w-full h-screen snap-center flex items-center justify-center overflow-hidden m">
      <article className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 h-full p-4 mt-12 md:mt-0">
        <figure ref={ref} className="md:flex-1 max-h-72 w-full">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full max-h-72 object-cover rounded-md border border-white"
          />
        </figure>
        <motion.div className="md:flex-1 flex flex-col items-center md:items-start gap-4 p-2 text-center md:text-start">
          <h3 className="text-4xl lg:text-6xl text-white font-semibold">
            {title}
          </h3>
          <p className="text-gray-400 text-base lg:text-lg">{description}</p>
          <Link href={link} target="_blank">
            <button
              type="button"
              className="bg-orange-400 border-0 rounded-lg p-2 w-48 cursor-pointer text-black hover:bg-orange-500 text-lg"
            >
              See Demo
            </button>
          </Link>
        </motion.div>
      </article>
    </div>
  );
};
