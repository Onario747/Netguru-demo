import { Cards } from "./Cards";
import React from "react";
import HighlightedText from "./HighlightedText";
import { Link } from "react-router-dom";

const SubHero = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-10 mt-10">
      <div className="flex justify-between ">
        <p className=" text-2xl md:text-3xl font-semibold max-w-[400px] md:max-w-full text lg:w-full">
          See top examples of design, development &{" "}
          <span className="font-bold">applied AI</span>{" "}
          <span>
            <HighlightedText />
          </span>
        </p>
        <Link
          className="underline hidden lg:flex text-nowrap font-bold text-sm underline-offset-4 hover:text-gray-400 transition ease-in-out"
          href=""
        >
          More case studies
        </Link>
      </div>
      <Cards />
      <Link
        className="underline lg:hidden flex text-nowrap font-bold text-sm underline-offset-4 hover:text-gray-400 transition ease-in-out"
        href=""
      >
        More case studies
      </Link>

    </div>
  );
};

export default SubHero;
