import { useState } from "react";
import { setSongList } from "../states/songListSlice";
import {useSelector, useDispatch} from "react-redux";
import { GoogleGenAI } from "@google/genai";
import { Link } from "react-router-dom";


const Header = () =>
{
    const ai = new GoogleGenAI({apiKey : import.meta.env.VITE_GENAI_API_KEY});

    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState("");
    const[searchResults, setSearchResults] = useState([]);
    const[status, setStatus] = useState("");
    const[fetching, setFetching] = useState(false);
  
    const songs = useSelector(state => state.songList.value);
    const dispatch = useDispatch();
    
    const handleSearch = (input) =>{
        setSearchInput(input.trim());
        if(input.trim() === "")
        {
            setSearchResults([]);
            setError("");
            return;
        }
        let foundSongs = songs.filter(song => song.title.toLowerCase().includes(searchInput.toLowerCase()));
        if(foundSongs.length === 0)
        {
            setError("No songs found matching your search.");
            setSearchResults([]);
        }
        else
        {
            setError("");
            setSearchResults(foundSongs);
        }

    }

     const fetchSong = async (songName) =>
    {
        setError("");
        setFetching(true);
        try{
            const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
                    Give me a song ${songName} in this exact JSON format:

                    {
                    "title": "string",
                    "singers": ["string"],
                    "mood": ["string"],
                    "year": number,
                    "album": "string",
                    "duration": "string",
                    "language": "string",
                    "thumbnail": "string"
                    }

                    Return ONLY raw JSON (no markdown, no backticks).
                    `
         });


            const text = response.text;
            const data = JSON.parse(text);
            dispatch(setSongList([...songs, data]));
            setStatus("Song successfully added to your library!");
            setSearchInput("");
        
        }
        catch(error)
        {
            setStatus("Unable to fetch song right now. Sorry for inconvenience. Try again later!");
            console.error("Error fetching song:", error);
            return;
        }
        setFetching(false);
        setTimeout(() => setStatus(""), 3000);
    }

    const handleSubmit = () =>
    {

        if(searchInput.trim() === "")
        {
            setError("Enter a valid song name");
            setSearchResults([]);
            return;
        }
        if(searchResults.length === 0)
        {
            setError("No songs found matching your search. We will try to fetch it for you.");
            setTimeout(() => fetchSong(searchInput), 2000);

        }
        else
            handleSearch(searchInput);
    }


    return(
       <div className="header">
    
            <div className="heading">
                
                <Link to='/MainArea'>Home</Link>
                <Link to='/Library'>Library</Link>
                <Link to='/Explore'>Explore</Link>
                <Link to='/Playlist'>Playlist</Link>
            </div>

            {/* Search Bar */}
            <div className="inputfield">
                <div>
                    <input
                    type="text"
                    placeholder=" Search your favourite song here..."
                    value={searchInput}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="inputText"/>

                    <button className="" onClick={handleSubmit}>
                        🔍
                    </button>
                </div>
        
                <div>
                    {error && !status && <p className="error">{error}</p>}
                    {fetching && <p className="status">fetching ... </p>}
                    {!fetching && status && <p className="status">{status}</p>}
                    {
                        searchResults.length > 0 &&
                            <div>
                                {
                                    searchInput && (
                                        <div className="search-overlay">
                                
                                            {
                                                searchResults.length > 0 ? (
                                                <>
                                                    <p className="search-title">RESULTS</p>

                                                    <div className="search-grid">
                                                        {searchResults.map((song, index) => (
                                                            <div key={index} className="search-item">
                                                            <img src={song.thumbnail} alt="" />
                                                            <div>
                                                                <p>{song.title}</p>
                                                                <span>Song</span>
                                                            </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                                ) : (
                                                        <p className="no-results">No songs found 😕</p>
                                                    )
                                            }

                                        </div>
                                    )
                                }
                            </div>
                    } 

                </div>
            </div>
        </div>
    )
}
export default Header;