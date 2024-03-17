import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.YOU_TUBE_API_KEY


export const HomePagerReducer = createAsyncThunk('youtubeApp/app/homePageRed', async (isnext, { getState }) => {
    const { youtubeApp: { nextPageToken: nextPageTokenFromState, videos } } = getState();
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video`);
    console.log(response);
})