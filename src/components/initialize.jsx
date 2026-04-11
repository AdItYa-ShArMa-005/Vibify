import { useSelector, useDispatch } from "react-redux";
import { setInitialLiked } from "../states/likedSongsSlice";
import { setInitialList } from "../states/songListSlice";
import { calculateDifference } from "./calculateDifference";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Initialize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const songPool = useSelector(state => state.songPool.value);
    const category = useSelector(state => state.Category.value);
    const songList = useSelector(state => state.songList.value);
    const currentSong = useSelector(state => state.currentSong.value);
    const likedSong = useSelector(state => state.likedSongs.value);

    useEffect(()=>{
        dispatch(setInitialLiked(songPool.filter(song => song.liked === true)));
        dispatch(setInitialList(songPool.filter(song => calculateDifference(song.timeStamp))));
    },[]);

    useEffect(()=>{
        console.log("category changed to " + category);
        console.log("in initialize");
    },[category]);

    useEffect(()=>{
        dispatch(setInitialLiked(songPool.filter(song => song.liked === true)));
    },[songPool]);

    useEffect(() => {
        if(category === "likedSong")
            dispatch(setInitialList(likedSong));
        else if(category === "None")
            dispatch(setInitialList(songPool.filter(song => calculateDifference(song.timeStamp))));
        else
            dispatch(setInitialList(songPool.filter(song => song.mood.includes(category))));
    },[songPool,category]);


    // console.log("Category : " + category);
    // console.log("SongList : " + songList);
    // console.log("CurrentSong : " + currentSong);
    // console.log("Liked songs : " + likedSong);
    // console.log("Song pool : " + songPool);
    return null;

}

export default Initialize;