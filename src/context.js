import React, { Component } from 'react'

const MainContext = React.createContext();
//Provider, Consumer
 const reducer = (state, action) => {
     switch(action.type){
         case "DELETE_MAIN":
             return{
                 ...state,
                 mains: state.mains.filter(main => action.payload !== main.id)
             }
        default:
            return state
     }
 }

export class MainProvider extends Component {
    state = {
        mains : [
          {
            id:1,
            name:"merve",
            age:"22",
            school:"iü-c"
          },
          {
            id:2,
            name:"seda",
            age:"40",
            school:"marmara"
          }
        ],
        dispatch : action =>{
            this.setState(state => reducer(state, action))
        }
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