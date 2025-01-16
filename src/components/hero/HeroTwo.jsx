import { Cards } from "./Cards";
import React from "react";
import HighlightedText from "./HighlightedText";


const HeroTwo = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between mb-20 lg:mb-32">
        <p className="text-3xl font-semibold">
          See top examples of design, development &{" "}
          <span className="font-bold">applied AI</span>{" "}
          <span>
            <HighlightedText />
          </span>
        </p>
        <a
          className="underline font-bold text-sm underline-offset-4 hover:text-gray-400 transition ease-in-out"
          href=""
        >
          More case studies
        </a>
      </div>
      <Cards />
      
    </div>
  );
};

export default HeroTwo;
