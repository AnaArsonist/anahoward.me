import { motion } from "framer-motion";
import axios from "axios";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import PinIcon from "./Icons/PinIcon";

const MapCard = ({ section }) => {
  const { resolvedTheme } = useTheme();
  const { data, isLoading } = useSWR(
    `/api/map${resolvedTheme == "dark" ? "?dark" : ""}`,
    (url) => axios.get(url).then((res) => res.data)
  );
  const mapUrl = useMemo(
    () =>
      `http://maps.apple.com/?address=${encodeURIComponent(
        data?.location?.replace(", ", " ")
      )}&z=15`,
    [data?.location]
  );

  return (
    <motion.a
      href={mapUrl}
      target="_blank"
      rel="noreferrer"
      animate={{ opacity: ["all", "about"].includes(section) ? 1 : 0.3 }}
      className="flex bg-white dark:bg-gray-900 rounded-3xl col-span-2 md:col-span-1 overflow-hidden relative shadow-sm"
      whileHover="groupHover"
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="flex justify-center items-center md:scale-150 2xl:scale-200 ">
        {data && (
          <Image
            src={data.url}
            placeholder="blur"
            objectFit="cover"
            blurDataURL={data.blurDataURL}
            width={500}
            height={500}
          />
        )}
      </div>
      <div className="absolute bottom-0 right-0 flex w-auto h-auto rounded-tl-2xl text-xs md:text-sm xl:text-base dark:bg-white/20 bg-white/40 backdrop-blur-xl backdrop-saturate-150">
        <div className="flex items-center justify-between space-x-1 px-2 py-1 pl-2 transition text-gray-500 dark:text-white">
          <div>{data?.location}</div>
          <PinIcon className="w-4 h-4 md:w-6 md:h-6 " />
        </div>
      </div>
    </motion.a>
  );
};

export default MapCard;
