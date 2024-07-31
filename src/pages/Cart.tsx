import { useEffect } from "react";
import { productQuantity } from "../redux/featurs/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Image, Button, Input } from "antd";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

export default function Cart() {
  const state = useAppSelector((state) => state.carts.carts);

  const dispatch = useAppDispatch();
  const HandelChangeQuantity = (item: any, quantity: number) => {
    if (quantity > item.stock) {
      toast.error("Quantity not Avabalable");
    }
    dispatch(productQuantity({ id: item._id, quantity }));
  };

  const totalAmount = state.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  useEffect(() => {
    if (state.length > 0) {
      window.onbeforeunload = () => true;
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [state]);

  return (
    <div className="my-16  bg-white p-2 lg:p-20">
      <p className="text-center  mb-10 lg:mb-20 text-3xl font-bold">
        Order Summary
      </p>
      <div className="border w-full flex p-2 justify-center items-center font-bold text-center">
        <span className="w-[5%]">Sl. No.</span>
        <p className="w-[50%] flex flex-col-reverse text-left justify-center  items-center lg:flex-row">
          <span className="w-[30%] ">Product Name</span>
          <span className="w-[20%]">Product Image</span>
        </p>
        <span className="w-[15%]">Unite Price</span>
        <span className="w-[15%]">Quantity</span>
        <span className="w-[15%]">Amount</span>
      </div>
      <div>
        {state.map((item, index) => (
          <div
            key={index}
            className="border w-full flex p-2 justify-center items-center"
          >
            <span className="w-[5%]">{index + 1}</span>
            <p className="w-[50%] flex flex-col-reverse justify-center items-center lg:flex-row">
              <span className="w-[60%] font-bold">{item.name}</span>
              <span className="w-[40%]">
                <Image src={item.images} width={100} />
              </span>
            </p>
            <span className="w-[15%] text-center">{item.price}</span>
            <span className=" w-[15%] flex justify-center items-center gap-1 flex-col lg:flex-row">
              <Button
                className="p-4 font-bold text-xl w-[100px] bg-blue-300"
                disabled={item.quantity > 5 || item.quantity >= item.stock}
                onClick={() =>
                  HandelChangeQuantity(item, Number(item.quantity + 1))
                }
              >
                +
              </Button>
              <Input
                className="sm:w-[100px] w-full p-2 rounded-md bg-transparent border text-center "
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  HandelChangeQuantity(item, Number(e.target.value))
                }
              />
              <Button
                className="p-4 font-bold text-xl w-[100px] bg-blue-300"
                disabled={item.quantity < 2}
                onClick={() =>
                  HandelChangeQuantity(item, Number(item.quantity - 1))
                }
              >
                -
              </Button>
            </span>

            <span className="w-[15%] text-center">
              {item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
      <div className="my-10 text-end mr-20">
        <p className="text-xl">
          Total Amount : <strong>{totalAmount}</strong>
        </p>
      </div>

      <div className="my-10 text-end mr-12">
        <NavLink
          to={`/checkout`}
          state={{ totalAmount: totalAmount }}
          className="px-10 py-3 bg-blue-500 rounded-md  text-end w-full text-white text-lg"
        >
          Proceed to Checkout
        </NavLink>
      </div>
    </div>
  );
}
