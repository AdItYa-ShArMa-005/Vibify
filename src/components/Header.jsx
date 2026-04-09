// import { useState } from "react";
// import { setSongList } from "../states/songListSlice";
// import {useSelector, useDispatch} from "react-redux";
// import { GoogleGenAI } from "@google/genai";
// import { Link } from "react-router-dom";


// const Header = () =>
// {
//     const ai = new GoogleGenAI({apiKey : import.meta.env.VITE_GENAI_API_KEY});

//     const [searchInput, setSearchInput] = useState("");
//     const [error, setError] = useState("");
//     const[searchResults, setSearchResults] = useState([]);
//     const[status, setStatus] = useState("");
//     const[fetching, setFetching] = useState(false);
  
//     const songs = useSelector(state => state.songList.value);
//     const dispatch = useDispatch();

//     const handleSearch = (input) =>{
//         setSearchInput(input.trimStart());
//         if(input.trim() === "")
//         {
//             setSearchResults([]);
//             setError("");
//             return;
//         }
//         let foundSongs = songs.filter(song => song.title.toLowerCase().includes(input.toLowerCase()));
//         if(foundSongs.length === 0)
//         {
//             setError("No songs found matching your search. Press search and we will fetch it for you.");
//             setSearchResults([]);
//         }
//         else
//         {
//             setError("");
//             setSearchResults(foundSongs);
//         }

//     }

//      const fetchSong = async (songName) =>
//     {
//         setError("");
//         setFetching(true);
//         try{
//             const response = await ai.models.generateContent({
//             model: "gemini-2.5-flash",
//             contents: `
//                     Give me a song ${songName} in this exact JSON format:

//                     {
//                     "title": "string",
//                     "singers": ["string"],
//                     "mood": ["string"],
//                     "year": number,
//                     "album": "string",
//                     "duration": "string",
//                     "language": "string",
//                     "thumbnail": "string"
//                     }

//                     Return ONLY raw JSON (no markdown, no backticks).
//                     `
//          });
//             setFetching(false);
//             const text = response.text;
//             const data = JSON.parse(text);
//             setStatus("Song successfully added to your library!");
//             dispatch(setSongList([...songs, data]));
//             setTimeout(() => {setStatus(""); setSearchInput("")}, 3000);
//         }
//         catch(error)
//         {
//             setStatus("Unable to fetch song right now. Sorry for inconvenience. Try again later!");
//             console.error("Error fetching song:", error);
//             setFetching(false);
//             setTimeout(() => {setStatus(""); setSearchInput("")}, 3000);
//             return;
//         }

//     }



//     return(
//        <div className="header">
           
//         <div className="heading">
//             <img src="/images/logo.png" className="logo" alt="logo"></img>
//             <Link to='/MainArea'>Home</Link>
//                 <Link to='/Library'>Library</Link>
//                 <Link to='/Explore'>Explore</Link>
//                 <Link to='/Playlist'>Playlist</Link>
         
               
//         </div>


//     {/* Search Bar */}
//     <div className="inputfield">
//         <div>
//             <input
//             type="text"
//             placeholder="     Search your favourite song here..."
//             value={searchInput}
//             onChange={(e) => handleSearch(e.target.value)}
            
//             className="inputText"
//         />

//         <button className="" onClick={() => fetchSong(searchInput)}>
//             🔍
//         </button>
//         </div>
        
       
//         <div className="results-container">
//         {searchInput && (
//         <div className="search-overlay">
//             {error && !status && <p className="error">{error}</p>}
//             {fetching && <p className="status">fetching ... </p>}
//             {!fetching && status && <p className="status">{status}</p>}
      
//         {searchResults.length > 0 &&
//         <>
//           <p className="search-title">TRENDING</p>
//           <div className="line"></div>
//           <div className="search-grid">
//             {searchResults.map((song, index) => (
//               <div key={index} className="search-item">
//                 <img src={song.thumbnail} alt="" />
//                 <div>
//                   <p>{song.title}</p>
//                   <span>Song</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//         }

//         </div>
//         )}
//         </div>
//         </div>
    


// </div>
//     )
// }

// export default Header;
import { useState } from "react";
import { setSongList } from "../states/songListSlice";
import { useSelector, useDispatch } from "react-redux";
import { GoogleGenAI } from "@google/genai";
import { Link } from "react-router-dom";

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

            {/* NAV LINKS */}
            <div className="heading">
                <Link to="/">Home</Link>
                <Link to="/Library">Library</Link>
                <Link to="/Explore">Explore</Link>
                <Link to="/Playlist">Playlist</Link>
            </div>

            {/* SEARCH */}
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
                            <div key={index} className="search-item">
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