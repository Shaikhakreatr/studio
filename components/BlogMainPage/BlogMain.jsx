"use client";

import React,{useState} from "react";
import Image from "next/image";
import Blogs from "../BlogListing/Blogs";
import Link from "next/link";

const BlogMain = () => {

  const [currentPageBlog, setCurrentPageBlog] = useState(1);
  const itemsPerPageBlog = 9;

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle sharing
  const handleShare = () => {
    const url = window.location.href; // Gets the current page URL
    const title = "Check out this blog!";
    const text = "I found this interesting blog and thought you might like it.";

    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .then(() => console.log("Thanks for sharing!"))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      console.log("Web Share API is not supported in your browser.");
      // You can also provide fallback sharing options here if needed
    }
  };

  return (
    <>
      <div className="lg:mt-[128px] sm:mt-[100px] sm:mx-[150px] sm:mb-[40px] pt-[80px] sm:pt-0 mx-[20px] lg:mx-[262px] ">
        <div className="lg:pt-[128px] sm:pt-[80px] pt-[41px]">
          <h1 className="font-san_book text-[#373737] leading-[55px] tracking-[-1px] text-[3.5rem] lg:text-[6.25rem] sm:leading-[100px] sm:tracking-[-0.25px]">
            This is the title of the blog
          </h1>
        </div>
        <div className="mt-[24px]">
          <h3 className="lg:text-[1.5rem] sm:text-[20px] text-[1rem] text-[#373737] leading-[126%] tracking-[-0.25px] font-san_regular">
            07 July, 2024
          </h3>
        </div>
        <div className="lg:my-[72px] sm:mt-[48px] mt-[30px]">
          <Image
            src="/assets/images/blogs-page/blog-main1.svg"
            alt="blog image"
            height={644}
            width={915}
            className="h-auto min-w-[100%] rounded-[15px]"
          />
          <p className="lg:mt-[40px] mt-[30px] text-[#373737] font-san_regular text-[1rem] lg:text-[1.125rem] sm:leading-[126%] leading-[20px] tracking-[-0.25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="lg:h-[453px] lg:min-w-[515px] xl:min-w-[915px] h-[200px] sm:h-[380px] min:w-[350px] rounded-[15px] bg-[#9DE29D] lg:my-[40px] my-[30px]"></div>
          <p className="font-san_regular lg:text-[1.125rem] text-[#373737] text-[1rem] leading-[20px] sm:leading-[126%] tracking-[-0.25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="lg:h-[453px] lg:min-w-[515px] xl:min-w-[915px] h-[200px] sm:h-[380px] min:w-[350px] rounded-[15px] bg-[#EAA2CD] lg:mt-[40px] mt-[30px]"></div>
        </div>
        <div className="sm:hidden mt-[30px]">
          <div className="border-b border-[#373737]"></div>
          <div className="mt-[24px] sm:hidden flex items-center justify-center gap-x-[16px]">
            <div
              onClick={handleShare}
              className="bg-[#DBDBDB] w-[153px] p-[12px] rounded-[90px] text-[#373737] flex items-center justify-between cursor-pointer"
            >
              <div className="font-san_regular text-[1rem]">Share</div>
              <div className="rounded-[50%] w-[30px] lg:w-[48px] h-[30px] lg:h-[48px] relative">
                <Image
                  alt="arrow image"
                  layout="fill"
                  src={"/assets/images/dark_upper_arrow.svg"}
                  className="absolute link-image"
                />
              </div>
            </div>
            <div
              onClick={scrollToTop}
              className="bg-[#DBDBDB] w-[153px] p-[12px] rounded-[90px] text-[#373737] flex items-center justify-between cursor-pointer"
            >
              <div className="font-san_regular text-[16px]">Go to top</div>
              <div className="rounded-[50%] w-[30px] lg:w-[48px] h-[30px] lg:h-[48px] relative">
                <Image
                  alt="arrow image"
                  layout="fill"
                  src={"/assets/images/dark_upper_arrow.svg"}
                  className="absolute link-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[48px] lg:mt-[144px] justify-center lg:mx-[86px] sm:mx-[40px] mx-[20px]">
        <h2 className="text-start lg:text-[3rem] text-[2.5rem] text-[#373737] font-san_medium leading-[108%] tracking-[-0.25px]">
          Also read
        </h2>
        <div className="sm:block hidden lg:mt-[38px] mt-[32px] mb-[32px] lg:mb-[100px]">
          <Blogs
            limit={3}
            currentPageBlog={1}
            itemsPerPageBlog={itemsPerPageBlog}
          />
        </div>
        <div className="sm:hidden lg:mt-[38px] mt-[32px] mb-[32px] lg:mb-[100px]">
          <Blogs
            limit={1}
            currentPageBlog={1}
            itemsPerPageBlog={itemsPerPageBlog}
          />
        </div>
        <div className="sm:hidden flex flex-col justify-center items-start mb-[48px] gap-[20px]">
          <h2 className="text-[2.5rem] font-san_medium leading-[108%] tracking-[-0.25px]">
            Looking to empower your brand?
          </h2>
          <p className="text-[1rem] font-san_regular leading-[20px] tracking-[-0.25px] ">
            A small CTA for the contact page.
          </p>
          <Link
            href="https://kreatr-frontend.vercel.app/"
            className="w-full lg:min-w-[637px] h-[50px] lg:h-[77px] rounded-[90px] bg-[#DBDBDB] link-hover flex justify-between items-center pl-[12px] lg:pl-[20px] pr-[12px] lg:pr-[20px]"
          >
            <div className="text-[1rem] lg:text-[1.25rem]">
              Check out more here
            </div>
            <div className="rounded-[50%] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] relative">
              <Image
                alt="arrow image"
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="absolute link-image"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
