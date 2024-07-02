import Link from "next/link";
import { useState, Fragment, useEffect } from "react";
import "animate.css";
import Image from "next/image";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";

// import { useGlobalContext } from "state/global";

export default function Navbar() {
  const [page, setpage] = useState(0);
  const [evm, setevm] = useState(0);

  return (
    <div className="z-[99] flex w-full justify-center border-b-2 border-main-1 bg-[#0B0436] ">
      <div className="relative flex h-[80px] w-[100vw] justify-between bg-[#0B0436] xlm:h-16 xlm:justify-center smm:h-[15vw]  ">
        <div className="flex h-full items-center xlm:hidden">
          <Link href={"/"}>
            <Image
              src={
                "https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/Navbar/logo1.png"
              }
              alt=""
              width={224}
              height={152}
              className="ml-4 w-[112px]"
            />
          </Link>
          <div className="navdiv">
            <Link href={"/home"}>
              <p
                onClick={() => setpage(0)}
                className={`navtext ml-8 mt-[5px] text-xl uppercase text-white ${
                  page == 1 && " border-b-2 border-[#F1E3B5] "
                }`}
              >
                {"home"}
              </p>
            </Link>
          </div>
          <div className="navdiv">
            <Link
              href={
                "https://docs.evermoon.games/evermoon/evermoon-economy/defi/sacred-beast"
              }
              target="_blank"
            >
              <p
                onClick={() => setpage(0)}
                className={`navtext ml-8 mt-[5px] text-xl uppercase text-white ${
                  page == 2 && " border-b-2 border-[#F1E3B5] "
                }`}
              >
                {"sacred beast"}
              </p>
            </Link>
          </div>
          <div className="navdiv dropdowndiv flex h-full items-center justify-center">
            <Link
              href="https://docs.evermoon.games/evermoon/evermoon-economy/play-and-earn/moon-mission"
              target="_blank"
            >
              <p
                className={`navtext ml-8 mt-[5px] text-xl uppercase text-white ${
                  page == 3 && " border-b-2 border-[#F1E3B5] "
                }`}
              >
                {"Moon Mission"}
              </p>
              {/* <svg
              className="navvec trasition-all ml-2 duration-100"
              width="20"
              height="20"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.700048 6.6749C0.516715 6.49157 0.425049 6.25824 0.425049 5.9749C0.425049 5.69157 0.516715 5.45824 0.700048 5.2749L5.30005 0.674903C5.40005 0.574903 5.50838 0.503903 5.62505 0.461903C5.74172 0.420569 5.86672 0.399902 6.00005 0.399902C6.13338 0.399902 6.25838 0.420569 6.37505 0.461903C6.49172 0.503903 6.60005 0.574903 6.70005 0.674903L11.325 5.2999C11.5084 5.48324 11.6 5.70824 11.6 5.9749C11.6 6.24157 11.5 6.4749 11.3 6.6749C11.1167 6.85824 10.8834 6.9499 10.6 6.9499C10.3167 6.9499 10.0834 6.85824 9.90005 6.6749L6.00005 2.7749L2.07505 6.6999C1.89172 6.88324 1.66672 6.9749 1.40005 6.9749C1.13338 6.9749 0.900048 6.8749 0.700048 6.6749Z"
                fill="black"
              />
            </svg> */}
              {/* <div className="dropdown absolute bottom-[-130px] left-[430px] z-50 flex h-[150px] w-[220px]  items-end border-[#F1E3B5] transition-all duration-100 ">
              <div className="h-[120px] w-[220px] rounded-2xl border-2 border-[#F1E3B5] bg-[#0B0436]">
                <div className="navdiv mt-5">
                  <Link href={"/pool"}>
                    <p
                      onClick={() => setpage(0)}
                      className={`sublink ml-4 mt-[5px] text-xl uppercase text-white `}
                    >
                      {"deposit"}
                    </p>
                  </Link>
                </div>
                <div className="navdiv mt-5">
                  <Link href={"/lottery"}>
                    <p
                      onClick={() => setpage(0)}
                      className={`sublink ml-4 mt-[5px] text-xl uppercase text-white `}
                    >
                      {"lottery"}
                    </p>
                  </Link>
                </div>
              </div>
            </div> */}
            </Link>
          </div>
          <div className="navdiv flex items-center">
            <Link
              href={
                "https://docs.evermoon.games/evermoon/evermoon-economy/play-and-earn/marketplace"
              }
            >
              <p
                onClick={() => setpage(0)}
                className={`navtext ml-8 mt-[5px] text-xl uppercase text-white ${
                  page == 4 && " border-b-2 border-[#F1E3B5] "
                }`}
              >
                {"marketplace"}
              </p>
            </Link>
            <svg
              className="navmarket ml-2 transition-all duration-100 "
              width="30px"
              height="30px"
              viewBox="0 0 50 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Lager_80"
                data-name="Lager 80"
                transform="translate(0 0.822)"
              >
                <path
                  id="Path_89"
                  data-name="Path 89"
                  d="M24,22v5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h5a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H3A3,3,0,0,0,0,7V29a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V22a2,2,0,0,0-2-2h0A2,2,0,0,0,24,22Z"
                  fill="#000000"
                />
                <g
                  className="externalvec transition-all duration-100"
                  id="group_1"
                >
                  <rect
                    id="Rectangle_40"
                    data-name="Rectangle 40"
                    width="16"
                    height="4"
                    rx="2"
                    transform="translate(16 0)"
                    fill="#000000"
                  />
                  <rect
                    id="Rectangle_41"
                    data-name="Rectangle 41"
                    width="16"
                    height="4"
                    rx="2"
                    transform="translate(32 0) rotate(90)"
                    fill="#000000"
                  />
                  <g id="Group_37" data-name="Group 37">
                    <rect
                      id="Rectangle_42"
                      data-name="Rectangle 42"
                      width="32.296"
                      height="3.971"
                      rx="1.986"
                      transform="translate(7.178 22.014) rotate(-45)"
                      fill="#000000"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex h-full items-center justify-center xl:hidden">
          <Link href={"/"}>
            <Image
              src={
                "https://storage.googleapis.com/evermoon_website_bucket/Lite_Page/Navbar/logo2.png"
              }
              alt=""
              width={160}
              height={100}
              className="w-[160px] smm:w-[35vw]"
            />
          </Link>
        </div>
        <div className=" absolute right-[10vw] top-[50%] translate-y-[-50%]">
          <HeaderMobile />
        </div>
        <div className=" absolute left-[10vw] top-[50%] translate-y-[-50%]">
          <HeaderMobile2 set={setpage} page={page} evm={evm} />
        </div>
      </div>
    </div>
  );
}

