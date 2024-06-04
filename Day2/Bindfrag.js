import React, { Component } from "react";
class bindfrag extends Component
{
    constructor()
    {
      super()
      this.state={
        place:"hi how are you"
      }
     this.disp=this.disp.bind(this)
    }
    disp()
    {
        this.setState(
            {
                place:"thatha vararuu...."
            }
        );

        
    }

   render()
   {
    return(
        <>
        <button onClick={this.disp}>click</button>
        <p>{this.state.place}</p>
   </> );
   }

}
export default bindfrag