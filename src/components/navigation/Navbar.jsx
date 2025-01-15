import { useState, useEffect } from "react";
import logo from "../../assets/svg/logo.svg";

const navLinks = [
  {
    id: 1,
    title: "Services",
  },
  {
    id: 2,
    title: "Industries",
  },
  {
    id: 3,
    title: "Clients",
  },
  {
    id: 4,
    title: "About us",
  },
  {
    id: 5,
    title: "Insights",
  },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBackground = scrollPosition > 50 ? "bg-black" : "bg-transparent";
  const textColor = scrollPosition > 50 ? "text-white font-medium" : "text-white";
  const buttonBorder = scrollPosition > 50 ? "border-black bg-primary text-black" : "border-white";

  return (
    <nav
      className={`font-averta padding-x fixed w-full top-0 left-0 flex items-center justify-between py-4 transition-all duration-300 z-50 ${navbarBackground}`}
    >
      <img src={logo} alt="logo" width={130} />
      <div className="flex gap-4">
        {navLinks.map((item) => (
          <a
            href="/"
            className={`transition-colors duration-300 ${textColor}`}
            key={item.id}
          >
            {item.title}
          </a>
        ))}
      </div>
      <button
        className={`border ${buttonBorder} ${textColor} w-[170px] rounded-md h-12 transition-colors duration-300`}
      >
        Get in touch
      </button>
    </nav>
  );
};

export default Navbar;
