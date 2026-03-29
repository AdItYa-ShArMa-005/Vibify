const SongCard = ({ song }) => {
    return (
        <div className="w-48 bg-transparent text-black border-black border-2 border-solid p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-lg">{song.title}</h3>
            <p className="text-gray-600">{song.singers}</p>
        </div>
    );
};
export default SongCard;