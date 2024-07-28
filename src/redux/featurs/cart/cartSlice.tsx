import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCart = {
  _id: string;
  category: string;
  description: string;
  images: string;
  name: string;
  price: number;
  stock: number;
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
        state.carts.push({ ...action.payload });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
