import React from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Link from "next/link";
import Image from "next/image";

const CarouselWorks = ({ gridItems }) => {
  const isVideo = (url) => url?.endsWith(".mp4");
  return (
    <>
      <Carousel
        withIndicators={false}
        slideSize={{ base: "100%", sm: "50%", md: "50%" }}
        slideGap={{ base: 0, sm: "sm" }}
        align="start"
      >
        {gridItems.map((item, index) => (
          <Carousel.Slide key={index}>
            {isVideo(item.coverImg) ? (
              <Link href={`/works/${item.id}`}>
                <video
                  className="rounded-[15px] sm:h-[390px] object-cover sm:w-[460px] lg:h-[435px] lg:w-[620px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.coverImg} type="video/mp4" />
                </video>
              </Link>
            ) : (
              <Link href={`/works/${item.id}`}>
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  src={item.coverImg}
                  className="rounded-[15px] sm:h-[390px] object-cover sm:w-[460px] lg:h-[435px] lg:w-[620px]"
                  alt="related images"
                />
              </Link>
            )}
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselWorks;
