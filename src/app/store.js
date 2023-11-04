import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../features/eventSlice";

const store = configureStore({
    reducer: {
        eventSlice,
    }
})

export default store