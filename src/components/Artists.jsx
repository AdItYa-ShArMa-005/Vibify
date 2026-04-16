import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ArtistsCard from "./ArtistsCard";

const Artists=()=>{
    const songPool = useSelector(state => state.songPool.value);
    const[artists,setArtists] = useState([]);

    useEffect(() => {
        let li = [];
        let flag = true;
        songPool.filter(song => {
            song.singers.map(item => {
                if(flag){
                    flag = false;
                    li.push({singer : item, count : 1});
                }
                if(!flag)
                {
                    let ind ;
                    if(li.some((e,index) => {
                        if(e.singer === item)
                        {
                            ind = index;
                            return true;
                        }
                        else
                            return false;
                    }))
                        li[ind].count++;
                    else
                        li.push({singer : item, count : 1});
                }
            });
        });
        console.log(li.slice(0,5));
        setArtists(li);
    },[]);

    useEffect(() => {
        let li = [];
        let flag = true;
        songPool.filter(song => {
            song.singers.map(item => {
                if(flag){
                    flag = false;
                    li.push({singer : item, count : 1});
                }
                if(!flag)
                {
                    let ind ;
                    if(li.some((e,index) => {
                        if(e.singer === item)
                        {
                            ind = index;
                            return true;
                        }
                        else
                            return false;
                    }))
                        li[ind].count++;
                    else
                        li.push({singer : item, count : 1});
                }
            });
        });
        setArtists(li);
    },[songPool]);


    console.log(artists.slice(0,5));
    return(
        <div className="library">
            <div className="library-header">
                <h2>Artists</h2>
                <p>Every Artists you listen to, at one place.</p>
            </div>

            <div className="songs">
                {
                   artists.map((artist,index)=>(
                      <ArtistsCard key={index} index={index} artist={artist}/>
                   ))
                }
            </div>
        </div>
    )
}
export default Artists;