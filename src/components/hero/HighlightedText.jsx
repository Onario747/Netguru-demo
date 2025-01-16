import React from "react";

const HighlightedText = () => {
  return (
    <div className="relative inline-block">
      <span className="relative z-10"></span>
      <span
        className="absolute  left-0 -z-10 h-[1.1em] -bottom-[6px] w-[8em] ml-[-7.5em] 
        bg-gradient-to-l from-green-300 to-transparent 
        rounded-[0.55em] clip-path-[polygon(0_10%,100%_0,100%_100%,0_90%)]"
      ></span>
    </div>
  );
};

export default HighlightedText;
