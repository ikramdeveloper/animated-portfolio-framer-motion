import { PhoneSvg } from "@/assets";
import { contactInfo } from "@/data";
import { sendEmail } from "@/utils";
import { motion, useInView } from "framer-motion";
import { type FormEvent, useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendEmail(formRef.current!);
      setIsSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate="animate"
      className="h-full w-full max-w-7xl m-auto flex flex-col md:flex-row items-center gap-4 md:gap-12 p-4"
    >
      <motion.article
        variants={variants}
        className="flex-1 flex flex-col items-center md:items-start gap-4 md:gap-8 text-center md:text-start"
      >
        <motion.h2 className="text-4xl md:text-6xl xl:text-8xl text-white">
          Let's work together
        </motion.h2>
        {contactInfo.map(item => (
          <motion.div key={item.title} variants={variants}>
            <h3 className="text-white font-normal text-xl md:text-2xl">
              {item.title}
            </h3>
            <span className="font-light text-gray-300">{item.info}</span>
          </motion.div>
        ))}
      </motion.article>
      <article className="flex-1 relative w-full p-10 md:p-0">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0, zIndex: -1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-full absolute flex justify-center pr-20"
        >
          <PhoneSvg
            isInView={isInView}
            className="stroke-orange-500 w-64 h-64 md:w-96 md:h-96"
          />
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex flex-col gap-4 md:gap-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-2 md:p-4 bg-transparent border border-white text-white rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-2 md:p-4 bg-transparent border border-white text-white rounded-md outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="p-2 md:p-4 bg-transparent border border-white text-white rounded-md outline-none"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="p-2 md:p-4 border-0 bg-orange-500 cursor-pointer font-medium text-black rounded-md hover:bg-orange-600 text-lg"
          >
            Submit
          </button>
          {!!error && <p className="text-red-500 text-xs">{error}</p>}
          {isSuccess && <p className="text-green-500 text-xs">Email sent</p>}
        </motion.form>
      </article>
    </motion.div>
  );
};
