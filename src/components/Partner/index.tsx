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
  const { inViewport } = useInViewport(
    triggerRef as MutableRefObject<HTMLElement>,
    { threshold: 0.1 },
  );
  // const inViewport2 = useInViewport(
  //   triggerRef2 as MutableRefObject<HTMLElement>,
  //   { threshold: 0.2 },
  // );
  const [showFadeUp, setShowFadeUp] = useState(false);
  const [fadeShowUp2, setFadeShowUp2] = useState(false);

  useEffect(() => {
    const e1 = document.getElementById("evm1");
    const e2 = document.getElementById("evm2");
    const e3 = document.getElementById("evm3");
    const e4 = document.getElementById("evm4");
    const e5 = document.getElementById("evm5");
    const e6 = document.getElementById("evm6");
    const e7 = document.getElementById("evm7");
    const e8 = document.getElementById("evm8");
    const e9 = document.getElementById("evm9");
    const e10 = document.getElementById("evm10");
    const e11 = document.getElementById("evm11");
    if (inViewport) {
      setShowFadeUp(true);
      e1!.classList.add("ani-text");
      e2!.classList.add("slide-text1");
      e3!.classList.add("slide-text");
      e4!.classList.add("slide-text2");
      e5!.style.opacity = "1";
      e6!.classList.add("ani-text_delay");
      e7!.style.opacity = "1";
      e8!.style.opacity = "1";
      e9!.classList.add("slide-text");
      e10!.classList.add("slide-text1");
      e11!.classList.add("slide-text2");
    }
    // if (inViewport2.inViewport) {
    //   setShowFadeUp2(true);
    // }
    // return () => {};
  }, [
    inViewport,
    //  inViewport2
  ]);
  return (
    <section
      className={
        " h-[800px] w-full px-[32px] py-[52px] xlm:h-auto smm:py-[8.55vw] "
      }
    >
      <div
        id="evm8"
        ref={triggerRef as React.RefObject<HTMLDivElement>}
        className="relative flex w-full min-w-[1920px] flex-col 
        items-center justify-center  opacity-0 delay-100 duration-1000 xlm:h-auto "
      >
        <div id="evm1" className="">
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
          id="evm5"
          className=" absolute top-[-5%] flex h-[400px] 
          w-[800px] translate-y-[50%] justify-between
      opacity-0 transition-opacity
        delay-300 duration-1000 xlm:hidden"
        >
          <div
            id="evm2"
            className="flipp mt-[45px] h-[340px]  w-[241px]    xlm:hidden "
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
            id="evm3"
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
            id="evm4"
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
        </div>

        {/* mobile section */}
        <div className="flex h-[760px] w-[700px] flex-col justify-center xl:hidden smm:h-auto">
          <div id="evm9" className="flipp m-auto h-[340px] w-[240px]">
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
            <div id="evm10" className=" flipp h-[340px] w-[240px] ">
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
            <div id="evm11" className=" flipp h-[340px] w-[240px]">
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
        {/* mobile section */}

        <div
          id="evm7"
          className="z-50 mt-[100px] px-[5vw]  opacity-0 transition-opacity 
          delay-[2200ms] duration-1000 xlm:w-[100vw] xlm:text-center"
        >
          <p
            id="evm6"
            className="text-[14px] uppercase
       text-zinc-200 smm:text-[4vw] "
          >
            {
              "The developer house of shining talented team with vivid passions that making many great breakthroughs"
            }
          </p>
        </div>
      </div>
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
