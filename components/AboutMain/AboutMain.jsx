"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdPlayCircle } from "react-icons/io";
import { MdPauseCircle } from "react-icons/md";

const AboutMain = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mx-[20px] mb-[48px] pt-[80px] sm:mx-[40px] sm:mb-[90px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[100px] lg:mt-[128px]">
      <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
        <h1 className="font-san_book text-[56px] leading-[55px] tracking-[-1px] text-[#373737] sm:text-[60px] sm:leading-[100px] sm:tracking-[-0.25px] lg:text-[100px]">
          We craft brands
          <br className="hidden lg:block" /> that tell your story.
        </h1>
      </div>
      <p className="mt-[24px] font-san_regular text-[1rem] leading-[20px] tracking-[-0.25px] text-[#373737] lg:mt-[48px] lg:text-[1.5rem] lg:leading-[28px]">
        We elevate your brand with innovative strategies and
        <br className="hidden lg:block" /> creative design, focusing on
        delivering value and creating <br className="hidden lg:block" /> brand
        experiences that build lasting connections.
      </p>

      {/* about image section */}
      <div className="mt-[24px] lg:mt-[72px]">
        <Image
          src="/assets/images/About Us.jpg"
          className="h-[256px] min-w-[100%] rounded-[15px] sm:h-auto"
          height={0}
          width={0}
          sizes="100vw"
          alt="about image"
        />
      </div>

      {/* button with arrow and text */}
      <div className="mt-[32px] flex w-full items-center justify-center text-[#373737] lg:mt-[72px]">
        <Link
          href="/contact"
          className="link-hover flex h-[50px] w-[100%] items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[12px] pr-[12px] sm:w-[350px] lg:h-[77px] lg:w-[637px] lg:pl-[30px] lg:pr-[20px]"
        >
          <div className="font-san_regular text-[1rem] lg:text-[1.25rem]">
            Kickstart your idea
          </div>
          <div className="relative h-[32px] w-[32px] rounded-[50%] lg:h-[48px] lg:w-[48px]">
            <Image
              layout="fill"
              src={"/assets/images/dark_upper_arrow.svg"}
              className="link-image absolute"
              alt="arrow"
            />
          </div>
        </Link>
      </div>

      {/* about kreatr studio and community */}
      <div className="mt-[48px] flex flex-col gap-y-[48px] lg:mt-[100px] lg:gap-y-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:w-[98%] lg:w-full">
            <h2 className="font-san_medium text-[40px] leading-[108%] tracking-[-0.25px] lg:text-[40px] xl:text-[48px]">
              Kreatr Studio
            </h2>
            <p className="mt-[24px] font-san_regular text-[16px] leading-[126%] tracking-[-0.25px] lg:text-[22px] xl:text-[24px]">
              Kreatr was born out of a love for fostering customer{" "}
              <br className="hidden lg:block" /> relationships and a passion for
              building brands that <br className="hidden lg:block" /> resonate
              deeply with their audiences. Our approach{" "}
              <br className="hidden lg:block" /> centers on cultivating strong
              client relationships, believing <br className="hidden lg:block" />{" "}
              that great design stems from deep understanding and{" "}
              <br className="hidden lg:block" /> communication. We strive to
              make a lasting impact <br className="hidden lg:block" /> through
              our innovative and empathetic design philosophy.
            </p>
          </div>
          <div className="mt-[24px] sm:col-span-1 sm:mt-0">
            <Image
              src="/assets/images/Office photo.png"
              height={0}
              width={0}
              sizes="100vw"
              alt="studio"
              className="h-auto min-w-full rounded-[15px] object-cover object-center lg:h-[290px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:w-[98%] lg:w-full">
            <h2 className="font-san_medium text-[40px] leading-[108%] tracking-[-0.25px] lg:text-[40px] xl:text-[48px]">
              Kreatr Community
            </h2>
            <p className="mt-[24px] font-san_regular text-[16px] leading-[126%] tracking-[-0.25px] lg:text-[22px] xl:text-[24px]">
              In addition to our branding services, we are dedicated to{" "}
              <br className="hidden lg:block" /> building a community for
              creatives, focusing on their <br className="hidden lg:block" />{" "}
              well-being and overall development. We believe in{" "}
              <br className="hidden lg:block" /> nurturing the creative spirit
              and supporting the holistic <br className="hidden lg:block" />{" "}
              growth of every individual in our community.
            </p>
            {/* button with arrow and text */}
            <div className="mt-[32px] hidden w-full items-center justify-start text-[#373737] sm:flex lg:mt-[22px] xl:mt-[24px]">
              <Link
                href="https://kreatr-frontend.vercel.app/"
                className="link-hover flex h-[50px] w-[100%] items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[12px] pr-[12px] sm:w-[350px] lg:h-[38px] lg:w-[310px] lg:pl-[20px] lg:pr-[10px] xl:h-[43px] xl:w-[358px]"
              >
                <div className="font-san_regular text-[1rem] lg:text-[1rem]">
                  Find your tribe
                </div>
                <div className="relative h-[32px] w-[32px] rounded-[50%] lg:h-[26px] lg:w-[26px]">
                  <Image
                    layout="fill"
                    src={"/assets/images/dark_upper_arrow.svg"}
                    className="link-image absolute object-cover object-center"
                    alt="arrow"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-[24px] sm:col-span-1 sm:mt-0">
            <Image
              src="/assets/images/community.jpg"
              height={0}
              width={0}
              sizes="100vw"
              alt="community"
              className="h-auto min-w-full rounded-[15px] object-cover object-center lg:h-[290px]"
            />
          </div>
          {/* button with arrow and text */}
          <div className="mt-[32px] w-full items-center justify-start text-[#373737] sm:hidden lg:mt-[64px]">
            <Link
              href="https://kreatr-frontend.vercel.app/"
              className="link-hover flex h-[50px] w-[100%] items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[12px] pr-[12px] sm:w-[350px] lg:h-[77px] lg:w-[637px] lg:pl-[30px] lg:pr-[20px]"
            >
              <div className="font-san_regular text-[1rem] lg:text-[1.25rem]">
                Find your tribe
              </div>
              <div className="relative h-[32px] w-[32px] rounded-[50%] lg:h-[48px] lg:w-[48px]">
                <Image
                  layout="fill"
                  src={"/assets/images/dark_upper_arrow.svg"}
                  className="link-image absolute object-cover object-center"
                  alt="arrow"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:w-[98%] lg:w-full">
            <h2 className="font-san_medium text-[40px] leading-[108%] tracking-[-0.25px] lg:text-[40px] xl:text-[48px]">
              Belief
            </h2>
            <p className="mt-[24px] font-san_regular text-[16px] leading-[126%] tracking-[-0.25px] lg:text-[22px] xl:text-[24px]">
              Our core values are creativity, innovation, and integrity.
              <br className="hidden lg:block" /> We believe in delivering
              exceptional branding solutions <br className="hidden lg:block" />{" "}
              that reflect these principles, ensuring your brand’s{" "}
              <br className="hidden lg:block" /> success and growth.
            </p>
          </div>
          <div className="mt-[24px] sm:col-span-1 sm:mt-0">
            <Image
              src="/assets/images/Belief_2.jpg"
              height={0}
              width={0}
              sizes="100vw"
              alt="belief"
              className="h-auto min-w-full rounded-[15px] object-cover object-center lg:h-[290px]"
            />
          </div>
        </div>
      </div>

      {/* about page video section */}
      <div className="relative mt-[40px] sm:mt-[100px] lg:mt-[128px]">
        <video
          ref={videoRef}
          loop
          playsInline
          autoPlay
          muted={false}
          className="min-h-[220px] w-full rounded-[15px] object-cover object-center lg:h-[615px]"
        >
          <source
            src="/assets/images/team-video/Final final.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute right-2 top-[82%] h-[60px] sm:right-5 sm:top-[86%] lg:right-5 lg:top-[89%]">
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <MdPauseCircle
                className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
                color="grey"
              />
            ) : (
              <IoMdPlayCircle
                className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
                color="grey"
              />
            )}
          </button>
        </div>
      </div>

      {/* button with arrow */}
      <div className="mt-[32px] flex w-full items-center justify-center text-[#373737] lg:mt-[72px]">
        <Link
          href="/careers"
          className="link-hover flex h-[50px] w-[100%] items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[12px] pr-[12px] sm:w-[350px] lg:h-[77px] lg:w-[637px] lg:pl-[30px] lg:pr-[20px]"
        >
          <div className="font-san_regular text-[1rem] lg:text-[1.25rem]">
            Join our team
          </div>
          <div className="relative h-[32px] w-[32px] rounded-[50%] lg:h-[48px] lg:w-[48px]">
            <Image
              layout="fill"
              src={"/assets/images/dark_upper_arrow.svg"}
              className="link-image absolute"
              alt="arrow"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutMain;
