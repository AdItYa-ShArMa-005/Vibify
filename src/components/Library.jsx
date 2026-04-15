import { useSelector } from "react-redux";

import LibrarySongCard from "../components/LibrarySongCard";

const Library = () => {
    const songs = useSelector((state) => state.songPool.value);

    return (
        <div className="library">
            <div className="library-header">
                <h2>Your Library</h2>
                <p>All your saved songs, playlists, and albums in one place.</p>
            </div>

            <div className="songs">
                {
                   songs.map((song,index)=>(
                      <LibrarySongCard key={index} index={index} song={song}/>
                   ))
                }
            </div>
        </div>
    )
}
export default Library;