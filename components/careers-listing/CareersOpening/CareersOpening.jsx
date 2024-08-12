"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/loader/Loader";

const CareersOpening = () => {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BACKEND_CAREER_URI = process.env.NEXT_PUBLIC_BACKEND_CAREER_URI;

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await fetch(BACKEND_CAREER_URI);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCareerData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800); // Delay of 2 seconds
      }
    };

    fetchCareerData();
  }, [BACKEND_CAREER_URI]);

  const getTypeBackgroundColor = (type) => {
    if (type === "Full-time")
      return "bg-[#9DE29D] lg:bg-transparent lg:group-hover:bg-[#9DE29D]";
    if (type === "Part-time")
      return "bg-[#A0A9EB] lg:bg-transparent lg:group-hover:bg-[#A0A9EB]";
    return "bg-transparent";
  };

  const getEnvironmentBackgroundColor = (location) => {
    if (location === "In-office")
      return "bg-[#EAA2CD] lg:bg-transparent lg:group-hover:bg-[#EAA2CD]";
    if (location === "Remote")
      return "bg-[#75DBDB] lg:bg-transparent lg:group-hover:bg-[#75DBDB]";
    return "bg-transparent";
  };

  if (loading) return <Loader />; // Use the Loader component here
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto">
      <div className="mx-[20px] mb-[48px] pt-[80px] sm:mx-[40px] sm:mb-[90px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[140px] lg:mt-[128px]">
        <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
          <h1 className="font-san_book text-[56px] leading-[55px] tracking-[-1px] text-[#373737] sm:text-[60px] sm:leading-[100px] sm:tracking-[-0.25px] lg:text-[100px]">
            Join our
            <br className="sm:hidden" /> team
          </h1>
        </div>
        <div className="mt-[48px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:mt-[100px] lg:grid-cols-3 xl:gap-[31px]">
          {careerData.map((item, index) => (
            <Link
              href={`/careers/${item.id}`}
              key={index}
              className="group rounded-[15px] border border-[#373737] py-[40px] pl-[20px] pr-[20px] lg:h-[246px] lg:w-[350px] lg:pb-[30px] lg:pl-[20px] lg:pt-[20px] xl:min-w-[403px]"
            >
              <h1 className="text-wrap font-san_book text-[2rem] leading-[36px] tracking-[-0.25px] text-[#373737] sm:min-h-[104px] lg:text-[3rem] lg:leading-[108%]">
                {item.title}
              </h1>
              <div className="mt-[24px] flex items-center justify-start gap-[9px] lg:mt-[59px]">
                <div
                  className={`flex items-center justify-center gap-[6px] rounded-[30px] border border-[#373737] py-[9px] pl-[8px] pr-[11px] font-san_regular text-[.75rem] text-[#373737] ${getTypeBackgroundColor(
                    item.type,
                  )}`}
                >
                  <Image
                    height={11}
                    width={11}
                    alt="time image"
                    src="/assets/images/careers-page/time-img.svg"
                  />{" "}
                  {item.type}
                </div>
                <div
                  className={`flex items-center justify-center gap-[6px] rounded-[30px] border border-[#373737] py-[9px] pl-[8px] pr-[11px] font-san_regular text-[.75rem] text-[#373737] ${getEnvironmentBackgroundColor(
                    item.location,
                  )}`}
                >
                  <Image
                    height={11}
                    width={11}
                    alt="location image"
                    src="/assets/images/careers-page/location-img.svg"
                  />{" "}
                  {item.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className=" font-san_regular lg:mt-[72px] mt-[28px] text-[#373737]  text-center text-[1remx] leading-[18px]  sm:text-[1rem] lg:text-[1.75rem]">
            <p>
              Can’t find any suitable vacancy? Drop us a line at{" "}
              <Link className="text-blue-700" href="mailto:hr@thekreatr.com">
                hr@thekreatr.com
              </Link>{" "}
            </p>
          </div>
      </div>
    </div>
  );
};

export default CareersOpening;
