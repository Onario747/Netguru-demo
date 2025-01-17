import { useEffect, useRef } from "react";
import Navbar from "./components/navigation/Navbar";
import "./index.css";
import backgroundVideo from "./assets/video/software.mp4";
import Hero from "./components/hero/Hero";
import { Link, NavLink } from "react-router-dom";
import SubHero from "./components/hero/SubHero";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.scrollY;
        // Adjust the 0.5 value to control parallax intensity (higher = more movement)
        videoRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Make container taller to enable scrolling
    <div className="relative min-h-[200vh]">
      {/* Video container with sticky positioning */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-100"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Additional content section */}
      <div className="relative z-10 bg-white">
        <div className="min-h-screen p-8">
          {/* <h2>Your content here</h2> */}
          <SubHero />
        </div>
      </div>
    </div>
  );
}

export default App;
