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

    const[ slide, setSlide] = useState(0);
    const artistsPerSlide = 56;
    const start = slide * artistsPerSlide;
    const noOfSlides = Math.ceil(artists.length/artistsPerSlide); 

    return(
        <div className="library">
            <div className="library-header">
                <h2>Artists</h2>
                <p>Every Artists you listen to, at one place.</p>
            </div>

            <div className="song-grid">
                {
                   artists.slice(start, start+artistsPerSlide).map((artist,index)=>(
                      <ArtistsCard key={index} index={index} artist={artist} start ={start}/>
                   ))
                }
            </div>

            <div style={{fontSize : 20, color : "white", display : "flex", justifyContent : "center", alignContent : "center", margin : 10, padding : 10, gap : 10}}>
                <button onClick={() => setSlide(slide-1)} disabled={slide === 0}>➖</button> 
                <div style={{border : 2, borderColor : "black", borderStyle : "solid"}}><p> {slide+1} / {noOfSlides} </p></div>
                <button onClick={() => setSlide(slide+1)} disabled={slide+1 === noOfSlides}>➕</button>
            </div>
        </div>
    )
}
export default Artists;