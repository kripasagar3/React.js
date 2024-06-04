import React, { Component } from "react";
class Student extends Component
{
    render()
    {
        return(
        <div><h1>this is the {this.props.school}school and the student name is {this.props.name}
        <Admin sschool={this.props.school} sname={this.props.name}/></h1>
</div>
    );
}
}

class Admin extends Component
{
    render()
    {
        return(
            <h2> {this.props.sname} belongs to {this.props.sschool}school</h2>
        );
    }
}
export default Student;