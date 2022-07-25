import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./value";

export default configureStore({
  reducer: {
    value: valueReducer,
  },
});
