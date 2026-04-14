import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";
import { useState, useEffect, useRef } from "react";
import { toggleLike } from "../states/songpoolSlice";

const MusicPlayer = () => {

    const song = useSelector(state => state.currentSong.value);
    const songList = useSelector(state => state.songList.value);

    const [message, setMessage] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [totalTime, setTotalTime] = useState("0:00");

    // ✅ SINGLE SOURCE OF TRUTH
    const [isLiked, setIsLiked] = useState(song.liked);

    const playerRef = useRef(null);
    const playerReady = useRef(false);
    const intervalRef = useRef(null);

    const dispatch = useDispatch();

    const getVideoId = (thumbnail) => {
        try {
            return thumbnail.split('/vi/')[1].split('/')[0];
        } catch {
            return null;
        }
    };

    useEffect(()=>{
        setIsLiked(song.liked);
    },[song]);

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return "0:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' + s : s}`;
    };

    const startProgressTracker = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (playerRef.current && playerReady.current) {
                const current = playerRef.current.getCurrentTime();
                const total = playerRef.current.getDuration();

                if (total > 0) {
                    setProgress((current / total) * 100);
                    setCurrentTime(formatTime(current));
                    setTotalTime(formatTime(total));
                }
            }
        }, 1000);
    };

    useEffect(() => {
        const initPlayer = () => {
            playerRef.current = new window.YT.Player("yt-player", {
                height: "1",
                width: "1",
                videoId: getVideoId(song.thumbnail),
                playerVars: { autoplay: 0 },
                events: {
                    onReady: () => {
                        playerReady.current = true;
                        startProgressTracker();
                    },
                    onStateChange: (e) => {
                        setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
                    },
                },
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        return () => {
            playerReady.current = false;
            clearInterval(intervalRef.current);
            if (playerRef.current) playerRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (!playerReady.current) return;

        const videoId = getVideoId(song.thumbnail);
        if (videoId) {
            playerRef.current.loadVideoById(videoId);
            setIsPlaying(true);
            setProgress(0);
            setCurrentTime("0:00");
            setTotalTime("0:00");
        }
    }, [song]);

    const handleSeek = (e) => {
        if (!playerReady.current) return;

        const bar = e.currentTarget;
        const clickX = e.clientX - bar.getBoundingClientRect().left;
        const width = bar.offsetWidth;
        const percent = clickX / width;

        const total = playerRef.current.getDuration();
        playerRef.current.seekTo(percent * total, true);
    };

    const togglePlay = () => {
        if (!playerReady.current) return;

        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }
    };

    // ✅ FIXED INDEX LOGIC
    const nextSong = () => {
        let index = songList.findIndex(s => s.title === song.title);
        dispatch(setCurrentSong(songList[index + 1]));
    };

    const prvSong = () => {
        let index = songList.findIndex(s => s.title === song.title);
            dispatch(setCurrentSong(songList[index - 1]));
    };

    // ✅ CLEAN LIKE TOGGLE
    const toggleLikes = () => {
        setMessage(isLiked ? "Song removed from Library" : "Song added to Library 💕");
        setIsLiked(!isLiked);
        dispatch(toggleLike(song));

        setTimeout(() => setMessage(""), 1000);
    };

    return (
        <div className="musicplayer">
            <div
                id="yt-player"
                style={{
                    position: "fixed",
                    top: "-9999px",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                }}
            ></div>

            <div className="description">
                <div className="image">
                    <img src={song.thumbnail} alt="pic" />
                </div>
                <div className="song-desc">
                    <div>{song.title}</div>
                    <div>{song.singers.join(", ")}</div>
                </div>
            </div>

            <div className="information">
                <div className="progress-bar">
                  
                    <div className="outer" onClick={handleSeek} style={{ cursor: 'pointer' }}>
                        <div className="inner" style={{ width: `${progress}%` }}></div>
                    </div>
                 
                    <div className="song-duration">{currentTime} / {totalTime}</div>
                </div>

                <div className="control-buttons">
                    <button disabled={songList.findIndex(s => s.title === song.title) === 0} onClick={() => prvSong()}>
                        ⏮
                    </button>

                    <button onClick={togglePlay}>
                        {isPlaying ? "⏸" : "▶"}
                    </button>

                    <button
                        disabled={songList.findIndex(s => s.title === song.title) === songList.length - 1}
                        onClick={nextSong}
                    >
                        ⏭
                    </button>
                </div>
            </div>

            <div className="mess">
                {message && <div className="toast">{message}</div>}
            </div>

            <div className="additional-buttons">
                <button className="heart-icon" onClick={toggleLikes}>
                    {isLiked ? "❤️" : "🤍"}
                </button>

                <img src="/images/info.png" className="info" alt="" />
                <img src="/images/noise.png" className="noise" alt="" />
                <img src="/images/expand.png" className="expand" alt="" />
            </div>
        </div>
    );
};

export default MusicPlayer;