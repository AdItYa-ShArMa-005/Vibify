import { createSlice } from "@reduxjs/toolkit";

const songCategorySlice = createSlice({
    name : "Category",
    initialState : {value : "None"},
    reducers : {
        setCategory : (state,action ) => {
            state.value = action.payload;
        }
    }
});

export const {setCategory} = songCategorySlice.actions;
export default songCategorySlice.reducer;