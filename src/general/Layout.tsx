import { Josefin_Sans } from "next/font/google";

const Jose = Josefin_Sans({ subsets: ["latin"] });

const Layout = (props: any) => {
  return (
    <>
      <div
        className={
          " z-[-30] flex h-auto justify-center overflow-hidden bg-[#01071A]" +
          Jose.className
        }
      >
        <div className={`h-auto w-full text-white`}>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
