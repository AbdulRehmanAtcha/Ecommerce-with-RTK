import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], totalQuantity: 0, totalPrice: 0 };

export const eStoreSlice = createSlice({
  name: "eStoreSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let filter = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.category === action.payload.category
      );
      if (filter === -1) {
        // Check if the item is not already in the cart
        state.cart.push(action.payload); // Add the item to the cart
      } else {
        state.cart[filter].quantity = state.cart[filter].quantity + 1;
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          item.id !== action.payload.id &&
          item.category === action.payload.category
      );
    },
    increment: (state, action) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (
          state.cart[i].category === action.payload.category &&
          state.cart[i].id === action.payload.id
        ) {
          state.cart[i].quantity = state.cart[i].quantity + 1;
        }
      }
    },
    decrement: (state, action) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (
          state.cart[i].category === action.payload.category &&
          state.cart[i].id === action.payload.id
        ) {
          if (state.cart[i].quantity === 1) {
            state.cart = state.cart.filter(
              (item) =>
                item.id !== action.payload.id &&
                item.category === action.payload.category
            );
          } else {
            state.cart[i].quantity = state.cart[i].quantity - 1;
          }
        }
      }
    },
  },
});

export const { addToCart, getCartTotal, deleteProduct, increment, decrement } =
  eStoreSlice.actions;

export default eStoreSlice.reducer;
