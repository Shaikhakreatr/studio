import React from "react";
import Link from "next/link";
import Image from "next/image";

const CareersEmpty = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:mt-[128px] pt-[80px] sm:pt-0 sm:mt-[100px] lg:mx-[84px] sm:mx-[40px] mx-[20px] lg:mb-[140px] sm:mb-[90px] mb-[48px]">
        <div className="lg:pt-[128px] sm:pt-[80px] pt-[41px]">
          <h1 className="font-san_book lg:text-[100px] sm:text-[60px] text-[56px] text-[#373737] sm:leading-[100px] sm:tracking-[-0.25px] leading-[55px] tracking-[-1px]">
            Join our
            <br className="sm:hidden" /> team
          </h1>
        </div>
        <div className="mt-[32px] lg:mt-[58px]">
          <h2 className=" font-san_book lg:text-[48px] text-[#373737] text-[32px] leading-[36px] lg:leading-[108%] tracking-[-0.25px] ">
            Oops! No vacancies at the moment.
          </h2>
        </div>
        <div className="mt-[24px]">
          <p className="  font-san_regular lg:text-[24px] text-[#373737] text-[16px] leading-[20px] lg:leading-[28px] tracking-[-0.25px] ">
            It looks like our tables are full right now. You can contact us{" "}
            <br className="sm:block hidden" /> later or drop a message at{" "}
            <a href="mailto:hr@thekreatr.com">hr@thekreatr.com</a>
          </p>
        </div>
        <div className="mt-[48px] sm:mt-[80px] lg:mt-[144px]">
          <h2 className=" font-san_book lg:text-[32px] text-[#373737] text-[32px] leading-[36px] lg:leading-[36px] tracking-[-0.25px] ">
            Meanwhile, you can explore our <br className="sm:block hidden" />{" "}
            work culture!
          </h2>
        </div>
        <div className="w-full flex mt-[24px]  lg:mt-[50px] text-[#373737]  justify-start items-center">
          <Link
            href="/about"
            className="h-[50px] sm:w-[350px] w-[100%]  lg:h-[77px] link-hover  lg:w-[637px] rounded-[90px] bg-[#DBDBDB] flex justify-between items-center pl-[12px]  lg:pl-[30px] pr-[12px]  lg:pr-[20px]"
          >
            <div className="text-[1rem] font-san_regular lg:text-[1.25rem]">
              Work culture
            </div>
            <div className=" rounded-[50%] w-[32px]  lg:w-[48px] h-[32px] lg:h-[48px] relative">
              <Image
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="absolute link-image"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersEmpty;
