import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isLoading: false,
    fetchedBooks:[],
    errors:""
}
export const fecthBooks = createAsyncThunk("books/fecthBooks",
async (arg)=>{
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&maxResults=20`)
    return data.items
})

const FetchbooksSlice = createSlice({
    name:"books",
    initialState,
    reducers:{},
    extraReducers: builder => {
        
            builder.addCase(fecthBooks.pending, state => {
                state.isLoading = true;
            })
            builder.addCase(fecthBooks.fulfilled,(state,{payload}) => {
                state.isLoading = false;
                state.fecthedBooks = payload;
                state.errors = ""
            })
             builder.addCase(fecthBooks.rejected, (state,action) => {
                state.isLoading = false;
                state.fetchedBooks= [];
                state.errors = action.error.message
            })
    }
})

export default FetchbooksSlice.reducer;
