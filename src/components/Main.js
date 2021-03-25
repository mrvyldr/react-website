import React, { Component } from 'react'
import PropTypes from "prop-types";
import MainConsumer from "../context";
var uniqid = require("uniqid");


class Main extends Component {
    state = {
        isVisible : false
    }
    static defaultProps = {
        id : uniqid(),
        name : "Alice",
        age : "23",
        school : "Cambrige"
    }
    static propTypes = {
        id : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        age : PropTypes.string.isRequired,
        school : PropTypes.string.isRequired
    }

    onClickEvent = (number , e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteMain = (dispatch, e) => {
        const {id} = this.props;
        
        //Consumer dispatch
        dispatch({type:"DELETE_MAIN", payload:id});
    }

    // constructor(props){
    //     super(props);

    //     this.onClickEvent = this.onClickEvent.bind(this)
        
    // }
    
    render() {
        //Destructing
        const {name, age, school} = this.props;
        const {isVisible} = this.state;

        return( 
            <MainConsumer>
                {
                    value => {
                        const{dispatch} = value;

                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card" style={isVisible ? {background:"#617b92", color:"white"} : null}>
                                    <div className="card-header d-flex justify-content-between" >
                                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 23)}>  {name}</h4>
                                        <i onClick = {this.onDeleteMain.bind(this, dispatch)} className="fa fa-snowflake-o" style={{cursor:"pointer"}}></i>
                                    </div>
                            
                                    {
                                        isVisible ? 
                                        <div className="card-body" >
                                        <p>{age}</p>
                                        <p>{school}</p>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        )
                    }

                    
                }
            </MainConsumer>
        )

        
    }
}


export default Main;