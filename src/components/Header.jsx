import { useState } from "react";

const Header = () =>
{
    const [searchInput, setSearchInput] = useState("");
    return(
       <header className="flex-[1] bg-gradient-to-b from-green-500  via-green-400 to-green-200 text-white flex flex-col justify-center items-center px-4 space-y-6 py-8 border-3 border-gray-600 ">
    
    {/* Title */}
    <h1 className="text-3xl font-bold tracking-wide">Vibify</h1>

    {/* Subtitle */}
    <p className="text-sm text-blue-100">
        Discover your favorite music 🎧
    </p>

    {/* Search Bar */}
    <div className="w-full max-w-md relative">
        <input
            type="text"
            placeholder="     Search your song here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-300"
        />

        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition duration-200">
            🔍
        </button>
    </div>

</header>
    )
}
export default Header;