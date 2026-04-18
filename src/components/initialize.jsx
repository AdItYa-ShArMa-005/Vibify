import { useSelector, useDispatch } from "react-redux";
import { setInitialLiked } from "../states/likedSongsSlice";
import { setInitialList,setSongList } from "../states/songListSlice";
import { calculateDifference } from "./calculateDifference";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentSong } from "../states/currentSongSlice";

const Initialize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const songPool = useSelector(state => state.songPool.value);
    const category = useSelector(state => state.Category.value);
    const songList = useSelector(state => state.songList.value);
    const currentSong = useSelector(state => state.currentSong.value);
    const likedSong = useSelector(state => state.likedSongs.value);

    useEffect(()=>{
        // dispatch(setInitialLiked(songPool.filter(song => song.liked === true)));
        dispatch(setSongList(songPool.filter(song => calculateDifference(song.timeStamp))));
        },[]);

    useEffect(()=>{
        dispatch(setInitialLiked(songPool.filter(song => song.liked === true)));
    },[songPool]);

    useEffect(() => {
        if(category === "likedSong")
            dispatch(setSongList(likedSong));
        else if(category === "None")
            dispatch(setSongList(songPool.filter(song => calculateDifference(song.timeStamp))));
        else
            dispatch(setSongList(songPool.filter(song => song.mood.includes(category))));
    },[songPool,category]);

    return null;

}

export default Initialize;