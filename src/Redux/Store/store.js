import { configureStore } from "@reduxjs/toolkit";
import { youtubeSlice } from "../Slice/youtbeSlice";


export const store = configureStore({
    reducer: {
        youtubeApp: youtubeSlice.reducer,
    }
}

)