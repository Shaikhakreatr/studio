"use client";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { Noto_Sans_Arabic } from "@next/font/google";
import { Marquee } from "@gfazioli/mantine-marquee";

const notoSansArabic = Noto_Sans_Arabic({
  weight: "400", // Specify the desired weight, e.g., 400 for normal, 700 for bold
  subsets: ["arabic"], // Specify the subset to load only Arabic characters
});

const MarqueeAnimation = () => {
  return (
    <MantineProvider>
      <Marquee
        mb={16}
        repeat={20}
        className="overflow-hidden pt-[20px]  lg:pt-[0px]"
      >
        <div className="w-full flex lg:mr-[70px]  mr-[30px]">
          <div className="flex gap-[30px]  lg:gap-[70px] ">
            <div className="text-white text-[4rem] font-san_book  lg:text-[7.5rem]">
              Hello
            </div>
            <div
              className={`text-white text-[4rem]  lg:text-[7.5rem] ${notoSansArabic.className}`}
            >
              مرحبا
            </div>
            <div className="text-white text-[4rem] font-san_book lg:text-[7.5rem]">
              Bonjour
            </div>
            <div className="text-white text-[4rem] font-san_book lg:text-[7.5rem]">Ciao</div>
          </div>
        </div>
      </Marquee>
    </MantineProvider>
  );
};

export default MarqueeAnimation;
