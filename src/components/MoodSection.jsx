import flow from "../images/flow.png"
import chill from "../images/chill.jpeg";
import workout from "../images/workout.jpeg";
import sad from "../images/sad.jpeg";
import focus from "../images/focus.jpeg";
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from "../states/songCategorySlice";
import { setSongList } from "../states/songListSlice";
import songs from "./song_pool";


const MoodSection = ({mood}) => {

    const dispatch = useDispatch();
    const formattedTime = new Date().toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true});
    const category = useSelector(state => state.Category.value);
    const songList = useSelector(state => state.songList.value);

    function convertToMinutes(timeStr) {
        let [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    }
    // help needed here.
    // dispatch(setSongList(songs.filter(song => calculateDifference(song.timeStamp))));

    function calculateDifference(songTime) {
            const currentMinutes = convertToMinutes(formattedTime);
            const songMinutes = convertToMinutes(songTime);

            let diff = Math.abs(currentMinutes - songMinutes);

            // handle edge case (midnight wrap)
            diff = Math.min(diff, 1440 - diff);

            return diff <= 120; // 2 hours = 120 mins
    }

    function songHandler(id){

        let l = songs.filter(song => calculateDifference(song.timeStamp));
        console.log(l);
        l = songs.filter(song => song.mood.includes(id));
        console.log(l);

        if(id === category)
        {
            dispatch(setCategory("None"));
            dispatch(setSongList(songs.filter(song => calculateDifference(song.timeStamp))));
        }
        else 
        {
            dispatch(setCategory(id));
            dispatch(setSongList(songs.filter(song => song.mood.includes(id))))
        }

    }


    return (
        <div className="mood-icons">
            <button className="mood-icons" onClick={() => songHandler(mood)}>
                <img src="../Images/${mood}.jpeg" alt={mood}/>
            </button>
        </div>
    )
}

export default MoodSection;