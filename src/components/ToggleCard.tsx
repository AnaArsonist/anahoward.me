import { motion } from "framer-motion";
import Toggle from "@/components/Toggle";

const ToggleCard = ({ section }) => {
  return (
    <motion.div
      animate={{ opacity: ["all"].includes(section) ? 1 : 0.3 }}
      whileHover="groupHover"
      variants={{
        groupHover: {
          scale: 1.02,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
      className="bg-white dark:bg-gray-900 rounded-3xl flex justify-center col-span-1"
    >
      <div className="flex justify-center items-center md:scale-150 2xl:scale-200">
        <motion.div
          className="flex items-centers scale-150 2xl:scale-150"
          initial={{ scale: 1.4 }}
          whileHover="groupHover"
        >
          <Toggle />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ToggleCard;
