import React, { Component } from "react";
class Changestate extends Component
{   
    constructor() {
        super();
        this.state = {
            entry: "Checkin",
        };
    }

    clickbutton =()=>
    {
        
        this.setState({
            entry:this.state.entry==="Checkin"? "Checkout":"Checkin"


        });
    };
   
  render()
  {
       const my={
   backgroundColor:this.state.entry==="Checkin" ? "green":"red",
};
    return( <>

          <button style={my} onClick={this.clickbutton}>{this.state.entry}</button>
             </>
    );
    
  }
}
 export default Changestate;


