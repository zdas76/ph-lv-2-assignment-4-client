import { NavLink } from "react-router-dom";
import "../../styles/style.css";

export default function HeroSection() {
  return (
    <div className="hero my-10 md:my-20 h-[50vh] md:h-[70vh]">
      <div className="hero-div flex flex-col  md:min-w-1/2 text-center md:text-left justify-center items-center md:items-start h-full gap-5 lg:gap-10">
        <p className=" text-2xl lg:text-5xl text-white ml-10 lg:ml-20">
          Sculpt Your Space with <br /> Luxurious Fitness Innovation
        </p>

        <p className="ml-10 lg:ml-20">
          <NavLink
            to="/product"
            className="text-2xl px-5 py-2 bg-white rounded-2xl font-bold"
          >
            Shop Now
          </NavLink>
        </p>
      </div>
    </div>
  );
}
