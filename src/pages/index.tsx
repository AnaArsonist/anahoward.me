import NavBar from "@/components/NavBar";
import IntroCard from "@/components/IntroCard";
import TwitterCard from "@/components/TwitterCard";
import ToggleCard from "@/components/ToggleCard";
import MeowyCard from "@/components/MeowyCard";
import ArticleCard from "@/components/ArticleCard";
import DiscordCard from "@/components/DiscordCard";
import MailCard from "@/components/MailCard";
import SpotifyCard from "@/components/SpotifyCard";
import { useState } from "react";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <div className="flex flex-col m-5 font-nunito">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20"
      >
        <IntroCard section={section} />
        <TwitterCard section={section} />
        <ToggleCard section={section} />
        <DiscordCard section={section} />
        <SpotifyCard section={section} />
        <MeowyCard section={section} />
        <MailCard section={section} />
        <ArticleCard section={section} />
      </div>
    </div>
  );
}

export default Home;
