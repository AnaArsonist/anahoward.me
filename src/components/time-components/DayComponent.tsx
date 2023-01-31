import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function DayComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF] w-full overflow-hidden col-span-1 row-span-1">
      <div className="m-5 justify-end">
        <div className="flex items-baseline space-x-1 md:space-x-2 opacity-85">
          <div className="rounded-full bg-white w-2 h-2 md:w-5 md:h-5"></div>
          <div className="flex flex-col md:text-2xl text-sm">
            <div className="text-white font-bold">{time}</div>
            <div className="text-white font-thin -mt-2">in the uk</div>
          </div>
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
              <motion.div
                initial={false}
                animate={{
                  // invert the parent's scale to make the child appear to be the same size
                  scale: [1, 0.9, 0.9, 1, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-[#FEEA9A] w-12 h-12 lg:w-32 lg:h-32 rounded-tl-full relative"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default DayComponent;
