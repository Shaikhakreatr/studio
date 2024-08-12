import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const ServiceSection = () => {
  const services = [
    {
      name: "Brand Identity",
      description: "Unique visual and emotional representation of your brand.",
      image: "/assets/images/services/Brand Identity.jpg",
    },
    {
      name: "Brand Identity Consultation",
      description:
        "Expert advice for those looking to redefine their brand image.",
      image: "/assets/images/services/Brand Identity Consultation.jpg",
    },
    {
      name: "Industrial Design",
      description:
        "Design and creation of products with a problem-solving mindset.",
      image: "/assets/images/services/Industrial Design.jpg",
    },
    {
      name: "Packaging Design",
      description:
        "Design of product packaging to set you apart in the industry.",
      image: "/assets/images/services/Packaging Design.jpg",
    },
    {
      name: "Event Branding and Merchandise Design",
      description: "Creating visuals and products for events promotions.",
      image: "/assets/images/services/Event.jpg",
    },
    {
      name: "Environmental and Spatial Design",
      description: "Designing functional spaces with wayfinding in mind.",
      image: "/assets/images/services/Environ.jpg",
    },
    {
      name: "Customer Experience Design",
      description:
        "Evaluate brand touch points that enhance customer satisfaction.",
      image: "/assets/images/services/customer exp.jpg",
    },
    {
      name: "Brand Workshops and Training",
      description:
        "Sessions to enhance the use of creative thinking for your brand. ",
      image: "/assets/images/services/training.jpg",
    },
  ];

  const servicesMob = [
    {
      name: "Brand Identity",
      description: "Unique visual and emotional representation of your brand.",
    },
    {
      name: "Brand Identity Consultation",
      description:
        "Expert advice for those looking to redefine their brand image.",
    },
    {
      name: "Industrial Design",
      description:
        "Design and creation of products with a problem-solving mindset.",
    },
  ];

  const [isMobileView, setIsMobileView] = useState(false);
  const [image, setImage] = useState("/assets/images/services/default.jpg"); // Set default image
  const [hoveredService, setHoveredService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleServiceClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleServiceMouseEnter = (index) => {
    if (!isMobileView) {
      setImage(services[index].image);
      setHoveredService(index); // Track hovered service
    }
  };

  const handleServiceMouseLeave = () => {
    if (!isMobileView) {
      setImage("/assets/images/services/default.jpg"); // Reset to default image
      setHoveredService(null); // Clear hovered service
    }
  };

  return (
    <>
      <div className="mt-[52px] sm:mt-[78px] lg:mt-0">
        <h1 className="font-san_medium text-[2.5rem] leading-[44px] tracking-[-1px] text-[#373737] lg:text-[6.25rem] lg:leading-[96px]">
          What we do best
        </h1>
      </div>
      <div className="mt-[30px] items-start justify-center sm:mt-[48px] sm:flex sm:gap-x-[50px] lg:mt-[72px] lg:gap-x-[100px] xl:gap-x-[156px]">
        <div className="hidden sm:block sm:min-h-[410px] sm:w-[50%] lg:h-[550px] xl:min-h-[588px]">
          {image && (
            <Image
              className="w-full rounded-[15px] object-cover object-center sm:min-h-[575px] lg:h-[580px] xl:min-h-[635px]"
              height={0}
              width={0}
              sizes="100vw"
              src={image} // Use the updated image state
              alt="service image"
            />
          )}
        </div>
        <div className="hidden sm:block sm:w-[50%]">
          {services.map((service, index) => (
            <div key={index}>
              <div className="border border-t border-[#373737]"></div>
              <h4
                className={`py-[20px] font-san_medium text-[1.125rem] lg:py-[24px] lg:text-[16px] xl:text-[1.25rem] ${
                  hoveredService === index || hoveredService === null
                    ? "text-[#373737]"
                    : "text-[#D6D6D6]"
                }`}
                onClick={() => handleServiceClick(index)} // Handle click for mobile view
                onMouseEnter={() => handleServiceMouseEnter(index)} // Handle hover for non-mobile view
                onMouseLeave={handleServiceMouseLeave} // Handle hover end for non-mobile view
              >
                {hoveredService === index ? service.description : service.name}
              </h4>
            </div>
          ))}
          <div className="border border-b border-[#373737]"></div>
        </div>
        <div className="block sm:hidden">
          {servicesMob.map((service, index) => (
            <div key={index}>
              <div className="border border-t border-[#373737] border-opacity-30"></div>
              <h4
                className="pointer-events-auto py-[20px] font-san_medium text-[1.125rem] lg:py-[29px] lg:text-[1.25rem]"
                onClick={() => handleServiceClick(index)}
              >
                {service.name}
              </h4>
              {activeIndex === index && (
                <p className="pb-[20px] font-san_regular text-[1rem] leading-[20px] tracking-[-0.25px]">
                  {service.description}
                </p>
              )}
            </div>
          ))}
          <div className="border border-b border-[#373737] border-opacity-30"></div>
        </div>
      </div>
      <div className="mt-[24px] flex w-full items-center justify-center text-[#373737] sm:mt-[48px] lg:mt-[72px]">
        <Link
          href="/services"
          className="link-hover flex h-[50px] w-[100%] items-center justify-between rounded-[90px] bg-[#DBDBDB] pl-[12px] pr-[12px] sm:w-[350px] lg:h-[77px] lg:w-[637px] lg:pl-[30px] lg:pr-[20px]"
        >
          <div className="font-san_regular text-[1rem] sm:text-[18px] lg:text-[20px]">
            Check our services!
          </div>
          <div className="relative h-[32px] w-[32px] rounded-[50%] lg:h-[48px] lg:w-[48px]">
            <Image
              layout="fill"
              src={"/assets/images/dark_upper_arrow.svg"}
              className="link-image absolute"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceSection;
