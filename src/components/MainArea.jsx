import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";

const MainArea = () =>
{  
    return(
          <div className="main-content">
            <LeftPanel/>
            <CenterPanel/>
            {/* <RightPanel/> */}
      </div>
    )
}
export default MainArea;