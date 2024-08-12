"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CommunityPopUp = ({ closePopUp }) => {
  const [showPopUp, setShowPopUp] = useState(true);

  const handlePopUp = () => {
    setShowPopUp(false);
  };

  if (!showPopUp) return null;

  return (
    <div className="flex justify-center  items-center">
      <div className="popColor rounded-[15px] border border-[#F0F0F0] xl:px-[86px] xl:pb-[70px] xl:pt-[30px] lg:px-[60px] lg:pb-[30px] lg:pt-[20px] px-[20px] pt-[28px] pb-[37px] h-auto w-[90vw] xl:w-[80%] sm:w-[70%]">
        <div className="flex items-center relative lg:h-[50px] h-[30px] justify-center">
          <Image
            src="/assets/images/know the community.svg"
            className="lg:h-[80px] h-[56px] absolute z-10 lg:bottom-[70%] bottom-[90%] w-full"
            height={0}
            width={0}
            sizes="100vw"
            alt="community image"
          />
          <Image
            src="/assets/images/cross.svg"
            onClick={handlePopUp}
            className="lg:h-[17px] h-[11px] w-[11px] absolute z-20 cursor-pointer lg:top-[25%] top-[-14%] right-0  lg:right-[-12%] lg:w-[17px]"
            height={0}
            width={0}
            sizes="100vw"
            alt="cross image"
          />
        </div>
        <div className="flex flex-col gap-y-[24px] xl:gap-y-[47px] lg:gap-y-[34px] ">
          <div className="flex flex-col gap-y-[20px] xl:gap-y-[30px] ">
            <h3 className="font-san_regular text-center leading-[126%] text-[16px] xl:text-[24px] lg:text-[20px] tracking-[-0.25px]">
              Are you looking to connect, collaborate, and design with other
              creatives?
            </h3>
            <Link
              href="https://kreatr-frontend.vercel.app/"
              className="flex justify-between items-center xl:py-[15px] p-[12px] xl:px-[20px] lg:px-[15px] lg:py-[10px] bg-[#E9C1D4] border border-[#373737] rounded-[90px]"
            >
              <div className="lg:text-[20px] text-[16px] font-san_regular tracking-[-0.25px]">
                Find your tribe here!
              </div>
              <div className="rounded-[50%] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] relative">
                <Image
                  alt="arrow image"
                  layout="fill"
                  src={"/assets/images/dark_upper_arrow.svg"}
                  className="absolute link-image"
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-y-[20px] xl:gap-y-[30px] ">
            <h3 className="font-san_regular text-center leading-[126%] text-[16px] xl:text-[24px] lg:text-[20px] tracking-[-0.25px]">
              Not really, I was looking to build my brand.
            </h3>
            <div
              onClick={closePopUp}
              className="flex justify-between cursor-pointer items-center lg:px-[15px] lg:py-[10px] xl:py-[15px] p-[12px] xl:px-[20px] bg-[#A0A9EB] border border-[#373737] rounded-[90px]"
            >
              <div className="lg:text-[20px] text-[16px] font-san_regular tracking-[-0.25px]">
                Continue
              </div>
              <div className="rounded-[50%] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] relative">
                <Image
                  alt="arrow image"
                  layout="fill"
                  src={"/assets/images/dark_upper_arrow.svg"}
                  className="absolute link-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPopUp;
