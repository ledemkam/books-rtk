import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    books: [],
}

const LibrairySlice = createSlice({
    name:'librairy',
    initialState,
    reducers:{
        addBook: (state,action) => {
            const newBook = {
               id :nanoid(),
               title: action.payload.title,
               author: action.payload.author,
            }
            state.books.push(newBook);
        },
        deleteBook:(state,action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        },
         allDeleteBook:(state) => {
             state.books = []
         }
    }

})

export default LibrairySlice.reducer;
export const {addBook,deleteBook,allDeleteBook} = LibrairySlice.actions