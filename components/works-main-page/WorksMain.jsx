"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./WorksMain.module.css";
import CarouselWorks from "../worksMainCarousel/CarouselWorks";

const WorksMain = ({ gridItems }) => {
  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  const getGridItemSize = (index) => {
    const sizeClasses = [
      "xl:min-w-[1273px] lg:w-[1095px] lg:h-[562px] sm:w-[700px] sm:h-[430px] h-[100%] w-[100%]",
      "xl:min-w-[526px] lg:w-[463px] lg:h-[522px] h-[100%] sm:w-[300px] w-[100%]",
      "xl:min-w-[714px] lg:w-[600px] lg:h-[522px] sm:w-[380px] h-[100%] w-[100%]",
      "xl:min-w-[714px] lg:w-[600px] lg:h-[522px] sm:w-[380px] h-[100%] w-[100%]",
      "xl:min-w-[526px] lg:w-[463px] lg:h-[522px] sm:w-[300px] h-[100%] w-[100%]",
    ];
    return sizeClasses[index % sizeClasses.length];
  };

  const isVideo = (url) => url?.endsWith(".mp4");

  const renderGridItems = () => {
    let finalGrid = [];
    let row = [];
    const rowConfigs = [1, 2, 2];
    let configIndex = 0;
    let itemsInCurrentRow = 0;

    if (!gridItems?.images || !Array.isArray(gridItems?.images)) {
      return null;
    }

    for (let i = 0; i < gridItems?.images.length; i++) {
      const sizeClass = getGridItemSize(i);
      const item = gridItems?.images[i];

      row.push(
        <div key={i}>
          {isVideo(item) ? (
            <video
              className={`rounded-[15px] object-cover min-h-[370px] object-center flex items-end sm:mb-0 mb-[20px] ${sizeClass}`}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item} type="video/mp4" />
            </video>
          ) : (
            <Image
              alt="works image"
              className={`rounded-[15px] object-cover min-h-[370px] object-center flex items-end sm:mb-0 mb-[20px] ${sizeClass}`}
              height={0}
              width={0}
              sizes="100vw"
              src={item}
            />
          )}
        </div>
      );

      itemsInCurrentRow++;

      if (itemsInCurrentRow === rowConfigs[configIndex]) {
        finalGrid.push(
          <div
            className="sm:flex w-full lg:gap-[32px] sm:gap-[24px] sm:mt-[32px]"
            key={configIndex}
          >
            {row}
          </div>
        );
        row = [];
        itemsInCurrentRow = 0;
        configIndex = (configIndex + 1) % rowConfigs.length;
      }
    }

    if (row.length !== 0) {
      finalGrid.push(
        <div
          className="sm:flex sm:gap-[24px] lg:gap-[32px] sm:mt-[32px]"
          key={configIndex}
        >
          {row}
        </div>
      );
    }

    return finalGrid;
  };

  // Function to render cover image or video
  const renderCoverMedia = () => {
    if (!gridItems?.coverImg) return null;

    return isVideo(gridItems.coverImg) ? (
      <video
        className="object-cover object-center h-[794px] w-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={gridItems.coverImg} type="video/mp4" />
      </video>
    ) : (
      <Image
        className="object-cover object-center h-[794px] w-full"
        src={gridItems.coverImg}
        alt="cover image"
        layout="fill"
      />
    );
  };

  return (
    <>
      <div className="lg:mt-[90px] xl:mt-[128px] sm:mt-[100px] pt-[70px] sm:pt-0">
        <div className="lg:h-[752px] lg:pt-[0px] xl:pt-[0px] sm:pt-[0px] pt-[41px] h-[794px] min-w-full relative">
          {renderCoverMedia()}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="lg:mt-[100px] sm:mt-[64px] sm:mx-[40px] sm:mb-[90px] mt-[48px] mx-[20px] lg:mx-[84px] lg:mb-[150px] mb-[68px]">
          <div className="sm:grid sm:grid-cols-3">
            <div>
              <h3 className="font-san_book pt-[20px] sm:mt-0 text-[#373737] text-[2.625rem] leading-[40px] tracking-[-1px] lg:text-[4rem] sm:leading-[108%] sm:tracking-[-0.25px]">
                {gridItems?.title}
              </h3>
              <div className="font-san_regular sm:hidden flex justify-start items-center mt-[20px] gap-[6px] text-[.625rem] text-[#373737]">
                <div className="border border-[#373737] px-[8px] py-[6px] rounded-[31px]">
                  {gridItems?.industry}
                </div>
                <div className="border border-[#373737] px-[8px] py-[6px] rounded-[31px]">
                  {gridItems?.location}
                </div>
              </div>
              <p className="font-san_regular text-[#373737] text-[1.125rem] mb-[20px] lg:mb-[24px] leading-[24px] sm:leading-[126%] mt-[24px] lg:mt-[42px] tracking-[-0.25px]">
                {gridItems?.about}
              </p>
              {gridItems?.websiteLink ? (
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={gridItems?.websiteLink}
                  className="font-san_regular text-[1rem] lg:text-[1.125rem] text-[#373737] leading-[24px] tracking-[-0.25px]"
                >
                  <div className="border-b border-[#373737] w-fit">Website</div>
                </Link>
              ) : (
                <p className="font-san_regular text-[1rem] lg:text-[1.125rem] text-[#373737] leading-[24px] tracking-[-0.25px]">
                  No website available
                </p>
              )}
            </div>
            <div className="sm:block hidden"></div>
            <div className="sm:grid hidden lg:grid-rows-2 xl:w-[80%] sm:grid-rows-3 ">
              <div className="sm:row-span-1"></div>
              <div className="flex flex-col sm:row-span-2 gap-y-[18px]">
                <div className="border-b border-[#373737]"></div>
                <p className="text-[1.125rem] text-[#373737] font-san_regular tracking-[-0.25px]">
                  {gridItems?.industry}
                </p>
                <div className="border-b border-[#373737]"></div>
                <p className="text-[1.125rem] text-[#373737] font-san_regular tracking-[-0.25px]">
                  {gridItems?.location}
                </p>
                <div className="border-b border-[#373737]"></div>
              </div>
            </div>
          </div>
          <div className="container lg:mt-[76px] mt-[24px] sm:block flex flex-col justify-center items-center">
            {renderGridItems()}
          </div>
          <div className="lg:my-[72px] sm:my-[48px]">
            <p className="text-[1.125rem] text-start sm:text-center text-[#373737] leading-[24px] font-san_regular sm:leading-[126%] tracking-[-0.25px]">
              {gridItems?.copyRightText}
            </p>
          </div>

          {/* Also check out section */}
          {gridItems?.suggestions && gridItems?.suggestions.length > 0 && (
            <div className="mt-[48px] sm:mt-0">
              <h1 className="lg:text-[3rem] text-[2.5rem] text-[#373737] font-san_medium leading-[108%] tracking-[-0.25px] ">
                Also check out
              </h1>
              <div className="lg:mt-[40px] mt-[32px] sm:flex justify-start items-center sm:gap-[24px] lg:gap-[32px]">
                <div>
                  {isLargeScreen ? (
                    <CarouselWorks gridItems={gridItems?.suggestions} />
                  ) : (
                    <Carousel
                      withIndicators
                      withControls={false}
                      align={"center"}
                      draggable={true}
                      classNames={{
                        indicators: styles.carouselIndicators,
                        indicator: styles.carouselIndicator,
                        indicatorActive: styles.carouselIndicatorActive,
                      }}
                    >
                      {gridItems?.suggestions.map((item, index) => (
                        <Carousel.Slide key={index} h={300}>
                          {isVideo(item.coverImg) ? (
                            <Link href={`/works/${item.id}`}>
                              <video
                                className="rounded-[10px] h-[300px] w-[100%] object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={item.coverImg} type="video/mp4" />
                              </video>
                            </Link>
                          ) : (
                            <Link href={`/works/${item.id}`}>
                              <Image
                                src={item.coverImg}
                                alt="related images"
                                className="rounded-[10px] h-[300px] w-[100%] object-cover"
                                height={0}
                                width={0}
                                sizes="100vw"
                              />
                            </Link>
                          )}
                        </Carousel.Slide>
                      ))}
                    </Carousel>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorksMain;
