import Image from "next/image";
import { useRef, MutableRefObject, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";

const Index = () => {
  const [roadmap, setroadmap] = useState(0);
  const triggerRef2 = useRef<HTMLElement>(null);
  const [showFadeUp, setShowFadeUp] = useState(false);
  const [showFadeUp2, setShowFadeUp2] = useState(false);
  const inViewport2 = useInViewport(
    triggerRef2 as MutableRefObject<HTMLElement>,
    { threshold: 0.1 },
  );
  useEffect(() => {
    // setShowFadeUp(true);
    const e1 = document.getElementById("text");
    if (inViewport2.inViewport) {
      e1!.classList.add("ani-text");
      // setShowFadeUp2(true);
    }
  }, [inViewport2.inViewport]);

  const nav = (op: number) => {
    if (op == 1) {
      if (roadmap > 288) {
        setroadmap(roadmap - 288);
      } else setroadmap(0);
    }
    if (op == 2)
      if (roadmap <= 288 * vw) {
        setroadmap(roadmap + 288);
      } else if (roadmap > 288 * vw) {
        setroadmap(288 + 288 * vw);
      }
  };

  const [vw, setvw] = useState(0);
  useEffect(() => {
    const width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    setvw(width);
    if (window.innerWidth >= 1280) {
      setvw(4);
    } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
      setvw(4);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 340) {
      setvw(6);
    } else {
      setvw(7);
    }
  }, []);

  console.log(inViewport2);

  return (
    <section
      className={
        "relative flex h-auto  w-full flex-col  py-[9.2vw] xlm:h-auto "
      }
    >
      <p
        id="text"
        ref={triggerRef2 as React.RefObject<HTMLDivElement>}
        className=" text-center text-4xl smm:text-2xl "
      >
        {"ROADMAP"}
      </p>

      <div className=" mt-12 w-[1200px] overflow-hidden lg:w-[1020px]  2xlm:w-full lgm:w-full mdm:w-[100vw]">
        <style>
          {`
                .roadmapdynamic {
                    transform: translateX(-${roadmap}px);
            `}
        </style>

        <div
          className={`roadmapdynamic flex h-[650px] w-[1280px] transition-transform smm:h-[145vw]`}
        >
          <div className=" ">
            <div className="flex h-[380px] justify-center px-[64px] smm:px-[16px]  ">
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q1-Q2"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#52C460]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state1.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Pre-production & Setup"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {" Game Story & Concept Teaser "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Whitepaper & Community Launch"}
                  </li>
                  <li className="text-sm text-white ">
                    {" Preliminary Website & Team Introduction"}
                  </li>
                  <li className="text-sm text-white ">
                    {" Progress Updates & Seed Sale "}
                  </li>
                </ul>
                <div className="mt-[38px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2022"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[-10%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[190px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-36%] translate-y-[50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q3-Q4"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#52C460]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state1.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Beginning of Production"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {" Alpha Gameplay Trailer "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Alpha Version, Phase I "}
                  </li>
                </ul>
                <div className="mt-[38px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2022"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[8%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[210px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-21%] translate-y-[50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q1-Q2"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#52C460]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state1.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Production Progress"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {" Private Sale & Evermoon Comic Release "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Ongoing Development & Partner Announcements "}
                  </li>
                </ul>
                <div className="mt-[38px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2023"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[-4%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[210px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-33%] translate-y-[50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q3-Q4"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#52C460]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state1.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Advancing to Pre-Beta"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {" Advancing to Pre-Beta "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Pre-Beta Trailer & Game Test "}
                  </li>
                </ul>
                <div className="mt-[38px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2023"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[10%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[218px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-20.25%] translate-y-[50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q1-Q2"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#0B0436]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state2.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Pre-production & Setup"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {
                      " Beta Game Trailer & Beta Phase I Launch & E-Sport Events "
                    }
                  </li>
                  <li className="text-sm text-white ">
                    {" $EVM Private Sale "}
                  </li>
                  <li className="text-sm text-white ">{" DeFi Testnet"}</li>
                  <li className="text-sm text-white ">
                    {" $EVM Public Sale "}
                  </li>
                  <li className="text-sm text-white ">
                    {" $EVM TGE & Listing on DEX and CEXs "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Sacred Egg Giveaway & Free Mint "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Sacred Beast & De-Zentrum Pool (DeFi) "}
                  </li>
                  <li className="text-sm text-white ">
                    {" NFT Marketplace Introduction "}
                  </li>
                </ul>
                <div className="mt-[38px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2024"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[-28%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[100px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-41%] translate-y-[50%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q3-Q4"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#525252]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state3.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Launch Preparations"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {" $EVM Strategic Round "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Moon Mission SocialFi & Arcade Games Launch "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Sacred Egg Giveaway & Free Mint "}
                  </li>
                  <li className="text-sm text-white ">
                    {" NFT Marketplace Introduction "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Beta II Version Game Launch "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Marketplace Phase I "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Beta III Version Game Launch "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Play-To-Airdrop Events "}
                  </li>
                  <li className="text-sm text-white ">{" $ES Launch "}</li>
                  <li className="text-sm text-white ">
                    {" Building Challenge & Synthesis "}
                  </li>
                  <li className="text-sm text-white ">{" Synthesis "}</li>
                </ul>
                <div className="mt-[30px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2024"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[-19%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[35px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-22.75%] translate-y-[50%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q1-Q2"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#525252]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state3.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"The Grand Launch"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">{" Soft Launch "}</li>
                  <li className="text-sm text-white ">{" $EVM Launch "}</li>
                  <li className="text-sm text-white ">
                    {" Official Game Launch "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Official E-sports Tournaments "}
                  </li>
                </ul>
                <div className="mt-[38px] flex justify-start ">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2025"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[-4%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[200px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-31.5%] translate-y-[50%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q3-Q4"}</p>
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-[#525252]  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state3.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Post-Launch"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">{" DAO Vote "}</li>
                  <li className="text-sm text-white ">{" More features "}</li>
                </ul>
                <div className="mt-[38px] flex justify-start ">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2025"}
                  </p>
                </div>
                <div>
                  <div className="absolute bottom-[-1%] z-30 translate-y-[50%]">
                    <div className="ml-[33px] h-[220px] w-[3px] bg-white" />
                  </div>
                  <div className="absolute bottom-[-31.5%] translate-y-[50%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      viewBox="0 0 24 8"
                      fill="none"
                      className="ml-[23px]"
                    >
                      <path
                        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
                        fill="url(#paint0_linear_7547_1964)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7547_1964"
                          x1="0"
                          y1="4"
                          x2="24"
                          y2="4"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7BD2EE" />
                          <stop offset="1" stop-color="#076CC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative flex h-[350px] w-[288px] flex-col smm:w-[78vw]" />

              <div className="relative flex h-[350px] w-[288px] flex-col 2xlm:hidden smm:w-[78vw]" />

              <div className="relative flex h-[350px] w-[288px] flex-col xl:hidden smm:w-[78vw] " />
            </div>
            <div className=" h-[280px] w-full bg-bgWave bg-contain bg-repeat-x" />
          </div>
        </div>
      </div>
      <div
        className=" absolute bottom-[20%] z-40  flex w-[185px] gap-x-[20px] 
    lgm:bottom-[10%] lgm:hidden "
      >
        <button
          onClick={() => nav(1)}
          className={`flex w-full max-w-[122px] items-center justify-center 
        gap-x-[8px] px-[14px] py-[10px]
        ${roadmap === 0 ? "btn-primary_disable" : "btn-primary"}`}
        >
          <Image
            src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/Arrow_left.png"
            width={49}
            height={48}
            alt="Arrow_Left"
            className="w-[16px]"
          />
          <p className="text-sm text-white">{"Prev"}</p>
        </button>
        <button
          onClick={() => nav(2)}
          className={`btn-primary flex w-full max-w-[122px] items-center 
        justify-center gap-x-[8px] px-[14px] py-[10px]
        ${roadmap === 1440 && "btn-primary_disable"}
        `}

          // ${roadmap == 1728 && 1440 && 1152 && 864 ? "btn-primary_disable" : "btn-primary"}
        >
          <p className="text-sm text-white">{"Next"}</p>
          <Image
            src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/Arrow_right.png"
            width={49}
            height={48}
            alt="Arrow_right"
            className="w-[16px]"
          />
        </button>
      </div>

      <div
        className="absolute bottom-[20%] z-40 flex w-[185px] gap-x-[20px] 
  xl:hidden 2xl:hidden smm:bottom-[2%] smm:w-full smm:justify-center "
      >
        <button
          onClick={() => nav(1)}
          className={`flex w-full max-w-[122px] items-center justify-center 
    gap-x-[8px] px-[14px] py-[10px]
    ${roadmap === 0 ? "btn-primary_disable" : "btn-primary"}`}
        >
          <Image
            src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/Arrow_left.png"
            width={49}
            height={48}
            alt="Arrow_Left"
            className="w-[16px]"
          />
          <p className="text-sm text-white">{"Prev"}</p>
        </button>
        <button
          onClick={() => nav(2)}
          className={`btn-primary flex w-full max-w-[122px] items-center 
    justify-center gap-x-[8px] px-[14px] py-[10px]
    ${roadmap === 2016 && "btn-primary_disable"}
    
    `}

          // ${roadmap ==  && 1440 && 1152 && 864 ? "btn-primary_disable" : "btn-primary"}
        >
          <p className="text-sm text-white">{"Next"}</p>
          <Image
            src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/Arrow_right.png"
            width={49}
            height={48}
            alt="Arrow_right"
            className="w-[16px]"
          />
        </button>
      </div>
    </section>
  );
};

export default Index;
