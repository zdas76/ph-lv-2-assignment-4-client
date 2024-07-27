import { Button, Image } from "antd";
import { NavLink } from "react-router-dom";

type TItem = {
  _id: string;
  category: string;
  description: string;
  images: string;
  name: string;
  price: number;
  stock: number;
};
export default function Items(item: TItem) {
  return (
    <div className="border p-2 shadow rounded flex flex-col justify-between bg-white overflow-hidden group">
      <div>
        <p className="md:text-md text-lg font-bold mb-3 max-w-full">
          {item.name}
        </p>
        <div className="relative">
          <Image className="w-full" src={item.images} />
          <div className="p-4 bg-red-500 text-white absolute -right-full group-hover:right-0 duration-300 min-w-[100px] bottom-1.5 rounded-lg flex justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </div>
        </div>
        <p className="font-bold mb-2">{item.category}</p>
        <p className="font-bold mb-2">BDT. {item.price}</p>
        <p className="line-clamp-2">{item.description}</p>
      </div>

      <div className="p-3 ">
        <Button type="primary" className="w-full mt-5">
          <NavLink to={`${item._id}`} {...item}>
            View Detais
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
