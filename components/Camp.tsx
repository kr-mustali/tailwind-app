"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Camp = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mx-auto max-w-[520px] lg:max-w-[1440px] lg:px-20 lg:mb-10 xl:mb-20 ">
        <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="text-[40px] font-[700] leading-[120%] lg:bold-64 xl:max-w-[390px]">
              Guide You to Easy Path
            </h2>
            <p className="text-[16px] font-[400] mt-6 text-gray-500  xl:max-w-[520px]">
              Only with the hilink application you will no longer get lost and
              get lost again, because we already support offline maps when there
              is no internet connection in the field. Invite your friends,
              relatives and friends to have fun in the wilderness through the
              valley and reach the top of the mountain
            </p>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <Image
              src="/img-1.png"
              alt="image"
              width={1100}
              height={199}
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/img-2.png"
              alt="image"
              width={1100}
              height={199}
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/img-1.png"
              alt="image"
              width={1100}
              height={199}
              className="rounded-3xl"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Camp;
