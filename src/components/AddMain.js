import React, { Component } from 'react';
import posed from 'react-pose';
import MainConsumer from "../context";
import axios from "axios";
var uniqid = require("uniqid");


const Animation = posed.div({
    visible: { opacity: 1 ,
        applyAtStart:{
            display:"block"
        }
    },
    hidden: { opacity: 0 ,
        applyAtEnd:{
            display:"none"
        }
    }
  } );
class AddMain extends Component {
    state = {
        visible:false,
        name : "",
        age : "",
        school : ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addMain = async (dispatch,e) =>{
        e.preventDefault();
        
        const {name, age, school} = this.state

        const newMain = {
            id:uniqid(),
            name,
            age,
            school
        }

        await axios.post("http://localhost:3004/mains", newMain)
        .then(response => 
            console.log(response.data, "success")
        )
        
        dispatch({type:"ADD_MAIN", payload:newMain});       
    }

    render() {
        const {visible, name, age, school} = this.state

        return(
            <MainConsumer>
                {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "hide form" : "show form"}</button>
                            <Animation pose={visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Add main component <i className="fas fa-plus"></i></h6>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.addMain.bind(this, dispatch)}>
                                            <div className="form-group mb-4">
                                            <label htmlFor="name">Name</label>
                                            <input value={name} onChange={this.changeInput} type="text" name="name" id="id" placeholder="Enter name" className="form-control"></input>
                                            </div>
                                            <div className="form-group mb-4">
                                            <label htmlFor="age">Age</label>
                                            <input value={age} onChange={this.changeInput} type="text" name="age" id="id" placeholder="Enter age" className="form-control"></input>
                                            </div>
                                            <div className="form-group mb-4">
                                            <label htmlFor="school">Name</label>
                                            <input value={school} onChange={this.changeInput} type="text" name="school" id="id" placeholder="Enter school" className="form-control"></input>
                                            </div>
            
                                            <button className="btn btn-primary btn-block" type="submit" >Add component</button>
                                        </form>
            
                                    </div>
                                </div>
                        
                            </Animation>
                        </div>
                    )
                }
            }
            </MainConsumer>
        
        
        )
            
    }
}
export default AddMain;
