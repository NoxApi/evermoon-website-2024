import { useEffect, useState, useRef } from "react";
import Video from "../../components/video/index";
import Hover from "../../components/3dHover/index";
import Partner from "../../components/Partner/index";
import Hero from "../../components/Hero/index";
import Roadmap from "../../components/Roadmap/index";
import NavBar from "../../components/Navbar/Index";
import { Josefin_Sans } from "next/font/google";
// import Loading from "../Loading";

const Jose = Josefin_Sans({ subsets: ["latin"] });
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(true);
  // function show() {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }

  // function IsLoadScreen() {
  //   if (isLoading) {
  //     return <Loading />;
  //   } else if (!load) {
  //     return (
  //       <>
  //         <Video />
  //         <Hover />
  //         <Hero />
  //         <Partner />
  //         <Roadmap />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Video />
  //         <Hover />
  //         <Hero />
  //       </>
  //     );
  //   }
  // }

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false);
  //     setTimeout(() => {
  //       setLoad(false);
  //     }, 5000);
  //     // alert("Your page is loaded");
  //   };

  //   if (document.readyState === "complete") {
  //     handleLoad(); // Call immediately if the page is already loaded
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //     // method attaches an event handler to a window
  //   }

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  // const timing = performance.getEntriesByType("navigation")[0];

  // console.log(timing);

  // if (load) {
  //   return <Loading />;
  // }

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
    <>
      <div
        className={` flex w-full flex-col items-center bg-gradient-to-r from-[#000B1A] to-[#00112C] text-[#F1E3B5] ${Jose.className} `}
      >
        <NavBar />
        <Video />
        <Hover />
        <Hero />
        <Partner />
        <Roadmap />
        {/* {IsLoadScreen()} */}
      </div>
    </>
  );
};

export default Index;
