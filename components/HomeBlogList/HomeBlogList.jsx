"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Link from "next/link";
import Blogs from "../BlogListing/Blogs";
import "@mantine/carousel/styles.css";
import styles from "./HomeBlogList.module.css";

const HomeBlogList = ({ currentPageBlog, itemsPerPageBlog, limit }) => {
  const [blogData, setBlogData] = useState([]);
  const BACKEND_BLOGS_LISTING_URI =
    process.env.NEXT_PUBLIC_BACKEND_BLOGS_LISTING_URI;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(BACKEND_BLOGS_LISTING_URI);
        const result = await response.json();
        const { data } = result;
        setBlogData(data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };
    fetchBlogData();
  }, [BACKEND_BLOGS_LISTING_URI]);

  const blogsToShow = limit ? blogData.slice(0, limit) : blogData;

  return (
    <>
      <div className="hidden sm:block">
        <Blogs
          blogData={blogData}
          currentPageBlog={1}
          itemsPerPageBlog={itemsPerPageBlog}
          limit={3}
        />
      </div>
      <div className="mt-[32px] flex flex-col justify-center sm:hidden">
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
          {blogData.map((item, index) => (
            <Carousel.Slide key={index} h={320}>
              <Link href={`blogs/${item.id}`}>
                <div>
                  <Image
                    src={item.coverImg}
                    alt="related images"
                    className="h-[256px] w-[100%] rounded-[10px] object-cover object-center"
                    height={0}
                    width={0}
                    sizes="100vw"
                  />
                </div>
                <h3 className="mt-[20px] font-san_regular text-[16px] leading-[20px] tracking-[-0.25px]">
                  {item.title}
                </h3>
              </Link>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeBlogList;
