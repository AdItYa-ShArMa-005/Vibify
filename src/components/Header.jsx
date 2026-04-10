
import { useState } from "react";
import { setSongList } from "../states/songListSlice";
import { useSelector, useDispatch } from "react-redux";
import { GoogleGenAI } from "@google/genai";
import { Link } from "react-router-dom";

import { setCurrentSong } from "../states/currentSongSlice";
const Header = () => {

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GENAI_API_KEY });

    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [status, setStatus] = useState("");
    const [fetching, setFetching] = useState(false);

    const songs = useSelector(state => state.songList.value);
    const dispatch = useDispatch();

    const handleSearch = (input) => {
        setSearchInput(input.trimStart());

        if (input.trim() === "") {
            setSearchResults([]);
            setError("");
            return;
        }

        let foundSongs = songs.filter(song =>
            song.title.toLowerCase().includes(input.toLowerCase())
        );

        if (foundSongs.length === 0) {
            setError("No songs found. Click search to fetch.");
            setSearchResults([]);
        } else {
            setError("");
            setSearchResults(foundSongs);
        }
    };

    const fetchSong = async (songName) => {
        setError("");
        setFetching(true);

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Give me a song ${songName} in JSON format`
            });

            const data = JSON.parse(response.text);

            dispatch(setSongList([...songs, data]));
            setStatus("Song added 🎵");

        } catch {
            setStatus("Error fetching song");
        }

        setFetching(false);
        setTimeout(() => {
            setStatus("");
            setSearchInput("");
        }, 2000);
    };

    return (
        <div className="header">

            {/* LOGO */}
            <div className="logo-section">
                    <Link to="/">
                      <img src="/images/logo.png" className="logo" alt="logo" />
                      </Link>
              
            </div>

            <div className="inputfield">
                <input
                    type="text"
                    placeholder="Search your favourite song..."
                    value={searchInput}
                    onChange={(e) => handleSearch(e.target.value)}
                />

                <button onClick={() => fetchSong(searchInput)}>🔍</button>

                {searchInput && (
                    <div className="search-overlay">
                        {error && <p>{error}</p>}
                        {fetching && <p>Fetching...</p>}
                        {status && <p>{status}</p>}

                        {searchResults.map((song, index) => (
                            <div key={index} className="search-item" onClick={()=>dispatch(setCurrentSong(song))}>
                                <img src={song.thumbnail} alt="" />
                                <p>{song.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Header;