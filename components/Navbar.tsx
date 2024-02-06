"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import ToggleButton from "./ToggleButton";
import { useTheme } from "next-themes";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
  const { theme } = useTheme();

  const svgColor = theme === "dark" ? "#FFFFFF" : "#292C27";
  return (
    <nav
      className={`flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5 ${
        isSticky
          ? "sticky top-0 bg-white dark:bg-opacity-55 dark:bg-black "
          : ""
      }`}
    >
      <Link href="/">
        <svg
          width="72"
          height="20"
          viewBox="0 0 72 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.517045 19V1.54545H4.20739V8.74716H11.6989V1.54545H15.3807V19H11.6989V11.7898H4.20739V19H0.517045ZM18.3551 19V5.90909H21.9858V19H18.3551ZM20.179 4.22159C19.6392 4.22159 19.1761 4.04261 18.7898 3.68466C18.4091 3.32102 18.2188 2.88636 18.2188 2.38068C18.2188 1.88068 18.4091 1.4517 18.7898 1.09375C19.1761 0.730113 19.6392 0.548295 20.179 0.548295C20.7188 0.548295 21.179 0.730113 21.5597 1.09375C21.946 1.4517 22.1392 1.88068 22.1392 2.38068C22.1392 2.88636 21.946 3.32102 21.5597 3.68466C21.179 4.04261 20.7188 4.22159 20.179 4.22159Z"
            fill={svgColor}
          />
          <path
            d="M28.5249 1.54545V19H24.8942V1.54545H28.5249ZM31.4332 19V5.90909H35.0639V19H31.4332ZM33.2571 4.22159C32.7173 4.22159 32.2543 4.04261 31.8679 3.68466C31.4872 3.32102 31.2969 2.88636 31.2969 2.38068C31.2969 1.88068 31.4872 1.4517 31.8679 1.09375C32.2543 0.730113 32.7173 0.548295 33.2571 0.548295C33.7969 0.548295 34.2571 0.730113 34.6378 1.09375C35.0241 1.4517 35.2173 1.88068 35.2173 2.38068C35.2173 2.88636 35.0241 3.32102 34.6378 3.68466C34.2571 4.04261 33.7969 4.22159 33.2571 4.22159ZM41.603 11.4318V19H37.9723V5.90909H41.4325V8.21875H41.5859C41.8757 7.45739 42.3615 6.85511 43.0433 6.41193C43.7251 5.96307 44.5518 5.73864 45.5234 5.73864C46.4325 5.73864 47.2251 5.9375 47.9013 6.33523C48.5774 6.73295 49.103 7.30114 49.478 8.03977C49.853 8.77273 50.0405 9.64773 50.0405 10.6648V19H46.4098V11.3125C46.4155 10.5114 46.2109 9.88636 45.7962 9.4375C45.3814 8.98295 44.8104 8.75568 44.0831 8.75568C43.5945 8.75568 43.1626 8.8608 42.7876 9.07102C42.4183 9.28125 42.1286 9.58807 41.9183 9.99148C41.7138 10.3892 41.6087 10.8693 41.603 11.4318ZM56.1918 15.233L56.2003 10.8778H56.7287L60.9219 5.90909H65.0895L59.456 12.4886H58.5952L56.1918 15.233ZM52.902 19V1.54545H56.5327V19H52.902ZM61.0838 19L57.2315 13.2983L59.652 10.733L65.3366 19H61.0838ZM68.9929 19.2216C68.4304 19.2216 67.9474 19.0227 67.544 18.625C67.1463 18.2216 66.9474 17.7386 66.9474 17.1761C66.9474 16.6193 67.1463 16.142 67.544 15.7443C67.9474 15.3466 68.4304 15.1477 68.9929 15.1477C69.5384 15.1477 70.0156 15.3466 70.4247 15.7443C70.8338 16.142 71.0384 16.6193 71.0384 17.1761C71.0384 17.5511 70.9418 17.8949 70.7486 18.2074C70.5611 18.5142 70.3139 18.7614 70.0071 18.9489C69.7003 19.1307 69.3622 19.2216 68.9929 19.2216Z"
            fill="#30AF5B"
          />
        </svg>
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
      <div className="hidden lg:flex items-center justify-center gap-5">
        <ToggleButton />
        <Button
          type="button"
          title="Log In"
          icon={theme === "dark" ? "/black-user.svg" : "/user.svg"}
          bg="bg-black text-white dark:bg-white dark:text-black"
        />
      </div>
      <button onClick={handleClick}>
        <Image
          src="/menu.svg"
          height={24}
          width={24}
          alt="menu"
          className="inline-block lg:hidden"
        />
      </button>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white">
          <ul className="py-4">
            {NAV_LINKS.map((navLink) => (
              <li key={navLink.key}>
                <Link
                  href={navLink.href}
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
