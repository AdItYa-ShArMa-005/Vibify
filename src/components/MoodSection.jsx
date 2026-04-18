import {useDispatch, useSelector} from "react-redux";
import { setCategory } from "../states/songCategorySlice";
import { setSongList } from "../states/songListSlice";
import { calculateDifference } from "./calculateDifference";


const MoodSection = ({mood}) => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.Category.value);
    function songHandler(id){

        if(id === category){
            dispatch(setCategory("None"));console.log("category changed to None");}
        else{
            dispatch(setCategory(id));console.log("category changed to "+id);}

    }


    return (
        <div className="mood-icons">
            <button className="mood-icons" onClick={() => songHandler(mood)}>
                <img src={`/images/${mood}.jpeg`} alt={mood} className="mood-icon"/>
                
                <div className="songtitle">{mood}</div>
            </button>
        </div>
    )
}

export default MoodSection;

