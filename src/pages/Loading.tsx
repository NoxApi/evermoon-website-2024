import { Josefin_Sans } from "next/font/google";

const Jose = Josefin_Sans({ subsets: ["latin"] });

const Loading = () => {
  return (
    <div
      className={` flex h-screen w-full min-w-[1920px]
        items-center justify-center bg-[#01071A] ${Jose.className}`}
    >
      <div className="flex w-auto items-end">
        <h1 className="text-3xl text-blue-500">Loading</h1>
        <div className="custom-loader"></div>
      </div>
    </div>
  );
};

export default Loading;
