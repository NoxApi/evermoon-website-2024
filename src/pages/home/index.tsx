import { useEffect, useState, useRef } from "react";
import Video from "../../components/video/index";
import Hover from "../../components/3dHover/index";
import Partner from "../../components/Partner/index";
import Hero from "../../components/Hero/index";
import Roadmap from "../../components/Roadmap/index";

const Index = () => {
  // const [isfullscreen, setisfullscreen] = useState(false);
  //   const [isloaded, setisloaded] = useState(false);
  // const fullscreen = useRef<null | HTMLDivElement>(null);
  // useEffect(() => {
  //   if (!(window.innerHeight >= window.innerWidth)) {
  //     if (isfullscreen) {
  //       fullscreen.current?.scrollIntoView();
  //     }
  //   }
  // }, [isfullscreen]);
  return (
    <div
      className={` flex w-full flex-col items-center bg-gradient-to-r from-[#000B1A] to-[#00112C] text-[#F1E3B5]`}
    >
      <Video />
      <Hover />
      <Hero />
      <Partner />
      <Roadmap />
    </div>
  );
};

export default Index;
