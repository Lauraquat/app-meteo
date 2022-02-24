import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name : "favorite",
    initialState: {
        listOfFavorites: [],
    },
    reducers: {
        addFavorite:(state, action) => {
            state.listOfFavorites.push(action.payload)
        },

        removeFavorite:(state  , action) => {       
            state.listOfFavorites.splice(action.payload, 1)
        }
    }
})

export const {addFavorite, removeFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer