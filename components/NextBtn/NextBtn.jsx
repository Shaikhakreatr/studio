import React from "react";
import Image from "next/image";

const NextBtn = () => {
  return (
    <>
      {/* Visible on small screens and larger */}
      <div className="group relative hidden h-[48px] w-[48] cursor-pointer sm:block">
        <div className="relative flex items-center justify-between overflow-hidden rounded-full bg-[#373737] p-[12.5px] transition-all duration-300 ease-in-out">
          <span className="z-[-10] w-0 text-start font-san_regular text-[20px] text-[#DBDBDB] transition-all duration-500 group-hover:z-[10] group-hover:w-[110px] group-hover:pl-[12px]">
            Next
          </span>
          <Image
            src="/assets/images/single-arrow.svg"
            height={0}
            width={0}
            sizes="100vw"
            className="m-[4px] h-[22px] w-[22px]"
            alt="arrow image"
          />
        </div>
      </div>

      {/* Visible only on screens smaller than 'sm' */}
      <div className="relative block h-[48px] w-[48px] cursor-pointer rounded-full bg-[#373737] sm:hidden">
        <Image
          src="/assets/images/single-arrow.svg"
          height={0}
          width={0}
          sizes="100vw"
          className="absolute left-[25%] top-[25%] h-[22px] w-[22px]"
          alt="arrow image"
        />
      </div>
    </>
  );
};

export default NextBtn;
