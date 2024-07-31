import { NavLink } from "react-router-dom";

const data = [
  {
    img: "images/treatmill.jpg",
    categoryName: "Treadmill",
  },
  {
    img: "images/dubmmell.jpg",
    categoryName: "Dumbbells",
  },
  {
    img: "images/Elliptical.jpg",
    categoryName: "Elliptical",
  },
  {
    img: "images/Cable-machine.jpg",
    categoryName: "Cable Machine",
  },
];

export default function CategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full my-20">
      {data.map((item, idx) => (
        <div className="w-full group overflow-hidden" key={idx}>
          <img
            src={item.img}
            className="w-full rounded-xl mb-5 hover:rounded-md group-hover:scale-105 duration-150"
          />

          <NavLink
            to="/product"
            state={item.categoryName}
            className="text-2xl font-bold"
          >
            {item.categoryName}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
