import SongCard from "./SongCard";
import { useState } from "react";

const CenterPanel = ({ songs, setCurrentSong }) =>
{
    const [mood,setmood]=useState('happy');
    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p >An infinite personalized mix of the music you love and new discoveries</p>



            {/* <h3 className="moodboard">Flow : Play how you feel</h3> */}





         {/* hero buttons */}
            {/* <div className="flex gap-4 mt-6  justify-around items-center border-2 border-black border-solid w-full h-60  absolute top-1/10 ">
                <div className=" border-2 border-black border-solid rounded-full h-40 w-40"></div>
                <div className=" border-2 border-black border-solid rounded-full h-40 w-40"></div>
                <div className=" border-2 border-black border-solid rounded-full h-40 w-40"></div>
            </div> */}

        {/* recommendation list */}
        
            <div className="song-container">
                <h2>Recommended songs :</h2>
                <div className="all-songs">
                    {
                    songs.map((song, index) => (
                        <button className="song-button" onClick={()=>setCurrentSong(song)}>
                            <SongCard key={index} song={song} mood={mood}/>
                        </button>
                    ))

                }
                </div>
            </div>

        </div>
    )
}
export default CenterPanel;