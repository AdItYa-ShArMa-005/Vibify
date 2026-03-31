import { useState } from "react";
import songs from "./song_pool";
const Header = () =>
{
    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState("");
    const[searchResults, setSearchResults] = useState([]);
    const[status, setStatus] = useState("");
    const[fetching, setFetching] = useState(false);
    const [list,setlist]=useState(false);
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
        await new Promise(resolve => setTimeout(resolve, 5000));
        setFetching(false);
        setStatus("Song added successfully!");
        setTimeout(() => setStatus(""), 3000);
        let newSong = {
            title: "Levitating",
            singers: ["Dua Lipa"],
            mood: ["Happy", "Dance", "Feel Good"],
            year: 2020,
            album: "Future Nostalgia",
            duration: "3:23",
            language: "English",
            thumbnail: "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg"
        };
        songs.push(newSong);
        handleSearch(songName);
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
            setTimeout(() => fetchSong(searchInput), 3000);

        }
        else
            handleSearch(searchInput);
    }


    return(
       <div className="header">
    
        <div className="heading">
            
            <button>Home</button>
            <button>Explore</button>
            <button>Playlist</button>
            <button>Library</button>
        </div>

    {/* Search Bar */}
    <div className="inputfield">
        <div>
            <input
            type="text"
            placeholder="     Search your favourite song here..."
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
            
            className="inputText"
        />

        <button className="" onClick={handleSubmit}>
            🔍
        </button>
        </div>
        
        <div>
        {error && <p className="error">{error}</p>}
        {fetching && <p className="status">fetching ... </p>}
        {!fetching && status && <p className="status">{status}</p>}
        {searchResults.length > 0 &&
        <div>
            {/* <ul>
                {
                    searchResults.map((song, index) => (
                        <li key={index} className="">
                            <p className="">{song.title}</p>
                        </li>
                    ))
                }
            </ul> */}
            {searchInput && (
            <div className="search-overlay">
    
                {searchResults.length > 0 ? (
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
    )}

  </div>
)}
        </div>}

    </div>
    </div>
    


</div>
    )
}
export default Header;