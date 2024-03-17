import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: '',
    serachresult: [],
    nextPageToker: null,
    recommendedvideo: []
}

export const youtubeSlice = createSlice({
    name: "youtubeApp,",
    initialState,
    reducers: {

    }
})

export default youtubeSlice.reducer;