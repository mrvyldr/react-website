import React, { Component } from 'react'
import Main from "./Main"
import MainConsumer from "../context"

class Mains extends Component {
    
    render() {

        return(
            <MainConsumer>
                {
                    value => {
                        const {mains} = value;


                        return (
                            <div>
                                {
                                    mains.map(main => {
                                        return(
                                            <Main
                                            key = {main.id}
                                            name = {main.name}
                                            age = {main.age}
                                            school = {main.school}
                                            id = {main.id}>

                                            </Main>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </MainConsumer>
        )



        //const {mains} = this.props;
        
    }
}
export default Mains;