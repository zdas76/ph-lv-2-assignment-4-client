import { useParams } from "react-router-dom";
import { useGetProductIdQuery } from "../redux/featurs/product/productApi";
import { Button, Image } from "antd";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/featurs/cart/cartSlice";

export default function ViewsProduct() {
  const params = useParams();
  const { data, isLoading } = useGetProductIdQuery(params);

  if (isLoading) {
    <p>Loading ......</p>;
  }
  const product = data?.data;
  const dispatch = useAppDispatch();

  return (
    <div className="my-20 ">
      <div className="w-full md:max-w-5xl lg:max-w-5lg mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 border p-5 bg-white">
          <div>
            <Image src={product?.images} />
          </div>
          <div className=" p-2 ">
            <p className="text-3xl font-bold">{product?.name}</p>
            <p className="my-10 text-2xl">
              <strong> Price : </strong>
              <span>{product?.price}</span>
            </p>
            <p className="text-justify leading-5">
              <strong>Description :</strong> {product?.description}
            </p>
            <p className="my-5 text-xl">
              Stock :
              {product?.stock ? (
                <span className="text-green-700 font-semibold"> Available</span>
              ) : (
                <span className="text-red-500"> Not Available</span>
              )}
            </p>
            <Button
              type="primary"
              disabled={product?.stock <= 0}
              className="px-28 py-7 text-white text-xl mt-12"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className=" mt-5"></div>
      </div>
      <div></div>
    </div>
  );
}
