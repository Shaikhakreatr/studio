import React from "react";
import FormSection from "./form-section/FormSection";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="mx-[20px] mb-[50px] pt-[80px] sm:mx-[40px] sm:mb-[90px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[179px] lg:mt-[128px]">
      <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
        <h1 className="font-san_book text-[3.5rem] leading-[100px] tracking-[-1px] text-[#373737] sm:tracking-[-0.25px] lg:text-[6.25rem]">
          Get in touch
        </h1>
      </div>
      <div className="mt-[30px] grid grid-cols-1 sm:mt-[48px] sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-2">
        <div className="w-full">
          <FormSection />
        </div>
        <div className="mt-[48px] flex w-full sm:mt-0 lg:mt-0">
          <div className="hidden w-full sm:block lg:w-[50%]"></div>
          <div className="flex w-full flex-col gap-[18px] lg:w-[50%] lg:gap-[24px]">
            <h3 className="font-san_book text-[1rem] leading-[108%] tracking-[-0.25px] text-[#373737] opacity-[50%] lg:text-[1.5rem]">
              This is where we work from.
            </h3>
            <p className="font-san_regular text-[1rem] leading-[108%] tracking-[-0.25px] text-[#373737] lg:text-[1.25rem]">
              18/1, Shariff Square, 1st Block Koramangala, Bengaluru, Karnataka
              (560034)
            </p>
            <div className="border-b border-[#373737]"></div>
            <div className="flex flex-col gap-[10px] font-san_regular text-[1rem] leading-[108%] tracking-[-0.25px] text-[#373737] lg:gap-[12px] lg:text-[1.25rem]">
              <Link href="mailto:studio@thekreatr.com">
                studio@thekreatr.com
              </Link>
              <Link href="tel:+91 72040 04953"> +91 72040 04953</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
