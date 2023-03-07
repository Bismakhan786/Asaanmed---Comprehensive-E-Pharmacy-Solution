import { createSlice } from "@reduxjs/toolkit";

const FavouritesSlicer = createSlice({
    name: "favourites",
    initialState:[],
    reducers:{
        addToFav: (state, action) => {
            state.push(action.payload)
        },
        removeFromFav: (state, action) => {
            return state.filter(item => item.favId !== action.payload)
        }
    }
})

export const {addToFav, removeFromFav} = FavouritesSlicer.actions
export default FavouritesSlicer.reducer