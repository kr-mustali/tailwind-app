import Image from "next/image";
import React from "react";

const Features = () => {
  const FEATURES = [
    {
      title: "Real maps can be offline",
      icon: "/map.svg",
      variant: "green",
      description:
        "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
    },
    {
      title: "Set an adventure schedule",
      icon: "/calendar.svg",
      variant: "green",
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: "Technology using augment reality",
      icon: "/tech.svg",
      variant: "green",
      description:
        "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
    },
    {
      title: "Many new locations every month",
      icon: "/location.svg",
      variant: "orange",
      description:
        "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
    },
  ];

  return (
    <section className="b flex flex-col items-center justify-center overflow-hidden bg-feature-bg bg-no-repeat mt-20 py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            height={1000}
            width={440}
            alt="phone"
            className="absolute z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div>
            <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px]">
              Our Features
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <li
                key={index}
                className="flex w-full flex-1 flex-col items-start"
              >
                <div className="rounded-full p-4 lg:p-7 bg-green-500">
                  <Image src={feature.icon} width={28} height={28} alt="map" />
                </div>
                <h2 className="text-[20px] font-[700] lg:text-[32px] mt-5 capitalize">
                  {feature.title}
                </h2>
                <p className="text-[16px] font-[400] text-gray-400 mt-5 bg-white/80 lg:mt-[30px] lg:bg-none">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
