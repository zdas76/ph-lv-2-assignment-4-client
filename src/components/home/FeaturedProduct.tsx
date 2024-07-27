import { Button, Image } from "antd";
import { useGetAllProductQuery } from "../../redux/featurs/product/productApi";
import { NavLink } from "react-router-dom";

export default function FeaturedProduct() {
  const { data, isLoading } = useGetAllProductQuery({});

  if (isLoading) {
    <p>Loading ....</p>;
  }

  const featuredProduct = data?.data?.slice(3, 7);

  return (
    <div className="my-20">
      <div>
        <p className="text-center text-3xl mb-10 font-bold uppercase">
          Featured Products
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1, md:grid-cols-2 lg:grid-cols-4 ">
        {featuredProduct?.map((product, inx: string) => (
          <div
            key={inx}
            className="border p-3 shadow rounded flex flex-col justify-between bg-white overflow-hidden group"
          >
            <div>
              <p className="md:text-md text-lg font-bold mb-3 max-w-full">
                {product.name}
              </p>
              <div className="relative">
                <Image className="w-full" src={product.images} />
              </div>
              <p className="font-bold mb-2">{product.category}</p>
              <p className="font-bold mb-2">BDT. {product.price}</p>
              <p className="line-clamp-2">{product.description}</p>
            </div>

            <div className="p-3 ">
              <Button type="primary" className="w-full mt-5">
                <NavLink to={`/product/${product._id}`}>View Detais</NavLink>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
