import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: [
        "About Hilink",
        "Press Releases",
        "Environment",
        "Jobs",
        "Privacy Policy",
        "Contact Us",
      ],
    },
    {
      title: "Our Community",
      links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
    },
  ];
  const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Admin Officer", value: "123-456-7890" },
      { label: "Email Officer", value: "hilink@akinthil.com" },
    ],
  };

  const SOCIALS = {
    title: "Social",
    links: [
      "/facebook.svg",
      "/instagram.svg",
      "/twitter.svg",
      "/youtube.svg",
      "/wordpress.svg",
    ],
  };
  return (
    <footer className="flex items-center justify-center mb-24">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" height={20} width={74} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
          {FOOTER_LINKS.map((footer, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h4 className="text-[18px] font-[700] whitespace-nowrap">
                {footer.title}
              </h4>
              <ul className="text-[14px] font-[400] flex flex-col gap-4 text-gray-400">
                {footer.links.map((link, index) => (
                  <Link href="/" key={index}>
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-5">
            <h4 className="text-[18px] font-[700] whitespace-nowrap">
              {FOOTER_CONTACT_INFO.title}
            </h4>
            {FOOTER_CONTACT_INFO.links.map((link, index) => (
              <Link
                href="/"
                key={index}
                className="flex gap-4 md:flex-col lg:flex-row"
              >
                <p className="whitespace-nowrap">{link.label}:</p>
                <p className="text-[14px] font-[600] whitespace-nowrap text-black">
                  {link.value}
                </p>
              </Link>
            ))}
          </div>
        </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[18px] font-[700] whitespace-nowrap">
              {SOCIALS.title}
            </h4>
            <ul className="text-[14px] font-[400] flex gap-4 text-gray-400">
            {SOCIALS.links.map((link, index) => (
              <Link
                href="/"
                key={index}
              >
                <Image src={link} height={20} width={20} alt="social" />
              </Link>
            ))}
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
