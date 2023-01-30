import { motion } from "framer-motion";

function SunriseComponent() {
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="bg-orange-400 w-full overflow-hidden col-span-1 row-span-1">
      <div className="m-5 justify-end">
        <div className="flex items-center space-x-2 opacity-75">
          <div className="rounded-full bg-white w-2 h-2 md:w-5 md:h-5"></div>
          <div className="text-white md:text-2xl font-bold">{time}</div>
        </div>
      </div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 right-0 rounded-tl-full bg-white/10 pt-2 pl-2 md:pt-4 md:pl-4"
      >
        <motion.div>
          <div className="md:pt-4 md:pl-4 pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
            <div className="md:pt-4 md:pl-4 pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
              <div className="bg-yellow-100 w-12 h-12 lg:w-24 lg:h-24 rounded-tl-full relative" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SunriseComponent;
