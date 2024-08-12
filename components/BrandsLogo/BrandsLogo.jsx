import React from "react";
import Link from "next/link";
import { useViewportSize } from "@mantine/hooks";
import { Marquee } from "@gfazioli/mantine-marquee";
import Image from "next/image";

const BrandsLogo = () => {
  const { width } = useViewportSize();
  const brands1 = [
    { url: "/assets/images/brands-logo/desktop/apv_white.svg" },
    { url: "/assets/images/brands-logo/desktop/blax_white.svg" },
    { url: "/assets/images/brands-logo/desktop/carmax_white.svg" },
    { url: "/assets/images/brands-logo/desktop/comm cafe_white.svg" },
    { url: "/assets/images/brands-logo/desktop/gcc_white.svg" },
    { url: "/assets/images/brands-logo/desktop/tattvam_white.svg" },
    { url: "/assets/images/brands-logo/desktop/vayasu_white.svg" },
  ];

  const brands2 = [
    { url: "/assets/images/brands-logo/desktop/kosher_white.svg" },
    { url: "/assets/images/brands-logo/desktop/kynd_white.svg" },
    { url: "/assets/images/brands-logo/desktop/madhur_white.svg" },
    { url: "/assets/images/brands-logo/desktop/skyline_white.svg" },
    { url: "/assets/images/brands-logo/desktop/meggit_white.svg" },
    { url: "/assets/images/brands-logo/desktop/tablon_white.svg" },
  ];

  const brandsMob1 = [
    { url: "/assets/images/brands-logo/mobile/apv_black.svg" },
    { url: "/assets/images/brands-logo/mobile/blax_black.svg" },
    { url: "/assets/images/brands-logo/mobile/carmax_black.svg" },
    { url: "/assets/images/brands-logo/mobile/comm cafe_black.svg" },
    { url: "/assets/images/brands-logo/mobile/gcc_black.svg" },
    { url: "/assets/images/brands-logo/mobile/tattvam_black.svg" },
    { url: "/assets/images/brands-logo/mobile/vayasu_black.svg" },
  ];

  const brandsMob2 = [
    { url: "/assets/images/brands-logo/mobile/kosher_black.svg" },
    { url: "/assets/images/brands-logo/mobile/kynd_black.svg" },
    { url: "/assets/images/brands-logo/mobile/madhur_black.svg" },
    { url: "/assets/images/brands-logo/mobile/skyline_black.svg" },
    { url: "/assets/images/brands-logo/mobile/meggit_black.svg" },
    { url: "/assets/images/brands-logo/mobile/tablon_black.svg" },
  ];

  return (
    <div className="flex flex-col justify-center items-center lg:mt-[144px] sm:mb-0 mb-[48px] sm:mt-[76px] mt-[48px]">
      <div className="font-san_medium text-[#373737]  ">
        <h2 className="lg:text-[4rem] sm:text-[46px] text-[1.5rem] font-san_medium sm:leading-[24px] text-center text-[#373737]  lg:leading-[64px] ">
          Size isn’t the measure,
        </h2>
        <h2 className="lg:text-[3rem] sm:text-[32px] text-[1rem] font-san_medium text-[#373737]  text-center  lg:leading-[52px] ">
          the impact is what counts.
        </h2>
      </div>
      {/* <div className="font-san_regular sm:mt-[15px] lg:mt-[24px]">
        <h4 className="text-center sm:block hidden text-[#373737]  text-[1.5rem]">
          A one-liner here
        </h4>
      </div> */}

      {/* brands animation section desktop */}
      <div className="w-full overflow-x-hidden  sm:flex hidden flex-col item-center justify-center">
        <div>
          <Marquee className="" w={width} mb={16} repeat={20} gap="113px">
            <div className="flex flex-col justify-center items-center">
              <div className="mt-[87px] flex justify-center lg:gap-x-[113px] gap-x-[90px] gap-y-[15px] lg:gap-y-[30px] ">
                {brands1.map((brand, index) => (
                  <div
                    key={index}
                    className={`lg:w-[182px] h-[130px] w-[130px]  lg:h-[182px]`}
                  >
                    <Image
                      src={brand.url}
                      alt={`Brand ${index}`}
                      layout="responsive"
                      width={182}
                      height={182}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Marquee>
          <Marquee
            className=""
            w={width}
            mb={16}
            repeat={20}
            reverse
            gap="113px"
          >
            <div className="flex flex-col   justify-center items-center">
              <div className="mt-[30px] flex justify-center lg:gap-x-[113px] gap-x-[90px] gap-y-[15px] lg:gap-y-[30px]">
                {brands2.map((brand, index) => (
                  <div
                    key={index}
                    className={`lg:w-[182px] h-[130px] w-[130px]  lg:h-[182px]`}
                  >
                    <Image
                      src={brand.url}
                      alt={`Brand ${index}`}
                      layout="responsive"
                      width={182}
                      height={182}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      {/* brands animation section mobile */}
      <div className="w-full overflow-x-hidden mx-auto sm:hidden flex flex-col  justify-center items-center">
        <Marquee w={width} repeat={20} gap="28px">
          <div className="flex flex-col   justify-center items-center">
            <div className="mt-[32px] flex justify-center  gap-x-[28px] gap-y-[18px]">
              {brandsMob1.map((brand, index) => (
                <div key={index} className={` h-auto w-[67px]`}>
                  <Image
                    src={brand.url}
                    alt={`Brand ${index}`}
                    layout="responsive"
                    width={67}
                    height={16}
                  />
                </div>
              ))}
            </div>
          </div>
        </Marquee>
        <Marquee w={width} repeat={20} gap="28px" reverse>
          <div className="flex flex-col   justify-center items-center">
            <div className="mt-[30px] flex justify-center gap-x-[28px] gap-y-[18px]">
              {brandsMob2.map((brand, index) => (
                <div key={index} className={` h-auto w-[67px]`}>
                  <Image
                    src={brand.url}
                    alt={`Brand ${index}`}
                    layout="responsive"
                    width={67}
                    height={16}
                  />
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsLogo;
