import axios from "axios";
import { useMemo } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { MoonIcon } from "@heroicons/react/outline";
import NightComponent from "./time-components/NightComponent";
import SunriseComponent from "./time-components/SunriseComponent";

const OnlineCard = ({ section }) => {
  const { data, isLoading } = useSWR(`/api/time`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  const timeComponent = useMemo(() => {
    if (!data) return null;
    switch (data?.results) {
      case "sunrise":
        return <SunriseComponent />;
      case "sunset":
        return <NightComponent />;
      case "nautical_twilight_begin":
        return <NightComponent />;
      case "nautical_twilight_end":
        return <NightComponent />;
      case "astronomical_twilight_begin":
        return <NightComponent />;
      case "astronomical_twilight_end":
        return <NightComponent />;
    }
  }, [data]);

  console.log(data);

  return (
    <motion.div
      animate={{
        opacity: section && ["all", "about"].includes(section) ? 1 : 0.3,
      }}
      className={`text-white rounded-3xl flex relative overflow-hidden aspect-square`}
    >
      {timeComponent}
    </motion.div>
  );
};

export default OnlineCard;
