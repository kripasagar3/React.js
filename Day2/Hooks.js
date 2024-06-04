import React, { useState } from "react";
function SamHook()
{     const [click,setclick]=useState(0)
    return(
        <div>
            <button onClick={()=>setclick(click+1)}align="centre">click  </button>
            
{
            (click%2==0)?<img src={require('./welcome1.jpeg')}></img>:<img src={require('./thankyou.jpeg')}></img>}
                
                
              
            </div>
    );
}
export default SamHook;