"use client";
import Link from "next/link";
import React, { useState } from "react";
import Privacy from "./privacy/Privacy";
import TermsAndConditions from "./terms&conditions/TermsAndConditions";

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState("privacy"); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="lg:mt-[128px] sm:mt-[100px] sm:mx-[40px] mx-[20px] sm:mb-[90px] pt-[80px] sm:pt-0 ] lg:mx-[84px] mb-[48px] lg:mb-[179px]">
      <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
        <h1 className="font-san_book text-[3.5rem] text-[#373737]   lg:text-[6.25rem] leading-[100px] tracking-[-0.25px]">
          Legal
        </h1>
      </div>
      <div className="mt-[48px] lg:mt-[72px] flex flex-row lg:flex-row justify-start items-center sm:gap-[10px] gap-[6px]">
        <div
          onClick={() => handleTabClick("privacy")}
          className={`font-san_regular text-[.75rem] sm:text-[.875rem] text-[#373737]  tracking-[-0.25px] border rounded-[31px] border-[#373737] px-[12px] lg:px-[15px] py-[11px] lg:py-[14px] cursor-pointer ${
            activeTab === "privacy" ? "bg-[#37373733] border-slate-200" : ""
          }`}
        >
          Privacy Policy
        </div>
        <div
          onClick={() => handleTabClick("terms")}
          className={`font-san_regular text-[.75rem] sm:text-[.875rem] text-[#373737]  tracking-[-0.25px] border rounded-[31px] border-[#373737] px-[12px] lg:px-[15px] py-[11px] lg:py-[14px] cursor-pointer ${
            activeTab === "terms" ? "bg-[#37373733] border-slate-200" : ""
          }`}
        >
          Terms and Conditions
        </div>
      </div>
      <div className="mt-[30px] sm:mt-[48px] lg:mt-[72px]">
        {activeTab === "privacy" && (
          <Privacy />
        )}
        {activeTab === "terms" && (
          <TermsAndConditions />
        )}
      </div>
    </div>
  );
};

export default LegalPage;
