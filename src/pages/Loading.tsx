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
        }, 66.67); // Update every 66.67ms (6000ms / 90 increments)
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
      className={` flex h-screen w-full min-w-[1920px]
        items-center justify-center bg-[#01071A] ${Jose.className}`}
    >
      {/* <style>
        {`.loading{
            width:${convert(loadingProgression) + "%"};
        }`}
      </style> */}
      <div className="flex w-auto flex-col items-center gap-y-5">
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
