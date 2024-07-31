import { useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Form } from "antd";

export default function Checkout() {
  const state = useAppSelector((state) => state.carts.carts);
  console.log(state);
  const { state: amount } = useLocation();
  console.log(amount);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <div className="bg-white p-5 shadow-md">
        <p>Product details</p>
        {state.map((product, idx) => (
          <div key={idx} className=" flex gap-5">
            <p className="w-[15%]">
              <img src={product.images} className="w-[50px]" alt="product" />
            </p>
            <p className="w-[50%]">{product.name}</p>
            <p className="w-[15%]">{product.quantity}</p>
            <p className="w-[20%]">Tk. {product.price * product.quantity}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 shadow-md">
        <Form>
          <div>User Information</div>
          <div>
            <p>Order Summary</p>
            <p>Item Total</p>
            <p>Discount</p>
            <p>Delivery fee</p>
            <p>Total Payment</p>
          </div>
        </Form>
      </div>
    </div>
  );
}
