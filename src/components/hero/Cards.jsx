import React from "react";
import merck from "../../assets/svg/merck.svg";
import newzip from "../../assets/svg/newzip.svg";
import ubsblack from "../../assets/svg/ubsblack.svg";
import prospero from "../../assets/svg/prospero.svg";
import keller from "../../assets/svg/keller-williams.svg";
import newglobe from "../../assets/svg/new-globe.svg";
import merckImg from "../../assets/images/merck.webp";
import newzipImg from "../../assets/images/newzip.webp";
import ubsImg from "../../assets/images/UBS.webp";
import prosperoImg from "../../assets/images/prospero.webp";
import kellerVid from "../../assets/video/keller.mp4";
import newglobeImg from "../../assets/images/newglobe.webp";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const heroTwo = [
  {
    img: <img className="" src={merckImg} alt="" />,
    logo: merck,
    logoSide: "R&D PRODUCTIVITY",
    title: "Speeding up Merck's process from 6 months to 6 hours",
    sub: "An AI Assistant that boosts R&D delivered in five weeks and under budget",
    // divStyle: "ml-24",
  },
  {
    img: <img src={newzipImg} alt="" />,
    logo: newzip,
    logoSide: "AI FOR REAL ESTATE",
    title: "60% more user engagement with hyper-personalization",
    sub: "AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content to increase customer engagement",
    divStyle: "mt-20",
  },
  {
    // img: <img src={ubsImg} alt="" />,
    img: <img src={newglobeImg} alt="" />,
    logo: ubsblack,
    logoSide: "MOBILE APP REDESIGN",
    title: "Team extension for mobile design revamp at speed",
    sub: "Seamless and consistent experience, unified payment flow, and easier in-app navigation",
    divStyle: "-mr-16 ml-32 ",
  },
  {
    img: <img src={prosperoImg} alt="" />,
    logo: prospero,
    logoSide: "MOBILE MVP",
    title: "Mobile app MVP in 5 weeks for a New York fintech",
    sub: "New vision of a financial predictions app, complete with a revamped user interface and additional features",
    divStyle: " ml-24",
  },
  {
    img: (
      <video width="640" height="360" autoPlay muted loop>
        <source src={kellerVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    logo: keller,
    logoSide: "DESIGN SYSTEM",
    title: "Increased engineering efficiency and more consistent design",
    sub: "Improved developer experience and more efficient engineering for the world's largest real estate franchise",
    divStyle: "mt-20",
  },
  {
    img: <img src={newglobeImg} alt="" />,
    logo: newglobe,
    logoSide: "EDTECH AI",
    title: "Boosting content creation with GenAi from hours to seconds",
    sub: "Content creation transformed into a streamlined process without  compromising on q",
  },
];
export function Cards({ item, idx }) {
  return (
    <div className="grid grid-cols-2 gap-16 px-10 ">
      {heroTwo.map((item, idx) => {
        return (
          <Link
            className={`group ${item.divStyle} hover:cursor-pointer `}
            key={idx}
          >
            <div className="group-hover:scale-100 relative scale-90 transition-transform ease-in-out duration-500 overflow-y-hidden mb-7">
              <div className="relative">
                {item.img}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="z-10 hidden group-hover:flex absolute duration-500 ease-in-out transition bottom-6 right-6 rounded-full h-8 w-8 border-2 -rotate-45 items-center justify-center">
                <FaArrowRightLong size={20} color="white" />
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex justify-between">
                <span>
                  <img src={item.logo} alt="" />
                </span>
                <span className="font-bold text-sm text-black/70">
                  {item.logoSide}
                </span>
              </div>
              <p className="font-bold text-2xl max-w-[80%] relative transition-all ease-in-out duration-500 group-hover:underline underline-offset-8 decoration-black/80 decoration-[2px] group">
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black/80 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </p>

              <p className="text-xl text-black/70  ">{item.sub}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
