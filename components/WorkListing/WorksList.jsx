"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WorksList = ({ activeTab, currentPage, itemsPerPage, gridItems }) => {
  // Filter items based on active tab
  const filteredItems = gridItems?.filter((item) => {
    if (activeTab === "All") return true; // Show all items
    return item.tags.includes(activeTab); // Check if any tag matches
  });

  // Paginate the items
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const itemsToShow = filteredItems?.slice(indexOfFirstItem, indexOfLastItem);

  const getGridItemSizeClass = (index) => {
    const sizeClasses = [
      `xl:min-w-[714px] lg:w-[595px] sm:w-[100%] lg:h-[522px] h-[370px] w-[100%]`,
      `xl:min-w-[526px] lg:w-[460px] sm:w-[100%] lg:h-[522px] h-[370px] w-[100%]`,
      `xl:min-w-[526px] lg:w-[460px] sm:w-[100%] lg:h-[522px] h-[370px] w-[100%]`,
      `xl:min-w-[714px] lg:w-[595px] sm:w-[100%] lg:h-[522px] h-[370px] w-[100%]`,
      `xl:min-w-[1273px] lg:h-[633px] lg:w-[1090px] sm:w-[690px] sm:h-[430px] h-[370px] w-[100%]`,
    ];
    return sizeClasses[index % sizeClasses.length];
  };

  const isVideo = (url) => {
    return url?.endsWith(".mp4");
  };

  const renderedGrid = () => {
    let finalGrid = [];
    let row = [];
    const rowConfigs = [2, 2, 1]; // Number of columns in each row
    let configIndex = 0;
    let itemsInCurrentRow = 0;

    for (let i = 0; i < gridItems.length; i++) {
      const sizeClass = getGridItemSizeClass(i);
      const item = gridItems[i];
      const tags = item.tags.filter(Boolean);

      row.push(
        <Link href={`/works/${item.id}`} className="relative" key={i}>
          {isVideo(item.coverImg) ? (
            <video
              className={`rounded-[15px] object-cover object-center mb-[20px] sm:mb-0 flex items-end ${sizeClass}`}
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
              src={`${item.coverImg}`}
              priority
              className={`rounded-[15px] object-cover object-center mb-[20px] sm:mb-0 flex items-end ${sizeClass}`}
              height={0}
              width={0}
              sizes="100vw"
            />
          )}
          <div className="flex ml-[20px] absolute top-[90%] lg:mb-[30px] mb-[16px] gap-[8px]">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="lg:px-[8px] lg:py-[7px] flex justify-center items-center text-center font-san_regular px-[7px] py-[6px] text-[8px] lg:text-[10px] tag bg-white rounded-[31px]"
              >
                {tag}
              </div>
            ))}
          </div>
        </Link>
      );

      itemsInCurrentRow++;

      if (itemsInCurrentRow === rowConfigs[configIndex]) {
        finalGrid.push(
          <div
            className="sm:flex lg:gap-[32px] sm:gap-[24px] w-full"
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

    // Handle remaining items in the last row if any
    if (row.length !== 0) {
      finalGrid.push(
        <div
          className="sm:flex lg:gap-[32px] sm:gap-[24px] w-full"
          key={configIndex}
        >
          {row}
        </div>
      );
    }

    return finalGrid;
  };

  return (
    <section>
      <div className="container mt-[24px] sm:mt-[36px] lg:mt-[50px] lg:mb-[72px] flex flex-col lg:gap-[32px] sm:gap-[24px]">
        {renderedGrid()}
      </div>
    </section>
  );
};

export default WorksList;
