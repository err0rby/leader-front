import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../features/eventSlice";
import app from "../features/applicationSlice";

const store = configureStore({
    reducer: {
        eventSlice,
        app
    }
})

export default store