import ikea from "../../assets/svg/ikea.svg";
import ubs from "../../assets/svg/ubs.svg";
import volkswagen from "../../assets/svg/volkswagen.svg";
import olx from "../../assets/svg/olx.svg";

const sponsors = [
  {
    id: 1,
    src: ikea,
  },
  {
    id: 2,
    src: ubs,
  },
  {
    id: 3,
    src: volkswagen,
  },
  {
    id: 4,
    src: olx,
  },
];

const Hero = () => {
  return (
    <div className="padding-x max-container pt-[17rem]">
      <h1 className="text-[5rem] text-white">
        <span className="text-primary">Own</span> the change
      </h1>
      <p className="w-[450px] font-bold mt-8 text-[1.1rem] text-[#b7bec6]">
        We speed up AI adoption and ramp up engineering and design capacity to
        help you lead your industry.
      </p>

      <div className="mt-8 flex items-center gap-[4rem]">
        <span className="font-bold text-[0.7rem] text-[#b7bec6]">
          Trusted by:
        </span>
        <div className="flex items-center gap-8">
          {sponsors.map((item) => (
            <img
              src={item.src}
              className="w-12 h-[34px]"
              key={item.id}
              alt="sponsor logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
