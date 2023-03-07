import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((cartItem) => cartItem.id !== action.payload);
    },
    clearCart(state) {
      return (state = []);
    },
    updateCartItems: (state, action) => {
      let copy = state.slice();
      let index = copy.findIndex(
        (item) => item.id === action.payload.productId
      );
      copy.splice(index, 1, action.payload.newProduct);
      return (state = copy);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItems } =
  CartSlice.actions;
export default CartSlice.reducer;
