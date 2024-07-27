import { NavLink } from "react-router-dom";
import "../../styles/style.css";

export default function HeroSection() {
  return (
    <div
      className="hero my-10 md:my-20"
      style={{ height: "70vh", display: "flex" }}
    >
      <div
        className="hero-div"
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p
          style={{
            color: "white",
            marginLeft: "50px",
            marginTop: "30%",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Sculpt Your Space with <br /> Luxurious Fitness Innovation
        </p>

        <p>
          <NavLink
            to="/product"
            className="ms-12 mt-10 text-2xl px-5 py-2 bg-white rounded-2xl font-bold"
          >
            {" "}
            Shop Now
          </NavLink>
        </p>
      </div>
    </div>
  );
}
