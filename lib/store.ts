import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/CounterState/CounterSlice";
import TodoSlice from "./features/TodoState/TodoSlice";
import itemsReducer from "./features/ItemSlice/ItemSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: CounterSlice,
      todo: TodoSlice,
      items: itemsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
