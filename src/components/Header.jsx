import { useState } from "react";

const Header = () =>
{
    const [searchInput, setSearchInput] = useState("");
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
        <input
            type="text"
            placeholder="     Search your favourite song here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className=""
        />

        <button className="">
            🔍
        </button>
    </div>


</div>
    )
}
export default Header;