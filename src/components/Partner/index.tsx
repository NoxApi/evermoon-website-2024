import { useRef, MutableRefObject, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";

import { Transition } from "@headlessui/react";

import LinkNewTab from "../../general/LinkNewTab";

import { Anton, Josefin_Sans } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const Jose = Josefin_Sans({ subsets: ["latin"] });

const Index = () => {
  const triggerRef = useRef<HTMLElement>(null);
  const triggerRef2 = useRef<HTMLElement>(null);
  // const { inViewport } = useInViewport(
  //   triggerRef as MutableRefObject<HTMLElement>,
  //   { threshold: 0.1 },
  // );
  // const inViewport2 = useInViewport(
  //   triggerRef2 as MutableRefObject<HTMLElement>,
  //   { threshold: 0.2 },
  // );
  const [showFadeUp, setShowFadeUp] = useState(false);
  const [showFadeUp2, setShowFadeUp2] = useState(false);
  const [fadeShowUp2, setFadeShowUp2] = useState(false);

  // useEffect(() => {
  //   if (inViewport) {
  //     setShowFadeUp(true);
  //   }
  //   if (inViewport2.inViewport) {
  //     setShowFadeUp2(true);
  //   }
  //   return () => {};
  // }, [inViewport, inViewport2]);
  return (
    <section
      ref={triggerRef}
      className={
        " h-[800px] w-full px-[32px] py-[52px] xlm:h-auto smm:py-[8.55vw] " +
        Jose.className
      }
    >
      <div className="relative flex w-full min-w-[1920px] flex-col items-center justify-center xlm:h-auto  ">
        {/* bgpartner h-[1200px] */}
        {/* <div
      ref={triggerRef2 as React.RefObject<HTMLDivElement>}
      className="h-[200px] w-full relative  mdm:h-[25vw] flex flex-col justify-center items-center mt-[-10px] mdm:mt-0 z-20"
      >
      <Image
        src={div2}
        alt=""
        className="w-full smm:w-[280vw]  -z-10 "
      />
      <Transition
        show={showFadeUp}
        enter="transition ease-in-out duration-[3000ms]   "
        enterFrom="opacity-0 "
        enterTo="opacity-100 feedtext "
      >
        <p className=" text-3xl lgm:text-2xl mdm:text-[3vw] mdm:leading-[5vw] uppercase   textshadow2 font-medium w-[100vw] text-center ">
          {"MORE THAN JUST A GAME - IT'S YOUR GOLDMINE!"}
        </p>
        <p className=" text-4xl lgm:text-3xl mdm:text-[4vw] mdm:leading-[5vw] uppercase   textshadow2 font-bold w-[100vw] text-center mt-3">
          {"join now!"}
        </p>
        <div className="flex justify-center w-full mt-4  ">
          <Image src={gp} alt="" className="w-[190px]  mdm:w-[28vw]  " />
          <Image
            src={as}
            alt=""
            className="w-[190px]  mdm:w-[28vw]  ml-8 lgm:ml-4  mdm:ml-[3vw]"
          />
        </div>
      </Transition>
    </div> */}
        <div className="">
          <p className="text-center text-4xl text-zinc-200 smm:text-2xl ">
            {"CORE TEAM"}
          </p>
        </div>
        <div className="h-[500px] min-w-[1280px] lgm:h-0 ">
          <p
            className={`text_img text-center text-[248px] 
          text-white ${anton.className} lgm:hidden
        `}
          >
            EVERMOON
          </p>
        </div>

        <div
          className=" absolute top-[-5%] flex h-[400px] 
    w-[800px] translate-y-[50%] justify-between xlm:hidden"
        >
          <div
            className="flipp mt-[45px] h-[340px]  w-[241px]  xlm:hidden "
            onMouseEnter={() => setFadeShowUp2(true)}
            onMouseLeave={() => setFadeShowUp2(false)}
          >
            <div
              className="flip flex h-full w-full items-center
        justify-center bg-bgteam2 bg-cover pt-[190px] transition-all duration-500 "
            >
              <Transition
                show={fadeShowUp2}
                enter="transition ease-in-out duration-[500ms]   "
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
              >
                <Svg1 link={"https://www.linkedin.com/in/tanachot/"} />
              </Transition>
            </div>
          </div>
          <div
            className="flipp h-[340px] w-[241px]  "
            onMouseEnter={() => setFadeShowUp2(true)}
            onMouseLeave={() => setFadeShowUp2(false)}
          >
            <div
              className="flip flex h-full w-full items-center
        justify-center bg-bgteam1 bg-cover pt-[190px] transition-all duration-500 "
            >
              <Transition
                show={fadeShowUp2}
                enter="transition ease-in-out duration-[500ms]   "
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                className="flex justify-between"
              >
                <Svg1
                  link={
                    "https://www.linkedin.com/in/patipol-anantarattana-007502214/"
                  }
                />
                <Svg2 link={"https://t.me/victor_kaky"} />
              </Transition>
            </div>
          </div>
          <div
            className="flipp mt-[45px] h-[340px] w-[241px] xlm:hidden smm:flex"
            onMouseEnter={() => setFadeShowUp2(true)}
            onMouseLeave={() => setFadeShowUp2(false)}
          >
            <div
              className="flip flex h-full w-full items-center
        justify-center bg-bgteam3 bg-cover pt-[190px] transition-all duration-500 "
            >
              <Transition
                show={fadeShowUp2}
                enter="transition ease-in-out duration-[500ms]   "
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                className="flex justify-between"
              >
                <Svg1
                  link={
                    "https://www.linkedin.com/in/suphitcha-latthikul-494588160/"
                  }
                />
                <Svg2 link={"https://t.me/Grace_SL"} />
              </Transition>
            </div>
          </div>
          {/* <div
          className="flex flex-col bg-tranparent text-center
      absolute top-[44%] right-[15%] translate-y-[50%] translate-x-[50%]"
        >
          <h2 className="text-xl text-[#01071A] font-semibold">
            Suphitcha L.
          </h2>
          <p className="text-xs text-[#01071A] font-semibold">CMO</p>
        </div> */}
        </div>

        {/* <div
      className="w-[800px] h-[600px] smm:mt-12 grid grid-cols-3 xlm:w-[auto] 
    xlm:h-auto xlm:grid-cols-2 xlm:gap-12 mdm:grid-cols-1 gap-x-[100px] 
    absolute top-[-15%] translate-y-[50%] xlm:hidden "
    >
      <div
        className="w-[241px] h-[340px] mt-[50px]   
        flipp  xlm:hidden   "
      >
        <div
          className="w-[241px] h-[340px]  bg-bgteam2 bg-cover pb-[60px]
        flip transition-all duration-500 flex justify-center items-end "
        >
          <Svg1 link={"https://www.linkedin.com/in/tanachot/"} />
        </div>
      </div>

      <div className="w-[241px] h-[340px] flipp  ">
        <div
          className="w-[241px] h-[340px] bg-bgteam1 bg-cover pb-[60px]
        flip transition-all duration-500 flex justify-center items-end "
        >
          <Svg1
            link={
              "https://www.linkedin.com/in/patipol-anantarattana-007502214/"
            }
          />
          <Svg2 link={"https://t.me/victor_kaky"} />
        </div>
      </div>

      <div
        className="w-[241px] h-[340px] xlm:hidden smm:flex mt-[50px] 
        flipp
        "
      >
        <div
          className="w-[241px] h-[340px] bg-bgteam3 bg-cover
        flip transition-all duration-500 flex justify-center items-end "
        >
          <Svg1
            link={
              "https://www.linkedin.com/in/suphitcha-latthikul-494588160/"
            }
          />
          <Svg2 link={"https://t.me/Grace_SL"} />
        </div>
      </div>
    </div> */}

        <div className="flex h-[760px] w-[700px] flex-col justify-center xl:hidden smm:h-auto">
          <div className="flipp m-auto h-[340px] w-[240px]">
            <div
              className="flip flex  h-full w-full items-center
        justify-center bg-bgteam1 bg-cover pt-[190px] transition-all duration-500 "
              onMouseEnter={() => setFadeShowUp2(true)}
              onMouseLeave={() => setFadeShowUp2(false)}
            >
              <Transition
                show={fadeShowUp2}
                enter="transition ease-in-out duration-[500ms]   "
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                className="flex justify-between"
              >
                <Svg1
                  link={
                    "https://www.linkedin.com/in/patipol-anantarattana-007502214/"
                  }
                />
                <Svg2 link={"https://t.me/victor_kaky"} />
              </Transition>
            </div>
          </div>
          <div className="flex justify-center gap-x-[40px] smm:m-auto smm:flex-col smm:gap-y-[30px]">
            <div className=" flipp h-[340px] w-[240px] ">
              <div
                className="flip flex  h-full w-full items-center
        justify-center bg-bgteam2 bg-cover pt-[190px] transition-all duration-500 "
                onMouseEnter={() => setFadeShowUp2(true)}
                onMouseLeave={() => setFadeShowUp2(false)}
              >
                <Transition
                  show={fadeShowUp2}
                  enter="transition ease-in-out duration-[500ms]   "
                  enterFrom="opacity-0 "
                  enterTo="opacity-100 "
                >
                  <Svg1 link={"https://www.linkedin.com/in/tanachot/"} />
                </Transition>
              </div>
            </div>
            <div className=" flipp h-[340px] w-[240px]">
              <div
                className="flip flex  h-full w-full items-center
        justify-center bg-bgteam3 bg-cover pt-[190px] transition-all duration-500 "
                onMouseEnter={() => setFadeShowUp2(true)}
                onMouseLeave={() => setFadeShowUp2(false)}
              >
                <Transition
                  show={fadeShowUp2}
                  enter="transition ease-in-out duration-[500ms]   "
                  enterFrom="opacity-0 "
                  enterTo="opacity-100 "
                  className="flex justify-between"
                >
                  <Svg1
                    link={
                      "https://www.linkedin.com/in/suphitcha-latthikul-494588160/"
                    }
                  />
                  <Svg2 link={"https://t.me/Grace_SL"} />
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <p
          className="z-50 mt-[100px] px-[5vw] text-[14px] 
      font-thin uppercase text-zinc-200 xlm:w-[100vw] xlm:text-center
      smm:text-[4vw] smm:leading-[5vw]"
        >
          {
            "The developer house of shining talented team with vivid passions that making many great breakthroughs"
          }
        </p>
        {/* <Transition
      show={showFadeUp}
      enter="transition ease-in-out duration-[1000ms] delay-[1000ms]   "
      enterFrom="opacity-0 translate-y-[-200px]  "
      enterTo="opacity-100 translate-y-0  "
    ></Transition> */}

        {/* <div className="border-b-[1px] w-[1000px] border-[#F1E3B5] mt-[52px] smm:mt-[10vw] lgm:mt-[32px] pt-[200px]">
      <div
        className="flex items-center w-[52px] h-[32px] gap-x-[-2px] 
            absolute bottom-0 smm:bottom-[44px] left-[50%] translate-x-[50%]
            smm:left-[48.7%] translate-y-[50%] lg:left-[48.65%] md:left-[48.65%] "
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
    </div> */}
      </div>
      {/* Partner Section
  <div
    ref={triggerRef2 as React.RefObject<HTMLDivElement>}
    className="w-full h-auto pb-24 mdm:pb-[10vw] bgpartner2 relative border-t-2 border-[#F1E3B5] flex flex-col items-center xlm:h-auto"
  >
    <div className="w-[130px] h-[130px] mdm:w-20 mdm:h-20 border-2 border-[#F1E3B5] bg-[#0B0436] bullet  top-0 mt-[-66px] mdm:top-[25px]">
      <Image src={div} alt="" className="w-full h-full" />
    </div>
    <div className="w-full h-0 mt-44 mb-32 mdm:mb-[80px] mdm:mt-[100px]">
      <Transition
        show={showFadeUp2}
        enter="transition ease-in-out duration-[800ms] delay-[200ms]   "
        enterFrom="opacity-0 -translate-y-[-200px]  "
        enterTo="opacity-100 translate-y-0  "
      >
        <p className="text-center text-6xl  l  lgm:text-5xl mdm:text-4xl  ">
          {"PARTNER"}
        </p>
      </Transition>
    </div>

    <div className="flex flex-col gap-y-[3vw]">
      Desktop
      <div className="flex flex-col gap-y-[3vw] xlm:hidden">
        5 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href=" https://seedify.fund" target="_blank">
            <Image
              src={SdF}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.immutable.com" target="_blank">
            <Image
              src={IML}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://meritcircle.io" target="_blank">
            <Image
              src={MeritLogo2}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://aws.amazon.com/startups" target="_blank">
            <Image
              src={AWS}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link
            href="https://katalyst.kasikornbank.com/th/Pages/index.html"
            target="_blank"
          >
            <Image
              src={KP}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
        </div>
        6 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://twitter.com/koicapital_" target="_blank">
            <Image
              src={Koi}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://metfi.io" target="_blank">
            <Image
              src={MF}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://cspdao.network" target="_blank">
            <Image
              src={CSP}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://absoluta.digital" target="_blank">
            <Image
              src={AD}
              alt=""
              className="w-[130px]  mdm:w-[22vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://gd10.capital" target="_blank">
            <Image
              src={G10}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://moonedge.finance" target="_blank">
            <Image
              src={ME}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
        </div>
        7 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://www.oasismetaverse.ventures" target="_blank">
            <Image
              src={Oas}
              alt=""
              className="w-[130px]  mdm:w-[22vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://hulkcrypto.com" target="_blank">
            <Image
              src={SX}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.aza.ventures" target="_blank">
            <Image
              src={Aza}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://www.web3whales.app" target="_blank">
            <Image
              src={W3}
              alt=""
              className="w-[100px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://www.brainbox.studio" target="_blank">
            <Image
              src={BB}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://twitter.com/GreenArrowVC" target="_blank">
            <Image
              src={GA}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://x.com/mitm_club" target="_blank">
            <Image
              src={Mit}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
        </div>
        6 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://unicornventures.co.in" target="_blank">
            <Image
              src={UV}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://crypto-cup.co" target="_blank">
            <Image
              src={CC}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://x.com/unrealcapital?s=21" target="_blank">
            <Image
              src={Un}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://www.abga.asia" target="_blank">
            <Image
              src={ABGA}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://chain.link" target="_blank">
            <Image
              src={ChL}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://www.cls.global" target="_blank">
            <Image
              src={CLS}
              alt=""
              className="w-[130px]  mdm:w-[22vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
        </div>
        5 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://tenxstudios.io" target="_blank">
            <Image
              src={Ts}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link
            href="https://www.facebook.com/TEMentertain"
            target="_blank"
          >
            <Image
              src={Tem}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://yodalabs.beehiiv.com" target="_blank">
            <Image
              src={YL}
              alt=""
              className="w-[130px]  mdm:w-[22vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://elixir.app" target="_blank">
            <Image
              src={Ex}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
          <Link href="https://magic.store" target="_blank">
            <Image
              src={Ms}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal lgm:hidden "
            />
          </Link>
        </div>
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://taskon.xyz" target="_blank">
            <Image
              src={TO}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link
            href="https://zealy.io/cw/evermooncommunity/leaderboard"
            target="_blank"
          >
            <Image
              src={Zea}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
      </div>

      Tablet
      <div className="flex flex-col gap-y-[3vw] mdm:hidden xl:hidden">
        3 Box
        <div className="flex justify-center items-center  gap-x-[2vw]">
          <Link href=" https://seedify.fund" target="_blank">
            <Image
              src={SdF}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.immutable.com" target="_blank">
            <Image
              src={IML}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://meritcircle.io" target="_blank">
            <Image
              src={MeritLogo2}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
        </div>
        4 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://aws.amazon.com/startups" target="_blank">
            <Image
              src={AWS}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link
            href="https://katalyst.kasikornbank.com/th/Pages/index.html"
            target="_blank"
          >
            <Image
              src={KP}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://twitter.com/koicapital_" target="_blank">
            <Image
              src={Koi}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://metfi.io" target="_blank">
            <Image
              src={MF}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://cspdao.network" target="_blank">
            <Image
              src={CSP}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://absoluta.digital" target="_blank">
            <Image
              src={AD}
              alt=""
              className="w-[130px]  mdm:w-[22vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://gd10.capital" target="_blank">
            <Image
              src={G10}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        4 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://moonedge.finance" target="_blank">
            <Image
              src={ME}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://www.oasismetaverse.ventures" target="_blank">
            <Image
              src={Oas}
              alt=""
              className="w-[130px]  mdm:w-[20vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://hulkcrypto.com" target="_blank">
            <Image
              src={SX}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.aza.ventures" target="_blank">
            <Image
              src={Aza}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        4 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://www.web3whales.app" target="_blank">
            <Image
              src={W3}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://www.brainbox.studio" target="_blank">
            <Image
              src={BB}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://twitter.com/GreenArrowVC" target="_blank">
            <Image
              src={GA}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://x.com/mitm_club" target="_blank">
            <Image
              src={Mit}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        4 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://unicornventures.co.in" target="_blank">
            <Image
              src={UV}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://crypto-cup.co" target="_blank">
            <Image
              src={CC}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://x.com/unrealcapital?s=21" target="_blank">
            <Image
              src={Un}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://www.abga.asia" target="_blank">
            <Image
              src={ABGA}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://chain.link" target="_blank">
            <Image
              src={ChL}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://www.cls.global" target="_blank">
            <Image
              src={CLS}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://tenxstudios.io" target="_blank">
            <Image
              src={Ts}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        4 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link
            href="https://www.facebook.com/TEMentertain"
            target="_blank"
          >
            <Image
              src={Tem}
              alt=""
              className="w-[90px]  mdm:w-[16vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://yodalabs.beehiiv.com" target="_blank">
            <Image
              src={YL}
              alt=""
              className="w-[130px]  mdm:w-[22vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://elixir.app" target="_blank">
            <Image
              src={Ex}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
          <Link href="https://magic.store" target="_blank">
            <Image
              src={Ms}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal smm:hidden "
            />
          </Link>
        </div>
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://taskon.xyz" target="_blank">
            <Image
              src={TO}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link
            href="https://zealy.io/cw/evermooncommunity/leaderboard"
            target="_blank"
          >
            <Image
              src={Zea}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
      </div>

      Mobile
      <div className="flex flex-col gap-y-[2vw] md:hidden lg:hidden xl:hidden">
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href=" https://seedify.fund" target="_blank">
            <Image
              src={SdF}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.immutable.com" target="_blank">
            <Image
              src={IML}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://meritcircle.io" target="_blank">
            <Image
              src={MeritLogo2}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal md:hidden xl:hidden"
            />
          </Link>
          <Link href="https://aws.amazon.com/startups" target="_blank">
            <Image
              src={AWS}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link
            href="https://katalyst.kasikornbank.com/th/Pages/index.html"
            target="_blank"
          >
            <Image
              src={KP}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://twitter.com/koicapital_" target="_blank">
            <Image
              src={Koi}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://metfi.io" target="_blank">
            <Image
              src={MF}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://cspdao.network" target="_blank">
            <Image
              src={CSP}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://absoluta.digital" target="_blank">
            <Image
              src={AD}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://gd10.capital" target="_blank">
            <Image
              src={G10}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://moonedge.finance" target="_blank">
            <Image
              src={ME}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://www.oasismetaverse.ventures" target="_blank">
            <Image
              src={Oas}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://hulkcrypto.com" target="_blank">
            <Image
              src={SX}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.aza.ventures" target="_blank">
            <Image
              src={Aza}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://www.web3whales.app" target="_blank">
            <Image
              src={W3}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://www.brainbox.studio" target="_blank">
            <Image
              src={BB}
              alt=""
              className=" w-[90px]  mdm:w-[16vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://twitter.com/GreenArrowVC" target="_blank">
            <Image
              src={GA}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://x.com/mitm_club" target="_blank">
            <Image
              src={Mit}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://unicornventures.co.in" target="_blank">
            <Image
              src={UV}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://crypto-cup.co" target="_blank">
            <Image
              src={CC}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://x.com/unrealcapital?s=21" target="_blank">
            <Image
              src={Un}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://www.abga.asia" target="_blank">
            <Image
              src={ABGA}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://chain.link" target="_blank">
            <Image
              src={ChL}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://www.cls.global" target="_blank">
            <Image
              src={CLS}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
        </div>
        3 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://tenxstudios.io" target="_blank">
            <Image
              src={Ts}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link
            href="https://www.facebook.com/TEMentertain"
            target="_blank"
          >
            <Image
              src={Tem}
              alt=""
              className="w-[90px]  mdm:w-[16vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal "
            />
          </Link>
          <Link href="https://yodalabs.beehiiv.com" target="_blank">
            <Image
              src={YL}
              alt=""
              className="w-[130px]  mdm:w-[20vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://elixir.app" target="_blank">
            <Image
              src={Ex}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link href="https://magic.store" target="_blank">
            <Image
              src={Ms}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
        2 Box
        <div className="flex justify-center items-center gap-x-[2vw]">
          <Link href="https://taskon.xyz" target="_blank">
            <Image
              src={TO}
              alt=""
              className="w-[190px]  mdm:w-[24vw] mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
          <Link
            href="https://zealy.io/cw/evermooncommunity/leaderboard"
            target="_blank"
          >
            <Image
              src={Zea}
              alt=""
              className="w-[190px]  mdm:w-[24vw] cursor-pointer mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>
        </div>
      </div>
    </div>
  </div> */}
    </section>
  );
};

export default Index;

function Svg1({ link }: { link: any }) {
  return (
    <LinkNewTab href={link}>
      <svg
        className="link fill-[#01071A] p-1 opacity-0 hover:fill-[#3B82F6] "
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="56"
        viewBox="0 0 57 56"
        fill="none"
      >
        <mask
          id="mask0_3158_67711"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="57"
          height="56"
        >
          <rect x="0.5" width="56" height="56" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3158_67711)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.60988 5.83325C7.80088 5.83325 6.33337 7.25607 6.33337 9.00897V46.9919C6.33337 48.745 7.80105 50.1666 9.60988 50.1666H47.3902C49.1999 50.1666 50.6667 48.7448 50.6667 46.9914V9.00897C50.6667 7.25607 49.1999 5.83325 47.3902 5.83325H9.60988ZM19.8055 22.9755V42.9345H13.1714V22.9755H19.8055ZM20.2428 16.803C20.2428 18.7183 18.8028 20.2509 16.4898 20.2509L16.4464 20.2507C14.2198 20.2507 12.7804 18.7181 12.7804 16.8028C12.7804 14.844 14.2633 13.3541 16.5338 13.3541C18.8028 13.3541 20.1995 14.844 20.2428 16.803ZM30.1111 42.9345H23.4775C23.4775 42.9345 23.5645 24.8486 23.4779 22.9762H30.1116V25.8013C30.9934 24.4416 32.5717 22.5076 36.0905 22.5076C40.4551 22.5076 43.7275 25.3603 43.7275 31.4906V42.9345H37.0941V32.2582C37.0941 29.5748 36.1335 27.7446 33.7336 27.7446C31.9005 27.7446 30.809 28.9789 30.3296 30.1712C30.1544 30.5967 30.1111 31.194 30.1111 31.7897V42.9345Z"
          />
        </g>
      </svg>
    </LinkNewTab>
  );
}
function Svg2({ link }: { link: any }) {
  return (
    <LinkNewTab href={link}>
      <svg
        className="link fill-[#01071A] p-1 opacity-0 hover:fill-[#3B82F6] "
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="56"
        viewBox="0 0 57 56"
        fill="none"
      >
        <mask
          id="mask0_3158_56964"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="57"
          height="56"
        >
          <rect x="0.5" width="56" height="56" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3158_56964)">
          <path d="M41.4378 45.684C41.4378 45.684 47.5264 16.3599 47.7339 12.433C47.778 12.0424 47.778 11.7604 47.7631 11.4764C47.7701 11.1797 47.7426 10.8811 47.6819 10.5928C47.6531 10.4215 47.5862 10.2649 47.4884 10.1375C47.3906 10.01 47.2657 9.91605 47.1272 9.86592C46.6333 9.75104 46.1227 9.79281 45.6476 9.99124C45.6476 9.99124 12.2077 24.3995 10.2987 26.0287C9.89162 26.3734 9.75142 26.5676 9.6846 26.7974C9.6204 27.1149 9.65578 27.4491 9.78374 27.7373C9.91214 28.0277 10.124 28.2491 10.3803 28.364L18.999 31.7248C19.1427 31.7666 19.292 31.7666 19.4357 31.7248C21.3962 30.248 39.1668 16.8278 40.1874 16.3766C40.2617 16.3536 40.3206 16.3536 40.3626 16.3745C40.4128 16.3975 40.439 16.4476 40.439 16.5186C40.025 18.2439 24.5775 34.6177 24.5775 34.6177C24.5399 34.6741 24.5076 34.7368 24.4809 34.8036L23.6747 45.0197C23.6747 45.0197 23.3419 48.1508 25.9606 45.0197C26.9695 43.8124 27.9631 42.7075 28.8025 41.8093C29.4956 41.0678 30.0834 40.4662 30.4883 40.0652C32.3139 41.5795 34.2373 43.1858 35.7589 44.5289C36.7101 45.3685 37.5045 46.1038 38.0199 46.6469C38.2492 46.9184 38.5226 47.1294 38.8226 47.2672C39.1231 47.4051 39.4441 47.4678 39.766 47.4531C41.0679 47.3988 41.4378 45.684 41.4378 45.684Z" />
        </g>
      </svg>
    </LinkNewTab>
  );
}
