import { useRef, useEffect, useState } from "react";

import { useInViewport } from "react-in-viewport";

import { Josefin_Sans } from "next/font/google";

const Jose = Josefin_Sans({ subsets: ["latin"] });

import Link from "next/link";

const Index = () => {
  const triggerRef = useRef<HTMLElement>(null);
  // const { inViewport } = useInViewport(
  //   triggerRef as MutableRefObject<HTMLElement>,
  //   { threshold: 0.1 },
  // );
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   console.log(inViewport);
  // }, [inViewport]);

  // useEffect(() => {});
  // function cancelAnimate() {
  //   var element: any = document.getElementById("animate_3D");
  //   element.classList.add("iframe-parent");
  //   setToggle(false);
  // }
  // function activeAnimate() {
  //   var element: any = document.getElementById("animate_3D");
  //   element.classList.remove("iframe-parent");
  //   setToggle(true);
  // }

  useEffect(() => {
    if (window.innerWidth < 1024 && window.innerWidth >= 340) {
      const move1: any = document.getElementById("animate_3D");
      move1.classList.remove("boxleft");
      const move2: any = document.getElementById("animate_3D2");
      move2.classList.remove("boxright");
    }
  }, []);
  return (
    <section
      ref={triggerRef as React.RefObject<HTMLDivElement>}
      id="Card"
      className={
        `relative m-auto h-fit w-full
  xlm:flex xlm:items-center   ` + Jose.className
      }
    >
      <div
        className="absolute left-[5%] top-[5%] z-50
      bg-bgTribe bg-contain bg-center bg-no-repeat
    py-[52px] pl-[32px] 2xl:left-[20%] lgm:pl-[24px]  smm:left-0 smm:py-[32px] smm:pl-[4vw]"
      >
        <div className="flex flex-col bg-bgTribe">
          <h3 className="text-[60px] uppercase text-white drop-shadow-[0px_4px_4px_0px_#000024] smm:text-[12vw]">
            dotler
          </h3>
          <div className="flex items-center gap-x-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
            >
              <path
                d="M5.2657 1.33113L6.99903 0.152466L8.73236 1.33113V1.78873C8.16819 1.63075 7.5849 1.55143 6.99903 1.553C6.41295 1.5483 5.82923 1.62768 5.2657 1.78873V1.33113ZM7.8033 6.2538H6.19476C6.32823 5.517 6.39782 4.77004 6.40276 4.02127C6.40395 3.2722 6.3343 2.52469 6.19476 1.78873H7.8033C7.66293 2.52457 7.59327 3.27216 7.5953 4.02127C7.59469 4.77031 7.66433 5.51776 7.8033 6.2538ZM8.7185 12.4661V18.3871L6.99903 19.857V10.7327L6.09769 9.04099L6.94356 7.2938L5.69556 9.06873L6.66623 10.7466L6.98517 19.8847L5.27956 18.4981V12.4661C5.27886 11.8692 5.14389 11.2801 4.88465 10.7424C4.62541 10.2047 4.24855 9.73222 3.78196 9.35993L6.3057 6.5866H7.69236L10.1606 9.35993C9.7042 9.73768 9.33787 10.2126 9.08837 10.7499C8.83887 11.2873 8.71251 11.8736 8.7185 12.4661ZM12.5596 9.94233L12.6982 8.6666L10.5766 8.19514L10.9233 8.76366L10.3132 8.9994L8.55209 7.03033L13.3084 8.209L13.0865 9.59566L12.5596 9.94233ZM0.911564 9.59566L0.689697 8.209L5.44596 7.03033L3.67103 8.9994L3.0609 8.76366L3.42143 8.19514L1.29983 8.6666L1.4385 9.94233L0.911564 9.59566Z"
                fill="#F1E3B5"
              />
            </svg>
            <p className="text-[20px] uppercase">FIGHTER</p>
            <Link href="https://docs.evermoon.games/evermoon" target="_blank">
              <div className="flex items-center gap-x-[6px] px-2 py-1">
                <h3 className="text-[12px] text-white">View More</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <mask
                    id="mask0_7414_2112"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                  >
                    <rect width="14" height="14" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_7414_2112)">
                    <path
                      d="M5.64209 1.87244L5.4811 2.03344L8.9811 5.56844L8.4491 6.10044L4.74609 2.38344L7.0701 7.02444L4.76709 11.6444L8.4701 7.92744L9.0021 8.45944L5.5021 11.9594L5.66309 12.1204L10.7731 6.98943L5.64209 1.87244ZM8.6311 7.72444L9.3311 6.98943L8.6311 6.28943L9.16309 5.75744L10.4231 7.02444L9.16309 8.29144L8.6311 7.72444Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" relative flex  h-[730px] w-[1320px] items-center  justify-center lgm:w-full smm:w-full  ">
        <iframe
          src="https://webgl-3dmodel.s3.ap-southeast-1.amazonaws.com/Evermoon_Dotler_Model_V1.4/index.html"
          className=" h-[730px] w-[1320px] "
          allow="camera; microphone"
        ></iframe>
        {/* {inViewport && ( bg-inherit
        )} */}
        <div
          className="boxleft absolute left-[0%] top-[0%] z-30 h-[730px] w-[426px] 
       2xl:left-[0%] xlm:opacity-0 lgm:left-[0%] lgm:w-[30vw] smm:left-[0%] smm:top-[0%] smm:h-[730px] smm:w-[25vw] "
          id="animate_3D"
        />
        <div
          className="boxright absolute right-[0%] top-[0%] z-30 h-[730px] w-[426px] 
        2xl:right-[0%] xlm:opacity-0 lgm:right-[0%] lgm:w-[30vw] smm:right-[0%] smm:top-[0%] smm:h-[730px] smm:w-[25vw] "
          id="animate_3D2"
        />
      </div>
    </section>
  );
};

export default Index;
