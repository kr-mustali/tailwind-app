import Image from "next/image";
import React from "react";
import Button from "./Button";
import ToggleButton from "./ToggleButton";

const Hero = () => {
  return (
    <div className=" mx-auto max-w-[1440px] px-6 lg:px-20 flex flex-col gap-20  md:gap-28 lg:py-20 xl:flex-row">
      {/* LEFT SECTION */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px]">
          Putuk Truno Camp Area
        </h1>
        <p className="text-[16px] font-[400] mt-6 text-gray-500 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  height={20}
                  width={20}
                  alt="star"
                />
              ))}
            <p className="font-bold">198k</p> <span>Excellent Reviews</span>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" bg="bg-green-600 text-white" />
            <Button
              type="button"
              title="How we work?"
              bg="bg-white text-black border-0 text-[16px] font-bold"
              icon="/play.svg"
            />
          </div>
        </div>
      </div>
      {/* RIGHT SECTION  */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2"></div>
    </div>
  );
};

export default Hero;
