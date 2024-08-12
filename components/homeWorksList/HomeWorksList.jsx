import React, { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Link from "next/link";
import "@mantine/carousel/styles.css";
import styles from "./HomeWorkList.module.css";

const HomeWorksList = ({ activeTab, currentPage, itemsPerPage }) => {
  const [gridItems, setGridItems] = useState([]);
  const BACKEND_WORKS_LISTING_URI =
    process.env.NEXT_PUBLIC_BACKEND_WORKS_LISTING_URI;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch(BACKEND_WORKS_LISTING_URI);
        const result = await response.json();
        const { data } = result;
        setGridItems(data);
      } catch (error) {
        console.error("Failed to fetch works:", error);
      }
    };
    fetchWorks();
  }, [BACKEND_WORKS_LISTING_URI]);

  const isVideo = (url) => url?.endsWith(".mp4");

  const getGridItemSizeClass = (index) => {
    const sizeClasses = [
      `xl:min-w-[714px] lg:w-[595px] sm:w-[100%] lg:h-[522px] h-[370px]`,
      `xl:min-w-[526px] lg:w-[460px] sm:w-[100%] lg:h-[522px] h-[370px]`,
      `xl:min-w-[526px] lg:w-[460px] sm:w-[100%] lg:h-[522px] h-[370px]`,
      `xl:min-w-[714px] lg:w-[595px] sm:w-[100%] lg:h-[522px] h-[370px]`,
      `xl:min-w-[1273px] lg:h-[633px] lg:w-[1090px] sm:w-[690px] sm:h-[430px] h-[370px] w-[100%]`,
    ];
    return sizeClasses[index % sizeClasses.length];
  };

  const renderedGrid = () => {
    let finalGrid = [];
    let row = [];
    const rowConfigs = [2, 2, 1]; // Number of columns in each row
    let configIndex = 0;
    let itemsInCurrentRow = 0;

    for (let i = 0; i < gridItems?.length; i++) {
      const sizeClass = getGridItemSizeClass(i);
      const item = gridItems[i];

      row.push(
        <Link href={`/works/${item.id}`} className="relative" key={i}>
          {isVideo(item.coverImg) ? (
            <video
              className={`mb-[20px] flex items-end rounded-[15px] object-cover object-center sm:mb-0 ${sizeClass} tags-container`}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.coverImg} type="video/mp4" />
            </video>
          ) : (
            <Image
              alt="work listing images"
              src={item.coverImg}
              className={`mb-[20px] flex items-end rounded-[15px] object-cover object-center sm:mb-0 ${sizeClass} tags-container`}
              height={0}
              width={0}
              sizes="100vw"
            />
          )}
          {/* Optional tags rendering code */}
          <div className="absolute top-[90%] mb-[16px] ml-[20px] flex gap-[8px] lg:mb-[30px]">
            {item.tags.filter(Boolean).map((tag, index) => (
              <div
                key={index}
                className="tag rounded-[31px] bg-white flex justify-center items-center text-center px-[7px] py-[6px] font-san_regular text-[8px] lg:px-[8px] lg:py-[7px] lg:text-[10px]"
              >
                {tag}
              </div>
            ))}
          </div>
        </Link>,
      );

      itemsInCurrentRow++;

      if (itemsInCurrentRow === rowConfigs[configIndex]) {
        finalGrid.push(
          <div
            className="w-full sm:flex sm:gap-[24px] lg:gap-[32px]"
            key={configIndex}
          >
            {row}
          </div>,
        );
        row = [];
        itemsInCurrentRow = 0;
        configIndex = (configIndex + 1) % rowConfigs.length;
      }
    }

    // Handle remaining items in the last row if any
    if (row.length !== 0) {
      finalGrid.push(
        <div
          className="w-full sm:flex sm:gap-[24px] lg:gap-[32px]"
          key={configIndex}
        >
          {row}
        </div>,
      );
    }

    return finalGrid;
  };

  return (
    <>
      <div className="hidden sm:block">
        <div className="container mt-[24px] flex flex-col sm:mt-[36px] sm:gap-[24px] lg:mb-[72px] lg:mt-[50px] lg:gap-[32px]">
          {renderedGrid()}
        </div>
      </div>
      <div className="mt-[32px] sm:hidden">
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
          {gridItems?.map((item, index) => (
            <Carousel.Slide key={index} h={300}>
              <Link href={`/works/${item.id}`}>
                <div className="relative">
                  {isVideo(item.coverImg) ? (
                    <video
                      className="h-[300px] w-[100%] rounded-[10px] object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={item.coverImg} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.coverImg}
                      alt="related images"
                      className="h-[300px] w-[100%] rounded-[10px] object-cover"
                      height={0}
                      width={0}
                      sizes="100vw"
                    />
                  )}
                  {/* Optional tags rendering code */}
                  {/* <div className="absolute bottom-4 left-4 flex gap-[8px]">
                    {item.tags.filter(Boolean).map((tag, idx) => (
                      <div
                        key={idx}
                        className="px-[8px] py-[6px] text-[10px] bg-white rounded-[31px]"
                      >
                        {tag}
                      </div>
                    ))}
                  </div> */}
                </div>
              </Link>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeWorksList;
