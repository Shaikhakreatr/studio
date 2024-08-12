"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 25; // Adjust as needed
      const threshold = 16 + offset; // Adjust as needed
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on component mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuBar(!menuBar);
  };

  const menu = [
    { title: "About", url: "/about" },
    { title: "Works", url: "/works" },
    { title: "Services", url: "/services" },
    { title: "Contact Us", url: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-20 h-[14.5%] w-full pb-[20px] pl-[20px] pr-[20px] pt-[20px] transition-all duration-300 ease-in-out sm:pl-[40px] sm:pr-[40px] lg:pl-[84px] lg:pr-[84px] xl:pt-0 ${
          isScrolled
            ? "h-[60px] bg-[#F0F0F0] bg-opacity-40 backdrop-blur-md sm:h-[90px] lg:h-[90px] xl:h-[110px] xl:pt-[20px]"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-full w-full items-center justify-between sm:justify-between">
          <Link href="/">
            <Image
              height={31}
              width={164}
              src={"/assets/images/kreatrLogo.svg"}
              alt="Kreatr Logo"
              className="h-[20px] w-[104px] sm:h-[25px] sm:w-[130px] lg:h-[31px] lg:w-[164px]"
            />
          </Link>

          <div
            className="menu-bar flex cursor-pointer flex-col gap-[7.6px] sm:hidden"
            onClick={handleMenuClick}
          >
            <div
              className={`h-[1.1px] w-[22px] rounded-xl bg-[#373737] transition-transform duration-300 ${
                menuBar ? "translate-y-[7px] rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-[1.1px] w-[22px] rounded-xl bg-[#373737] transition-transform duration-300 ${
                menuBar ? "-translate-y-[2px] -rotate-45" : ""
              }`}
            ></div>
          </div>

          <div className="hidden h-[50px] gap-[10px] rounded-[52px] border border-[#DBDBDB] bg-[#F0F0F0] bg-opacity-[50%] sm:flex sm:min-h-[60px] sm:gap-[8px] sm:p-[10px] lg:min-h-[67px] lg:p-[12px]">
            {menu.map((val, index) => (
              <Link
                href={val.url}
                key={index}
                className="flex h-full w-fit items-center justify-center rounded-[31px] bg-[#F0F0F0] px-[10px] py-[10px] text-center font-san_regular text-[.75rem] tracking-[-0.25px] hover:bg-opacity-70 sm:px-[8px] sm:py-[8px] sm:text-[.875rem] lg:px-[12px] lg:py-[14px] lg:text-[14px]"
              >
                {val.title}
              </Link>
            ))}
          </div>

          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ29rFlp2-SKSqLtaRrVgp3CuGy32KJ6_Jwi_1c="
            target="_blank"
            className="group relative hidden h-[40px] w-[150px] cursor-pointer items-center justify-center gap-x-[5px] overflow-hidden rounded-[52px] border border-[#DBDBDB] bg-[#F0F0F0] bg-opacity-[50%] transition-all duration-1000 ease-in-out hover:border-[#324CD4] sm:flex sm:h-[45px] sm:w-[160px] sm:gap-x-[6px] lg:h-[49px] lg:min-w-[174px] lg:gap-x-[8px] xl:min-w-[194px]"
          >
            <div className="absolute inset-0 -translate-x-full transform bg-[#324CD4] transition-transform duration-1000 group-hover:translate-x-0"></div>
            <div className="flex items-center gap-[10px] transition-all duration-1000">
              <div className="relative z-10 order-1 h-[30px] w-[30px] group-hover:order-2 sm:h-[35px] sm:w-[35px] lg:h-[37px] lg:w-[37px]">
                <Image
                  layout="fill"
                  src={"/assets/images/up_right-arrow.svg"}
                  alt="Arrow"
                  className="arrow"
                />
              </div>
              <div className="z-10 order-2 mr-[5px] h-fit w-fit tracking-[0.25px] group-hover:order-1 sm:mr-[6px] lg:mr-[10px]">
                <div className="font-san_regular text-[.625rem] tracking-[-0.25px] text-[#324CD4] group-hover:text-[#FFFFFF] sm:text-[.7rem] lg:text-[12px] xl:text-[14px]">
                  Reserve your spot
                </div>
                <div className="slots font-san_regular text-[.4375rem] tracking-[-0.25px] text-[#373737] text-opacity-[50%] group-hover:text-[#dad8d8] sm:text-[.5rem] lg:text-[.5625rem]">
                  <span className="group-hover:hidden">
                    Only 2 slots left for July
                  </span>
                  <span className="hidden group-hover:inline">
                    One-only-one call
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </header>
      {menuBar && (
        <div className="popColor fixed left-[50%] top-[50%] z-20 h-[396px] w-[336px] translate-x-[-50%] translate-y-[-50%] transform rounded-[15px] border border-[#DBDBDB] bg-opacity-80 transition-transform sm:hidden">
          <div className="px-[34px] pt-[47px]">
            {menu.map((val, index) => (
              <Link
                href={val.url}
                key={index}
                className="mb-[19px] block font-san_medium text-[20px] leading-[24px] tracking-[-0.25px] text-[#373737]"
                onClick={handleMenuClick}
              >
                {val.title}
              </Link>
            ))}
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ29rFlp2-SKSqLtaRrVgp3CuGy32KJ6_Jwi_1c="
              className="mt-[65px]"
            >
              <div className="relative flex items-center">
                <Image
                  src={"/assets/images/new-img.svg"}
                  alt="Reserve Icon"
                  width={47}
                  height={23}
                  className="absolute top-[-30%] z-20"
                />
                <span className="flex items-center justify-center rounded-[52px] bg-[#F0F0F0] px-[18px] py-[9px] font-san_medium text-[18px] leading-[24px] tracking-[-0.25px] text-[#373737]">
                  Reserve your spot
                </span>
              </div>
              <p className="mt-[10px] font-san_book text-[10px] leading-[12px] tracking-[-0.25px] text-[#373737]">
                Book a call with our Creative Director!
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
