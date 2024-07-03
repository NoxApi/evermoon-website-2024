import { useState, useRef, MutableRefObject, useEffect } from "react";

import { Transition } from "@headlessui/react";
import { useInViewport } from "react-in-viewport";

import Image from "next/image";

const Index = () => {
  const [pick, setpick] = useState(1);
  const triggerRef1 = useRef<HTMLElement>(null);
  const inViewport1 = useInViewport(
    triggerRef1 as MutableRefObject<HTMLElement>,
    { threshold: 0.1 },
  );

  useEffect(() => {
    let intervalId: number | undefined;
    if (intervalId) clearInterval(intervalId);
    const startRotation = () => {
      if (pick == 1) {
        intervalId = window.setInterval(() => {
          setpick(2);
        }, 8000);
      } else if (pick == 2) {
        intervalId = window.setInterval(() => {
          setpick(3);
        }, 8000);
      } else if (pick == 3) {
        intervalId = window.setInterval(() => {
          setpick(4);
        }, 8000);
      } else if (pick == 4) {
        intervalId = window.setInterval(() => {
          setpick(1);
        }, 8000);
      }
    };
    startRotation();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [pick]);

  useEffect(() => {
    if (window.innerWidth < 1024 && window.innerWidth >= 340) {
      const element: any = document.getElementById("div3");
      element.classList.remove("coin2");
      const ani: any = document.getElementById("box3");
      ani.classList.remove("box-ani_delay1");
    }
    const e1 = document.getElementById("box1");
    const e2 = document.getElementById("box2");
    const e3 = document.getElementById("box3");
    const e4 = document.getElementById("box4");
    const e5 = document.getElementById("box5");
    if (inViewport1.inViewport) {
      e1!.classList.add("ani-text");
      e2!.classList.add("box-ani_delay");
      e3!.classList.add("box-ani_delay1");
      // e4!.classList.add("box-ani_delay2");
      e5!.style.opacity = "1";
    }
  }, [inViewport1.inViewport]);

  return (
    <section
      className=" h-[800px] w-full bg-bgExplore  bg-cover px-[32px] py-[80px] xlm:h-auto 
  lgm:bg-center lgm:px-[24px] lgm:py-[60px] smm:h-auto smm:bg-contain smm:px-0 smm:py-[9.3vw]"
    >
      <div className={"xlm::mx-auto max-w-[1920px] "}>
        <div className="smm:px-[4.3vw]">
          <div
            className="flex flex-col items-start justify-start 
       xl:hidden"
          >
            <p
              className="w-full  text-left text-2xl 
        xlm:w-[80vw] xlm:pt-1.5 xlm:text-left smm:w-[72vw] smm:pt-0 smm:leading-[10vw]"
            >
              {"WHAT'S"}
            </p>
            <p className="text-left text-3xl xlm:text-left smm:leading-[12vw] ">
              {"EVERMOON?"}
            </p>
          </div>
          <div className="mb-[58px] xl:hidden smm:mb-0">
            <p className="text-sm capitalize text-white smm:leading-[5vw]">
              Evermoon is a Next-Gen MOBA revolution, blending the electrifying
              5v5, 3-lane battle strategy with Web3 innovation. Empowering
              players, Transforming gaming!
            </p>
          </div>
        </div>
        <div
          className="flex h-full w-full items-start justify-center gap-x-[50px]  
  xlm:flex-col-reverse xlm:gap-y-[58px] smm:gap-y-0 "
        >
          <div
            id="box5"
            ref={triggerRef1 as React.RefObject<HTMLDivElement>}
            className=" mt-5 h-auto w-full opacity-0 transition-opacity delay-300 duration-1000 xlm:w-full
              smm:mt-0 "
          >
            <div
              id="box1"
              className="flex flex-col items-start justify-center 
      xlm:hidden xlm:w-[80vw] xlm:items-center"
            >
              <p
                className="w-full text-left text-[34px] xlm:w-[80vw] 
        xlm:pt-1.5 xlm:text-left smm:w-[72vw] smm:text-[9vw] smm:leading-[10vw]"
              >
                {"WHAT'S"}
              </p>
              <p className="w-full text-left text-[48px] xlm:text-left smm:text-center smm:text-[11vw] smm:leading-[12vw]">
                {"EVERMOON?"}
              </p>
            </div>
            <div id="box2" className="mb-[40px] xlm:hidden">
              <p className="text-[18px] capitalize text-white xlm:text-xl smm:text-[4vw] smm:leading-[5vw]">
                Evermoon is a Next-Gen MOBA revolution, blending the
                electrifying <br /> 5v5, 3-lane battle strategy with Web3
                innovation. Empowering <br /> players, Transforming gaming!
              </p>
            </div>
            <div
              id="box3"
              className=" flex flex-col gap-y-[20px]  smm:mx-auto smm:hidden smm:w-[90vw] smm:gap-y-[3vw]"
            >
              <div
                className="flex cursor-pointer 2xl:max-w-[575px] "
                onClick={() => setpick(1)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] 2xl:max-w-[575px] smm:w-[40px] ">
                  {pick == 1 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] px-[16px] py-[8px] smm:w-[600px]
          ${
            pick == 1
              ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
              : "bg-[#FFFFFF33]"
          } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7490_278)">
                        <mask
                          id="mask0_7490_278"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7490_278)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.6667 1.33337H12.6667L12 2.00004H8.66671L9.33337 1.33337H1.33337V9.33337L2.00004 8.66671V12L1.33337 12.6667V14.6667H3.33337L4.00004 14H7.33337L6.66671 14.6667H14.6667V6.66671L14 7.33337V4.00004L14.6667 3.33337V1.33337ZM8.00004 2.66671H11.3334L8.66671 5.33337H5.33337V8.66671L2.66671 11.3334V8.00004L3.33337 7.33337V5.33337L2.66671 6.00004L2.66671 2.66671H6.00004L5.33337 3.33337L7.33337 3.33337L8.00004 2.66671ZM8.00004 13.3334H4.66671L7.33337 10.6667H10.6667V7.33337L13.3334 4.66671V8.00004L12.6667 8.66671V10.6667L13.3334 10V13.3334H10L10.6667 12.6667H8.66671L8.00004 13.3334Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_7490_278">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-white">Top-Tier MOBA Game</p>
                  </div>
                </div>
              </div>
              <div
                className="flex cursor-pointer 2xl:max-w-[575px]"
                onClick={() => setpick(2)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] smm:w-[40px]">
                  {pick == 2 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] 
                px-[16px] py-[8px] smm:w-[600px]
            ${
              pick == 2
                ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
                : "bg-[#FFFFFF33]"
            } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_7490_425"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_7490_425)">
                        <path
                          d="M9.33337 5.00004C9.33337 5.73642 8.73642 6.33337 8.00004 6.33337C7.26366 6.33337 6.66671 5.73642 6.66671 5.00004C6.66671 4.26366 7.26366 3.66671 8.00004 3.66671C8.73642 3.66671 9.33337 4.26366 9.33337 5.00004Z"
                          fill="white"
                        />
                        <path
                          d="M12.3334 6.69457C12.3334 6.35989 11.9961 6.12566 11.6787 6.23178C10.7952 6.52718 9.19432 7.00004 8.00004 7.00004C6.80576 7.00004 5.2049 6.52717 4.32136 6.23178C4.00395 6.12566 3.66671 6.35988 3.66671 6.69456C3.66671 6.88075 3.77425 7.04933 3.94595 7.12133C4.43177 7.32505 5.47377 7.73014 6.44574 7.89835C6.77573 7.95545 7.0482 8.21792 7.05109 8.55281C7.05339 8.81885 7.0419 9.10139 7.00023 9.33337C6.88247 9.98891 6.39997 10.9297 6.39997 10.9297L5.39997 12.6618C5.21587 12.9806 5.2605 13.3511 5.49965 13.4891C5.73879 13.6272 6.0819 13.4806 6.26599 13.1618L7.26599 11.4297C7.26599 11.4297 7.58656 10.6665 8.00004 10.6667C8.41331 10.6669 8.7333 11.4297 8.7333 11.4297L9.7333 13.1618C9.91739 13.4806 10.2605 13.6272 10.4996 13.4891C10.7388 13.3511 10.7834 12.9806 10.5993 12.6618L9.59933 10.9297C9.59933 10.9297 9.11776 9.98879 9.00023 9.33337C8.95862 9.10139 8.94715 8.81887 8.94944 8.55284C8.95233 8.21793 9.2248 7.95542 9.55481 7.8983C10.5266 7.73009 11.5684 7.32504 12.0541 7.12133C12.2258 7.04933 12.3334 6.88075 12.3334 6.69457Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.33337 5.00004C9.33337 5.73642 8.73642 6.33337 8.00004 6.33337C7.26366 6.33337 6.66671 5.73642 6.66671 5.00004C6.66671 4.26366 7.26366 3.66671 8.00004 3.66671C8.73642 3.66671 9.33337 4.26366 9.33337 5.00004ZM11.6787 6.23178C10.7952 6.52718 9.19432 7.00004 8.00004 7.00004C6.80576 7.00004 5.2049 6.52717 4.32136 6.23178C4.00395 6.12566 3.66671 6.35988 3.66671 6.69456C3.66671 6.88075 3.77425 7.04933 3.94595 7.12133C4.43177 7.32505 5.47377 7.73014 6.44574 7.89835C6.77573 7.95545 7.0482 8.21792 7.05109 8.55281C7.05339 8.81885 7.0419 9.10139 7.00023 9.33337C6.88247 9.98891 6.39997 10.9297 6.39997 10.9297L5.39997 12.6618C5.21587 12.9806 5.2605 13.3511 5.49965 13.4891C5.73879 13.6272 6.0819 13.4806 6.26599 13.1618L7.26599 11.4297C7.26599 11.4297 7.58656 10.6665 8.00004 10.6667C8.41331 10.6669 8.7333 11.4297 8.7333 11.4297L9.7333 13.1618C9.91739 13.4806 10.2605 13.6272 10.4996 13.4891C10.7388 13.3511 10.7834 12.9806 10.5993 12.6618L9.59933 10.9297C9.59933 10.9297 9.11776 9.98879 9.00023 9.33337C8.95862 9.10139 8.94715 8.81887 8.94944 8.55284C8.95233 8.21793 9.2248 7.95542 9.55481 7.8983C10.5266 7.73009 11.5684 7.32504 12.0541 7.12133C12.2258 7.04933 12.3334 6.88075 12.3334 6.69457C12.3334 6.35989 11.9961 6.12566 11.6787 6.23178Z"
                          fill="white"
                        />
                        <path
                          d="M3.00004 2.33337C3.00004 3.06975 3.44776 3.66671 4.00004 3.66671C3.44776 3.66671 3.00004 4.26366 3.00004 5.00004C3.00004 4.26366 2.55233 3.66671 2.00004 3.66671C2.55233 3.66671 3.00004 3.06975 3.00004 2.33337Z"
                          fill="white"
                        />
                        <path
                          d="M12 3.00004C12 3.55233 12.2985 4.00004 12.6667 4.00004C12.2985 4.00004 12 4.44776 12 5.00004C12 4.44776 11.7016 4.00004 11.3334 4.00004C11.7016 4.00004 12 3.55233 12 3.00004Z"
                          fill="white"
                        />
                        <path
                          d="M13.3334 9.00004C13.3334 10.1046 13.9303 11 14.6667 11C13.9303 11 13.3334 11.8955 13.3334 13C13.3334 11.8955 12.7364 11 12 11C12.7364 11 13.3334 10.1046 13.3334 9.00004Z"
                          fill="white"
                        />
                        <path
                          d="M14 6.33337C14 6.70156 14.2985 7.00004 14.6667 7.00004C14.2985 7.00004 14 7.29852 14 7.66671C14 7.29852 13.7016 7.00004 13.3334 7.00004C13.7016 7.00004 14 6.70156 14 6.33337Z"
                          fill="white"
                        />
                        <path
                          d="M2.66671 7.66671C2.66671 8.40309 3.26366 9.00004 4.00004 9.00004C3.26366 9.00004 2.66671 9.59699 2.66671 10.3334C2.66671 9.59699 2.06975 9.00004 1.33337 9.00004C2.06975 9.00004 2.66671 8.40309 2.66671 7.66671Z"
                          fill="white"
                        />
                        <path
                          d="M4.00004 11C4.00004 11.3682 4.29852 11.6667 4.66671 11.6667C4.29852 11.6667 4.00004 11.9652 4.00004 12.3334C4.00004 11.9652 3.70156 11.6667 3.33337 11.6667C3.70156 11.6667 4.00004 11.3682 4.00004 11Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-sm text-white">Accessible to All</p>
                  </div>
                </div>
              </div>
              <div
                className="flex cursor-pointer 2xl:max-w-[575px]"
                onClick={() => setpick(3)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] smm:w-[40px] ">
                  {pick == 3 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] 
                px-[16px] py-[8px] smm:w-[600px]
            ${
              pick == 3
                ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
                : "bg-[#FFFFFF33]"
            } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_7490_286"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_7490_286)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.21949 4.39019C2.88071 4.55958 2.66671 4.90584 2.66671 5.28462V10.7152C2.66671 11.094 2.88071 11.4402 3.21949 11.6096L7.55283 13.7763C7.83435 13.9171 8.16573 13.9171 8.44725 13.7763L12.7806 11.6096C13.1194 11.4402 13.3334 11.094 13.3334 10.7152V5.28462C13.3334 4.90584 13.1194 4.55958 12.7806 4.39019L8.44725 2.22352C8.16573 2.08276 7.83435 2.08276 7.55283 2.22352L3.21949 4.39019ZM4.04143 7.55434L6.57373 9.99996L6.59339 6.00002H5.8755L5.89025 8.49455L3.33337 6.00002V9.99996H4.05618L4.04143 7.55434ZM9.78722 6.00002H7.52537V9.99996H8.23835V8.42933H9.58071V7.66847H8.23835V6.76087H9.78722V6.00002ZM10.2278 6.00002H12.6667V6.76087H11.7866V9.99996H11.0736V6.76087H10.2278V6.00002ZM10 3.99996L8.22365 3.11176C8.08288 3.04138 7.9172 3.04138 7.77643 3.11176L6.00004 3.99996L7.00004 3.66663L7.34193 3.55266C7.44456 3.51845 7.55552 3.51845 7.65815 3.55266L8.00004 3.66663L8.34193 3.55266C8.44456 3.51845 8.55552 3.51845 8.65815 3.55266L9.00004 3.66663L10 3.99996ZM6.00004 12L7.77643 12.8882C7.9172 12.9585 8.08288 12.9585 8.22365 12.8882L10 12L9.00004 12.3333L8.65815 12.4473C8.55552 12.4815 8.44456 12.4815 8.34193 12.4473L8.00004 12.3333L7.65815 12.4473C7.55552 12.4815 7.44456 12.4815 7.34193 12.4473L7.00004 12.3333L6.00004 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.89447 1.11384C8.33141 0.832312 7.66867 0.832312 7.10561 1.11384L2.43895 3.44717C1.76138 3.78596 1.33337 4.47848 1.33337 5.23603V10.7639C1.33337 11.5214 1.76138 12.214 2.43895 12.5527L7.10561 14.8861C7.66867 15.1676 8.33141 15.1676 8.89447 14.8861L13.5611 12.5527C14.2387 12.214 14.6667 11.5214 14.6667 10.7639V5.23603C14.6667 4.47848 14.2387 3.78596 13.5611 3.44717L8.89447 1.11384ZM13.6667 5.07861C13.6667 4.69983 13.4527 4.35357 13.1139 4.18418L8.44725 1.85084C8.16573 1.71008 7.83435 1.71008 7.55283 1.85084L2.88616 4.18418C2.54738 4.35357 2.33337 4.69983 2.33337 5.0786V10.9212C2.33337 11.3 2.54738 11.6463 2.88616 11.8157L7.55283 14.149C7.83435 14.2898 8.16573 14.2898 8.44725 14.149L13.1139 11.8157C13.4527 11.6463 13.6667 11.3 13.6667 10.9212V5.07861Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-sm text-white">Valuable NFTs</p>
                  </div>
                </div>
              </div>
              <div
                className="flex cursor-pointer 2xl:max-w-[575px]"
                onClick={() => setpick(4)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] smm:w-[40px] ">
                  {pick == 4 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] 
                px-[16px] py-[8px] smm:w-[600px]
            ${
              pick == 4
                ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
                : "bg-[#FFFFFF33]"
            } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_7490_100"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_7490_100)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.682 14.6667 8.00004C14.6667 4.31804 11.6819 1.33337 8.00004 1.33337C4.31822 1.33337 1.33337 4.31804 1.33337 8.00004C1.33337 11.682 4.31822 14.6667 8.00004 14.6667ZM12.2714 10.9641C12.8659 10.0964 13.1849 9.06305 13.1852 8.00438C13.1849 6.94535 12.8659 5.91201 12.2714 5.04431C11.677 4.17662 10.8357 3.51617 9.86166 3.15231L9.15944 3.28578C10.2098 3.52594 11.1487 4.12381 11.8217 4.98174C12.4946 5.83931 12.8613 6.90521 12.8613 8.00438C12.8613 9.10319 12.4946 10.1691 11.8217 11.0267C11.1487 11.8846 10.2098 12.4825 9.15944 12.7226L9.86166 12.8561C10.8357 12.4922 11.677 11.8318 12.2714 10.9641ZM6.08272 4.68696C6.8439 3.75597 7.90094 3.12736 9.06956 2.9107C8.75995 2.85102 8.44546 2.82028 8.13043 2.8192C8.05646 2.8163 7.98268 2.81486 7.9089 2.81486C7.2886 2.81269 6.67318 2.92698 6.09231 3.15195C5.66805 3.31616 5.2682 3.53751 4.90307 3.8095C4.71771 3.94731 4.54138 4.09813 4.37519 4.26089C3.88184 4.74483 3.48941 5.32534 3.22121 5.96771C2.95302 6.61043 2.81486 7.30162 2.81486 8.00004C2.81486 8.69846 2.95302 9.38965 3.22121 10.0324C3.48941 10.6747 3.88184 11.2556 4.37519 11.7392C4.69275 12.0506 5.04793 12.3179 5.43132 12.5349C5.64345 12.655 5.86444 12.7599 6.09231 12.8481C6.67318 13.0731 7.2886 13.1874 7.9089 13.1852C7.98268 13.1852 8.05646 13.1838 8.13043 13.1809C8.44528 13.1827 8.75959 13.1548 9.06956 13.0977C7.90094 12.881 6.8439 12.2524 6.08272 11.3214C5.32173 10.3908 4.90488 9.21677 4.90488 8.00438C4.90488 6.79164 5.32173 5.61759 6.08272 4.68696ZM7.10974 10.2215H10.6538L10.9478 8.88799L10.5639 8.80444V8.92958C10.3762 9.713 10.1474 9.82983 9.33088 9.82983H8.07328C8.21507 9.65405 8.29048 9.43233 8.2856 9.20447V8.06261C8.28813 7.93855 8.25395 7.8163 8.18758 7.7125H9.17571C9.20031 7.70924 9.22545 7.71105 9.24932 7.71828C9.27337 7.72552 9.29543 7.73782 9.31442 7.75409C9.35819 7.80509 9.36849 7.91396 9.37103 8.02572L9.37175 8.12916V8.32918H9.7555V6.71206H9.37175V6.95476C9.37247 7.08605 9.37338 7.22639 9.31442 7.27883C9.30538 7.28679 9.29579 7.29366 9.28549 7.29945C9.27409 7.3056 9.26198 7.31066 9.24932 7.31464C9.22545 7.32187 9.20031 7.32404 9.17571 7.32079H8.2856V5.44506H9.5186C9.80469 5.44506 9.97668 5.47328 10.0702 5.55176C10.1369 5.60746 10.1639 5.68884 10.1639 5.8035C10.1617 5.88524 10.1544 5.96662 10.142 6.04692C10.1313 6.11636 10.1166 6.18544 10.0984 6.25344V6.3869L10.4659 6.47045L10.7926 5.06167H7.10974V5.44506H7.2159C7.52623 5.44506 7.57506 5.5033 7.57506 5.6534V7.32079H7.11788V7.70418H7.24845C7.57506 7.70418 7.57506 7.70418 7.57506 8.15412V9.34625C7.57506 9.75496 7.51791 9.82983 7.24845 9.82983H7.10974V10.2215ZM9.37175 10.8635L9.02055 10.5051L8.66935 10.8635L9.02055 12.0058L9.37175 10.8635Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-sm text-white">Dynamic Game Economy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-y-[20px] md:hidden lg:hidden xl:hidden smm:mx-auto smm:w-[90vw] smm:gap-y-[3vw]">
              <div
                className="flex cursor-pointer 2xl:max-w-[575px] "
                onClick={() => setpick(1)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] 2xl:max-w-[575px] smm:w-[40px] ">
                  {pick == 1 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] px-[16px] py-[8px] smm:w-[600px]
          ${
            pick == 1
              ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
              : "bg-[#FFFFFF33]"
          } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7490_278)">
                        <mask
                          id="mask0_7490_278"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7490_278)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.6667 1.33337H12.6667L12 2.00004H8.66671L9.33337 1.33337H1.33337V9.33337L2.00004 8.66671V12L1.33337 12.6667V14.6667H3.33337L4.00004 14H7.33337L6.66671 14.6667H14.6667V6.66671L14 7.33337V4.00004L14.6667 3.33337V1.33337ZM8.00004 2.66671H11.3334L8.66671 5.33337H5.33337V8.66671L2.66671 11.3334V8.00004L3.33337 7.33337V5.33337L2.66671 6.00004L2.66671 2.66671H6.00004L5.33337 3.33337L7.33337 3.33337L8.00004 2.66671ZM8.00004 13.3334H4.66671L7.33337 10.6667H10.6667V7.33337L13.3334 4.66671V8.00004L12.6667 8.66671V10.6667L13.3334 10V13.3334H10L10.6667 12.6667H8.66671L8.00004 13.3334Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_7490_278">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm text-white">Top-Tier MOBA Game</p>
                  </div>
                </div>
              </div>
              <div
                className="flex cursor-pointer 2xl:max-w-[575px]"
                onClick={() => setpick(2)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] smm:w-[40px]">
                  {pick == 2 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] 
                px-[16px] py-[8px] smm:w-[600px]
            ${
              pick == 2
                ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
                : "bg-[#FFFFFF33]"
            } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_7490_425"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_7490_425)">
                        <path
                          d="M9.33337 5.00004C9.33337 5.73642 8.73642 6.33337 8.00004 6.33337C7.26366 6.33337 6.66671 5.73642 6.66671 5.00004C6.66671 4.26366 7.26366 3.66671 8.00004 3.66671C8.73642 3.66671 9.33337 4.26366 9.33337 5.00004Z"
                          fill="white"
                        />
                        <path
                          d="M12.3334 6.69457C12.3334 6.35989 11.9961 6.12566 11.6787 6.23178C10.7952 6.52718 9.19432 7.00004 8.00004 7.00004C6.80576 7.00004 5.2049 6.52717 4.32136 6.23178C4.00395 6.12566 3.66671 6.35988 3.66671 6.69456C3.66671 6.88075 3.77425 7.04933 3.94595 7.12133C4.43177 7.32505 5.47377 7.73014 6.44574 7.89835C6.77573 7.95545 7.0482 8.21792 7.05109 8.55281C7.05339 8.81885 7.0419 9.10139 7.00023 9.33337C6.88247 9.98891 6.39997 10.9297 6.39997 10.9297L5.39997 12.6618C5.21587 12.9806 5.2605 13.3511 5.49965 13.4891C5.73879 13.6272 6.0819 13.4806 6.26599 13.1618L7.26599 11.4297C7.26599 11.4297 7.58656 10.6665 8.00004 10.6667C8.41331 10.6669 8.7333 11.4297 8.7333 11.4297L9.7333 13.1618C9.91739 13.4806 10.2605 13.6272 10.4996 13.4891C10.7388 13.3511 10.7834 12.9806 10.5993 12.6618L9.59933 10.9297C9.59933 10.9297 9.11776 9.98879 9.00023 9.33337C8.95862 9.10139 8.94715 8.81887 8.94944 8.55284C8.95233 8.21793 9.2248 7.95542 9.55481 7.8983C10.5266 7.73009 11.5684 7.32504 12.0541 7.12133C12.2258 7.04933 12.3334 6.88075 12.3334 6.69457Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.33337 5.00004C9.33337 5.73642 8.73642 6.33337 8.00004 6.33337C7.26366 6.33337 6.66671 5.73642 6.66671 5.00004C6.66671 4.26366 7.26366 3.66671 8.00004 3.66671C8.73642 3.66671 9.33337 4.26366 9.33337 5.00004ZM11.6787 6.23178C10.7952 6.52718 9.19432 7.00004 8.00004 7.00004C6.80576 7.00004 5.2049 6.52717 4.32136 6.23178C4.00395 6.12566 3.66671 6.35988 3.66671 6.69456C3.66671 6.88075 3.77425 7.04933 3.94595 7.12133C4.43177 7.32505 5.47377 7.73014 6.44574 7.89835C6.77573 7.95545 7.0482 8.21792 7.05109 8.55281C7.05339 8.81885 7.0419 9.10139 7.00023 9.33337C6.88247 9.98891 6.39997 10.9297 6.39997 10.9297L5.39997 12.6618C5.21587 12.9806 5.2605 13.3511 5.49965 13.4891C5.73879 13.6272 6.0819 13.4806 6.26599 13.1618L7.26599 11.4297C7.26599 11.4297 7.58656 10.6665 8.00004 10.6667C8.41331 10.6669 8.7333 11.4297 8.7333 11.4297L9.7333 13.1618C9.91739 13.4806 10.2605 13.6272 10.4996 13.4891C10.7388 13.3511 10.7834 12.9806 10.5993 12.6618L9.59933 10.9297C9.59933 10.9297 9.11776 9.98879 9.00023 9.33337C8.95862 9.10139 8.94715 8.81887 8.94944 8.55284C8.95233 8.21793 9.2248 7.95542 9.55481 7.8983C10.5266 7.73009 11.5684 7.32504 12.0541 7.12133C12.2258 7.04933 12.3334 6.88075 12.3334 6.69457C12.3334 6.35989 11.9961 6.12566 11.6787 6.23178Z"
                          fill="white"
                        />
                        <path
                          d="M3.00004 2.33337C3.00004 3.06975 3.44776 3.66671 4.00004 3.66671C3.44776 3.66671 3.00004 4.26366 3.00004 5.00004C3.00004 4.26366 2.55233 3.66671 2.00004 3.66671C2.55233 3.66671 3.00004 3.06975 3.00004 2.33337Z"
                          fill="white"
                        />
                        <path
                          d="M12 3.00004C12 3.55233 12.2985 4.00004 12.6667 4.00004C12.2985 4.00004 12 4.44776 12 5.00004C12 4.44776 11.7016 4.00004 11.3334 4.00004C11.7016 4.00004 12 3.55233 12 3.00004Z"
                          fill="white"
                        />
                        <path
                          d="M13.3334 9.00004C13.3334 10.1046 13.9303 11 14.6667 11C13.9303 11 13.3334 11.8955 13.3334 13C13.3334 11.8955 12.7364 11 12 11C12.7364 11 13.3334 10.1046 13.3334 9.00004Z"
                          fill="white"
                        />
                        <path
                          d="M14 6.33337C14 6.70156 14.2985 7.00004 14.6667 7.00004C14.2985 7.00004 14 7.29852 14 7.66671C14 7.29852 13.7016 7.00004 13.3334 7.00004C13.7016 7.00004 14 6.70156 14 6.33337Z"
                          fill="white"
                        />
                        <path
                          d="M2.66671 7.66671C2.66671 8.40309 3.26366 9.00004 4.00004 9.00004C3.26366 9.00004 2.66671 9.59699 2.66671 10.3334C2.66671 9.59699 2.06975 9.00004 1.33337 9.00004C2.06975 9.00004 2.66671 8.40309 2.66671 7.66671Z"
                          fill="white"
                        />
                        <path
                          d="M4.00004 11C4.00004 11.3682 4.29852 11.6667 4.66671 11.6667C4.29852 11.6667 4.00004 11.9652 4.00004 12.3334C4.00004 11.9652 3.70156 11.6667 3.33337 11.6667C3.70156 11.6667 4.00004 11.3682 4.00004 11Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-sm text-white">Accessible to All</p>
                  </div>
                </div>
              </div>
              <div
                className="flex cursor-pointer 2xl:max-w-[575px]"
                onClick={() => setpick(3)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] smm:w-[40px] ">
                  {pick == 3 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] 
                px-[16px] py-[8px] smm:w-[600px]
            ${
              pick == 3
                ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
                : "bg-[#FFFFFF33]"
            } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_7490_286"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_7490_286)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.21949 4.39019C2.88071 4.55958 2.66671 4.90584 2.66671 5.28462V10.7152C2.66671 11.094 2.88071 11.4402 3.21949 11.6096L7.55283 13.7763C7.83435 13.9171 8.16573 13.9171 8.44725 13.7763L12.7806 11.6096C13.1194 11.4402 13.3334 11.094 13.3334 10.7152V5.28462C13.3334 4.90584 13.1194 4.55958 12.7806 4.39019L8.44725 2.22352C8.16573 2.08276 7.83435 2.08276 7.55283 2.22352L3.21949 4.39019ZM4.04143 7.55434L6.57373 9.99996L6.59339 6.00002H5.8755L5.89025 8.49455L3.33337 6.00002V9.99996H4.05618L4.04143 7.55434ZM9.78722 6.00002H7.52537V9.99996H8.23835V8.42933H9.58071V7.66847H8.23835V6.76087H9.78722V6.00002ZM10.2278 6.00002H12.6667V6.76087H11.7866V9.99996H11.0736V6.76087H10.2278V6.00002ZM10 3.99996L8.22365 3.11176C8.08288 3.04138 7.9172 3.04138 7.77643 3.11176L6.00004 3.99996L7.00004 3.66663L7.34193 3.55266C7.44456 3.51845 7.55552 3.51845 7.65815 3.55266L8.00004 3.66663L8.34193 3.55266C8.44456 3.51845 8.55552 3.51845 8.65815 3.55266L9.00004 3.66663L10 3.99996ZM6.00004 12L7.77643 12.8882C7.9172 12.9585 8.08288 12.9585 8.22365 12.8882L10 12L9.00004 12.3333L8.65815 12.4473C8.55552 12.4815 8.44456 12.4815 8.34193 12.4473L8.00004 12.3333L7.65815 12.4473C7.55552 12.4815 7.44456 12.4815 7.34193 12.4473L7.00004 12.3333L6.00004 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.89447 1.11384C8.33141 0.832312 7.66867 0.832312 7.10561 1.11384L2.43895 3.44717C1.76138 3.78596 1.33337 4.47848 1.33337 5.23603V10.7639C1.33337 11.5214 1.76138 12.214 2.43895 12.5527L7.10561 14.8861C7.66867 15.1676 8.33141 15.1676 8.89447 14.8861L13.5611 12.5527C14.2387 12.214 14.6667 11.5214 14.6667 10.7639V5.23603C14.6667 4.47848 14.2387 3.78596 13.5611 3.44717L8.89447 1.11384ZM13.6667 5.07861C13.6667 4.69983 13.4527 4.35357 13.1139 4.18418L8.44725 1.85084C8.16573 1.71008 7.83435 1.71008 7.55283 1.85084L2.88616 4.18418C2.54738 4.35357 2.33337 4.69983 2.33337 5.0786V10.9212C2.33337 11.3 2.54738 11.6463 2.88616 11.8157L7.55283 14.149C7.83435 14.2898 8.16573 14.2898 8.44725 14.149L13.1139 11.8157C13.4527 11.6463 13.6667 11.3 13.6667 10.9212V5.07861Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-sm text-white">Valuable NFTs</p>
                  </div>
                </div>
              </div>
              <div
                className="flex cursor-pointer 2xl:max-w-[575px]"
                onClick={() => setpick(4)}
              >
                <div className="flex w-[5%] items-center justify-center py-[4px] pr-[4px] smm:w-[40px] ">
                  {pick == 4 ? (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet%20select.png"
                      width={48}
                      height={48}
                      alt="star_bullet_select"
                      className="w-[24px]"
                    />
                  ) : (
                    <Image
                      src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Hover/star%20bullet.png"
                      width={48}
                      height={48}
                      alt="star_bullet"
                      className="w-[24px]"
                    />
                  )}
                </div>
                <div
                  className={`flex  w-[95%] items-center justify-start border-l-2 border-[#F1E3B5] 
                px-[16px] py-[8px] smm:w-[600px]
            ${
              pick == 4
                ? "bg-gradient-to-r from-[#1E408A] to-[#00123A]"
                : "bg-[#FFFFFF33]"
            } `}
                >
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_7490_100"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_7490_100)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.682 14.6667 8.00004C14.6667 4.31804 11.6819 1.33337 8.00004 1.33337C4.31822 1.33337 1.33337 4.31804 1.33337 8.00004C1.33337 11.682 4.31822 14.6667 8.00004 14.6667ZM12.2714 10.9641C12.8659 10.0964 13.1849 9.06305 13.1852 8.00438C13.1849 6.94535 12.8659 5.91201 12.2714 5.04431C11.677 4.17662 10.8357 3.51617 9.86166 3.15231L9.15944 3.28578C10.2098 3.52594 11.1487 4.12381 11.8217 4.98174C12.4946 5.83931 12.8613 6.90521 12.8613 8.00438C12.8613 9.10319 12.4946 10.1691 11.8217 11.0267C11.1487 11.8846 10.2098 12.4825 9.15944 12.7226L9.86166 12.8561C10.8357 12.4922 11.677 11.8318 12.2714 10.9641ZM6.08272 4.68696C6.8439 3.75597 7.90094 3.12736 9.06956 2.9107C8.75995 2.85102 8.44546 2.82028 8.13043 2.8192C8.05646 2.8163 7.98268 2.81486 7.9089 2.81486C7.2886 2.81269 6.67318 2.92698 6.09231 3.15195C5.66805 3.31616 5.2682 3.53751 4.90307 3.8095C4.71771 3.94731 4.54138 4.09813 4.37519 4.26089C3.88184 4.74483 3.48941 5.32534 3.22121 5.96771C2.95302 6.61043 2.81486 7.30162 2.81486 8.00004C2.81486 8.69846 2.95302 9.38965 3.22121 10.0324C3.48941 10.6747 3.88184 11.2556 4.37519 11.7392C4.69275 12.0506 5.04793 12.3179 5.43132 12.5349C5.64345 12.655 5.86444 12.7599 6.09231 12.8481C6.67318 13.0731 7.2886 13.1874 7.9089 13.1852C7.98268 13.1852 8.05646 13.1838 8.13043 13.1809C8.44528 13.1827 8.75959 13.1548 9.06956 13.0977C7.90094 12.881 6.8439 12.2524 6.08272 11.3214C5.32173 10.3908 4.90488 9.21677 4.90488 8.00438C4.90488 6.79164 5.32173 5.61759 6.08272 4.68696ZM7.10974 10.2215H10.6538L10.9478 8.88799L10.5639 8.80444V8.92958C10.3762 9.713 10.1474 9.82983 9.33088 9.82983H8.07328C8.21507 9.65405 8.29048 9.43233 8.2856 9.20447V8.06261C8.28813 7.93855 8.25395 7.8163 8.18758 7.7125H9.17571C9.20031 7.70924 9.22545 7.71105 9.24932 7.71828C9.27337 7.72552 9.29543 7.73782 9.31442 7.75409C9.35819 7.80509 9.36849 7.91396 9.37103 8.02572L9.37175 8.12916V8.32918H9.7555V6.71206H9.37175V6.95476C9.37247 7.08605 9.37338 7.22639 9.31442 7.27883C9.30538 7.28679 9.29579 7.29366 9.28549 7.29945C9.27409 7.3056 9.26198 7.31066 9.24932 7.31464C9.22545 7.32187 9.20031 7.32404 9.17571 7.32079H8.2856V5.44506H9.5186C9.80469 5.44506 9.97668 5.47328 10.0702 5.55176C10.1369 5.60746 10.1639 5.68884 10.1639 5.8035C10.1617 5.88524 10.1544 5.96662 10.142 6.04692C10.1313 6.11636 10.1166 6.18544 10.0984 6.25344V6.3869L10.4659 6.47045L10.7926 5.06167H7.10974V5.44506H7.2159C7.52623 5.44506 7.57506 5.5033 7.57506 5.6534V7.32079H7.11788V7.70418H7.24845C7.57506 7.70418 7.57506 7.70418 7.57506 8.15412V9.34625C7.57506 9.75496 7.51791 9.82983 7.24845 9.82983H7.10974V10.2215ZM9.37175 10.8635L9.02055 10.5051L8.66935 10.8635L9.02055 12.0058L9.37175 10.8635Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-sm text-white">Dynamic Game Economy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative flex h-auto w-full items-center justify-center smm:my-[5vw]">
            <div id="div3" className="coin2 ">
              <div
                className="relative flex h-[500px] w-[500px] justify-center 
          overflow-hidden rounded-full 
          smm:h-[62vw] smm:w-full smm:rounded-none
        "
              >
                {pick == 1 && (
                  <video
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    className={` object-cover  `}
                  >
                    <source
                      src="/FNewVideo/Top Tier_webM.webm"
                      type="video/webm"
                    />
                    <source
                      src="/FNewVideo/MP4/Top-Tier MOBA.mp4"
                      type="video/mp4"
                    />
                  </video>
                )}
                {pick == 2 && (
                  <video
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    className={` object-cover  `}
                  >
                    <source
                      src="/FNewVideo/Accessible (1).webm"
                      type="video/webm"
                    />
                    <source
                      src="/FNewVideo/MP4/Accessible.mp4"
                      type="video/mp4"
                    />
                  </video>
                )}
                {pick == 3 && (
                  <video
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    className={` object-cover  `}
                  >
                    <source
                      src="/FNewVideo/Valuable NFTs.webm"
                      type="video/webm"
                    />
                    <source
                      src="/FNewVideo/MP4/Valuable NFTs.mp4"
                      type="video/mp4"
                    />
                  </video>
                )}
                {pick == 4 && (
                  <video
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    className={` object-cover  `}
                  >
                    <source
                      src="/FNewVideo/Dynamics game Economy.webm"
                      type="video/webm"
                    />
                    <source
                      src="/FNewVideo/MP4/Dynamics game Economy.mp4"
                      type="video/mp4"
                    />
                  </video>
                )}
              </div>
              <div
                className="absolute left-[50%] top-[56%] z-20 w-[760px] 
          translate-x-[-50%] translate-y-[-50%] rounded-full 2xlm:left-[50%] 
          2xlm:top-[56%] lgm:top-[57%] smm:hidden"
              >
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/Moon.png"
                  width={2637}
                  height={2633}
                  alt="Picture of the author"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
