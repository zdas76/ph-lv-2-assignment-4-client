import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCart = {
  _id: string;
  category: string;
  description: string;
  images: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};

type TItem = {
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
      const isExised = state.carts.find(
        (item) => item._id === action.payload._id
      );
      if (isExised) {
        throw "Already Exised";
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },

    productQuantity: (state, action: PayloadAction<TItem>) => {
      const res = state.carts.find((item) => item._id === action.payload.id);
      res!.quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, productQuantity } = cartSlice.actions;
export default cartSlice.reducer;
