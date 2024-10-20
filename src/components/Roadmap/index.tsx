import Circle from "evm/svg/Circle";
import Image from "next/image";
import { useRef, MutableRefObject, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";

const Index = () => {
  const [roadmap, setroadmap] = useState(1152);
  // const [current, setcurrent] = useState(5);
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
    const e2 = document.getElementById("text2");
    const e3 = document.getElementById("text3");
    if (inViewport2.inViewport) {
      e1!.classList.add("ani-text");
      // e2!.classList.add("ani-text_delay7");
      e3!.style.opacity = "1";
    }

    if (window.innerWidth >= 1280) {
      setroadmap(576);
    } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
      setroadmap(1152);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 340) {
      setroadmap(1152);
    }
  }, [inViewport2.inViewport]);

  const nav = (op: number) => {
    if (op == 1) {
      if (roadmap >= 288) {
        setroadmap(roadmap - 288);
        // setcurrent(current - 1);
      } else setroadmap(0);
    }
    if (op == 2)
      if (roadmap <= 288 * vw) {
        setroadmap(roadmap + 288);
        // setcurrent(current + 1);
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
      setvw(2);
    } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
      setvw(2);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 340) {
      setvw(3);
    } else {
      setvw(4);
    }
  }, []);

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

      <div
        id="text3"
        //*TODO: id="text3" opacity-0 transition-opacity delay-500 duration-1000
        className=" mt-12 w-[1200px] overflow-hidden opacity-0
            transition-opacity delay-1000 duration-1000 2xlm:w-fit lgm:w-[864px] mdm:w-[300px] "
      >
        <style>
          {`
                .roadmapdynamic {
                    transform: translateX(-${roadmap}px);
            `}
        </style>

        <div
          id="text2"
          className={`roadmapdynamic flex h-[650px] w-[1280px] transition-transform smm:h-auto`}
        >
          <div className="smm:h-auto ">
            <div className="flex h-[380px] justify-center px-[64px] smm:px-[16px]  ">
              {/* Q1-Q4 year 2022 */}
              <div className="relative flex h-[350px] w-[288px] flex-col ">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q1-Q4"}</p>
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
                  {"Pre-production & Early Production"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    {" Game Story & Concept Teaser "}
                  </li>
                  <li className="text-sm text-white ">
                    Whitepaper & Community <br /> Launch
                  </li>
                  <li className="text-sm text-white ">
                    {" Alpha I Version Game Launch"}
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
                <div className="absolute bottom-[-65%] translate-y-[-50%]">
                  <div className="ml-[33px] h-[214px] w-[3px] bg-white" />
                  <div className="mt-[-8px]">
                    <Circle width="24" height="8" className="ml-[23px]" />
                  </div>
                </div>
                {/* absolute bottom-[-19%] translate-y-[50%] absolute bottom-[4%] z-30 translate-y-[50%] */}
              </div>
              {/* Q1-Q4 year 2023 */}
              <div className="relative flex h-[350px] w-[288px] flex-col ">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q1-Q4"}</p>
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
                    Ongoing Development & <br /> Partner Announcements
                  </li>
                  <li className="text-sm text-white ">
                    Alpha II Version Game Launch <br /> & E-Sport Events
                  </li>
                  <li className="text-sm text-white ">
                    {" Pre-Beta Version Game Launch "}
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
                <div className="absolute bottom-[-45%] translate-y-[-50%]">
                  <div className="ml-[33px] h-[154px] w-[3px] bg-white" />
                  <div className="mt-[-8px]">
                    <Circle width="24" height="8" className="ml-[23px]" />
                  </div>
                </div>
              </div>
              {/* Q1-Q2 year 2024 */}
              <div className="relative flex h-[350px] w-[288px] flex-col ">
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
                  {"The Pre-Launch Phase"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    Beta I Version Game Launch
                  </li>
                  <li className="text-sm text-white ">
                    Sacred Beast DeFi Testnet
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
                <div className="absolute bottom-[-70%] translate-y-[-50%]">
                  <div className="ml-[33px] h-[254px] w-[3px] bg-white" />
                  <div className="mt-[-8px]">
                    <Circle width="24" height="8" className="ml-[23px]" />
                  </div>
                </div>
              </div>
              {/* Q3-Q4 year 2024 */}
              <div className="relative flex h-[350px] w-[288px] flex-col ">
                <div className="flex items-center gap-x-[12px] py-[8px]">
                  <p className="mt-[4px] text-[28px]">{"Q3-Q4"}</p>
                  {/* fix style for correct */}
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-blue-600  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state2.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div>
                  {/* fix style for correct */}
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"Launch Preparations"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    $EVM Pre-Seed & Seed Round
                  </li>
                  <li className="text-sm text-white ">
                    Moon Mission SocialFi & <br /> Minigame (Airdrop)
                  </li>
                  <li className="text-sm text-white ">
                    Marketplace Phase I & Capsule Opening Ceremony
                  </li>
                  <li className="text-sm text-white ">
                    Beta II Version Game Launch
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
                <div className="absolute bottom-[-40%] translate-y-[-50%]">
                  <div className="ml-[33px] h-[134px] w-[3px] bg-white" />
                  <div className="mt-[-8px]">
                    <Circle width="24" height="8" className="ml-[23px]" />
                  </div>
                </div>
              </div>
              {/* Q1-Q2 year 2025 */}
              <div className="relative flex h-[350px] w-[288px] flex-col ">
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
                  {/* <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[50%] border-2  border-[#F1E3B5] bg-blue-600  ">
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/state2.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-[14px]"
                    />
                  </div> */}
                </div>
                <p className="my-[4px] text-[10px] text-[#00DDFF]">
                  {"The Grand Launch"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">
                    Play-To-Airdrop Events <br /> (Global Open Beta)
                  </li>
                  <li className="text-sm text-white ">Soft Game Launch</li>
                  <li className="text-sm text-white ">{" $EVM Launch "}</li>
                  <li className="text-sm text-white ">
                    {" Official Game Launch "}
                  </li>
                  <li className="text-sm text-white ">
                    {" Official E-sports Tournaments "}
                  </li>
                </ul>
                <div className="mt-[30px] flex justify-start">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2025"}
                  </p>
                </div>
                <div className="absolute bottom-[-63%] translate-y-[-50%]">
                  <div className="ml-[33px] h-[164px] w-[3px] bg-white" />
                  <div className="mt-[-8px]">
                    <Circle width="24" height="8" className="ml-[23px]" />
                  </div>
                </div>
              </div>
              {/* Q3-Q4 year 2025 */}
              <div className="relative flex h-[350px] w-[288px] flex-col ">
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
                  {"Post-Launch Expansion"}
                </p>
                <ul className="flex w-full list-disc flex-col pl-[20px] pr-[16px]">
                  <li className="text-sm text-white ">{" $ES Launch "}</li>
                  <li className="text-sm text-white ">{" DAO Vote "}</li>
                  <li className="text-sm text-white ">{" Guild War "}</li>
                  <li className="text-sm text-white ">
                    Building Challenge & Synthesis
                  </li>
                  <li className="text-sm text-white ">More features</li>
                </ul>
                <div className="mt-[38px] flex justify-start ">
                  <p
                    className="inline-block bg-gradient-to-r
            from-[#25C6FA] to-[#4267BF] bg-clip-text text-[30px] font-extrabold text-transparent "
                  >
                    {"2025"}
                  </p>
                </div>
                <div className="absolute bottom-[-45%] translate-y-[-50%]">
                  <div className="ml-[33px] h-[158px] w-[3px] bg-white" />
                  <div className="mt-[-8px]">
                    <Circle width="24" height="8" className="ml-[23px]" />
                  </div>
                </div>
              </div>

              {/* <div className="relative flex h-[350px] w-[288px] flex-col " />

              <div className="relative flex h-[350px] w-[288px] flex-col 2xlm:hidden smm:w-[70vw]" />

              <div className="relative flex h-[350px] w-[288px] flex-col xl:hidden smm:w-[70vw] " /> */}
            </div>
            <div className=" h-[280px] w-full bg-bgWave bg-contain bg-repeat-x" />
          </div>
        </div>
        {/* absolute bottom-[20%] z-40  flex w-[185px] gap-x-[20px] 
    lgm:bottom-[10%] lgm:hidden */}
      </div>
      {/* desktop */}
      <div
        className=" absolute bottom-[20%] z-40  flex w-[185px] gap-x-[20px] 
     lgm:bottom-[10%] lgm:hidden "
      >
        <button
          onClick={() => nav(1)}
          className={`flex w-full max-w-[122px] items-center justify-center 
        gap-x-[8px] px-[14px] py-[10px] 
        ${roadmap === 0 ? "btn-primary_disable" : "btn-primary "}`}
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
          className={` flex w-full max-w-[122px] items-center justify-center gap-x-[8px] px-[14px] py-[10px] 
        ${roadmap === 864 ? "btn-primary_disable" : "btn-primary "}
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
      {/* tablet */}
      <div
        className="absolute bottom-[20%]  z-40 flex w-[185px] translate-y-[-50%] gap-x-[20px] 
   lg:hidden xl:hidden 2xl:hidden smm:hidden "
      >
        <button
          onClick={() => nav(1)}
          className={`flex w-full max-w-[122px] items-center justify-center 
    gap-x-[8px] px-[14px] py-[10px] 
    ${roadmap === 0 ? "btn-primary_disable" : "btn-primary "}`}
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
          className={` flex w-full max-w-[122px] items-center 
    justify-center gap-x-[8px] px-[14px] py-[10px]
    ${roadmap === 1152 ? "btn-primary_disable" : "btn-primary "}
    
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
      {/* mobile */}
      <div
        className="absolute z-40  flex w-[185px] translate-y-[-50%] gap-x-[20px] 
  md:hidden lg:hidden xl:hidden 2xl:hidden smm:bottom-[10%] smm:w-full smm:justify-center "
      >
        <button
          onClick={() => nav(1)}
          className={`flex w-full max-w-[122px] items-center justify-center 
    gap-x-[8px] px-[14px] py-[10px] 
    ${roadmap === 0 ? "btn-primary_disable" : "btn-primary "}`}
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
          className={` flex w-full max-w-[122px] items-center 
    justify-center gap-x-[8px] px-[14px] py-[10px]
    ${roadmap === 1440 ? "btn-primary_disable" : "btn-primary "}
    
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
