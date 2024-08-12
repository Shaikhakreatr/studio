"use client";

import React, { useState, useEffect } from "react";
import Blogs from "../BlogListing/Blogs";
import Image from "next/image";
import PaginationButton from "../PrevBtn/PaginationButton";
import NextBtn from "../NextBtn/NextBtn";

const BlogsPageList = () => {
  const [blogData, setBlogData] = useState([]);
  const BACKEND_BLOGS_LISTING_URI =
    process.env.NEXT_PUBLIC_BACKEND_BLOGS_LISTING_URI;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(BACKEND_BLOGS_LISTING_URI);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const { data } = result;
        
        setBlogData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogData();
  }, [BACKEND_BLOGS_LISTING_URI]);

  const [currentPageBlog, setCurrentPageBlog] = useState(1);
  const itemsPerPageBlog = 9; // For demonstration, keeping it small, adjust as needed
  const totalItems = blogData?.length; // This should be dynamic based on your actual blog data

  const totalPages = Math.ceil(totalItems / itemsPerPageBlog); // Calculate total pages

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPageBlog(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    }
  };

  return (
    <div className="mx-[20px] mb-[48px] pt-[80px] sm:mx-[40px] sm:mb-[90px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[100px] lg:mt-[128px]">
      <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
        <h1 className="font-san_book text-[3.5rem] leading-[55px] tracking-[-1px] text-[#373737] sm:leading-[100px] sm:tracking-[-0.25px] lg:text-[6.25rem]">
          Creative insights
        </h1>
      </div>
      {/* <div className="mt-[24px]">
        <p className="font-san_regular lg:text-[1.5rem] text-[1rem] leading-[20px] sm:leading-[126%] tracking-[-0.25px]">
          This is a small description for the works page.
        </p>
      </div> */}
      <div className="mt-[48px] flex items-center justify-center lg:mt-[72px]">
        <Blogs
          blogData={blogData}
          currentPageBlog={currentPageBlog}
          itemsPerPageBlog={itemsPerPageBlog}
        />
      </div>
      {/* desktop navigation */}
      <div className="flex items-center justify-between sm:mt-[24px] lg:mt-[24px]">
        <div className="relative">
          {currentPageBlog > 1 && (
            <div onClick={() => handlePageChange(currentPageBlog - 1)}>
              <PaginationButton />
            </div>
          )}
        </div>
        <div className="relative">
          {currentPageBlog < totalPages && (
            <div onClick={() => handlePageChange(currentPageBlog + 1)}>
              <NextBtn />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mt-[24px] flex items-center justify-center gap-x-[16px] sm:hidden">
        {currentPageBlog > 1 && (
          <div
            onClick={() => handlePageChange(currentPageBlog - 1)}
            className="flex h-[56px] w-[153px] cursor-pointer items-center justify-between rounded-[90px] bg-[#DBDBDB] px-[16px]"
          >
            <div className="relative h-[32px] w-[32px] rounded-[50%] bg-primaryColor lg:h-[48px] lg:w-[48px]">
              <Image
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="link-image absolute"
              />
            </div>
            <div className="font-san_regular text-[16px] text-[#373737]">
              Previous
            </div>
          </div>
        )}
        {currentPageBlog < totalPages && (
          <div
            onClick={() => handlePageChange(currentPageBlog + 1)}
            className="flex h-[56px] w-[153px] cursor-pointer items-center justify-between rounded-[90px] bg-[#DBDBDB] px-[16px]"
          >
            <div className="font-san_regular text-[16px] text-[#373737]">
              Next
            </div>
            <div className="relative h-[32px] w-[32px] rounded-[50%] bg-primaryColor lg:h-[48px] lg:w-[48px]">
              <Image
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="link-image absolute"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPageList;
