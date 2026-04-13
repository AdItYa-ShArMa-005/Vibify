// import {Routin}
import { Link } from "react-router-dom";

const LeftPanel = () =>
{
    return(
        <div className="leftPanel">

                <Link to="/Home" className="link">Home</Link>
                <Link to="/Library" className="link">Library</Link>
                <Link to="/Explore" className="link">Explore</Link>
                <Link to="/Liked_Songs" className="link">Liked Songs</Link>
                <Link to="/Artists" className="link">Artists</Link>
                <Link to="/Languages" className="link">Languages</Link>


                
                
        </div>
    )
}
export default LeftPanel;