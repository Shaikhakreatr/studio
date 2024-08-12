"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const ServicePage = () => {
  const services = [
    {
      name: "Brand Identity",
      description: (
        <>
          Identity design refers to a {`brand's`} unique visual and emotional
          representation that helps your audience differentiate and recognize
          your brand in the market. A strong brand identity builds trust,
          credibility, loyalty, and competitive advantage.
          <br />
          <br /> Brand identity consists of:
          <br />
          <br />
          <ul className="ml-[25px] list-disc">
            <li>Logo design</li>
            <li>Brand guidelines</li>
            <li>Typography selection</li>
            <li>Color palette creation</li>
            <li>Visual assets</li>
            <li>Stationary design</li>
          </ul>
        </>
      ),
      image: "/assets/images/services/Brand Identity.jpg",
    },
    {
      name: "Brand Identity Consultation",
      description:
        "A consultant is an expert who specializes in creating, refining, and managing a brand's visual, emotional, and experience aspects. They help establish a cohesive brand image that resonates with your target audience and differentiates your brand in the market. ",
      image: "/assets/images/services/Brand Identity Consultation.jpg",
    },
    {
      name: "Industrial Design",
      description:
        "Industrial design is a problem-solving approach that considers various aspects of user-centric designs, such as functionality, ergonomics, aesthetics, adaptability, and more. ",
      image: "/assets/images/services/Industrial Design.jpg",
    },
    {
      name: "Packaging Design",
      description: (
        <>
          Packaging design involves creating and developing not only the
          labeling but also the {`product's`} physical container. It focuses on
          functionality, protection and preservation, brand recognition,
          differentiation, and user friendliness.
          <br />
          <br /> Packaging design consists of
          <br />
          <br />
          <ul className="ml-[25px] list-disc">
            <li>Structural design</li>
            <li>Label design</li>
            <li>Sustainable packaging solutions</li>
            <li>Prototyping and testing</li>
          </ul>
        </>
      ),
      image: "/assets/images/services/Packaging Design.jpg",
    },
    {
      name: "Event Branding and Merchandise Design",
      description: (
        <>
          Creating a visual identity for event spaces and branded collaterals to
          increase brand visibility and memorable experiences and increase
          engagement and interactions while maintaining a cohesive theme that
          speaks your {`brand's`} story.
          <br />
          <br /> This includes
          <br />
          <br />
          <ul className="ml-[25px] list-disc">
            <li>Signage and banners</li>
            <li>Merchandise design</li>
            <li>Invitation design</li>
            <li>Exhibit design</li>
            <li>Event digital assets</li>
          </ul>
        </>
      ),
      image: "/assets/images/services/Event.jpg",
    },
    {
      name: "Environmental and Spatial Design",
      description:
        "Planning and creating physical spaces to ensure they are functional, aesthetically pleasing, and align with your brand's identity. This can include, but is not limited to, layout, furniture, signage and wayfinding, lighting, and more. ",
      image: "/assets/images/services/Environ.jpg",
    },
    {
      name: "Customer Experience Design",
      description: (
        <>
          Experience design involves strategic planning and crafting of all
          customer interactions with the brand including every touch point,
          digital and physical. A strong customer experience ensures a seamless
          and enjoyable experience with the {`brand's`} value and storytelling.
          <br />
          <br /> We analyze every touchpoint, such as
          <br />
          <br />
          <ul className="ml-[25px] list-disc">
            <li>Customer satisfaction</li>
            <li>Brand loyalty</li>
            <li>Competitive advantage</li>
            <li>Emotional connection</li>
            <li>Digital experiences</li>
            <li>Onsite experiences</li>
            <li>Brand perception</li>
            <li>Brand consistency </li>
          </ul>
        </>
      ),
      image: "/assets/images/services/customer exp.jpg",
    },
    {
      name: "Brand Workshops and Training",
      description: (
        <>
          Interactive sessions are designed to train teams about brand
          principles, strategies, and best practices. These workshops focus on
          brand development, management, communication, and consistency in
          understanding the {`brand's`} vision and values.
          <br />
          <br /> Some examples of such workshops are
          <br />
          <br />
          <ul className="ml-[25px] list-disc">
            <li>Creative thinking sessions</li>
            <li>Design thinking sessions</li>
            <li>Visual identity training</li>
            <li>Customer experience workshops</li>
          </ul>
        </>
      ),
      image: "/assets/images/services/training.jpg",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [image, setImage] = useState("/assets/images/services/default.jpg");
  const [isMobileView, setIsMobileView] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelectedService(null);
        setImage("/assets/images/services/default.jpg");  // Reset to default image
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceClick = (index) => {
    if (index === selectedService) {
      setSelectedService(null);
      setImage("/assets/images/services/default.jpg");  // Reset to default image
    } else {
      setSelectedService(index);
      setImage(services[index].image);
    }
  };

  return (
    <>
      <div
        className="mx-[20px] mb-[48px] pt-[80px] sm:mx-[40px] sm:mb-[100px] sm:mt-[100px] sm:pt-0 lg:mx-[84px] lg:mb-[179px] lg:mt-[128px]"
        ref={ref}
      >
        <div className="pt-[41px] sm:pt-[80px] lg:pt-[128px]">
          <h1 className="font-san_book text-[56px] leading-[55px] tracking-[-1px] text-[#373737] sm:tracking-[-0.25px] lg:text-[6.25rem] lg:leading-[100px]">
            Our expertise to provide you{" "}
            <br className="hidden lg:block xl:hidden" /> with the best!
          </h1>
        </div>
        <div className="mt-[24px] hidden sm:block">
          <p className="font-san_regular leading-[126%] tracking-[-0.25px] text-[#373737] sm:text-[20px] lg:text-[24px]">
            {` We're here to help you stand out in a crowded market`}
            <br className="hidden sm:block" /> with a brand that truly shines.
          </p>
        </div>
        <div className="mt-[48px] flex items-start justify-center sm:mt-[72px] sm:gap-x-[50px] lg:mt-[123px] lg:gap-x-[156px]">
          <div className="hidden w-[50%] sm:block sm:min-h-[336px] lg:min-h-[536px] xl:min-h-[588px]">
            <div>
              {image && (
                <Image
                  className="w-full rounded-[15px] object-cover object-center sm:min-h-[575px] lg:min-h-[710px] xl:min-h-[714px]"
                  width={527}
                  height={516}
                  src={image} // Use the updated image state
                  alt="service image"
                />
              )}
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <div>
              {services.map((service, index) => (
                <div key={index}>
                  <div className="border border-t border-[#373737]"></div>
                  <h4
                    className="flex cursor-pointer items-center py-[20px] text-[18px] lg:py-[29px] lg:text-[20px]"
                    onClick={() => handleServiceClick(index)} // Handle click for mobile view
                    style={{
                      color:
                        selectedService === index || selectedService === null
                          ? "#373737" // Text color when selected
                          : "#D6D6D6", // Text color for non-selected items
                    }}
                  >
                    <span className="flex-1 font-san_medium">
                      {service.name}
                    </span>
                    <span
                      className={`transition-transform duration-300 ${
                        selectedService === index ? "rotate-90" : ""
                      }`}
                    >
                      <IoIosArrowForward />
                    </span>
                  </h4>

                  {selectedService === index && (
                    <div className="pb-[20px] lg:pb-[24px]">
                      <div className="font-san_regular text-[18px] text-[#373737] lg:text-[20px]">
                        {service.description}
                      </div>
                      <div className="mt-[24px] sm:hidden">
                        <Image
                          className="h-[256px] w-full rounded-[15px]"
                          width={350}
                          height={256}
                          src={services[index].image} // Show the specific image for the selected service
                          alt="service image"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="border border-b border-[#373737]"></div>
            </div>
          </div>
        </div>

        {/* button for desktop */}
        <div className="mt-[100px] hidden w-full items-center justify-center sm:flex">
          <Link
            href="/contact"
            className="link-hover flex items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[30px] pr-[20px] sm:h-[56px] sm:w-[350px] lg:h-[77px] lg:w-[637px]"
          >
            <div className="font-san_regular tracking-[-0.7px] sm:text-[16px] lg:text-[20px]">
              {`Let's`} turn your ideas into action!
            </div>
            <div className="relative rounded-[50%] bg-primaryColor sm:h-[32px] sm:w-[32px] lg:h-[48px] lg:w-[48px]">
              <Image
                alt="arrow image"
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="link-image absolute"
              />
            </div>
          </Link>
        </div>

        {/* button for mobile */}
        <div className="mt-[32px] flex items-center justify-center gap-x-[16px] sm:hidden">
          <Link
            href="/works"
            className="flex w-[153px] items-center justify-between rounded-[90px] bg-[#DBDBDB] p-[12px] text-[#373737]"
          >
            <div className="font-san_regular text-[16px]">Projects</div>
            <div className="relative h-[30px] w-[30px] rounded-[50%] lg:h-[38px] lg:w-[38px] xl:h-[48px] xl:w-[48px]">
              <Image
                alt="arrow image"
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="link-image absolute"
              />
            </div>
          </Link>
          <Link
            href="/contact"
            className="flex w-[153px] items-center justify-between rounded-[90px] bg-[#DBDBDB] p-[12px] text-[#373737]"
          >
            <div className="font-san_regular text-[16px]">Contact us</div>
            <div className="relative h-[30px] w-[30px] rounded-[50%] lg:h-[38px] lg:w-[38px] xl:h-[48px] xl:w-[48px]">
              <Image
                alt="arrow image"
                layout="fill"
                src={"/assets/images/dark_upper_arrow.svg"}
                className="link-image absolute"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
