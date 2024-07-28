import React from "react";
import { useAppSelector } from "../redux/hooks";

export default function Cart() {
  const state = useAppSelector((state) => state.carts.carts);
  console.log(state);
  return <div>Cart</div>;
}
