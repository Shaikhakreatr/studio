"use client";

import Blogs from "../BlogListing/Blogs";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CountAnimation from "@/app/animations/count-numbers/CountAnimation";
import HomeWorksList from "../homeWorksList/HomeWorksList";
import Link from "next/link";
import BrandsLogo from "../BrandsLogo/BrandsLogo";
import ServiceSection from "../serviceSectionHome/ServiceSection";
import TestimonialSection from "../testimonialSection/TestimonialSection";
import HomeBlogList from "../HomeBlogList/HomeBlogList";
import CommunityPopUp from "../community-popup/CommunityPopUp";
import HeroVideo from "../HeroVideo/HeroVideo";

const HomePage = () => {
  const [shouldAnimateCounts, setShouldAnimateCounts] = useState(false);
  const [isCommunityPopUpVisible, setIsCommunityPopUpVisible] = useState(false);

  const countSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);

  useEffect(() => {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimateCounts(true);
            countObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (countSectionRef.current) {
      countObserver.observe(countSectionRef.current);
    }

    return () => {
      if (countSectionRef.current) {
        countObserver.unobserve(countSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const hasSeenPopUp = localStorage.getItem("hasSeenCommunityPopUp");
    if (!hasSeenPopUp) {
      const communityPopUpObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsCommunityPopUpVisible(true);
              localStorage.setItem("hasSeenCommunityPopUp", "true");
              communityPopUpObserver.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (serviceSectionRef.current) {
        communityPopUpObserver.observe(serviceSectionRef.current);
      }

      return () => {
        if (serviceSectionRef.current) {
          communityPopUpObserver.unobserve(serviceSectionRef.current);
        }
      };
    }
  }, []);

  const closeCommunityPopUp = () => {
    setIsCommunityPopUpVisible(false);
  };

  const someCounts = [
    { url: "", totalCount: "250+", title: "PROJECTS" },
    { url: "", totalCount: "15+", title: "COUNTRIES" },
    { url: "", totalCount: "10+", title: "SECTORS" },
  ];

  const [currentPageBlog, setCurrentPageBlog] = useState(1);
  const itemsPerPageBlog = 9;

  return (
    <>
      <div>
        <HeroVideo />
      </div>

      <div className="container mx-auto">
        <div className="lg:mt-[100px] relative sm:mt-[64px] sm:mx-[40px] mt-[48px] sm:mb-[90px] lg:mb-[140px] lg:mx-[84px] mx-[20px]">
          <div>
            <div className=" lg:text-[6.25rem] text-[3.5rem] leading-[55px] tracking-[-0.25px] text-[#373737]  lg:leading-[100px] font-san_medium sm:tracking-[-0.25px]">
              Creating legends,
              <br className="sm:block hidden" /> not just logos!
            </div>
            <p className="text-[#373737] font-san_regular text-[1rem] leading-[20px] tracking-[-0.25px] lg:text-[1.5rem] lg:leading-[28px] lg:mt-[48px] mt-[24px]">
              We craft brand stories that captivate and connect while{" "}
              <br className="sm:block hidden" /> transcending time and trends.{" "}
              <br className="sm:hidden" /> <br className="sm:hidden" /> Our
              creative approach combines <br className="sm:block hidden" />{" "}
              innovative designs with strategic thinking to elevate your brand
              and <br className="sm:block hidden" /> rewrite its narrative
              through impactful identities that resonate with{" "}
              <br className="sm:block hidden" /> your audience and drive
              engagement.
            </p>

            <div
              ref={countSectionRef}
              className="flex sm:justify-start  lg:gap-[32px] gap-[16px] lg:mt-[144px] mt-[60px]"
            >
              {someCounts.map((val, index) => (
                <div
                  key={index}
                  className="lg:h-[290px] lg:w-[403px] sm:h-[240px] sm:w-[240px] h-[149px] min-w-[30%] bg-[#DBDBDB] flex items-end rounded-[15px]"
                >
                  <div className="lg:m-[20px] flex flex-col gap-[7px] px-[9px] pb-[20px] sm:px-[14px] lg:p-0">
                    <CountAnimation
                      target={
                        shouldAnimateCounts
                          ? val.totalCount.replace("+", "")
                          : "0"
                      }
                    />
                    <div className="lg:text-[1rem] text-[.625rem] font-san_regular text-[#373737]  leading-[12px]">
                      {val.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="lg:mt-[144px] mt-[48px] sm:leading-[108%] tracking-[-1px] text-[#373737] text-[2.5rem] leading-[44px] font-san_medium lg:text-[3rem]">
                Our masterpieces
              </h2>
              <div>
                <HomeWorksList />
              </div>
              <div
                className={`fixed top-[50%] lg:top-[60%] xl:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 transition-opacity duration-500 ${
                  isCommunityPopUpVisible ? "block" : "hidden"
                }`}
              >
                <CommunityPopUp closePopUp={closeCommunityPopUp} />
              </div>
            </div>

            <div className="w-full flex mt-[58px]  lg:mt-0 text-[#373737]  justify-center items-center">
              <Link
                href="/works"
                className="h-[50px] sm:w-[350px] w-[100%]  lg:h-[77px] link-hover lg:mb-[144px] lg:w-[637px] rounded-[90px] bg-[#DBDBDB] flex justify-between items-center pl-[12px]  lg:pl-[30px] pr-[12px]  lg:pr-[20px]"
              >
                <div className="text-[1rem] font-san_regular lg:text-[1.25rem]">
                  Explore our works
                </div>
                <div className=" rounded-[50%] w-[32px]  lg:w-[48px] h-[32px] lg:h-[48px] relative">
                  <Image
                    layout="fill"
                    src={"/assets/images/dark_upper_arrow.svg"}
                    className="absolute link-image"
                    alt="arrow image"
                  />
                </div>
              </Link>
            </div>

            <div ref={serviceSectionRef}>
              <ServiceSection />
            </div>
          </div>
        </div>
      </div>
      <div>
        <BrandsLogo />
      </div>
      <div className="container mx-auto">
        <div className="lg:mt-[100px] relative sm:mt-[64px] sm:mx-[40px] mt-[48px] sm:mb-[90px] lg:mb-[140px] lg:mx-[84px] mx-[20px]">
          <div>
            <TestimonialSection />
          </div>

          <div>
            <h2 className="lg:mt-[144px] text-[40px] mt-[48px] sm:mt-[76px] sm:text-[30px] text-[#373737] leading-[44px] lg:leading-[108%] tracking-[-0.25px] font-san_medium lg:text-[3rem] mb-[38px]">
              Creative insights
            </h2>
            <div>
              <HomeBlogList
                currentPageBlog={1}
                itemsPerPageBlog={itemsPerPageBlog}
                limit={3}
              />
            </div>

            <div className="w-full flex justify-center  items-center mt-[90px] lg:mt-[72px] text-[#373737]">
              <Link
                href="/blogs"
                className="h-[50px] sm:w-[350px] w-[100%] mb-[48px] sm:mb-[70px] lg:h-[77px] link-hover lg:mb-[90px] lg:w-[637px] rounded-[90px] bg-[#DBDBDB] flex justify-between items-center pl-[12px]  lg:pl-[30px] pr-[12px]  lg:pr-[20px]"
              >
                <div className="text-[1rem] font-san_regular lg:text-[1.25rem]">
                  Explore more blogs
                </div>
                <div className=" rounded-[50%] w-[32px]  lg:w-[48px] h-[32px] lg:h-[48px] relative">
                  <Image
                    layout="fill"
                    src={"/assets/images/dark_upper_arrow.svg"}
                    className="absolute link-image"
                    alt="arrow image"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
