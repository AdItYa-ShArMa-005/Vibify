import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Artists=()=>{
    const songPool = useSelector(state => state.songPool.value);
    const[artists,setArtists] = useState([]);

    useEffect(() => {
        setArtists(...artists,songPool.map(song => {
             let list =  song.singers.map(item => {
                if(!artists.includes(item))
                    return item;
             } );
             console.log("-------------"+list);
             return list;
        }));
    },[]);

    useEffect(() => {
        setArtists(songPool.map(song => {
             return song.singers.map(item => {
                if(!artists.includes(item))
                    return item;
             } );
        }));
    },[songPool]);
    console.log(artists.slice(0,11));
    return(
        <div>
            This is artists section
        </div>
    )
}
export default Artists;