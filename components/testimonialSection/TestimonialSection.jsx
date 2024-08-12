import React from "react";

const TestimonialSection = () => {
  return (
    <div className="lg:mt-[144px] sm:mt-[76px] hidden">
      {/* section 1 */}
      <div className="flex justify-between items-center">
        <div className="h-[379px] sm:h-[300px] xl:min-w-[403px] lg:min-w-[350px] sm:min-w-[320px] bg-[#EAA2CD] rounded-[15px]"></div>
        <div className="flex flex-col justify-start xl:min-w-[422px] lg:min-w-[372px] sm:min-w-[220px] h-[379px] sm:h-[300px] gap-[24px]">
          <h2 className="leading-[108%] text-[#373737]  font-san_medium text-center sm:text-[30px] lg:text-[3rem] ">
            Testimonials (need a better term)
          </h2>
          <p className="text-center sm:text-[16px] lg:text-[1.125rem] text-[#373737]  leading-[26px] font-san_regular">
            A small description of about 20 words. A small description of about
            20 words.
          </p>
        </div>
        <div className="h-[379px] sm:h-[300px] xl:min-w-[403px] lg:min-w-[350px] sm:min-w-[320px] bg-[#A0A9EB] rounded-[15px]"></div>
      </div>

      {/* section 2 */}
      <div className="flex justify-between items-center mt-[32px]">
        <div className="h-[379px] sm:h-[300px] xl:min-w-[403px] lg:min-w-[350px] sm:min-w-[290px]"></div>
        <div className="flex flex-col justify-start xl:min-w-[422px] lg:min-w-[372px] rounded-[15px] sm:min-w-[320px] bg-[#9DE29D] h-[379px] sm:h-[300px] gap-[24px]"></div>
        <div className="h-[379px] sm:h-[300px] xl:min-w-[403px] lg:min-w-[350px] sm:min-w-[290px]"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
