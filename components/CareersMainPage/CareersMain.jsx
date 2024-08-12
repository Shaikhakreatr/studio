import React from "react";
import Image from "next/image";
import Link from "next/link";

const CareersMain = ({ careerData }) => {
  const isDataAvailable =
    careerData &&
    careerData.title &&
    careerData.type &&
    careerData.location &&
    careerData.description &&
    careerData.responsibilities &&
    careerData.qualifications;

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }
  return (
    <div className="container">
      <div className=" lg:mt-[128px] lg:mx-[84px] sm:mt-[100px] pt-[80px] mx-[20px] sm:pt-0 sm:mx-[40px] sm:mb-[90px] lg:mb-[100px] mb-[48px]">
        <div className="lg:pt-[128px] sm:pt-[80px] pt-[41px]">
          <h1 className="font-san_book text-[3.5rem] lg:text-[6.25rem] text-[#373737]   sm:leading-[100px] sm:tracking-[-0.25px] leading-[55px] tracking-[-1px]">
            Join our team
          </h1>
        </div>
        <div className="lg:mt-[72px]  mt-[48px]">
          <div className="flex sm:flex-row flex-col items-start sm:items-center sm:justify-start sm:gap-y-0 gap-y-[24px] gap-x-[18px] ">
            <h4 className="font-san_medium  text-[#373737]  text-[1.5rem] capitalize   sm:text-[1.5rem]   lg:text-[2.0625rem] lg:leading-[126%] lg:tracking-[-0.25px]">
              {careerData.title}
            </h4>
            <div className="flex gap-[8px]">
              <div className="font-san_regular flex justify-center items-center   rounded-[24px] border border-[#2A2A2A] text-center text-[.75rem]  px-[14px] py-[9px] text-[#373737]  sm:text-[14px]    lg:text-[1.1875rem]">
                {careerData.type}
              </div>
              <div className="font-san_regular flex justify-center items-center  rounded-[24px] border border-[#2A2A2A] text-center text-[.75rem] px-[14px] py-[9px] sm:text-[14px]   text-[#373737]  lg:text-[1.1875rem]">
                {careerData.location}
              </div>
            </div>
          </div>
          <div className="lg:mt-[42px] mt-[30px]">
            <p className="font-san_regular text-[1rem] leading-[20px] tracking-[-0.25px] sm:mb-[20px] text-[#373737]  sm:text-[1rem]  lg:mb-[24px] lg:leading-[126%] lg:tracking-[-0.25px] lg:text-[1.125rem] whitespace-pre-line ">
              {careerData.description}
            </p>
            <div className="font-san_medium mt-[24px] mb-[24px] text-[#373737]  lg:leading-[126%] lg:tracking-[-0.25px] text-[1.125rem] sm:mb-[20px] sm:mt-0 sm:text-[18px]  lg:text-[1.75rem]">
              Responsibilities
            </div>
            <div>
              <p className="font-san_regular ml-5 text-[#373737]  lg:leading-[126%] lg:tracking-[-0.25px] whitespace-pre-line mt-[8px] list-disc text-[1rem] sm:mb-[20px] sm:ml-5 leading-[20px] tracking-[-0.25px] sm:mt-0 sm:text-[1rem]  lg:ml-10   lg:mb-[24px] lg:text-[1.125rem]  ">
                {careerData.responsibilities}
              </p>
            </div>

            <div className="font-san_medium lg:leading-[126%] mb-[24px] text-[#373737]  lg:tracking-[-0.25px] mt-[24px] text-[18px] sm:mb-[20px] sm:mt-0 sm:text-[18px] lg:mb-[24px] lg:text-[1.75rem]">
              Qualifications
            </div>

            <div>
              <p className="font-san_regular text-[#373737]  whitespace-pre-line lg:leading-[126%] lg:tracking-[-0.25px] ml-5 mt-[8px] list-disc text-[16px] sm:ml-5 sm:mt-0 leading-[20px] tracking-[-0.25px] sm:text-[16px] lg:ml-10  lg:text-[18px]   ">
                {careerData.qualifications}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center lg:mt-[72px] sm:mt-[48px] mt-[24px]">
            <Link
              href={careerData.url}
              className=" rounded-[90px] bg-[#DBDBDB] flex link-hover justify-between items-center lg:pr-[20px] lg:pl-[20px]  px-[17px] gap-x-[138px] h-[56px] w-[350px] lg:w-[637px] lg:h-[77px]  lg:gap-x-[255px]"
            >
              <div className="lg:text-[1.25rem] font-san_regular text-[1rem]">Apply now</div>
              <div className=" rounded-[50%] lg:w-[48px] lg:h-[48px] w-[32px] h-[32px] relative">
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
  );
};

export default CareersMain;
