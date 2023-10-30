import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from './foodSlice'

const Store = configureStore({
    reducer: FoodSlice,
}
)

export default Store;