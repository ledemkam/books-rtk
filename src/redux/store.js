import { configureStore } from "@reduxjs/toolkit";
import FetchbooksSliceReducer from "./features/fetchBooks/FetchbooksSlice";
import LibrairyReducer from "./features/librairy/LibrairySlice";

export  const store = configureStore({
    reducer: {
       librairy : LibrairyReducer,
       books: FetchbooksSliceReducer
    }
})