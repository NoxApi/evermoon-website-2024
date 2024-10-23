import { Josefin_Sans } from "next/font/google";
import { useState, useEffect } from "react";

const Jose = Josefin_Sans({ subsets: ["latin"] });

const Loading = () => {
  const [progress, setProgress] = useState(0);
  // function convert(x: number) {
  //   return (x * 100).toFixed(1);
  // }

  useEffect(() => {
    const increaseProgress = () => {
      if (progress < 90) {
        // Increment to 90 in 6 seconds
        const interval = setInterval(() => {
          setProgress((prev) => {
            const newValue = Math.min(prev + 1, 90);
            if (newValue === 90) clearInterval(interval); // Stop the interval when reaching 90
            return newValue;
          });
        }, 110); // Update every 66.67ms (6000ms / 90 increments)
      } else if (progress === 90) {
        // Increment to 100 in 1 second
        setTimeout(() => {
          setProgress(100);
        }, 3000); // After reaching 90, update to 100 after 1 second
      }
    };

    increaseProgress();
  }, [progress]);

  return (
    <div
      className={` relative flex h-screen w-full
        min-w-[1920px] items-center justify-center bg-[#01071A] ${Jose.className}`}
    >
      {/* <style>
        {`.loading{
            width:${convert(loadingProgression) + "%"};
        }`}
      </style> */}
      {/* add style for design */}
      <div className="absolute right-[-50%] top-[50%] z-0 flex h-[100%] w-full translate-x-[-50%] translate-y-[-50%] justify-center opacity-5  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1280"
          height="832"
          viewBox="0 0 1280 832"
          fill="none"
        >
          <path
            d="M549.475 -36.625L640 -127.15L730.525 -36.625M549.475 -36.625L211.337 301.512M549.475 -36.625H573.437L640 27.275L706.562 -36.625H730.525M549.475 -36.625H453.625M211.337 301.512L187.375 325.475M211.337 301.512L325.825 416L211.337 530.487M211.337 301.512L190.037 280.212L187.375 282.875M187.375 325.475L96.85 416L187.375 506.525M187.375 325.475V282.875M187.375 325.475V349.437L251.275 416L187.375 482.562V506.525M187.375 506.525L211.337 530.487M187.375 506.525L187.375 549.125M211.337 530.487L549.475 868.625M211.337 530.487L190.037 551.787L187.375 549.125M549.475 868.625L640 959.15L730.525 868.625M549.475 868.625H573.437L640 804.725L706.562 868.625H730.525M549.475 868.625H453.625M730.525 868.625L1068.66 530.487M730.525 868.625H826.375M1068.66 530.487L1092.62 506.525M1068.66 530.487L954.175 416L1068.66 301.512M1068.66 530.487L1089.96 551.787L1092.62 549.125M1092.62 506.525L1183.15 416L1092.62 325.475M1092.62 506.525V549.125M1092.62 506.525V482.562L1028.72 416L1092.62 349.437V325.475M1092.62 325.475L1068.66 301.512M1092.62 325.475V282.875M1068.66 301.512L730.525 -36.625M1068.66 301.512L1089.96 280.212L1092.62 282.875M730.525 -36.625L826.375 -36.625M187.375 549.125L54.25 416L187.375 282.875M187.375 549.125V602.375M187.375 282.875V229.625M1092.62 549.125L1225.75 416L1092.62 282.875M1092.62 549.125V602.375M1092.62 282.875V229.625M826.375 868.625L640 1055L453.625 868.625M826.375 868.625L1092.62 602.375M453.625 868.625L187.375 602.375M187.375 602.375L1 416L187.375 229.625M187.375 229.625L453.625 -36.625M453.625 -36.625L640 -223L826.375 -36.625M826.375 -36.625L1092.62 229.625M1092.62 229.625L1279 416L1092.62 602.375"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
      {/* add style for design */}
      <div className="z-20 flex w-auto flex-col items-center gap-y-5">
        <div className="sprite-animation" />
        <div className="flex w-[200px] flex-col px-4">
          <div className="relative h-[6px] overflow-hidden rounded-full bg-[#FFFFFF99] ">
            <div
              className="absolute h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className=" mt-2 text-base font-semibold">{progress}%</p>
        </div>

        {/* <h1 className="text-3xl text-blue-500">Loading</h1>
        <div className="custom-loader" /> */}
        {/* <p className="text-2xl smm:text-sm text-white text-center">
                  {"Downloading " + convert(loadingProgression) + "%"}
                </p> */}
      </div>
    </div>
  );
};

export default Loading;
