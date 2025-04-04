import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./features/products/ProductsSlice";
import { userSlice } from "./features/users/UserSlice";
import { basketSlice } from "./features/basket/BasketSlice";
import { searchesSlice } from "./features/search/SearchesSlice";


const rootReducer = combineSlices(
  productsSlice,
  userSlice,
  basketSlice,
  searchesSlice
);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Вывод верхового типа `makestore
export type AppStore = ReturnType<typeof makeStore>;
// Вывод типа `appdispatch 'из самого магазина
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
