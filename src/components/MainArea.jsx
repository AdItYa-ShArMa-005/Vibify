import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import { useState } from "react";
const MainArea = () =>
{
    return(
          <div className="flex-[5] flex">
            <LeftPanel/>
            <CenterPanel/>
            <RightPanel/>
      </div>
    )
}
export default MainArea;