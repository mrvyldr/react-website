import React, { Component } from 'react';
import axios from "axios";

const MainContext = React.createContext();
//Provider, Consumer
 const reducer = (state, action) => {
     switch(action.type){
         case "DELETE_MAIN":
             return{
                 ...state,
                 mains: state.mains.filter(main => action.payload !== main.id)
             }
        case "ADD_MAIN":
           
            return{
                ...state,
                mains: [...state.mains, action.payload],
            }
        default:
            return state
     }
 }

export class MainProvider extends Component {
    state = {
        mains : [],
        dispatch : action =>{
            this.setState(state => reducer(state, action))
        }
    }

    componentWillUnmount = async (e) => {
        console.log("e ",e)
        // await axios.delete("http://localhost:3004/mains", )
        // .then(response => 
        //     console.log(response.data, "success")
        // )
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:3004/mains")
        .then(response => 
            //console.log(response.data)
            this.setState({
                mains: response.data
            })
        )
        .catch(error => console.log("error"))

        // await fetch ("http://localhost:3004/mains")
        // .then(response => response.json())
        // .then(response =>{
        //     //console.log(response)
        //     this.setState({
        //         mains: response
        //     })
        // },
        // (error) => {
        //     console.log("error!!")
        // })
        
    }
    

    render() {

        return (
            <MainContext.Provider value={this.state}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

  
const MainConsumer = MainContext.Consumer;

export default MainConsumer;