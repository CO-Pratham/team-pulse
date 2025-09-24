import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import roleReducer from "./roleSlice";

export const store = configureStore({
    reducer: {
        members: memberReducer,
        roles: roleReducer,
    },
});

export default store;
