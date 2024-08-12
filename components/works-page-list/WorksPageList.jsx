"use client";
import React, { useState, useEffect } from "react";
import WorksListing from "../WorkListing/WorksList";
import Image from "next/image";
import Link from "next/link";
import PaginationButton from "../PrevBtn/PaginationButton";
import NextBtn from "../NextBtn/NextBtn";

const WorksPageList = () => {
  const [gridItems, setGridItems] = useState([]);
  const [loadData, setLoadData] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // Total items from backend
  const BACKEND_WORKS_LIST_URI = process.env.NEXT_PUBLIC_BACKEND_WORKS_LIST_URI;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch(
          `${BACKEND_WORKS_LIST_URI}?offset=${loadData}`,
        );
        console.log(loadData);

        const result = await response.json();
        const { data, length } = result;
        console.log("Fetched data:", data);
        setGridItems(data);
        setTotalItems(length); // Set the total number of items
      } catch (error) {
        console.error("Failed to fetch works:", error);
      }
    };
    fetchWorks();
  }, [loadData, BACKEND_WORKS_LIST_URI]); // Include BACKEND_WORKS_LIST_URI in the dependency array

  const [activeTab, setActiveTab] = useState("All"); // Initial active tab
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 7; // Number of items to show per page
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to page 1 when changing tabs
    setLoadData(0); // Reset loadData when changing tabs
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setLoadData((page - 1) * itemsPerPage); // Update loadData based on the new page
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    }
  };

  return (
    <div className="mx-[20px] mb-[48px] pt-[80px] sm:mx-[40px] sm:mb-[90px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[100px] lg:mt-[128px]">
      <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
        <h1 className="font-san_book text-[3.5rem] leading-[55px] tracking-[-1px] text-[#373737] sm:tracking-[-0.25px] lg:text-[6.25rem] lg:leading-[100px]">
          Our masterpieces
        </h1>
      </div>
      <div className="mt-[24px] font-san_regular text-[1rem] leading-[20px] tracking-[-0.25px] text-[#373737] sm:leading-[126%] lg:mt-[32px] lg:text-[1.5rem]">
        <p>
          Each project reflects our passion for creating unique,{" "}
          <br className="hidden sm:block" /> impactful brand identities that
          resonate with audiences.
        </p>
      </div>

      <div>
        <WorksListing
          gridItems={gridItems}
          activeTab={activeTab}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center justify-between sm:mt-[24px] lg:mt-[-40px]">
        <div className="relative">
          {currentPage > 1 && (
            <div onClick={() => handlePageChange(currentPage - 1)}>
              <PaginationButton />
            </div>
          )}
        </div>
        <div className="relative">
          {currentPage < totalPages && (
            <div onClick={() => handlePageChange(currentPage + 1)}>
              <NextBtn />
            </div>
          )}
        </div>
      </div>

      <div className="hidden items-center justify-center sm:mt-[64px] sm:flex lg:mt-[72px]">
        <h2 className="text-center font-san_book leading-[108%] tracking-[-0.7px] text-[#373737] sm:text-[28px] lg:text-[2rem]">
          Like our style? {`Let's`} get started.
        </h2>
      </div>
      <div className="mt-[40px] flex items-center justify-center sm:hidden">
        <h2 className="text-center font-san_book text-[1.25rem] leading-[24px] tracking-[-1px] text-[#373737]">
          Like our style? {`Let's`} get started.
        </h2>
      </div>
      <div className="mt-[50px] hidden w-full items-center justify-center sm:flex">
        <Link
          href="https://kreatr-frontend.vercel.app/"
          className="link-hover flex items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[30px] pr-[20px] sm:h-[56px] sm:w-[350px] lg:h-[77px] lg:w-[637px]"
        >
          <div className="font-san_regular tracking-[-0.7px] sm:text-[16px] lg:text-[20px]">
            {`Yes, I'm all in!`}
          </div>
          <div className="relative rounded-[50%] bg-primaryColor sm:h-[32px] sm:w-[32px] lg:h-[48px] lg:w-[48px]">
            <Image
              layout="fill"
              src={"/assets/images/dark_upper_arrow.svg"}
              className="link-image absolute"
            />
          </div>
        </Link>
      </div>
      <Link
        href="https://kreatr-frontend.vercel.app/"
        className="mt-[24px] flex h-[50px] min-w-[100%] items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[12px] pr-[12px] sm:hidden lg:h-[77px] lg:min-w-[637px] lg:pl-[20px] lg:pr-[20px]"
      >
        <div className="font-san_regular text-[1rem] lg:text-[1.25rem]">
          {`Yes, I'm all in!`}
        </div>
        <div className="relative h-[32px] w-[32px] rounded-[50%] lg:h-[48px] lg:w-[48px]">
          <Image
            alt="arrow image"
            layout="fill"
            src={"/assets/images/dark_upper_arrow.svg"}
            className="absolute"
          />
        </div>
      </Link>
    </div>
  );
};

export default WorksPageList;
