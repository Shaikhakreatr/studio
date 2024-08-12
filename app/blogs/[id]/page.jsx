"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/loader/Loader"; // Import the Loader component

const BlogDetailsHero = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const BACKEND_BLOGS_LISTING_URI = process.env.NEXT_PUBLIC_BACKEND_BLOGS_LISTING_URI;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_BLOGS_LISTING_URI}/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogData(data.data); // Store the fetched data

        // Hide the loader after 1.4 seconds
        setTimeout(() => setLoading(false), 1400);
      } catch (error) {

        setLoading(false); // Hide the loader if there is an error
      }
    };

    fetchData();
  }, [id, BACKEND_BLOGS_LISTING_URI]);

  const parseParagraphText = (text) => {
    // Convert Markdown-style links to HTML links
    return text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  };

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

  if (loading) {
    return <Loader />; // Display Loader while data is loading
  }

  return (
    <div>
      <div>
        {blogData ? (
          <>
            <div className="lg:mt-[128px] sm:mt-[100px] sm:mx-[150px] sm:mb-[40px] pt-[80px] sm:pt-0 mx-[20px] lg:mx-[262px] ">
              <div className="lg:pt-[128px] sm:pt-[80px] pt-[41px]">
                <h1 className="font-san_book text-[#373737] leading-[48px] tracking-[-1px] text-[2.625rem] lg:text-[4rem] sm:leading-[108%] sm:tracking-[-0.25px]">
                  {blogData.title} {/* Default text for debugging */}
                </h1>
                <div className="lg:text-[1.5rem] sm:text-[20px] text-[1rem] text-[#373737] mt-[24px] leading-[126%] tracking-[-0.25px] font-san_regular">
                  {blogData.date}
                </div>
                <div className="lg:mt-[72px] sm:mt-[48px] mt-[30px]">
                  <Image
                    src={blogData.coverImg}
                    height={0}
                    width={0}
                    sizes="100vw"
                    alt="Blog Cover Image"
                    className="h-auto min-w-[100%] object-cover object-center rounded-[15px]"
                  />
                </div>
                <div className="mt-[40px]">
                  {blogData.blogsDetails.map((detail, index) => {
                    if (detail.tagType === "h1") {
                      return (
                        <h1
                          key={index}
                          className={`${detail.class} font-san_medium my-[24px] text-[#373737] lg:text-[24px] text-[18px]`}
                        >
                          {detail.value}
                        </h1>
                      );
                    } else if (detail.tagType === "h2") {
                      return (
                        <h2
                          key={index}
                          className={`${detail.class} font-san_medium my-[24px] lg:text-[24px] text-[18px] text-[#373737]`}
                        >
                          {detail.value}
                        </h2>
                      );
                    } else if (detail.tagType === "p") {
                      return (
                        <p
                          key={index}
                          className={`${detail.class} font-san_regular whitespace-pre-line lg:text-[1.125rem] text-[#373737] text-[1rem] leading-[20px] sm:leading-[126%] tracking-[-0.25px] `}
                          dangerouslySetInnerHTML={{
                            __html: parseParagraphText(detail.value),
                          }}
                        ></p>
                      );
                    } else if (detail.tagType === "images") {
                      return (
                        <>
                        <Image
                          key={index}
                          height={0}
                          width={0}
                          sizes="100vw"
                          src={detail.value}
                          alt="blog images"
                          className={`${detail.class} object-cover object-center h-auto min-w-[100%] rounded-[15px] lg:my-[40px] my-[30px]`}
                        />
                        </>
                      );
                    }
                    return null; // Return null for unhandled tag types
                  })}
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
                      <div className="font-san_regular text-[16px]">
                        Go to top
                      </div>
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
            </div>

            {/* Also read section */}
            {blogData.suggestions && blogData.suggestions.length > 0 && (
              <div className="w-full">
                <div className="flex flex-col mt-[48px] lg:mt-[144px] justify-center lg:mx-[86px] sm:mx-[40px] mx-[20px] ">
                  <h2 className="text-start lg:text-[3rem] text-[2.5rem] text-[#373737] font-san_medium leading-[108%] tracking-[-0.25px]">
                    Also read
                  </h2>
                  <div className="sm:block hidden lg:mt-[38px] mt-[32px] mb-[32px] lg:mb-[100px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-x-[32px] sm:gap-x-[24px] sm:gap-y-[48px] lg:gap-y-[72px] gap-y-[24px]">
                      {blogData.suggestions.map((blog) => (
                        <Link
                          href={`/blogs/${blog.id}`}
                          key={blog.id}
                          className="sm:gap-y-[20px] gap-y-[20px] lg:gap-y-[30px] flex flex-col"
                        >
                          <Image
                            src={blog.coverImg}
                            alt={blog.title}
                            height={294}
                            width={403}
                            className="lg:h-[294px] object-cover object-center xl:min-w-[403px] rounded-[15px] lg:min-w-[350px] h-[256px] w-[350px]"
                          />
                          <h2 className="lg:text-[24px] xl:w-[80%] sm:text-[20px] text-[16px] leading-[20px] tracking-[-0.25px] sm:leading-[108%] text-[#373737] font-san_book">
                            {blog.title}
                          </h2>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="sm:hidden lg:mt-[38px] mt-[32px] mb-[32px] lg:mb-[100px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-x-[32px] sm:gap-x-[24px] sm:gap-y-[48px] lg:gap-y-[72px] gap-y-[24px]">
                      {blogData.suggestions.map((blog) => (
                        <Link
                          href={`/blogs/${blog.id}`}
                          key={blog.id}
                          className="sm:gap-y-[20px] gap-y-[20px] lg:gap-y-[30px] flex flex-col"
                        >
                          <Image
                            src={blog.coverImg}
                            alt={blog.title}
                            height={294}
                            width={403}
                            className="lg:h-[294px] object-cover object-center xl:min-w-[403px] rounded-[15px] lg:min-w-[350px] h-[256px] w-[350px]"
                          />
                          <h2 className="lg:text-[24px] sm:text-[20px] text-[16px] leading-[20px] tracking-[-0.25px] sm:leading-[108%] text-[#373737] font-san_book">
                            {blog.title}
                          </h2>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>No blog data available</p> // Debugging message if no data
        )}
      </div>
    </div>
  );
};

export default BlogDetailsHero;
