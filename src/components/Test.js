import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
    }
    componentDidMount(){
        //Api istekleri

        this.setState({
            test:"klm"
        })
        console.log("componentDidMount")
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("prevProps ",prevProps)
        console.log("prevState ",prevState)
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render")
        return (
            <div className="container">

            </div>
        )
    }
}
export default Test;