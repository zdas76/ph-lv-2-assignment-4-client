import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCart } from "../../../types/productTypes";

export type TItem = {
  id: string;
  quantity: number;
};
type TInitialState = {
  carts: TCart[];
};
const initialState: TInitialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCart>) => {
      state.carts.push({ ...action.payload, quantity: 1 });
    },

    productQuantity: (state, action: PayloadAction<TItem>) => {
      const res = state.carts.find((item) => item._id === action.payload.id);
      console.log(res);
      res!.quantity = action.payload.quantity;
    },

    deleteItem: (state, action: PayloadAction<{ id: string }>) => {
      state.carts = state.carts.filter(
        (item) => item._id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.carts = [];
    },
  },
});

export const { addToCart, productQuantity, clearCart, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
