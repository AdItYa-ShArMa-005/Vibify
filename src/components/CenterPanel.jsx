import SongCard from "./SongCard";
const CenterPanel = ({ songs, setCurrentSong }) =>
{
    return(
        <div className="flex-[4] flex flex-col gap-4 justify-start items-center bg-gray-100  text-black relative p-6 m-6">
         {/* hero buttons */}
            <div className="flex gap-4 mt-6  justify-around items-center border-2 border-black border-solid w-full h-60  absolute top-1/10 ">
                <div className=" border-2 border-black border-solid rounded-full h-40 w-40"></div>
                <div className=" border-2 border-black border-solid rounded-full h-40 w-40"></div>
                <div className=" border-2 border-black border-solid rounded-full h-40 w-40"></div>
            </div>

        {/* recommendation list */}
            <div className="flex flex-col justify-start items-center w-full h-fit border-2 border-solid border-black absolute top-2/5">
                <h2>Recommended songs :</h2>
                <div className="flex flex-col justify-start items-center">
                    {
                    songs.map((song, index) => (
                        <button onClick={()=>setCurrentSong(song)}>
                            <SongCard key={index} song={song}/>
                        </button>
                    ))

                }
                </div>
            </div>

        </div>
    )
}
export default CenterPanel;