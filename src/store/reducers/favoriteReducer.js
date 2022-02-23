import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name : "favorite",
    initialState: {
        listOfFavorites: []
    },
    reducers: {
        addFavorite:(state, action) => {
            state.listOfFavorites.push(action.payload)
        }
    }
})

export const {addFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer