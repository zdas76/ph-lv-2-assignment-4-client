import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button, Form, Input, Select } from "antd";
import type { FormProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useCreateOrderMutation } from "../redux/featurs/order/orderapi";
import { clearCart } from "../redux/featurs/cart/cartSlice";

type FieldType = {
  customerName?: string;
  customerEmail?: string;
  phonenNumber?: string;
  deliveryAddress?: string;
  paymentType?: string;
  product: [];
};

type TProduct = {
  productId: string;
  quantity: number;
  itemTotal: number;
};
export default function Checkout() {
  const state = useAppSelector((state) => state.carts.carts);

  const checkOutProduct: TProduct[] = [];
  {
    state.map((item) =>
      checkOutProduct.push({
        productId: item._id,
        quantity: item.quantity,
        itemTotal: item.quantity * item.price,
      })
    );
  }

  const { state: amount } = useLocation();

  const [createProduct] = useCreateOrderMutation(undefined);
  const dispatch = useAppDispatch();

  const subTotal = amount.totalAmount.toFixed(2);
  const discount = Math.round(amount.totalAmount * 0.05).toFixed(2);
  const deliveryCost = (0.0).toFixed(2);
  const totalAmount = (
    amount?.totalAmount - Math.round(amount?.totalAmount * 0.05)
  ).toFixed(2);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const {
      customerEmail,
      customerName,
      deliveryAddress,
      paymentType,
      phonenNumber,
    } = values;

    const orderData = {
      checkOutProduct,
      customerEmail,
      customerName,
      deliveryAddress,
      paymentType,
      phonenNumber,
      subTotal,
      discount,
      deliveryCost,
      totalAmount,
    };
    createProduct(orderData);
    dispatch(clearCart());
    Navigate("/dashboard");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <div className="bg-white p-5 shadow-md">
        <p className="text-2xl py-3 font-bold uppercase">Product details</p>
        <div className=" flex gap-5 font-bold mb-1 border-b-2">
          <p className="w-[15%]">Image</p>
          <p className="w-[50%]">Product Name</p>
          <p className="w-[15%] text-center">Quantity</p>
          <p className="w-[20%] text-center">Total Amount</p>
        </div>
        {state.map((product, idx) => (
          <div key={idx} className=" flex gap-5 mb-1 border-b-2">
            <p className="w-[15%]">
              <img src={product.images} className="w-[50px]" alt="product" />
            </p>
            <p className="w-[50%]">{product.name}</p>
            <p className="w-[15%] text-center">{product.quantity}</p>
            <p className="w-[20%] text-center">
              Tk. {product.price * product.quantity}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 shadow-md">
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="w-full">
            <p className="text-left text-2xl font-bold uppercase mb-6">
              Customer Information
            </p>
            <Form.Item<FieldType>
              label="Customer Name"
              name="customerName"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Customer Email"
              name="customerEmail"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Phone Number"
              name="phonenNumber"
              rules={[
                { required: true, message: "Please input your Phone Number!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Delivery Address"
              name="deliveryAddress"
              rules={[
                {
                  required: true,
                  message: "Please input your Delivery Address!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item<FieldType>
              label="Select Payment"
              name="paymentType"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone Number!",
                },
              ]}
            >
              <Select
                defaultValue=""
                options={[
                  {
                    value: "cashOnPayment",
                    label: "Cash On Payment",
                  },
                  { value: "cardPayment ", label: "Card Payment" },
                ]}
              />
            </Form.Item>
          </div>
          <div className="w-full">
            <p className="text-left text-2xl font-bold uppercase mb-6">
              Order Summary
            </p>
            <div className="flex justify-between">
              <p>Sub-Total</p> <p>{subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>{discount}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery fee</p> <p>{deliveryCost}</p>
            </div>
            <hr className="py-1" />
            <div className="flex justify-between">
              <p>Total Payment</p>
              <strong>{totalAmount}</strong>
            </div>
          </div>
          <div className="text-end mt-8">
            <Button type="primary" className="px-10 py-5" htmlType="submit">
              Confarm Order
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
