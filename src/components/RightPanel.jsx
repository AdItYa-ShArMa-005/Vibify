import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";

const RightPanel = () =>
{
    const currentSong = useSelector(state => state.currentSong.value);
    const songList = useSelector(state => state.songList.value);
    const dispatch = useDispatch();

    return(
        <div className="width=full m-6 p-6 h-screen flex items-center justify-center bg-gradient-to-b from-green-200 via-green-400 to-green-500 border-3 border-gray-600 ">

            {/* Player Card */}
            {/* <div className="w-80 bg-transparent text-black border-black border-2 border-solid p-6 shadow-2xl"> */}

                {/* Top Bar */}
                <div className="flex justify-center items-center mb-6 text-sm text-gray-300">
                    <p className="p-3 text-black text-lg">NOW PLAYING</p>
                </div>

                {/* Album Art */}
                <div className="flex justify-center mb-6">
                    <img
                        src={currentSong.thumbnail}
                        alt={currentSong.title}
                        className="w-60 h-60 rounded-xl object-fit shadow-lg"
                    />
                </div>

                {/* Song Info */}
                <div className="text-center mb-6">
                    <h2 className="text-lg font-semibold">{currentSong.title}</h2>
                    <p className="text-sm text-gray-400">
                        {currentSong.singers.join(", ")}
                    </p>
                </div>

                {/* Progress Section */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-3 pb-3">
                        <span>1:25</span>
                        <span>3:32</span>
                    </div>

                    <div className="w-full h-1 bg-gray-600 rounded-full">
                        <div className="w-2/3 h-1 bg-yellow-400 rounded-full"></div>
                    </div>
                </div>

                {/* Middle Controls */}
                <div className="mb-6 flex justify-center items-center mb-6 text-lg text-gray-300">
                    <button>➖</button>
                    <button>🔈</button>
                    <button>➕</button>
                </div>

                {/* Bottom Controls */}
                <div className="mt-6 flex justify-between items-center">
                    <button className="text-xl">➕</button>
                    <div className="flex justify-center items-center">
                        <button className="text-xl">⏮️</button>
                        <button className="text-black p-4 rounded-full text-xl shadow-lg">⏸️</button>
                        <button className="text-xl">⏭️</button>
                    </div>
                    <button className="text-xl">⚡</button>
                </div>

            {/* </div> */}

        </div>
    )
}
export default RightPanel;