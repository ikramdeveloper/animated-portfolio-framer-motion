import { motion } from "framer-motion";

interface ToggleButtonProps {
  handleToggle: () => void;
}

export const ToggleButton = ({ handleToggle }: ToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleToggle}
      className="z-40 fixed w-12 h-12 rounded-full top-6 left-6 bg-transparent border-none flex items-center justify-center"
    >
      <svg width="22" height="22" viewBox="0 0 22 22">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