//headermobile
const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [issubnav, setissubnav] = useState(false);
  const [confirmhover, setconfirmhover] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full justify-end xl:hidden">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-[60]" onClose={closeModal}>
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="bg-bgs8m relative ml-auto mt-[64px] h-screen w-[100vw] transform overflow-hidden  bg-[#0B0436] bg-cover px-[10vw] text-left align-middle shadow-xl transition-all sm:w-80 sm:px-2 smm:mt-[15vw] smm:flex smm:justify-center xsmm:px-[1vw]">
                <div className="relative inset-0 -z-10" />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const HeaderMobile2 = ({
  set,
  page,
  evm,
}: {
  set: any;
  page: any;
  evm: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [issubnav, setissubnav] = useState(false);
  const [confirmhover, setconfirmhover] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex w-full justify-end xl:hidden">
      <button
        type="button"
        onClick={openModal}
        className="ml-[-5vw] flex justify-center smm:ml-[-5vw]  smm:w-[10vw] xsmm:ml-[-7vw]"
      >
        {isOpen == false && (
          <svg
            className="mr-[10px] smm:mr-[0vw] smm:w-[10vw]"
            width="40"
            height="30"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C0.716667 12 0.479333 11.904 0.288 11.712C0.0960001 11.5207 0 11.2833 0 11C0 10.7167 0.0960001 10.4793 0.288 10.288C0.479333 10.096 0.716667 10 1 10H17C17.2833 10 17.5207 10.096 17.712 10.288C17.904 10.4793 18 10.7167 18 11C18 11.2833 17.904 11.5207 17.712 11.712C17.5207 11.904 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479333 6.904 0.288 6.712C0.0960001 6.52067 0 6.28333 0 6C0 5.71667 0.0960001 5.479 0.288 5.287C0.479333 5.09567 0.716667 5 1 5H17C17.2833 5 17.5207 5.09567 17.712 5.287C17.904 5.479 18 5.71667 18 6C18 6.28333 17.904 6.52067 17.712 6.712C17.5207 6.904 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1Z"
              fill="white"
            />
          </svg>
        )}
        {isOpen == true && (
          <svg
            className=" smm:w-[10vw] "
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_348_6228"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_348_6228)">
              <path
                d="M12 13.3998L7.10005 18.2998C6.91672 18.4831 6.68338 18.5748 6.40005 18.5748C6.11672 18.5748 5.88338 18.4831 5.70005 18.2998C5.51672 18.1165 5.42505 17.8831 5.42505 17.5998C5.42505 17.3165 5.51672 17.0831 5.70005 16.8998L10.6 11.9998L5.70005 7.0998C5.51672 6.91647 5.42505 6.68314 5.42505 6.3998C5.42505 6.11647 5.51672 5.88314 5.70005 5.6998C5.88338 5.51647 6.11672 5.4248 6.40005 5.4248C6.68338 5.4248 6.91672 5.51647 7.10005 5.6998L12 10.5998L16.9 5.6998C17.0834 5.51647 17.3167 5.4248 17.6 5.4248C17.8834 5.4248 18.1167 5.51647 18.3 5.6998C18.4834 5.88314 18.575 6.11647 18.575 6.3998C18.575 6.68314 18.4834 6.91647 18.3 7.0998L13.4 11.9998L18.3 16.8998C18.4834 17.0831 18.575 17.3165 18.575 17.5998C18.575 17.8831 18.4834 18.1165 18.3 18.2998C18.1167 18.4831 17.8834 18.5748 17.6 18.5748C17.3167 18.5748 17.0834 18.4831 16.9 18.2998L12 13.3998Z"
                fill="white"
              />
            </g>
          </svg>
        )}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed left-0 top-0 z-[60]"
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-[-100px]"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-[-100px]"
            >
              <div className="relative ml-auto mt-[64px] h-screen w-[100vw]  transform overflow-hidden bg-[#0B0436] text-left align-middle  transition-all sm:w-80 smm:mt-[15vw] ">
                <div className="relative inset-0 -z-10 pt-12 smm:pt-[5vw] " />
                <div className="mx-4 smm:mx-[0vw] smm:mt-[4vw] smm:px-[10vw]">
                  <div
                    onClick={() => closeModal()}
                    className="m mt-8 smm:mt-[10vw]"
                  >
                    <Link href={"/home"}>
                      <p
                        onClick={() => set(0)}
                        className={`navtext ml-8 mt-[5px] cursor-pointer text-xl uppercase text-white smm:ml-[5vw] smm:mr-[15vw] smm:mt-[0] smm:text-[6vw] smm:leading-[5vw] ${
                          page == 1 && " border-b-2 border-[#F1E3B5] "
                        }`}
                      >
                        {"home"}
                      </p>
                    </Link>
                  </div>
                  <div
                    onClick={() => closeModal()}
                    className="m mt-8 smm:mt-[10vw]"
                  >
                    <Link
                      href={
                        "https://docs.evermoon.games/evermoon/evermoon-economy/defi/sacred-beast"
                      }
                    >
                      <p
                        onClick={() => set(0)}
                        className={`navtext ml-8 mt-[5px] cursor-pointer text-xl uppercase text-white smm:ml-[5vw] smm:mr-[15vw] smm:mt-[0] smm:text-[6vw] smm:leading-[5vw] ${
                          page == 2 && " border-b-2 border-[#F1E3B5] "
                        }`}
                      >
                        {"sacred beast"}
                      </p>
                    </Link>
                  </div>
                  <div
                    onClick={() => setissubnav(!issubnav)}
                    className={`m mt-8 overflow-hidden transition-all duration-200 smm:mt-[10vw] ${
                      issubnav
                        ? "xlm:h-[110px] smm:h-[40vw] "
                        : "xlm:h-[30px] smm:h-[5vw] "
                    }`}
                  >
                    <div className="flex items-center">
                      <Link
                        href={
                          "https://docs.evermoon.games/evermoon/evermoon-economy/play-and-earn/marketplace"
                        }
                      >
                        <p
                          onClick={() => set(0)}
                          className={`navtext ml-8 mt-[5px] cursor-pointer text-xl uppercase text-white smm:ml-[5vw] smm:mr-[1vw] smm:mt-[0] smm:text-[6vw] smm:leading-[5vw] ${
                            page == 3 && " border-b-2 border-[#F1E3B5] "
                          }`}
                        >
                          {"Moon Mission "}
                        </p>
                      </Link>
                      {/* <svg
                        className={`ml-3  mt-1 smm:ml-[1vw] smm:mt-0 smm:h-auto smm:w-[4vw] ${
                          issubnav ? " rotate-180 " : " "
                        } `}
                        width="20"
                        height="20"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.700048 6.6749C0.516715 6.49157 0.425049 6.25824 0.425049 5.9749C0.425049 5.69157 0.516715 5.45824 0.700048 5.2749L5.30005 0.674903C5.40005 0.574903 5.50838 0.503903 5.62505 0.461903C5.74172 0.420569 5.86672 0.399902 6.00005 0.399902C6.13338 0.399902 6.25838 0.420569 6.37505 0.461903C6.49172 0.503903 6.60005 0.574903 6.70005 0.674903L11.325 5.2999C11.5084 5.48324 11.6 5.70824 11.6 5.9749C11.6 6.24157 11.5 6.4749 11.3 6.6749C11.1167 6.85824 10.8834 6.9499 10.6 6.9499C10.3167 6.9499 10.0834 6.85824 9.90005 6.6749L6.00005 2.7749L2.07505 6.6999C1.89172 6.88324 1.66672 6.9749 1.40005 6.9749C1.13338 6.9749 0.900048 6.8749 0.700048 6.6749Z"
                          fill="white"
                        />
                      </svg> */}
                    </div>
                    {/* {page == 0 && (
                      <div
                        onClick={() => closeModal()}
                        className="m ml-8 mt-4 smm:ml-[5vw] smm:mt-[10vw]"
                      >
                        <Link href={"/pool"}>
                          <p
                            onClick={() => set(0)}
                            className={`text-md navtext ml-8 mt-[5px] cursor-pointer uppercase text-white smm:ml-[5vw] smm:mr-[15vw] smm:mt-[0] smm:text-[5vw] smm:leading-[4vw] ${
                              page == 2 && " border-b-2 border-[#F1E3B5] "
                            }`}
                          >
                            {"deposit"}
                          </p>
                        </Link>
                      </div>
                    )}
                    {page == 0 && (
                      <div
                        onClick={() => closeModal()}
                        className="m ml-8 mt-4 smm:ml-[5vw] smm:mt-[10vw]"
                      >
                        <Link href={"/lottery"}>
                          <p
                            onClick={() => set(0)}
                            className={`text-md navtext ml-8 mt-[5px] cursor-pointer uppercase text-white smm:ml-[5vw] smm:mr-[15vw] smm:mt-[0] smm:text-[5vw] smm:leading-[4vw] ${
                              page == 2 && " border-b-2 border-[#F1E3B5] "
                            }`}
                          >
                            {"lottery"}
                          </p>
                        </Link>
                      </div>
                    )} */}
                  </div>
                  <div className="navdiv m mt-8 flex items-center smm:mt-[10vw]">
                    <Link
                      href={
                        "https://docs.evermoon.games/evermoon/evermoon-economy/play-and-earn/marketplace"
                      }
                    >
                      <p
                        onClick={() => set(0)}
                        className={`navtext ml-8 mt-[5px] cursor-pointer text-xl uppercase text-white smm:ml-[5vw] smm:mr-[15vw] smm:mt-[0] smm:text-[6vw] smm:leading-[5vw] ${
                          page == 4 && " border-b-2 border-[#F1E3B5] "
                        }`}
                      >
                        {"marketplace"}
                      </p>
                    </Link>
                    <svg
                      className="ml-4 mt-1 smm:ml-[-13vw] smm:mt-[-0.2vw] smm:h-[4vw] smm:w-[4vw]"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32.822 32.822"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="Lager_80"
                        data-name="Lager 80"
                        transform="translate(0 0.822)"
                      >
                        <path
                          id="Path_89"
                          data-name="Path 89"
                          d="M24,22v5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h5a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H3A3,3,0,0,0,0,7V29a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V22a2,2,0,0,0-2-2h0A2,2,0,0,0,24,22Z"
                          fill="#FFFFFF"
                        />
                        <rect
                          id="Rectangle_40"
                          data-name="Rectangle 40"
                          width="16"
                          height="4"
                          rx="2"
                          transform="translate(16 0)"
                          fill="#FFFFFF"
                        />
                        <rect
                          id="Rectangle_41"
                          data-name="Rectangle 41"
                          width="16"
                          height="4"
                          rx="2"
                          transform="translate(32 0) rotate(90)"
                          fill="#FFFFFF"
                        />
                        <g id="Group_37" data-name="Group 37">
                          <rect
                            id="Rectangle_42"
                            data-name="Rectangle 42"
                            width="32.296"
                            height="3.971"
                            rx="1.986"
                            transform="translate(7.178 22.014) rotate(-45)"
                            fill="#FFFFFF"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};