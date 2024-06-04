import React, { useState } from "react";
//import Hooks,{SamHook} from Hooks";
function Attendence()
{
    const [click,checking]=useState(0)
    return (<div>
        <button onClick={()=>checking(click+1)}align="center">Entry Count</button>
                 {click}
        </div>
    );
}
export default Attendence;