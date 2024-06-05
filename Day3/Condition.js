import React, { Component} from "react";
class Condition extends  Component
{
    constructor()
    {
        super()
        this.state={
            disp:"rabu"
        };
    }


    render()
    {
        return(
            this.state.disp==("prabu")? <p>hai prabu</p>:<p>What is your name</p>
        )
    }
}
export default Condition;