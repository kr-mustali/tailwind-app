'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const NAV_LINKS = [
    { href: "/", key: "home", label: "Home" },
    { href: "/services", key: "services", label: "Services" },
    { href: "/pricing", key: "pricing", label: "Pricing" },
    { href: "/contact_us", key: "contact_us", label: "Contact Us" },
  ];
  const handleScroll = () => {
    const offset = window.scrollY;
    const threshold = 100;
    setIsSticky(offset > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
<nav
      className={`flex items-center justify-between mx-auto max-w-[1440px]  px-6 lg:px-20 3xl:px-0 relative z-30 py-5 ${
        isSticky ? "sticky top-0 bg-white " : ""
      }`}
    >      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((navLink) => (
          <Link
            key={navLink.key}
            href={navLink.href}
            className="text-base font-[400px] text-gray-500 flex items-center justify-center pb-1.5 transition-all hover:font-bold"
          >
            {navLink.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex items-center justify-center">
        <Button type="button" title="Log In" icon="/user.svg" bg="bg-black text-white"/>
      </div>
      <Image
        src="/menu.svg"
        height={24}
        width={24}
        alt="menu"
        className="inline-block lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
