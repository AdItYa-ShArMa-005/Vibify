// import {Routin}
import { Link } from "react-router-dom";

const LeftPanel = () =>
{
    return(
        <div className="leftPanel">

                <Link to="/Home" className="link">Home</Link>
                <Link to="/Home/Library" className="link">Library</Link>
                <Link to="/Home/Explore" className="link">Explore</Link>
                <Link to="/Home/Liked_Songs" className="link">Liked Songs</Link>
                <Link to="/Home/Artists" className="link">Artists</Link>
                <Link to="/Home/Languages" className="link">Languages</Link>


                
                
        </div>
    )
}
export default LeftPanel;