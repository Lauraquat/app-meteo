import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name : "favorite",
    initialState: {
        listOfFavorites: [],
        // isFavorite : false,
    },
    reducers: {
        addFavorite:(state, action) => {
            state.listOfFavorites.push(action.payload)
            // state.isFavorite = true
        },

        removeFavorite:(state, action) => {
            const index = state.listOfFavorites.indexOf(action.payload)
            state.listOfFavorites.splice(index, 1)
            console.log(action.payload)
            console.log(index)
            // state.isFavorite = false
            console.log("appel de remove favorite" );
           
        }
    }
})

export const {addFavorite, removeFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer