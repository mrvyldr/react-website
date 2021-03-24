import React, { Component } from 'react'

const MainContext = React.createContext();
//Provider, Consumer
 

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
        ]
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