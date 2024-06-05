import React, { Component } from "react";
import Childcomp from './Childcomp';
class Parentcomp extends Component
{
    constructor()
    {
        super()
        this.state={
            name:"Bala",
        };
        this.disppop=this.disppop.bind(this)
    }

    disppop()
    {
        alert(`${this.state.name}`);
    }
    render()
    {
        return(
            <>

            <Childcomp send={this.disppop}/>
            </>
        )
    }

}
export default Parentcomp;