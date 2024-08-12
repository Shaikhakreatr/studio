"use client";

import React, { useState } from "react";
import { useForm } from "@mantine/form";
import Image from "next/image";

const FormSection = () => {
  const BACKEND_CONTACT_URI = process.env.NEXT_PUBLIC_BACKEND_CONTACT_URI;
  const [successMessage, setSuccessMessage] = useState(false);
  const [initialRows, setInitialRows] = useState(1);

  const form = useForm({
    initialValues: {
      name: "",
      phoneNumber: "",
      senderEmail: "",
      message: "",
    },

    validate: {
      name: (value) =>
        value.length >= 2 && value.length <= 20
          ? null
          : "Please write your name",
      phoneNumber: (value) =>
        /^(\+\d{1,3}[-.\s]??)?\d{8,15}$/.test(value)
          ? null
          : "Please enter a valid phone number",
      senderEmail: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? null
          : "Please enter a valid email",
      message: (value) =>
        value.trim().length > 0 ? null : "Please write your message",
    },
  });

  const handleSubmit = async (data) => {
    console.log(data);
    if (BACKEND_CONTACT_URI) {
      try {
        const response = await fetch(BACKEND_CONTACT_URI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log("data sent successfully");
          setSuccessMessage(true);
          form.reset();
        } else {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("BACKEND_CONTACT_URI is not defined");
    }
  };

  const handleRowsClick = () => {
    setInitialRows(3);
  };

  return (
    <div>
      <form
        className="sm:w-[75%]"
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
      >
        <div className="flex flex-col text-[#373737] mb-[30px] lg:mb-[60px]">
          <label className="text-[1.25rem] text-[#373737] lg:text-[2.25rem] font-san_book leading-[108%] tracking-[-0.25px]">
            Name<span className="text-[#F01A1A]">*</span>
          </label>
          <input
            placeholder="Bob Ross"
            className={` text-[1rem] lg:text-[1.5rem] font-san_book leading-[108%] tracking-[-0.25px] mt-[20px] lg:mt-[40px] pb-[10px] lg:pb-[20px] focus:outline-none`}
            {...form.getInputProps("name")}
          />
          <div className="border-b border-[#373737] w-[100%]"></div>
          {form.errors.name && (
            <div className="text-[#F01A1A] text-[.875rem] lg:text-[1.125rem] font-san_book mt-[8px] lg:mt-[12px]">
              {form.errors.name}
            </div>
          )}
        </div>
        <div className="flex flex-col mb-[30px] lg:mb-[60px]">
          <label className="text-[1.25rem] text-[#373737] lg:text-[2.25rem] font-san_book leading-[108%] tracking-[-0.25px]">
            Email<span className="text-[#F01A1A]">*</span>
          </label>
          <input
            placeholder="happyaccidents@gmail.com"
            className={` text-[1rem] lg:text-[1.5rem] font-san_book leading-[108%] tracking-[-0.25px] mt-[20px] lg:mt-[40px] pb-[10px] lg:pb-[20px] focus:outline-none`}
            {...form.getInputProps("senderEmail")}
          />
          <div className="border-b border-[#373737] w-[100%]"></div>
          {form.errors.senderEmail && (
            <div className="text-[#F01A1A] text-[.875rem] lg:text-[1.125rem] font-san_book mt-[8px] lg:mt-[12px]">
              {form.errors.senderEmail}
            </div>
          )}
        </div>
        <div className="flex flex-col mb-[30px] lg:mb-[60px]">
          <label className="text-[1.25rem] text-[#373737] lg:text-[2.25rem] font-san_book leading-[108%] tracking-[-0.25px]">
            Phone<span className="text-[#F01A1A]">*</span>
          </label>
          <input
            placeholder="+00 1234567890"
            className={` text-[1rem] lg:text-[1.5rem] font-san_book leading-[108%] tracking-[-0.25px] mt-[20px] lg:mt-[40px] pb-[10px] lg:pb-[20px] focus:outline-none`}
            {...form.getInputProps("phoneNumber")}
          />
          <div className="border-b border-[#373737] w-[100%]"></div>
          {form.errors.phoneNumber && (
            <div className="text-[#F01A1A] text-[.875rem] lg:text-[1.125rem] font-san_book mt-[8px] lg:mt-[12px]">
              {form.errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-[1.25rem] text-[#373737] lg:text-[2.25rem] font-san_book leading-[108%] tracking-[-0.25px]">
            Message<span className="text-[#F01A1A]">*</span>
          </label>
          <textarea
            onClick={handleRowsClick}
            rows={initialRows}
            placeholder="Hi, I would like to talk to the team."
            className={` text-[1rem] lg:text-[1.5rem] font-san_book leading-[108%] tracking-[-0.25px] mt-[20px]  resize-none lg:mt-[40px] pb-[10px] lg:pb-[20px] focus:outline-none`}
            {...form.getInputProps("message")}
          />
          <div className="border-b border-[#373737] w-[100%]"></div>
          {form.errors.message && (
            <div className="text-[#F01A1A] text-[14px] lg:text-[1.125rem] font-san_book mt-[8px] lg:mt-[12px]">
              {form.errors.message}
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center mt-[40px] lg:mt-[72px]">
          <button
            type="submit"
            className="w-full lg:w-[637px] h-[50px] lg:h-[77px] rounded-[90px] bg-[#DBDBDB] link-hover flex justify-between items-center pl-[12px] lg:pl-[20px] pr-[12px] lg:pr-[20px]"
          >
            <div className="text-[1rem] font-san_regular lg:text-[1.25rem]">
              Submit your message
            </div>
            <div className="rounded-[50%] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] relative">
              <Image
                alt="arrow image"
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="absolute link-image"
              />
            </div>
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="text-[#41A752] text-[.875rem] lg:mt-[32px] lg:text-[1.5rem] font-san_book mt-[20px] leading-[108%] tracking-[-0.25px]">
          Your message has been sent!
        </div>
      )}
    </div>
  );
};

export default FormSection;
