import { Josefin_Sans } from "next/font/google";

const Jose = Josefin_Sans({ subsets: ["latin"] });

import { useEffect, useState } from "react";
import LinkNewTab from "../../general/LinkNewTab";

import Image from "next/image";

import { Transition } from "@headlessui/react";

const Index = () => {
  const [isshow, setisshow] = useState(false);
  useEffect(() => {
    setisshow(true);
  }, []);
  return (
    <section
      id="video"
      className={
        " w-full  overflow-hidden smm:h-[180vw] smm:w-[500vw] smm:max-w-[500vw] "
      }
    >
      <div className=" relative flex h-[970px] w-full 2xlm:h-screen  smm:h-full ">
        <video
          muted={true}
          autoPlay={true}
          loop={true}
          playsInline={true}
          className={` w-full object-cover 3xl:w-[100vw] smm:object-contain `}
        >
          <source src="/FNewVideo/Lysia_Animate_Loop.mp4" type="video/mp4" />
          <source src="/FNewVideo/Lysia_Animate_Loop.mp4" type="video/mp4" />
        </video>
        <div
          className=" absolute left-[7%] flex h-full w-[50%] max-w-[1280px] flex-col items-start
        justify-end pb-[32px] 2xl:left-[20.5%] lgm:left-0 lgm:pb-[24px] 
        lgm:pl-[24px] smm:px-[4vw]
        "
        >
          <div>
            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[100ms]  "
              enterFrom="opacity-0 -translate-y-[-150px] "
              enterTo="opacity-100 translate-y-0  "
            >
              <div className=" mb-[8px] flex items-center justify-start">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/evmlogotext.png"
                  width={656}
                  height={124}
                  alt=""
                  className={`w-[335px]`}
                />
              </div>
            </Transition>
            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[200ms]  "
              enterFrom="opacity-0 -translate-y-[-150px]  "
              enterTo="opacity-100 translate-y-0  "
            >
              <div className=" flex items-center justify-start ">
                <p
                  className=" text-xl font-bold  uppercase shadow-main-1/70
                drop-shadow-[3px_3px_8px_var(--tw-shadow-color)] smm:text-[3vw]"
                >
                  {"the next-gen 5v5 3-lane moba with web3"}
                </p>
              </div>
            </Transition>

            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[400ms]  "
              enterFrom="opacity-0 -translate-y-[-150px]  "
              enterTo="opacity-100 translate-y-0  "
            >
              <p
                className="mb-[20px] 
                text-base capitalize shadow-main-1/80 drop-shadow-[0_0_4px_var(--tw-shadow-color)] "
              >
                {"more than just a game - it’s your goldmine!"}
              </p>
            </Transition>
          </div>

          <div>
            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[900ms]  "
              enterFrom="opacity-0 -translate-y-[-150px]  "
              enterTo="opacity-100 translate-y-0  "
            >
              <div className=" flex w-full cursor-pointer justify-start gap-x-[20px] lgm:gap-x-[20px] smm:gap-x-[4.5vw]">
                <LinkNewTab href="https://play.google.com/store/apps/details?id=com.ViewPassion.evm&hl=en&gl=US">
                  <Image
                    src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/download%20button.png"
                    width={405}
                    height={120}
                    alt=""
                    className="w-[130px]  hover:bg-[#01193F66] smm:w-[20vw] "
                  />
                </LinkNewTab>
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/download%20button%20AS.png"
                  width={405}
                  height={120}
                  alt=""
                  className="w-[130px]  hover:bg-[#01193F66] smm:w-[20vw] "
                />
              </div>
            </Transition>
            <div className="mt-[20px] flex h-auto w-auto justify-start  ">
              <div className="flex h-auto w-auto items-center justify-start">
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1100ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <div className="p-[4px]">
                    <LinkNewTab href="https://twitter.com/EverMoon_nft">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className=" icon_hover "
                      >
                        <mask
                          id="mask0_7520_1161"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1161)">
                          <path d="M9.01595 7.18375L12.9873 2.66666H12.0463L8.59646 6.58796L5.84307 2.66666H2.66663L6.83123 8.59689L2.66663 13.3333H3.60758L7.24849 9.19134L10.1568 13.3333H13.3333L9.01595 7.18375ZM7.72676 8.64895L7.30415 8.05806L3.94691 3.36078H5.39241L8.1026 7.15305L8.52343 7.74393L12.0459 12.673H10.6004L7.72676 8.64895Z" />
                        </g>
                      </svg>
                    </LinkNewTab>
                  </div>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1200ms]"
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://t.me/Evermoon_Community">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1097"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1097)">
                          <path d="M17.5448 19.5788C17.5448 19.5788 20.1542 7.01137 20.2431 5.32843C20.262 5.16103 20.262 5.04018 20.2556 4.91844C20.2586 4.79132 20.2468 4.66331 20.2208 4.53977C20.2085 4.46637 20.1798 4.39923 20.1379 4.34462C20.096 4.29002 20.0424 4.24974 19.9831 4.22825C19.7714 4.17902 19.5526 4.19692 19.349 4.28196C19.349 4.28196 5.01757 10.4569 4.19943 11.1552C4.02498 11.3029 3.9649 11.3861 3.93626 11.4846C3.90874 11.6207 3.9239 11.7639 3.97875 11.8874C4.03378 12.0119 4.12456 12.1068 4.23443 12.156L7.92813 13.5963C7.98971 13.6142 8.05372 13.6142 8.1153 13.5963C8.95553 12.9634 16.5715 7.21189 17.0089 7.01853C17.0407 7.00869 17.066 7.00869 17.084 7.01764C17.1055 7.02749 17.1167 7.04897 17.1167 7.07941C16.9393 7.81883 10.3189 14.8362 10.3189 14.8362C10.3028 14.8603 10.289 14.8872 10.2775 14.9158L9.93202 19.2942C9.93202 19.2942 9.78939 20.636 10.9117 19.2942C11.3441 18.7768 11.7699 18.3032 12.1296 17.9183C12.4267 17.6005 12.6786 17.3427 12.8521 17.1708C13.6345 17.8198 14.4588 18.5082 15.1109 19.0838C15.5186 19.4437 15.8591 19.7588 16.08 19.9915C16.1782 20.1079 16.2954 20.1983 16.424 20.2574C16.5528 20.3165 16.6903 20.3433 16.8283 20.3371C17.3862 20.3138 17.5448 19.5788 17.5448 19.5788Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1300ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://discord.gg/VCAebs2zS3">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1105"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1105)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.8772 5.73156C21.0994 9.01914 22.1969 12.7274 21.7866 16.9965C21.7849 17.0146 21.7756 17.0312 21.7608 17.0421C20.0779 18.2854 18.4475 19.04 16.8398 19.5404C16.8273 19.5442 16.8139 19.544 16.8015 19.5398C16.7891 19.5356 16.7784 19.5276 16.7707 19.5169C16.3993 18.9969 16.0619 18.4488 15.7662 17.8731C15.7492 17.8392 15.7647 17.7984 15.7997 17.785C16.3356 17.5818 16.8453 17.3383 17.3355 17.05C17.3741 17.0272 17.3765 16.9715 17.3409 16.9448C17.2368 16.8671 17.1338 16.7854 17.0351 16.7038C17.0167 16.6887 16.9919 16.6857 16.9709 16.6958C13.7884 18.1746 10.3022 18.1746 7.08203 16.6958C7.06112 16.6864 7.03628 16.6897 7.01832 16.7045C6.91994 16.7862 6.81663 16.8671 6.71358 16.9448C6.67791 16.9715 6.68086 17.0272 6.71972 17.05C7.20993 17.3329 7.71956 17.5818 8.25478 17.786C8.28946 17.7994 8.30594 17.8392 8.28872 17.8731C7.99947 18.4495 7.66201 18.9977 7.28372 19.5177C7.26724 19.5387 7.24018 19.5483 7.2146 19.5404C5.61462 19.04 3.98413 18.2854 2.30126 17.0421C2.28724 17.0312 2.27715 17.0139 2.27568 16.9958C1.9328 13.3031 2.63158 9.5641 5.18246 5.73082C5.18861 5.72067 5.19796 5.71275 5.20878 5.70805C6.46392 5.12844 7.8086 4.70203 9.21403 4.4585C9.23961 4.45454 9.26519 4.46642 9.27847 4.48919C9.45212 4.79854 9.65061 5.19526 9.78491 5.51947C11.2663 5.29178 12.7709 5.29178 14.2833 5.51947C14.4176 5.20219 14.6092 4.79854 14.7821 4.48919C14.7883 4.47789 14.7978 4.46885 14.8094 4.46333C14.821 4.45782 14.834 4.45613 14.8466 4.4585C16.2527 4.70277 17.5974 5.12918 18.8516 5.70805C18.8626 5.71275 18.8717 5.72067 18.8772 5.73156ZM10.538 12.7527C10.5535 11.661 9.76253 10.7577 8.76957 10.7577C7.78474 10.7577 7.00135 11.6531 7.00135 12.7527C7.00135 13.852 7.80024 14.7474 8.76957 14.7474C9.75465 14.7474 10.538 13.852 10.538 12.7527ZM17.0762 12.7527C17.0917 11.661 16.3007 10.7577 15.308 10.7577C14.3229 10.7577 13.5395 11.6531 13.5395 12.7527C13.5395 13.852 14.3384 14.7474 15.308 14.7474C16.3007 14.7474 17.0762 13.852 17.0762 12.7527Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1400ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1113"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1113)">
                          <path d="M16.209 13.1244L16.7219 9.86829H13.5623V7.75184C13.5623 6.8615 14.0034 5.99152 15.4139 5.99152H16.8706V3.21877C16.0223 3.08361 15.1651 3.01049 14.306 3C11.7055 3 10.0077 4.5619 10.0077 7.38553V9.86829H7.125V13.1244H10.0077V21H13.5623V13.1244H16.209Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1500ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://www.youtube.com/c/Evermoon">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1121"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1121)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.3492 5.79327C20.1602 6.01227 20.7975 6.65127 21.013 7.46127C21.405 8.93127 21.405 12.0003 21.405 12.0003C21.405 12.0003 21.405 15.0693 21.013 16.5393C20.7945 17.3523 20.1572 17.9913 19.3492 18.2073C17.883 18.6003 12 18.6003 12 18.6003C12 18.6003 6.11998 18.6003 4.65073 18.2073C3.83979 17.9883 3.20242 17.3493 2.98697 16.5393C2.59497 15.0693 2.59497 12.0003 2.59497 12.0003C2.59497 12.0003 2.59497 8.93127 2.98697 7.46127C3.20541 6.64827 3.84279 6.00927 4.65073 5.79327C6.11998 5.40027 12 5.40027 12 5.40027C12 5.40027 17.883 5.40027 19.3492 5.79327ZM15.0073 12.0003L10.1208 14.8293V9.17127L15.0073 12.0003Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1600ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://www.tiktok.com/@evermoon_game">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1129"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1129)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.0148 9.42176C17.2415 10.2938 18.7104 10.7597 20.2154 10.754V7.77134C19.9196 7.77215 19.6245 7.74048 19.3355 7.67688V10.0531C17.8272 10.0558 16.356 9.58453 15.1299 8.70591V14.8403C15.1262 15.8469 14.8502 16.8338 14.3311 17.6962C13.812 18.5586 13.0691 19.2645 12.1814 19.739C11.2936 20.2134 10.294 20.4388 9.28849 20.3912C8.283 20.3436 7.30915 20.0247 6.47019 19.4685C7.24621 20.2536 8.23777 20.7909 9.31931 21.0121C10.4009 21.2334 11.5237 21.1287 12.5457 20.7114C13.5678 20.2941 14.443 19.5829 15.0605 18.6678C15.6781 17.7527 16.0102 16.675 16.0148 15.5711V9.42176ZM17.1035 6.37941C16.4797 5.70329 16.097 4.83991 16.0148 3.92366V3.53591H15.1797C15.2829 4.11832 15.5075 4.67248 15.839 5.16238C16.1704 5.65228 16.6013 6.06694 17.1035 6.37941ZM8.40397 17.1072C8.11451 16.7287 7.93712 16.2765 7.89199 15.8021C7.84686 15.3277 7.93581 14.8502 8.1487 14.4239C8.3616 13.9976 8.6899 13.6396 9.09623 13.3907C9.50257 13.1418 9.97062 13.0119 10.4471 13.0159C10.7102 13.0158 10.9717 13.0561 11.2226 13.1352V10.0531C10.9293 10.0143 10.6335 9.99764 10.3378 10.0034V12.3995C9.72686 12.2064 9.06566 12.2503 8.48566 12.5225C7.90567 12.7947 7.44938 13.2752 7.20755 13.8685C6.96572 14.4618 6.95607 15.1244 7.18052 15.7245C7.40496 16.3246 7.84706 16.8182 8.41888 17.1072H8.40397Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1295 8.68603C16.3556 9.56464 17.8267 10.0359 19.3351 10.0332V7.657C18.4757 7.47529 17.6954 7.02843 17.1035 6.37941C16.6013 6.06694 16.1704 5.65228 15.839 5.16238C15.5075 4.67248 15.2829 4.11832 15.1797 3.53591H12.982V15.5711C12.9799 16.1038 12.8111 16.6225 12.4992 17.0544C12.1873 17.4862 11.748 17.8096 11.243 17.979C10.7379 18.1485 10.1925 18.1555 9.68322 17.9992C9.17396 17.8428 8.7269 17.5309 8.40397 17.1072C7.89221 16.849 7.48193 16.4258 7.24013 15.9061C6.99833 15.3864 6.93868 14.8004 7.0708 14.2426C7.20293 13.6848 7.51912 13.1878 7.96836 12.8317C8.4176 12.4757 8.97369 12.2814 9.54691 12.2802C9.80992 12.281 10.0713 12.3212 10.3224 12.3995V10.0034C9.2375 10.0294 8.1838 10.3717 7.29066 10.9881C6.39752 11.6046 5.7038 12.4684 5.29467 13.4735C4.88554 14.4787 4.77879 15.5814 4.98754 16.6464C5.19629 17.7113 5.71187 18.6922 6.47019 19.4685C7.30932 20.0287 8.28428 20.3508 9.29202 20.4005C10.2998 20.4503 11.3021 20.2257 12.1923 19.7507C13.0825 19.2758 13.8272 18.5683 14.3471 17.7036C14.8669 16.8388 15.1425 15.8493 15.1444 14.8403L15.1295 8.68603Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.3351 7.657L19.3354 7.01551C18.5462 7.01887 17.7723 6.79843 17.1035 6.37941C17.6939 7.0303 18.4749 7.47753 19.3351 7.657ZM15.1797 3.53591C15.1797 3.42157 15.1447 3.30206 15.1298 3.18772V2.79997H12.0974V14.8401C12.0948 15.5143 11.8248 16.1599 11.3466 16.6352C10.8685 17.1105 10.2214 17.3767 9.54719 17.3754C9.15022 17.3774 8.75857 17.2856 8.40397 17.1072C8.7269 17.5309 9.17396 17.8428 9.68322 17.9992C10.1925 18.1555 10.7379 18.1485 11.243 17.979C11.748 17.8096 12.1873 17.4862 12.4992 17.0544C12.8111 16.6225 12.9799 16.1038 12.982 15.5711V3.53591H15.1797ZM10.3227 9.99821V9.31716C9.07487 9.14765 7.80643 9.40577 6.72409 10.0494C5.64175 10.6931 4.80933 11.6844 4.36249 12.8617C3.91566 14.0391 3.88076 15.333 4.26348 16.5328C4.6462 17.7325 5.42412 18.7674 6.47019 19.4685C5.71761 18.6904 5.20779 17.7097 5.00331 16.6467C4.79882 15.5837 4.90837 14.4841 5.31857 13.4823C5.72877 12.4806 6.42187 11.6199 7.31318 11.0056C8.20449 10.3913 9.25543 10.0499 10.3376 10.0231L10.3227 9.99821Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1700ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://medium.com/@evermoon">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1137"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1137)">
                          <path d="M13.2339 11.8288C13.2339 14.7616 10.8143 17.1431 7.81695 17.1431C4.81958 17.1431 2.40002 14.7616 2.40002 11.8288C2.40002 8.89597 4.81958 6.51451 7.81695 6.51451C10.8143 6.51451 13.2339 8.89597 13.2339 11.8288Z" />
                          <path d="M19.1684 11.8288C19.1684 14.5857 17.9526 16.8263 16.46 16.8263C14.9673 16.8263 13.7515 14.5857 13.7515 11.8288C13.7515 9.07194 14.9673 6.83125 16.46 6.83125C17.9526 6.83125 19.1684 9.06021 19.1684 11.8288Z" />
                          <path d="M21.6 11.8288C21.6 14.3041 21.1787 16.3102 20.649 16.3102C20.1194 16.3102 19.6981 14.3041 19.6981 11.8288C19.6981 9.35349 20.1194 7.34743 20.649 7.34743C21.1787 7.34743 21.6 9.35349 21.6 11.8288Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1800ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://coinmarketcap.com/community/profile/Evermoon">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1217"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1217)">
                          <path d="M12.5477 9.20061C12.3305 9.336 12.0739 9.35323 11.8788 9.24492C11.6308 9.10708 11.4948 8.78461 11.4948 8.33538V6.99262C11.4948 6.34461 11.2345 5.88308 10.7994 5.75877C10.0622 5.54708 9.50711 6.43569 9.29911 6.76923L7.99881 8.84677V6.30769C7.98404 5.72369 7.79142 5.37415 7.4265 5.26892C7.18404 5.19938 6.82219 5.22708 6.47081 5.75754L3.55696 10.3668C3.1674 9.63876 2.96402 8.82568 2.96496 8C2.96496 5.22338 5.22342 2.96492 7.99881 2.96492C10.7742 2.96492 13.0327 5.22338 13.0327 8L13.0339 8.01354V8.02708C13.0597 8.56492 12.8831 8.99261 12.5477 9.20061ZM14.1514 8.00061V7.97231C14.1354 4.59138 11.3816 1.84615 7.99819 1.84615C4.60558 1.84615 1.84619 4.60677 1.84619 8C1.84619 11.3932 4.60619 14.1538 7.99881 14.1538C9.55573 14.1538 11.0413 13.5711 12.1816 12.5126C12.2354 12.4627 12.2789 12.4027 12.3096 12.336C12.3403 12.2693 12.3575 12.1972 12.3603 12.1238C12.3631 12.0504 12.3514 11.9772 12.3259 11.9083C12.3004 11.8395 12.2616 11.7763 12.2117 11.7225C12.1618 11.6686 12.1018 11.6251 12.0351 11.5944C11.9684 11.5638 11.8963 11.5465 11.8229 11.5437C11.7495 11.5409 11.6763 11.5526 11.6075 11.5781C11.5386 11.6036 11.4754 11.6424 11.4216 11.6923C10.4919 12.5568 9.26895 13.0366 7.99942 13.0351C7.29226 13.0353 6.59303 12.8861 5.94752 12.5973C5.302 12.3086 4.72476 11.8867 4.25358 11.3594L6.88127 7.20246V9.11877C6.88127 10.0394 7.24311 10.3372 7.54711 10.4234C7.85111 10.5108 8.31573 10.4511 8.80373 9.67077L10.2487 7.36308C10.2948 7.288 10.3379 7.224 10.3767 7.16861V8.33538C10.3767 9.19569 10.7262 9.88369 11.3367 10.2228C11.8856 10.5286 12.5767 10.5009 13.1397 10.1508C13.8228 9.72615 14.1902 8.94338 14.152 8L14.1514 8.00061Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1900ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href={"mailto: Info@evermoon.games"}>
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1225"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1225)">
                          <path d="M13.3334 2.66667H2.65825C2.48355 2.66666 2.31061 2.70116 2.14931 2.76816C1.98802 2.83516 1.84155 2.93335 1.71841 3.05708C1.59527 3.18081 1.49786 3.32763 1.43178 3.48909C1.36569 3.65056 1.33229 3.82347 1.3334 3.99789V12.0021C1.3334 12.3552 1.47387 12.6938 1.72392 12.9434C1.97397 13.1931 2.31307 13.3333 2.6667 13.3333H13.3334C13.687 13.3333 14.0261 13.1931 14.2762 12.9434C14.5262 12.6938 14.6667 12.3552 14.6667 12.0021V3.99789C14.6667 3.64483 14.5262 3.30623 14.2762 3.05657C14.0261 2.80692 13.687 2.66667 13.3334 2.66667ZM12.2025 6.03686L7.98314 8.66561L3.76373 6.03686C3.41579 5.82183 3.12858 5.52172 2.92922 5.16493C2.72987 4.80813 2.62499 4.40645 2.62451 3.99789L7.97474 7.36809L13.3165 3.99789C13.3189 4.40223 13.2198 4.80073 13.0282 5.15694C12.8365 5.51314 12.5585 5.81568 12.2194 6.03686H12.2025Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" absolute bottom-[23%] left-[32.5%] z-20 flex
          w-[88vw] translate-x-[50%] translate-y-[50%] flex-col 
          gap-y-[20px] md:hidden lg:hidden xl:hidden "
        >
          <div>
            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[100ms]  "
              enterFrom="opacity-0 -translate-y-[-150px] "
              enterTo="opacity-100 translate-y-0  "
            >
              <div className=" mb-[8px] flex items-center justify-start">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/evmlogotext.png"
                  width={656}
                  height={124}
                  alt=""
                  className={` w-[83.5vw]`}
                />
              </div>
            </Transition>
            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[200ms]  "
              enterFrom="opacity-0 -translate-y-[-150px]  "
              enterTo="opacity-100 translate-y-0  "
            >
              <div className=" flex items-center justify-start ">
                <p
                  className=" text-base font-bold  uppercase shadow-main-1/70
                drop-shadow-[3px_3px_8px_var(--tw-shadow-color)] smm:text-[4.6vw]"
                >
                  {"the next-gen 5v5 3-lane moba with web3"}
                </p>
              </div>
            </Transition>

            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[400ms]  "
              enterFrom="opacity-0 -translate-y-[-150px]  "
              enterTo="opacity-100 translate-y-0  "
            >
              <p
                className="mb-0 text-base capitalize 
                shadow-main-1/80 drop-shadow-[0_0_4px_var(--tw-shadow-color)] "
              >
                {"more than just a game - it’s your goldmine!"}
              </p>
            </Transition>
          </div>

          <div>
            <Transition
              show={isshow}
              enter="transition ease-in-out duration-1000 delay-[900ms]  "
              enterFrom="opacity-0 -translate-y-[-150px]  "
              enterTo="opacity-100 translate-y-0  "
            >
              <div className=" flex w-full cursor-pointer justify-center gap-x-[20px]  lgm:gap-x-[12px]">
                <LinkNewTab href="https://play.google.com/store/apps/details?id=com.ViewPassion.evm&hl=en&gl=US">
                  <Image
                    src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/download%20button.png"
                    width={405}
                    height={120}
                    alt=""
                    className="w-[130px]  hover:bg-[#01193F66] smm:w-[40vw] "
                  />
                </LinkNewTab>
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/download%20button%20AS.png"
                  width={405}
                  height={120}
                  alt=""
                  className="w-[130px]  hover:bg-[#01193F66] smm:w-[40vw] "
                />
              </div>
            </Transition>
            <div className="mt-[20px] flex h-auto w-auto justify-center  ">
              <div className="flex h-auto w-auto items-center justify-start gap-x-[2vw]">
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1100ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <div className="p-[4px]">
                    <LinkNewTab href="https://twitter.com/EverMoon_nft">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className=" icon_hover "
                      >
                        <mask
                          id="mask0_7520_1161"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1161)">
                          <path d="M9.01595 7.18375L12.9873 2.66666H12.0463L8.59646 6.58796L5.84307 2.66666H2.66663L6.83123 8.59689L2.66663 13.3333H3.60758L7.24849 9.19134L10.1568 13.3333H13.3333L9.01595 7.18375ZM7.72676 8.64895L7.30415 8.05806L3.94691 3.36078H5.39241L8.1026 7.15305L8.52343 7.74393L12.0459 12.673H10.6004L7.72676 8.64895Z" />
                        </g>
                      </svg>
                    </LinkNewTab>
                  </div>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1200ms]"
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://t.me/Evermoon_Community">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1097"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1097)">
                          <path d="M17.5448 19.5788C17.5448 19.5788 20.1542 7.01137 20.2431 5.32843C20.262 5.16103 20.262 5.04018 20.2556 4.91844C20.2586 4.79132 20.2468 4.66331 20.2208 4.53977C20.2085 4.46637 20.1798 4.39923 20.1379 4.34462C20.096 4.29002 20.0424 4.24974 19.9831 4.22825C19.7714 4.17902 19.5526 4.19692 19.349 4.28196C19.349 4.28196 5.01757 10.4569 4.19943 11.1552C4.02498 11.3029 3.9649 11.3861 3.93626 11.4846C3.90874 11.6207 3.9239 11.7639 3.97875 11.8874C4.03378 12.0119 4.12456 12.1068 4.23443 12.156L7.92813 13.5963C7.98971 13.6142 8.05372 13.6142 8.1153 13.5963C8.95553 12.9634 16.5715 7.21189 17.0089 7.01853C17.0407 7.00869 17.066 7.00869 17.084 7.01764C17.1055 7.02749 17.1167 7.04897 17.1167 7.07941C16.9393 7.81883 10.3189 14.8362 10.3189 14.8362C10.3028 14.8603 10.289 14.8872 10.2775 14.9158L9.93202 19.2942C9.93202 19.2942 9.78939 20.636 10.9117 19.2942C11.3441 18.7768 11.7699 18.3032 12.1296 17.9183C12.4267 17.6005 12.6786 17.3427 12.8521 17.1708C13.6345 17.8198 14.4588 18.5082 15.1109 19.0838C15.5186 19.4437 15.8591 19.7588 16.08 19.9915C16.1782 20.1079 16.2954 20.1983 16.424 20.2574C16.5528 20.3165 16.6903 20.3433 16.8283 20.3371C17.3862 20.3138 17.5448 19.5788 17.5448 19.5788Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1300ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://discord.gg/VCAebs2zS3">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1105"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1105)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.8772 5.73156C21.0994 9.01914 22.1969 12.7274 21.7866 16.9965C21.7849 17.0146 21.7756 17.0312 21.7608 17.0421C20.0779 18.2854 18.4475 19.04 16.8398 19.5404C16.8273 19.5442 16.8139 19.544 16.8015 19.5398C16.7891 19.5356 16.7784 19.5276 16.7707 19.5169C16.3993 18.9969 16.0619 18.4488 15.7662 17.8731C15.7492 17.8392 15.7647 17.7984 15.7997 17.785C16.3356 17.5818 16.8453 17.3383 17.3355 17.05C17.3741 17.0272 17.3765 16.9715 17.3409 16.9448C17.2368 16.8671 17.1338 16.7854 17.0351 16.7038C17.0167 16.6887 16.9919 16.6857 16.9709 16.6958C13.7884 18.1746 10.3022 18.1746 7.08203 16.6958C7.06112 16.6864 7.03628 16.6897 7.01832 16.7045C6.91994 16.7862 6.81663 16.8671 6.71358 16.9448C6.67791 16.9715 6.68086 17.0272 6.71972 17.05C7.20993 17.3329 7.71956 17.5818 8.25478 17.786C8.28946 17.7994 8.30594 17.8392 8.28872 17.8731C7.99947 18.4495 7.66201 18.9977 7.28372 19.5177C7.26724 19.5387 7.24018 19.5483 7.2146 19.5404C5.61462 19.04 3.98413 18.2854 2.30126 17.0421C2.28724 17.0312 2.27715 17.0139 2.27568 16.9958C1.9328 13.3031 2.63158 9.5641 5.18246 5.73082C5.18861 5.72067 5.19796 5.71275 5.20878 5.70805C6.46392 5.12844 7.8086 4.70203 9.21403 4.4585C9.23961 4.45454 9.26519 4.46642 9.27847 4.48919C9.45212 4.79854 9.65061 5.19526 9.78491 5.51947C11.2663 5.29178 12.7709 5.29178 14.2833 5.51947C14.4176 5.20219 14.6092 4.79854 14.7821 4.48919C14.7883 4.47789 14.7978 4.46885 14.8094 4.46333C14.821 4.45782 14.834 4.45613 14.8466 4.4585C16.2527 4.70277 17.5974 5.12918 18.8516 5.70805C18.8626 5.71275 18.8717 5.72067 18.8772 5.73156ZM10.538 12.7527C10.5535 11.661 9.76253 10.7577 8.76957 10.7577C7.78474 10.7577 7.00135 11.6531 7.00135 12.7527C7.00135 13.852 7.80024 14.7474 8.76957 14.7474C9.75465 14.7474 10.538 13.852 10.538 12.7527ZM17.0762 12.7527C17.0917 11.661 16.3007 10.7577 15.308 10.7577C14.3229 10.7577 13.5395 11.6531 13.5395 12.7527C13.5395 13.852 14.3384 14.7474 15.308 14.7474C16.3007 14.7474 17.0762 13.852 17.0762 12.7527Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1400ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1113"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1113)">
                          <path d="M16.209 13.1244L16.7219 9.86829H13.5623V7.75184C13.5623 6.8615 14.0034 5.99152 15.4139 5.99152H16.8706V3.21877C16.0223 3.08361 15.1651 3.01049 14.306 3C11.7055 3 10.0077 4.5619 10.0077 7.38553V9.86829H7.125V13.1244H10.0077V21H13.5623V13.1244H16.209Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1500ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://www.youtube.com/c/Evermoon">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1121"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1121)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.3492 5.79327C20.1602 6.01227 20.7975 6.65127 21.013 7.46127C21.405 8.93127 21.405 12.0003 21.405 12.0003C21.405 12.0003 21.405 15.0693 21.013 16.5393C20.7945 17.3523 20.1572 17.9913 19.3492 18.2073C17.883 18.6003 12 18.6003 12 18.6003C12 18.6003 6.11998 18.6003 4.65073 18.2073C3.83979 17.9883 3.20242 17.3493 2.98697 16.5393C2.59497 15.0693 2.59497 12.0003 2.59497 12.0003C2.59497 12.0003 2.59497 8.93127 2.98697 7.46127C3.20541 6.64827 3.84279 6.00927 4.65073 5.79327C6.11998 5.40027 12 5.40027 12 5.40027C12 5.40027 17.883 5.40027 19.3492 5.79327ZM15.0073 12.0003L10.1208 14.8293V9.17127L15.0073 12.0003Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1600ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://www.tiktok.com/@evermoon_game">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1129"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1129)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.0148 9.42176C17.2415 10.2938 18.7104 10.7597 20.2154 10.754V7.77134C19.9196 7.77215 19.6245 7.74048 19.3355 7.67688V10.0531C17.8272 10.0558 16.356 9.58453 15.1299 8.70591V14.8403C15.1262 15.8469 14.8502 16.8338 14.3311 17.6962C13.812 18.5586 13.0691 19.2645 12.1814 19.739C11.2936 20.2134 10.294 20.4388 9.28849 20.3912C8.283 20.3436 7.30915 20.0247 6.47019 19.4685C7.24621 20.2536 8.23777 20.7909 9.31931 21.0121C10.4009 21.2334 11.5237 21.1287 12.5457 20.7114C13.5678 20.2941 14.443 19.5829 15.0605 18.6678C15.6781 17.7527 16.0102 16.675 16.0148 15.5711V9.42176ZM17.1035 6.37941C16.4797 5.70329 16.097 4.83991 16.0148 3.92366V3.53591H15.1797C15.2829 4.11832 15.5075 4.67248 15.839 5.16238C16.1704 5.65228 16.6013 6.06694 17.1035 6.37941ZM8.40397 17.1072C8.11451 16.7287 7.93712 16.2765 7.89199 15.8021C7.84686 15.3277 7.93581 14.8502 8.1487 14.4239C8.3616 13.9976 8.6899 13.6396 9.09623 13.3907C9.50257 13.1418 9.97062 13.0119 10.4471 13.0159C10.7102 13.0158 10.9717 13.0561 11.2226 13.1352V10.0531C10.9293 10.0143 10.6335 9.99764 10.3378 10.0034V12.3995C9.72686 12.2064 9.06566 12.2503 8.48566 12.5225C7.90567 12.7947 7.44938 13.2752 7.20755 13.8685C6.96572 14.4618 6.95607 15.1244 7.18052 15.7245C7.40496 16.3246 7.84706 16.8182 8.41888 17.1072H8.40397Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1295 8.68603C16.3556 9.56464 17.8267 10.0359 19.3351 10.0332V7.657C18.4757 7.47529 17.6954 7.02843 17.1035 6.37941C16.6013 6.06694 16.1704 5.65228 15.839 5.16238C15.5075 4.67248 15.2829 4.11832 15.1797 3.53591H12.982V15.5711C12.9799 16.1038 12.8111 16.6225 12.4992 17.0544C12.1873 17.4862 11.748 17.8096 11.243 17.979C10.7379 18.1485 10.1925 18.1555 9.68322 17.9992C9.17396 17.8428 8.7269 17.5309 8.40397 17.1072C7.89221 16.849 7.48193 16.4258 7.24013 15.9061C6.99833 15.3864 6.93868 14.8004 7.0708 14.2426C7.20293 13.6848 7.51912 13.1878 7.96836 12.8317C8.4176 12.4757 8.97369 12.2814 9.54691 12.2802C9.80992 12.281 10.0713 12.3212 10.3224 12.3995V10.0034C9.2375 10.0294 8.1838 10.3717 7.29066 10.9881C6.39752 11.6046 5.7038 12.4684 5.29467 13.4735C4.88554 14.4787 4.77879 15.5814 4.98754 16.6464C5.19629 17.7113 5.71187 18.6922 6.47019 19.4685C7.30932 20.0287 8.28428 20.3508 9.29202 20.4005C10.2998 20.4503 11.3021 20.2257 12.1923 19.7507C13.0825 19.2758 13.8272 18.5683 14.3471 17.7036C14.8669 16.8388 15.1425 15.8493 15.1444 14.8403L15.1295 8.68603Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.3351 7.657L19.3354 7.01551C18.5462 7.01887 17.7723 6.79843 17.1035 6.37941C17.6939 7.0303 18.4749 7.47753 19.3351 7.657ZM15.1797 3.53591C15.1797 3.42157 15.1447 3.30206 15.1298 3.18772V2.79997H12.0974V14.8401C12.0948 15.5143 11.8248 16.1599 11.3466 16.6352C10.8685 17.1105 10.2214 17.3767 9.54719 17.3754C9.15022 17.3774 8.75857 17.2856 8.40397 17.1072C8.7269 17.5309 9.17396 17.8428 9.68322 17.9992C10.1925 18.1555 10.7379 18.1485 11.243 17.979C11.748 17.8096 12.1873 17.4862 12.4992 17.0544C12.8111 16.6225 12.9799 16.1038 12.982 15.5711V3.53591H15.1797ZM10.3227 9.99821V9.31716C9.07487 9.14765 7.80643 9.40577 6.72409 10.0494C5.64175 10.6931 4.80933 11.6844 4.36249 12.8617C3.91566 14.0391 3.88076 15.333 4.26348 16.5328C4.6462 17.7325 5.42412 18.7674 6.47019 19.4685C5.71761 18.6904 5.20779 17.7097 5.00331 16.6467C4.79882 15.5837 4.90837 14.4841 5.31857 13.4823C5.72877 12.4806 6.42187 11.6199 7.31318 11.0056C8.20449 10.3913 9.25543 10.0499 10.3376 10.0231L10.3227 9.99821Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1700ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://medium.com/@evermoon">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1137"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1137)">
                          <path d="M13.2339 11.8288C13.2339 14.7616 10.8143 17.1431 7.81695 17.1431C4.81958 17.1431 2.40002 14.7616 2.40002 11.8288C2.40002 8.89597 4.81958 6.51451 7.81695 6.51451C10.8143 6.51451 13.2339 8.89597 13.2339 11.8288Z" />
                          <path d="M19.1684 11.8288C19.1684 14.5857 17.9526 16.8263 16.46 16.8263C14.9673 16.8263 13.7515 14.5857 13.7515 11.8288C13.7515 9.07194 14.9673 6.83125 16.46 6.83125C17.9526 6.83125 19.1684 9.06021 19.1684 11.8288Z" />
                          <path d="M21.6 11.8288C21.6 14.3041 21.1787 16.3102 20.649 16.3102C20.1194 16.3102 19.6981 14.3041 19.6981 11.8288C19.6981 9.35349 20.1194 7.34743 20.649 7.34743C21.1787 7.34743 21.6 9.35349 21.6 11.8288Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1800ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href="https://coinmarketcap.com/community/profile/Evermoon">
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1217"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1217)">
                          <path d="M12.5477 9.20061C12.3305 9.336 12.0739 9.35323 11.8788 9.24492C11.6308 9.10708 11.4948 8.78461 11.4948 8.33538V6.99262C11.4948 6.34461 11.2345 5.88308 10.7994 5.75877C10.0622 5.54708 9.50711 6.43569 9.29911 6.76923L7.99881 8.84677V6.30769C7.98404 5.72369 7.79142 5.37415 7.4265 5.26892C7.18404 5.19938 6.82219 5.22708 6.47081 5.75754L3.55696 10.3668C3.1674 9.63876 2.96402 8.82568 2.96496 8C2.96496 5.22338 5.22342 2.96492 7.99881 2.96492C10.7742 2.96492 13.0327 5.22338 13.0327 8L13.0339 8.01354V8.02708C13.0597 8.56492 12.8831 8.99261 12.5477 9.20061ZM14.1514 8.00061V7.97231C14.1354 4.59138 11.3816 1.84615 7.99819 1.84615C4.60558 1.84615 1.84619 4.60677 1.84619 8C1.84619 11.3932 4.60619 14.1538 7.99881 14.1538C9.55573 14.1538 11.0413 13.5711 12.1816 12.5126C12.2354 12.4627 12.2789 12.4027 12.3096 12.336C12.3403 12.2693 12.3575 12.1972 12.3603 12.1238C12.3631 12.0504 12.3514 11.9772 12.3259 11.9083C12.3004 11.8395 12.2616 11.7763 12.2117 11.7225C12.1618 11.6686 12.1018 11.6251 12.0351 11.5944C11.9684 11.5638 11.8963 11.5465 11.8229 11.5437C11.7495 11.5409 11.6763 11.5526 11.6075 11.5781C11.5386 11.6036 11.4754 11.6424 11.4216 11.6923C10.4919 12.5568 9.26895 13.0366 7.99942 13.0351C7.29226 13.0353 6.59303 12.8861 5.94752 12.5973C5.302 12.3086 4.72476 11.8867 4.25358 11.3594L6.88127 7.20246V9.11877C6.88127 10.0394 7.24311 10.3372 7.54711 10.4234C7.85111 10.5108 8.31573 10.4511 8.80373 9.67077L10.2487 7.36308C10.2948 7.288 10.3379 7.224 10.3767 7.16861V8.33538C10.3767 9.19569 10.7262 9.88369 11.3367 10.2228C11.8856 10.5286 12.5767 10.5009 13.1397 10.1508C13.8228 9.72615 14.1902 8.94338 14.152 8L14.1514 8.00061Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
                <Transition
                  show={isshow}
                  enter="transition ease-in-out duration-1000 delay-[1900ms]  "
                  enterFrom="opacity-0 -translate-y-[-150px]  "
                  enterTo="opacity-100 translate-y-0  "
                >
                  <LinkNewTab href={"mailto: Info@evermoon.games"}>
                    <div className="p-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="icon_hover"
                      >
                        <mask
                          id="mask0_7520_1225"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_7520_1225)">
                          <path d="M13.3334 2.66667H2.65825C2.48355 2.66666 2.31061 2.70116 2.14931 2.76816C1.98802 2.83516 1.84155 2.93335 1.71841 3.05708C1.59527 3.18081 1.49786 3.32763 1.43178 3.48909C1.36569 3.65056 1.33229 3.82347 1.3334 3.99789V12.0021C1.3334 12.3552 1.47387 12.6938 1.72392 12.9434C1.97397 13.1931 2.31307 13.3333 2.6667 13.3333H13.3334C13.687 13.3333 14.0261 13.1931 14.2762 12.9434C14.5262 12.6938 14.6667 12.3552 14.6667 12.0021V3.99789C14.6667 3.64483 14.5262 3.30623 14.2762 3.05657C14.0261 2.80692 13.687 2.66667 13.3334 2.66667ZM12.2025 6.03686L7.98314 8.66561L3.76373 6.03686C3.41579 5.82183 3.12858 5.52172 2.92922 5.16493C2.72987 4.80813 2.62499 4.40645 2.62451 3.99789L7.97474 7.36809L13.3165 3.99789C13.3189 4.40223 13.2198 4.80073 13.0282 5.15694C12.8365 5.51314 12.5585 5.81568 12.2194 6.03686H12.2025Z" />
                        </g>
                      </svg>
                    </div>
                  </LinkNewTab>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
