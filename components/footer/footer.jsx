import React from "react";
import Link from "next/link";
import MarqueeAnimation from "../../app/animations/marquee/marquee";

const Footer = () => {
  return (
    <footer className="mx-auto h-auto lg:pb-[5%] w-full bg-primaryColor">
      {/* marquee */}
      <div>
        <MarqueeAnimation />
      </div>

      {/* bottom options social media parent section */}
      <div className="sm:grid grid-cols-2 hidden mt-[40px] sm:mt-[50px] lg:mt-[75px] sm:ml-[20px] sm:mr-[20px] justify-center lg:ml-[84px] lg:mr-[84px] flex-wrap lg:flex-nowrap">
        {/* menu */}
        <div className="flex sm:mb-[50px] lg:mb-0">
          <div className="flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[21px] order-2 min-w-[22.2%] sm:order-1 sm:mt-0 mt-[48px]">
            <div className="flex justify-between font-san_regular gap-[15px] sm:gap-[20px] lg:gap-[60px]">
              <div className="flex gap-[12px] font-san_regular flex-col">
                <Link
                  href="/works"
                  className=" lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">Works</div>
                </Link>
                <Link
                  href="/about"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">About</div>
                </Link>
                <Link
                  href="/services"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">Services</div>
                </Link>
                <Link
                  href="/blogs"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">Blogs</div>
                </Link>
              </div>
              <div className="flex gap-[12px] font-san_regular flex-col">
                <Link
                  href="/FAQ"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">FAQs</div>
                </Link>
                <Link
                  href="/careers"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">Careers</div>
                </Link>
                <Link
                  href="/contact"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem] w-fit"
                >
                  <div className="footer-link w-fit">Contact Us</div>
                </Link>
                <Link
                  href="/legal"
                  className="lg:text-[1rem] text-[.875rem] sm:text-[.95rem]"
                >
                  <div className="footer-link w-fit">Legal</div>
                </Link>
              </div>
            </div>
            <div className="text-white lg:text-[.875rem] font-san_regular text-[.75rem] sm:text-[.8rem] lg:mt-[25px] mt-[24px] text-opacity-[50%] w-full">
              Copyright © 2024 Kreatrminds Pvt. Ltd.
            </div>
          </div>

          <div className="flex gap-[12px] font-san_regular flex-col mt-[48px] sm:mt-[0px] lg:text-[1rem] text-[1rem] lg:mt-0 ml-[20px] sm:ml-[120px] lg:ml-[156px] order-3 sm:order-2">
            <Link
              href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              <div className="footer-link w-fit">Instagram</div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-kreatr/"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              <div className="footer-link w-fit">LinkedIn</div>
            </Link>
            <Link
              href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              <div className="footer-link w-fit">WhatsApp</div>
            </Link>
            <Link
              href="https://kreatr-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              <div className="footer-link w-fit">Community</div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1"></div>
          <div className="mt-[0px] sm:mt-[25px] lg:mt-0 col-span-2 flex flex-col items-center sm:items-start order-1 sm:order-3">
            <div className="text-white text-[24px] leading-[24px]  lg:text-[3rem] sm:text-start text-center sm:text-[28px] font-san_regular sm:leading-[32px] lg:leading-[52px] tracking-[-0.25px]">
              {` Ping us, we're all ears (and pixels)!`}
            </div>
            <Link
              href="/contact"
              className="w-[106px] h-[44px] font-san_regular rounded-[31px] bg-white text-[.875rem] flex justify-center items-center mt-[14px] sm:mt-[20px] lg:mt-[24px] tracking-[-0.25px] hover:bg-opacity-80"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* mobile footer */}
      <div className="mx-[20px] pb-[75px] sm:hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white text-[1.5rem] leading-[24px] font-san_regular lg:text-[3rem] sm:text-start text-center  sm:text-[1.75rem] sm:leading-[30px] lg:leading-[52px] tracking-[-0.25px]">
            {` Ping us, we're all`} <br /> ears (and pixels)!
          </div>
          <Link
            href="/contact"
            className="w-[106px] h-[44px] rounded-[31px] bg-white text-[.875rem] flex justify-center items-center mt-[14px] lg:mt-[24px] font-san_regular tracking-[-0.25px] hover:bg-opacity-80"
          >
            Get in touch
          </Link>
        </div>
        <div className="mt-[48px] flex gap-[86px]">
          <div>
            <div className="flex gap-[36px] font-san_regular">
              <div className="flex flex-col font-san_regular gap-[10px]">
                <Link
                  href="/works"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  Works
                </Link>
                <Link
                  href="/about"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  Services
                </Link>
                <Link
                  href="/blogs"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  Blogs
                </Link>
              </div>
              <div className="flex flex-col font-san_regular gap-[10px]">
                <Link
                  href="/FAQ"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  FAQs
                </Link>
                <Link
                  href="/careers"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem] w-fit"
                >
                  Contact Us
                </Link>
                <Link
                  href="/legal"
                  className=" lg:text-[1rem] text-white text-[.875rem] sm:text-[.95rem]"
                >
                  Legal
                </Link>
              </div>
            </div>
            <div className="text-white lg:text-[.875rem] font-san_regular text-[.75rem] sm:text-[.8rem] lg:mt-[25px] mt-[24px] text-opacity-[50%] w-[109px]">
              Copyright © 2024 Kreatrminds Pvt. Ltd.
            </div>
          </div>
          <div className="flex flex-col gap-[10px] font-san_regular text-[.875rem]">
            <Link
              href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-kreatr/"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              WhatsApp
            </Link>
            <Link
              href="https://kreatr-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer"
            >
              Community
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
