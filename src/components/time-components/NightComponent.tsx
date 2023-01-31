import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { isWindowDefined } from "swr/_internal";

function NightComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // set canvas dimensions
    const isMobile = window.innerWidth < 768;
    canvas.width = isMobile ? window.innerWidth : window.innerWidth / 3;
    canvas.height = isMobile ? window.innerHeight : window.innerHeight / 3;

    // draw some stars
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }, []);

  return (
    <div className="bg-[#001324] w-full overflow-hidden bg-clip-padding col-span-1 row-span-1">
      <canvas
        className="absolute inset-0 h-full w-full opacity-70 md:opacity-100"
        ref={canvasRef}
      />
      <div className="md:m-5 m-2 mt-3 md:mt-5 justify-end">
        <div className="flex items-baseline space-x-1 md:space-x-2 opacity-85">
          <div className="rounded-full bg-white w-2 h-2 md:w-5 md:h-5"></div>
          <div className="flex flex-col">
            <div className="text-white text-sm md:text-2xl font-bold">
              {time}
            </div>
            <div className="text-white text-sm md:text-lg font-thin -mt-2">
              in the uk
            </div>
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
                  scale: [1, 0.9, 0.9, 1, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-[#DFDFDF] w-12 h-12 lg:w-24 lg:h-24 rounded-tl-full relative"
              />
              <div className="absolute top-14 left-12 md:top-16 md:left-28 w-2 h-2  md:w-4 md:h-4 rounded-full bg-[#C2C2C2]" />
              <div className="absolute top-10 left-14 md:top-24 md:left-[115px] w-4 h-4 rounded-full bg-[#C2C2C2]" />
              <div className="absolute top-10 left-10 md:top-20 md:left-20 w-2 h-2 md:w-8 md:h-8 rounded-full bg-[#C2C2C2]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NightComponent;
