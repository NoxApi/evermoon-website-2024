import Image from "next/image";

import LinkNewTab from "../../general/LinkNewTab";

import "animate.css";

const Footer = () => {
  return (
    <div
      className="relative z-50 flex h-[258px]  w-[100%] min-w-[1914px] 
  flex-col bg-[#01071a] pt-[20px] smm:h-[105vw]"
    >
      <div className="absolute bottom-0 left-0 h-[32px] w-full translate-y-[8px] bg-[#01071a]  "></div>
      <div
        className="trapezoid absolute bottom-[-14px] left-[50%] flex translate-x-[-50%] items-center 
  justify-center  "
      >
        <div className="relative mt-[80px] flex w-full items-center justify-center ">
          <p className="text-[18px]  text-white mdm:bottom-[0] mdm:text-[3vw] mdm:leading-[4vw] smm:w-[90vw]">
            {"All rights reserved. Developed by View Passion Co.,Ltd."}
          </p>
        </div>
      </div>
      <div className="flex h-auto w-auto justify-center gap-x-[8px] ">
        <div className="flex gap-x-[8px] smm:flex-col smm:gap-y-[1vw]">
          <div className="flex gap-x-[8px]">
            <div className="p-1">
              <LinkNewTab href="https://twitter.com/EverMoon_nft">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/X.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="https://t.me/Evermoon_Community">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Telegram.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw]  "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="https://discord.com/invite/VCAebs2zS3">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Discord.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Facebook.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="https://www.youtube.com/c/Evermoon">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Youtube.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="https://www.tiktok.com/@evermoon_game">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Tiktok.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="https://medium.com/@evermoon">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Medium.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
          </div>
          <div className="flex gap-x-[8px] smm:justify-center smm:gap-x-[2vw]">
            <div className="p-1">
              <LinkNewTab href="https://coinmarketcap.com/community/profile/Evermoon">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/CoinMarketCap.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
            <div className="p-1">
              <LinkNewTab href="mailto: Info@evermoon.games">
                <Image
                  src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/Message.png"
                  width={52}
                  height={52}
                  alt="q122"
                  className="w-[24px] smm:w-[6.4vw] "
                  priority
                />
              </LinkNewTab>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[18px] flex w-full justify-center mdm:mt-[4.8vw] smm:z-20">
        <Image
          src="https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Video/evmlogotext.png"
          width={656}
          height={124}
          alt=""
          className="w-[180px] smm:w-[48vw]"
        />
      </div>
      <div
        className="mt-[10px] flex items-center justify-center gap-x-[1vw]
  smm:z-20"
      >
        <p className="text-[12px] capitalize text-white smm:text-[3.2vw]">
          audited by
        </p>

        <Image
          src="https://storage.googleapis.com/evermoon_website_bucket/Footer_img/certik.png"
          width={137}
          height={32}
          alt="Ct"
          className="w-[68px] smm:w-[18.25vw]"
        />
      </div>
      <div className="my-[18px] flex w-full justify-center smm:flex-col ">
        {/* h-[30px] my-[18px] lgm:mt-12 lgm:flex-col mdm:h-[90px] */}
        <div className="flex justify-center lgm:mt-2">
          {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm footertext 
      smm:h-[30px] smm:justify-center smm:mt-2 gap-x-4 smm:gap-x-[0vw]
    mr-4" /> */}
          <LinkNewTab href="/home">
            <button
              className="mr-4 p-[8px] text-[14px] text-white
        mdm:text-[15px] smm:ml-[0vw]"
            >
              {"HOME"}
            </button>
          </LinkNewTab>
          {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm ml-4 smm:ml-[0vw]" /> */}
          <LinkNewTab href="/sacredbeast">
            <button
              className="mr-4 p-[8px] text-[14px] text-white
        mdm:text-[15px] smm:ml-[0vw]"
            >
              {"SACRED BEAST"}
            </button>
          </LinkNewTab>
          {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm ml-4 smm:ml-[0vw]" /> */}
        </div>
        <div className="flex justify-center mdm:flex-col">
          <div className="flex justify-center lgm:mt-2 mdm:h-[30px]">
            {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm lg:hidden" /> */}
            <LinkNewTab href="/pool">
              <button
                className="mr-4 p-[8px] text-[14px] text-white
          mdm:text-[15px] smm:ml-[0vw]"
              >
                {"DE-ZENTRUM POOL"}
              </button>
            </LinkNewTab>
            {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm ml-4 smm:ml-[0vw]" /> */}
            <LinkNewTab href="https://docs.evermoon.games/evermoon">
              <button
                className="mr-4 p-[8px] text-[14px] uppercase text-white
          mdm:text-[15px] smm:ml-[0vw]"
              >
                {"Whitepaper"}
              </button>
            </LinkNewTab>
            {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm ml-4 smm:ml-[0vw]" /> */}
          </div>
          <div className="mdm:h-[30px flex justify-center lgm:mt-2">
            {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm ml-4 smm:ml-[0vw] md:hidden" /> */}
            <LinkNewTab href="/marketplace">
              <button
                className="p-[8px] text-[14px] text-white mdm:text-[15px]
          smm:ml-[0vw]"
              >
                {"MARKETPLACE"}
              </button>
            </LinkNewTab>
            {/* <div className="w-[1px] h-full bg-[#F1E3B5] rounded-sm ml-4 smm:ml-[0vw]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
