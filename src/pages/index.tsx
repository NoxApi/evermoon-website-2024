import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Josefin_Sans } from "next/font/google";

const Jose = Josefin_Sans({ subsets: ["latin"] });

import axios from "axios";

import { useSwipeable } from "react-swipeable";

import { useEffect, useState, useRef, MutableRefObject } from "react";

import { useInViewport } from "react-in-viewport";

import "animate.css";
import Star from "evm/svg/Star";

export default function Home() {
  const [isshow, setisshow] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const { inViewport } = useInViewport(
    triggerRef as MutableRefObject<HTMLElement>,
    { threshold: 0.1 },
  );
  const triggerRef2 = useRef<HTMLElement>(null);
  const triggerRef4 = useRef<HTMLElement>(null);
  const triggerRef8 = useRef<HTMLElement>(null);
  const inViewport4 = useInViewport(
    triggerRef4 as MutableRefObject<HTMLElement>,
    { threshold: 1 },
  );
  const triggerRef7 = useRef<HTMLElement>(null);

  const inViewport2 = useInViewport(
    triggerRef2 as MutableRefObject<HTMLElement>,
    { threshold: 0.3 },
  );

  const inViewport7 = useInViewport(
    triggerRef7 as MutableRefObject<HTMLElement>,
    { threshold: 0.1 },
  );

  const inViewport8 = useInViewport(
    triggerRef8 as MutableRefObject<HTMLElement>,
    { threshold: 0.1 },
  );

  const [isfetching, setisfetching] = useState(false);
  const [mediumdata, setmediumdata] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);
  let mediums1: any[] = [];
  medium(setisfetching, setmediumdata, mediumdata);
  if (mediumdata.length != 0) {
    mediums1 = mediumdata.slice(0, 3);
  }

  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  const { inViewport: div1InView } = useInViewport(div1Ref, { threshold: 0.5 });
  const { inViewport: div2InView } = useInViewport(div2Ref, { threshold: 0.5 });
  const { inViewport: div3InView } = useInViewport(div3Ref, { threshold: 0.5 });
  const { inViewport: div4InView } = useInViewport(div4Ref, { threshold: 0.5 });
  const { inViewport: div5InView } = useInViewport(div5Ref, { threshold: 0.5 });

  useEffect(() => {
    setisshow(true);
    if (window.innerWidth > 768) {
      const l8 = document.getElementById("layer8");
      const l7 = document.getElementById("layer7");
      const l6 = document.getElementById("layer6");
      const l5 = document.getElementById("layer5");
      const l4 = document.getElementById("layer4");
      const l3 = document.getElementById("layer3");
      const l2 = document.getElementById("layer2");
      const onScroll = () => {
        const y = window.pageYOffset;
        l8!.style.top = 0.95 * y + "px";
        l7!.style.top = 0.8 * y + "px";
        l6!.style.top = y + "px";
        l5!.style.top = 0.9 * y + "px";
        l4!.style.top = 0.8 * y + "px";
        l3!.style.top = 0.6 * y + "px";
        l2!.style.top = 0.4 * y + "px";
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  useEffect(() => {
    const e1 = document.getElementById("evm1");
    const e2 = document.getElementById("2");
    const e3 = document.getElementById("3");
    const e4 = document.getElementById("4");
    const e5 = document.getElementById("5");
    const e11 = document.getElementById("11");
    const e15 = document.getElementById("15");
    const e16 = document.getElementById("16");

    if (inViewport) {
      e1!.style.opacity = "1";
      e2!.style.opacity = "1";
      e3!.style.opacity = "1";
      e4!.style.opacity = "1";
      // e5!.style.opacity = "1";
      // e3!.classList.add("slide-in-left");
      // e4!.classList.add("slide-in-right");
      // e5!.classList.add("fade_inUpBIG1");
      e11!.style.opacity = "1";
      // e15!.classList.add("fadeCus1");
      // e16!.classList.add("fade_inUpBIG");
    }
  }, [inViewport]);

  useEffect(() => {
    const e6 = document.getElementById("6");
    const e7 = document.getElementById("7");
    const e8 = document.getElementById("8");
    const e9 = document.getElementById("9");
    const e10 = document.getElementById("10");
    if (inViewport4.inViewport) {
      e6!.style.opacity = "1";
      e7!.style.opacity = "1";
      e8!.style.opacity = "1";
      e9!.style.opacity = "1";
      e10!.style.opacity = "1";
      // e6!.classList.add("fade-NEW");
      // e7!.style.opacity = "1";
      // e8!.classList.add("fade-NEW");
      // e9!.classList.add("fade-NEW");
      // e10!.classList.add("fade-NEW");
    }
  }, [inViewport4.inViewport]);

  useEffect(() => {
    const e12 = document.getElementById("12");
    const e13 = document.getElementById("13");
    const e14 = document.getElementById("14");
    if (inViewport7.inViewport) {
      e12!.style.opacity = "1";
      e13!.style.opacity = "1";
      // e13!.classList.add("fadeCus2");
      e14!.style.opacity = "1";
    }
  }, [inViewport7.inViewport]);

  useEffect(() => {
    const e17 = document.getElementById("17");
    const e18 = document.getElementById("18");
    const e19 = document.getElementById("19");
    const e20 = document.getElementById("20");
    if (inViewport2.inViewport) {
      e17!.style.opacity = "1";
      e18!.style.opacity = "1";
      e19!.style.opacity = "1";
      // e18!.classList.add("fade-NEW");
      // e19!.classList.add("fade-NEW1");
      // e20!.classList.add("fade-NEW");
    }
  }, [inViewport2.inViewport]);

  // useEffect(() => {
  //   const e2 = document.getElementById("egg");
  //   const e9 = document.getElementById("9");
  //   const e10 = document.getElementById("10");
  //   const e11 = document.getElementById("11");
  //   const e12 = document.getElementById("12");
  //   const e13 = document.getElementById("13");

  //   if (inViewport2.inViewport) {
  //     // e2!.style.opacity = "1";
  //     e9!.style.opacity = "1";
  //     e10!.style.opacity = "1";
  //     // e11!.style.opacity = "1";
  //     // e12!.classList.add("ani-text_delay");
  //     // e13!.style.opacity = "1";
  //   }
  // }, [inViewport2.inViewport]);

  // useEffect(() => {
  //   // const e8 = document.getElementById("8");
  //   const e14 = document.getElementById("14");
  //   const e19 = document.getElementById("19");
  //   const e20 = document.getElementById("20");

  //   if (inViewport7.inViewport) {
  //     // e8!.classList.add("ani-text_delay");
  //     e14!.style.opacity = "1";
  //     e19!.style.opacity = "1";
  //     e20!.style.opacity = "1";
  //   }
  // }, [inViewport7.inViewport]);

  return (
    <div
      className={` flex  h-auto w-full 
min-w-[1920px] justify-center bg-[#01071A] ${Jose.className}`}
    >
      <div className=" flex flex-col items-center">
        <div
          ref={triggerRef as React.RefObject<HTMLDivElement>}
          className="relative  h-[1080px] w-[1920px] justify-center overflow-hidden 
        mdm:flex mdm:h-[177vw] "
        >
          <div
            className=" absolute bottom-[16%] left-[50%] z-20 flex w-[100vw] translate-x-[-50%]
        flex-col items-center justify-between px-[5vw] lg:hidden mdm:hidden "
          >
            <Link href="/home">
              <button className="btn-primary_EnSite">
                <p className="text-sm  text-white ">{"Enter Official Site"}</p>
              </button>
            </Link>
          </div>
          <div
            className="relative z-10 flex h-[178vw] w-[100vw] flex-col items-center justify-end 
        bg-cover md:hidden mdm:pb-[25vw] mdm:pt-[10vw] "
          >
            <Link href="/home">
              <button className="btn-primary_EnSite z-40">
                <p className="text-sm  text-white ">{"Enter Official Site"}</p>
              </button>
            </Link>
          </div>

          <div className="flex w-full justify-center mdm:absolute ">
            <div
              id="layer6"
              className={`w-100% acloud3  absolute mt-[-200px]  h-[1080px] min-w-[1920px] mdm:hidden`}
            >
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/environment_13_lite8.webp"
                width={7680}
                height={4320}
                alt="environment_13"
                className=""
                priority
              />
            </div>
            <div id="layer3m" className="absolute w-[100vw] md:hidden">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/8_x4.png"
                width={1280}
                height={1980}
                alt=""
                className={`h-full w-full`}
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:absolute">
            <div
              id="layer8"
              className=" acloud2  absolute left-0 flex w-[200%] mdm:hidden mdm:w-[200vw]"
            >
              <div
                className={`mt-[-50px] h-[1080px]  w-[1920px] mdm:mt-8 mdm:w-[100vw] `}
              >
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/7.webp"
                  width={1920}
                  height={1080}
                  alt=""
                  className="mdm:w-[100vw]"
                />
              </div>
              <div
                className={`mt-[-50px] h-[1080px]  w-[1920px] mdm:mt-8 mdm:w-[100vw] `}
              >
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/7.webp"
                  width={1920}
                  height={1080}
                  alt=""
                  className="mdm:w-[100vw]"
                />
              </div>
            </div>
            <div className="acloudm absolute flex w-[300vw] md:hidden">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/7_Animation%20crop.png"
                width={1920}
                height={432}
                alt=""
                className={`h-[32vw] w-[100vw]`}
              />
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/7_Animation%20crop.png"
                width={1920}
                height={432}
                alt=""
                className={`h-[32vw] w-[100vw]`}
              />
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/7_Animation%20crop.png"
                width={1920}
                height={432}
                alt=""
                className={`h-[32vw] w-[100vw]`}
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:hidden  ">
            <div
              id="layer5"
              className={`w-100% absolute  h-[1080px] min-w-[1920px]   `}
            >
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/6.webp"
                width={1920}
                height={1080}
                alt=""
                className={`w-100% absolute   h-[1080px] min-w-[1920px] `}
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:absolute">
            <div
              id="layer4"
              className={`w-100% aevm  absolute h-[1080px] min-w-[1920px] mdm:hidden`}
            >
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/5.webp"
                width={7680}
                height={4321}
                alt=""
                className={`w-100% absolute h-[1080px] min-w-[1920px] `}
                loading="lazy"
              />
            </div>
            <div id="layer2m" className="absolute w-[100vw] md:hidden">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/6_x4.png"
                width={2976}
                height={4320}
                alt=""
                className={`h-full w-full`}
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:hidden ">
            <div
              id="layer7"
              className={`w-100% acloud  absolute 
            h-[1080px] min-w-[1920px] `}
            >
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/4.webp"
                width={1920}
                height={1080}
                alt=""
                className=""
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:absolute ">
            <div
              id="layer3"
              className={`w-100% absolute  h-[1080px] min-w-[1920px] mdm:hidden `}
            >
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/3.webp"
                width={1920}
                height={1080}
                alt=""
                className={`w-100% absolute   h-[1080px] min-w-[1920px] `}
              />
            </div>
            <div className="absolute w-[100vw] md:hidden">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/5_x4.png"
                width={1280}
                height={1981}
                alt=""
                className={`aevmm h-full w-full`}
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:absolute ">
            <div
              id="layer2"
              className={`w-100% absolute  h-[1080px] min-w-[1920px] mdm:hidden  `}
            >
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/2.webp"
                width={1920}
                height={1080}
                alt=""
                className={`w-100% absolute   h-[1080px] min-w-[1920px] `}
              />
            </div>
            <div className="acloudmup absolute w-[100vw] md:hidden">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/4_x4.png"
                width={1280}
                height={1981}
                alt=""
                className={`h-full w-full`}
              />
            </div>
          </div>

          <div className="flex w-full justify-center mdm:absolute">
            <div id="layer1" className="absolute w-[1920px] mdm:hidden ">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/1.webp"
                width={1920}
                height={1080}
                alt="1"
                className={`w-100% absolute z-10 h-[1080px] min-w-[1920px] `}
              />
            </div>
            <div className="absolute w-[100vw] md:hidden">
              <Image
                src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/1-2-3.png"
                width={640}
                height={1136}
                alt=""
                className={`h-full w-full`}
              />
            </div>
          </div>
        </div>
        <div
          id="evm1"
          ref={triggerRef as React.RefObject<HTMLDivElement>}
          className=" relative flex h-auto  w-[100%] min-w-[1920px] flex-col 
          items-center bg-[#01071A] py-[26px]  "
        >
          {/* opacity-0 transition-opacity
          delay-300 duration-1000 */}
          <div className="saveZone relative flex w-full max-w-[1360px] flex-col items-center xlm:w-full">
            <div
              id="2"
              className="#01071A flex items-center justify-center py-[26px] pl-[50px]
          opacity-0 transition-opacity duration-1000 lgm:mr-2
          smm:flex-col smm:pr-[30px]"
            >
              <div className="flex justify-center pr-4 pt-3  ">
                <p
                  // id="3"
                  className="text-[36px] text-white  mdm:text-[28px] smm:text-[5.75vw] "
                >
                  {"Powered by"}
                </p>
              </div>
              <div
                // id="4"
                className="pr-[16px] smm:m-auto"
              >
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/immutable.png"
                  width={1005}
                  height={270}
                  alt=""
                  priority={true}
                  className="w-[334px] smm:w-[52vw] "
                />
              </div>
            </div>
            <div className="mb-[60px] flex h-[540px] w-full justify-center gap-x-[10px] smm:h-fit">
              <div
                id="11"
                // id="5"
                className=" w-[360px] pb-[211px] pl-[127px] pr-[67px] pt-[127px] opacity-0 transition-opacity delay-[1000ms] duration-1000 lgm:hidden"
              >
                <div className="robot-animation opacity-70">
                  <Image
                    src="https://storage.googleapis.com/evermoon_website_bucket/Social_fi_IMGS/decorate_robot-1.png"
                    width={471}
                    height={498}
                    alt=""
                    className="w-full "
                  />
                </div>
              </div>
              <div
                id="3"
                // id="15"
                className=" bgMoon  relative h-full w-[540px] rounded-full opacity-0 transition-opacity delay-[300ms] duration-1000 smm:h-[85vw] smm:w-[90vw]  "
              >
                <div className="bgNewMoon h-full w-full  pb-[60px] pt-[80px] " />
                <div className="absolute left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%] bg-bgWeeklyCalm bg-contain bg-no-repeat" />
                <div className=" absolute left-[50%] top-[50%] z-20 w-[316px] translate-x-[-50%] translate-y-[-50%] smm:w-[66.5vw]   ">
                  <Image
                    src={
                      "https://storage.googleapis.com/evermoon_website_bucket/Social_fi_IMGS/ayla-moonpower-mascot_NEW.png"
                    }
                    width={2000}
                    height={2000}
                    alt=""
                    className={` w-full `}
                  />
                </div>
              </div>
              <div
                id="4"
                // id="16"
                className="w-[360px] pb-[218px] pl-[60px] pr-[130px] pt-[130px] opacity-0 transition-opacity delay-[900ms] duration-1000 lgm:hidden"
              >
                <div className="robot-animation1 opacity-70">
                  <Image
                    src="https://storage.googleapis.com/evermoon_website_bucket/Social_fi_IMGS/11_mini_01.png"
                    width={342}
                    height={410}
                    alt=""
                    className="w-[140px] "
                  />
                </div>
              </div>
            </div>
            <div
              ref={triggerRef2 as React.RefObject<HTMLDivElement>}
              className=""
            >
              <div
                // id="18"
                className="flex flex-col items-center gap-y-5 xlm:w-[696px] smm:w-[80vw]  "
              >
                <h1
                  id="17"
                  className="text-gradient text-6xl opacity-0 transition-opacity delay-200 duration-1000 smm:text-4xl "
                >
                  Moon Mission
                </h1>

                <h3
                  id="18"
                  className="text-3xl opacity-0 transition-opacity delay-500 duration-1000 xlm:text-center smm:text-xl"
                >
                  Complete social quests, earn Moon Power, and unlock amazing
                  prizes!
                </h3>
              </div>
              <div
                id="19"
                className="mt-12 flex justify-center gap-x-3 opacity-0 transition-opacity delay-[800ms] duration-1000 smm:mt-[7.5vw] smm:w-[90vw]"
              >
                <Link href={"https://moonmission.evermoon.games"}>
                  <button className="btn-primary w-[160px] text-lg smm:w-[38.12vw] smm:text-sm">
                    Let&apos;s Start it
                  </button>
                </Link>
                <Link
                  href={
                    "https://docs.evermoon.games/evermoon/evermoon-economy/play-and-earn/moon-mission"
                  }
                  target="_blank"
                >
                  <button className="button-outline1_no-m-auto w-[160px] text-lg text-white smm:w-[38.12vw] smm:text-sm">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isshow && (
          <>
            <div className="bgFull flex h-auto w-[100%] min-w-[1920px] flex-col items-center justify-center smm:h-auto">
              <div className="flex flex-col items-center gap-y-9 py-[80px] smm:py-[12.5vw]">
                <div
                  ref={div1Ref}
                  className={`relative flex h-[48px] w-[480px] justify-center transition-opacity duration-500 
                    ${div1InView ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="absolute left-[50%] top-[50%] z-20 w-[100%] translate-x-[-50%] translate-y-[-50%] text-center text-5xl text-[#F1E3B5] smm:text-3xl ">
                    {"Next-Gen 5v5 MOBA"}
                  </p>
                </div>
                <div
                  ref={div2Ref}
                  className={`relative z-10 flex h-[386px] w-[660px] items-center justify-center transition-opacity duration-1000 smm:h-[93.75vw] smm:w-[90vw]
                    ${div2InView ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="layer1a absolute z-20 w-[286px] md:w-[275px] lg:w-[275px] smm:top-[20%] smm:w-[68.75vw]">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/smooth%20rotate%20icon.png"
                      width={300}
                      height={300}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="layer3a absolute z-20 w-[286px] md:w-[275px] lg:w-[275px] smm:top-[20%] smm:w-[68.75vw]">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/smooth%20rotate%20icon2.png"
                      width={300}
                      height={300}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="h-full w-full bg-bgLights bg-cover bg-no-repeat mdm:h-[60vw] mdm:w-[90vw] mdm:bg-center" />
                  <div className="absolute z-30 h-[184px] w-[184px] mdm:h-fit mdm:w-[43.75vw] smm:top-[30%]">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/app-icon.png"
                      width={824}
                      height={824}
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div
                  ref={div3Ref}
                  className={`relative h-[80px] w-[600px] transition-opacity duration-1000 smm:w-[90vw]
                    ${div3InView ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%]">
                    <h5 className="text-center text-[30px] text-white smm:text-xl ">
                      Experience intense battles, strategic teamwork, and real
                      rewards!
                    </h5>
                  </div>
                </div>
                <div
                  ref={div4Ref}
                  className={`relative h-[32px] w-[432px] transition-opacity duration-1000 smm:w-[90vw]
                    ${div4InView ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="absolute left-[50%] top-[50%] flex h-full w-full translate-x-[-50%] translate-y-[-50%] justify-center ">
                    <div className="mr-[-24px] w-[168px] smm:w-[35.6vw]">
                      <Star
                        width={20}
                        height={20}
                        className="absolute left-[25%] top-[50%] translate-x-[-50%] translate-y-[-50%] smm:top-[36%] smm:w-[7.5vw] smm:translate-x-[-60%] "
                      />
                      <Image
                        src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/decorate_flare-1.png"
                        width={566}
                        height={107}
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <p className="text-2xl font-light text-[#F1E3B5] smm:text-lg">
                      Coming Soon
                    </p>
                    <div className="ml-[-24px] w-[168px] smm:w-[35.6vw]">
                      <Star
                        width={20}
                        height={20}
                        className="absolute right-[22%] top-[50%] translate-x-[-50%] translate-y-[-50%] smm:top-[36%] smm:w-[7.5vw] smm:translate-x-[2vw] "
                      />
                      <Image
                        src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/decorate_flare-1.png"
                        width={566}
                        height={107}
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={div5Ref}
                className={`relative mb-[40px] h-[40px] w-[160px] transition-opacity duration-1000
                  ${div5InView ? 'opacity-100' : 'opacity-0'}`}
              >
                <Link href="https://www.evermoon.games/home">
                  <button className="button-outline1_no-m-auto absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%] text-lg text-white smm:text-sm">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
            <div
              ref={triggerRef7 as React.RefObject<HTMLDivElement>}
              className=" bg_new relative flex w-full justify-center py-[60px] "
            >
              <div
                className="z-30 flex w-[1000px]  flex-col   
            items-center justify-center border-b-[1px]
             border-[#F1E3B5]  lgm:h-auto "
              >
                <div
                  id="12"
                  className="opacity-0 transition-opacity delay-200 duration-1000"
                >
                  <p
                    id="13"
                    className="z-10 mb-[45px] self-center text-[40px] text-[#F1E3B5] mdm:text-[28px] smm:mb-[6.4vw] xsmm:text-[5vw] "
                  >
                    {"NEWS"}
                  </p>
                </div>
                <div
                  id="14"
                  className=" z-10 h-[520px] w-[1000px] 
               overflow-x-hidden bg-transparent opacity-0 transition-opacity 
               delay-[700ms] duration-1000 lgm:w-[680px] lgm:overflow-auto smm:hidden "
                >
                  {!isfetching ? (
                    <>
                      {mediumdata.length > 0 ? (
                        <>
                          {mediumdata.map((x: any) => {
                            // console.log(x);
                            return (
                              <div
                                key={x.title}
                                className="relative mb-[46px] flex h-[130px] w-full xlm:mb-[42px] "
                              >
                                <div className="flex h-[140px] w-[254px] flex-col p-[5px] ">
                                  <div
                                    className="bgnews flex h-full w-full items-center justify-center 
                                overflow-hidden border-l-[1px] border-[#F1E3B5]"
                                  >
                                    <Link href={x.guid} target="_blank">
                                      <div className="h-auto w-auto ">
                                        <img
                                          src={
                                            x.content
                                              .split('src="')[1]
                                              .split('">')[0]
                                          }
                                          alt=""
                                          className=""
                                        />
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div
                                  className=" flex w-[784px] flex-col
                                px-[24px] xlm:w-[470px]"
                                >
                                  <p
                                    id="test"
                                    className=" mb-[4px] text-[18px] text-[#F1E3B5] smm:text-[5vw]"
                                  >
                                    {x.title.replace("&amp;", "&")}
                                  </p>

                                  <div className="hover: overflow-hidden lgm:overflow-x-hidden ">
                                    <p
                                      className="text-[12px] leading-tight
                                  text-white smm:text-[3vw] "
                                    >
                                      {x.content
                                        //.split("<figure>")[1]
                                        //.split("</figure>")[1]
                                        .split("<p>")[1]
                                        // .split("</p>")[0]
                                        .replace(/(<([^>]+)>)/gi, "") + "..."}
                                    </p>
                                  </div>
                                  <div className="my-[7px]">
                                    <p className="text-[12px] leading-tight text-white smm:text-[3vw]">
                                      {"Read full artical at "}
                                    </p>
                                    <a
                                      href={x.guid}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-[12px] smm:text-[3vw]"
                                    >
                                      {x.guid}
                                    </a>
                                  </div>

                                  <div className="">
                                    <p className="text-[12px] smm:text-[3vw]">
                                      {x.pubDate}
                                    </p>
                                  </div>
                                  <div
                                    className="absolute left-[1px] top-[28%] flex h-[70px] 
                                w-[50px] flex-col justify-center gap-y-[-2px] smm:hidden "
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="9"
                                      height="8"
                                      viewBox="0 0 9 8"
                                      className="fill-[#F1E3B5]"
                                    >
                                      <mask
                                        id="mask0_7403_82004"
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="0"
                                        width="9"
                                        height="8"
                                      >
                                        <rect x="0.5" width="8" height="8" />
                                      </mask>
                                      <g mask="url(#mask0_7403_82004)">
                                        <path d="M1.83325 3.99998L4.49992 1.33331L7.16658 3.99998L4.49992 6.66665L1.83325 3.99998Z" />
                                      </g>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="11"
                                      height="12"
                                      viewBox="0 0 11 12"
                                      className="fill-[#F1E3B5] pr-[2px]"
                                    >
                                      <path d="M10.8333 6.00002L5.49992 0.666687L0.166586 6.00002L5.49992 11.3334L10.8333 6.00002Z" />
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="9"
                                      height="8"
                                      viewBox="0 0 9 8"
                                      className="fill-[#F1E3B5]"
                                    >
                                      <mask
                                        id="mask0_7403_82004"
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="0"
                                        width="9"
                                        height="8"
                                      >
                                        <rect x="0.5" width="8" height="8" />
                                      </mask>
                                      <g mask="url(#mask0_7403_82004)">
                                        <path d="M1.83325 3.99998L4.49992 1.33331L7.16658 3.99998L4.49992 6.66665L1.83325 3.99998Z" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : null}
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#444444]">
                      <Image
                        src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/medium.webp"
                        alt=""
                        className="w-[200px] animate-pulse"
                      />
                    </div>
                  )}
                </div>
                <Mobile isfetching={isfetching} mediumdata={mediumdata} />

                <div
                  className="translate-[-50%] absolute bottom-[5.9%] left-[49%] flex 
              h-[32px] w-[52px] items-center gap-x-[-2px] 
              md:left-[48.65%] lg:left-[48.65%] smm:bottom-[44px] smm:left-[48.7%] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M0.333374 7.00001L7.00004 0.333344L13.6667 7.00001L7.00004 13.6667L0.333374 7.00001Z"
                      fill="#F1E3B5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M0.666626 12L12 0.666687L23.3333 12L12 23.3334L0.666626 12Z"
                      fill="#F1E3B5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M0.333374 7.00001L7.00004 0.333344L13.6667 7.00001L7.00004 13.6667L0.333374 7.00001Z"
                      fill="#F1E3B5"
                    />
                  </svg>
                </div>
              </div>
              <div
                className=" bgMoon translate-[-50%] absolute bottom-[20%]  
                right-[12%] h-[170px] w-[170px] rotate-90 rounded-full smm:w-[80vw] "
                // bgMoon
              />
              <div
                id="19"
                className=" bgMoon absolute left-[11%] h-[300px]  
                w-[300px] translate-y-[150%] rotate-180 rounded-full smm:w-[80vw] "
                // bgMoon
              />
            </div>
          </>
        )}
      </div>
      <div className=" fixed left-[50%] top-0 z-50 flex w-full max-w-[1920px] translate-x-[-50%] items-center justify-end px-[100px] py-[20px] lgm:hidden">
        <Link href="/home">
          <button className="btn-primary_EnSite text-white   ">
            <p className="text-sm ">{"Enter Official Site"}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

function Mobile({
  isfetching,
  mediumdata,
}: {
  isfetching: any;
  mediumdata: any;
}) {
  const [pick, setpick] = useState(1);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      event.stopPropagation();
      // console.log(dir)
      if (dir == "Left") {
        if (pick < 9) {
          setpick(pick + 1);
        }
      } else if (dir == "Right") {
        if (pick > 1) {
          setpick(pick - 1);
        }
      }
      // NOTE: another approach via onSwiping
      // onSwiping: ({ event }) => event.stopPropagation(),
    },
  });
  return (
    <div
      id="20"
      {...handlersBox}
      className=" relative flex h-[100vw] w-[100vw] 
      items-center justify-between overflow-hidden opacity-0 transition-opacity delay-1000
      duration-1000 sm:hidden smm:mb-[5vw] smm:mt-[3vw]"
    >
      <div
        className={`absolute flex transition-all 
        ${pick == 1 && " translate-x-[-6vw]"} 
        ${pick == 2 && " translate-x-[-94vw]"} 
        ${pick == 3 && " translate-x-[-182vw]"} 
        ${pick == 4 && " translate-x-[-272vw]"}
        ${pick == 5 && " translate-x-[-359.3vw]"}
        ${pick == 6 && " translate-x-[-447vw]"}
        ${pick == 7 && " translate-x-[-536vw]"}
        ${pick == 8 && " translate-x-[-624vw]"}
        ${pick == 9 && " translate-x-[-799vw]"}
        pl-[8vw]`}
      >
        {!isfetching ? (
          <>
            {mediumdata.length > 0 ? (
              <>
                {mediumdata?.map((x: any) => (
                  <div key={x.title}>
                    <div
                      onClick={() => {
                        setpick(1);
                      }}
                      className={`relative ml-[8vw]  
                  flex h-[90vw]  
                  w-[80vw] flex-col`}
                    >
                      <div
                        className="absolute left-[-1.45%] top-[16%] flex h-[30px] 
              w-[30px] translate-y-[50%] flex-col justify-center gap-y-[-2px] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          className="w-[10px] fill-[#F1E3B5]"
                        >
                          <mask
                            id="mask0_7403_82004"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="9"
                            height="8"
                          >
                            <rect x="0.5" width="8" height="8" />
                          </mask>
                          <g mask="url(#mask0_7403_82004)">
                            <path d="M1.83325 3.99998L4.49992 1.33331L7.16658 3.99998L4.49992 6.66665L1.83325 3.99998Z" />
                          </g>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          className="w-[14px] fill-[#F1E3B5] pr-[4px]"
                        >
                          <path d="M10.8333 6.00002L5.49992 0.666687L0.166586 6.00002L5.49992 11.3334L10.8333 6.00002Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          className="w-[10px] fill-[#F1E3B5]"
                        >
                          <mask
                            id="mask0_7403_82004"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="9"
                            height="8"
                          >
                            <rect x="0.5" width="8" height="8" />
                          </mask>
                          <g mask="url(#mask0_7403_82004)">
                            <path d="M1.83325 3.99998L4.49992 1.33331L7.16658 3.99998L4.49992 6.66665L1.83325 3.99998Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="h-[45vw] w-full border-l-[1px] border-main-1">
                        <div
                          className="bgnews flex h-full w-full items-center justify-center 
                                overflow-hidden border-l-[1px] border-[#F1E3B5]"
                        >
                          <div className="h-auto w-auto ">
                            <img
                              src={x.content.split('src="')[1].split('">')[0]}
                              alt=""
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" h-[45vw] w-full pt-[6.4vw]">
                        <div className=" flex w-full flex-col ">
                          <p
                            className="mb-[8px] truncate text-[18px] text-[#F1E3B5]
                            smm:text-[5vw]"
                          >
                            {x.title.replace("&amp;", "&")}
                          </p>
                          <div>
                            <p
                              className="truncate text-[12px] leading-tight
                                    text-white smm:text-[3vw] "
                            >
                              {x.content
                                .split("<p>")[1]
                                .replace(/(<([^>]+)>)/gi, "")}
                            </p>
                          </div>
                          <div className="my-[12px]">
                            <p className="text-[12px] text-white smm:text-[3vw]">
                              {"Read full artical at "}
                            </p>
                            <a
                              href={x.guid}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[12px] smm:text-[3vw]"
                            >
                              {x.guid}
                            </a>
                          </div>

                          <div className="">
                            <p className="text-[12px] smm:text-[3vw]">
                              {x.pubDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#444444]">
            <Image
              src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/medium.webp"
              width={512}
              height={512}
              alt=""
              className="w-[200px] animate-pulse"
            />
          </div>
        )}
      </div>
      <div className=" fixed left-[50%] top-0 z-20 flex w-full max-w-[1920px] translate-x-[-50%] items-center justify-between px-[100px] py-[20px] lgm:hidden">
        <Link href="/home">
          <button className="mainbutton flex h-[50px]  w-[300px] items-center  justify-center rounded-[8px] border-[#F1E3B5] bg-[#0B0436] text-white hover:text-[#F1E3B5]  smm:h-[13vw] smm:w-[60vw]">
            <p className="mt-1 text-[23px]">{"ENTER OFFICIAL SITE"}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

const medium = async (set: any, setdata: any, data: any) => {
  axios({
    method: "get",
    url: "https://api.rss2json.com/v1/api.json",
    params: {
      rss_url: "https://medium.com/feed/@evermoon",
      api_key: "w5dzaqnmdbk6uhtawnq3ktr88kqxievpojtfzkop",
      count: 10,
    },
  })
    .then(function (response: any) {
      set(false);
      if (data.length == 0) setdata(response.data.items);
      // console.log(response.data.items)
    })
    .catch(function (error: any) {
      console.log(error);
    });
};
