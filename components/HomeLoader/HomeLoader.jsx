import React from "react";
import Image from "next/image";

const HomeLoader = () => {
  return (
    <div className='h-[100vh] absolute top-0 z-30 left-0 bg-white w-[100vw] flex justify-center items-center'>
      <div>
        <div className="flex justify-between h-[50px] relative">
          <Image className="xl:h-[185px]  absolute top-[-27%] left-[-15%] xl:w-[383px] lg:left-[-14%] xl:top-[-214%] lg:top-[-95%] lg:h-[140px] lg:w-[240px] h-[80px] w-[175px]" src="/assets/images/home-loader/Top Hand.svg" alt="loading image" height={0} width={0} sizes="100vw" />
          <Image className="h-[40px] lg:right-[-10%] xl:right-[-6%] right-[-12%] top-[60%] lg:top-[112%] absolute w-[40px]" src="/assets/images/home-loader/Star.svg" alt="loading image" height={0} width={0} sizes="100vw" />
        </div>
        <h1 className="font-san_medium text-[#373737] text-center xl:text-[64px] lg:text-[42px] text-[28px] leading-[32px] lg:leading-[50px] xl:leading-[70px] tracking-[-0.25px]">Branding just gets <br />
        easier from here.</h1>
        <div className="flex justify-between h-[50px] relative">
          <Image className="xl:h-[20px] lg:h-[15px] absolute w-[79px] h-[10px] lg:w-[190px]" src="/assets/images/home-loader/Pink-line.svg" alt="loading image" height={0} width={0} sizes="100vw" />
          <Image className="xl:h-[213px] lg:h-[140px] lg:w-[270px] absolute xl:w-[337px] right-[-16%] top-[-40%] lg:right-[-21%] lg:top-[-66%] xl:right-[-14%] xl:top-[-94%] h-[88px] w-[154px]" src="/assets/images/home-loader/Bottom Hand.svg" alt="loading image" height={0} width={0} sizes="100vw" />
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;
