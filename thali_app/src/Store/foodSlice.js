import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  DUMMY_ITEMS: [
    {
      title: "Palak Paneer",
      price: 250,
      image: "/images/paneer.png",
      quantity: 0,
    },
    {
      title: "Dal",
      price: 200,
      image: "/images/daal.png",
      quantity: 0,
    },
    {
      title: "Curd",
      price: 50,
      image: "/images/curd.png",
      quantity: 0,
    },
    {
      title: "Pickle",
      price: 40,
      image: "/images/pickel.png",
      quantity: 0,
    },
    {
      title: "Roti",
      price: 16,
      image: "/images/roti.png",
      quantity: 0,
    },
    {
      title: "Gulab Jamun",
      price: 150,
      image: "/images/sweet.png",
      quantity: 0,
    }],
  items: [],
  totalQuantity: 0,
  cartButtonIsVisible: false,
};

const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      const dummy = state.DUMMY_ITEMS.length;
      for (let i = 0; i < dummy; i++) {
        state.DUMMY_ITEMS[i].quantity++;
      }
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.cartButtonIsVisible = true;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          image: newItem.image,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price
      };

    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.cartButtonIsVisible = true;
      const dummy = state.DUMMY_ITEMS.length;
      for (let i = 0; i < dummy; i++) {
        state.DUMMY_ITEMS[i].quantity--;
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    toogleHandler(state) {
      state.cartButtonIsVisible = !state.cartButtonIsVisible;
    },
    nameToogleHandler(state) {
      state.cartButtonIsVisible = false;
    }
  },
});

export const FoodActions = FoodSlice.actions;

export default FoodSlice.reducer;