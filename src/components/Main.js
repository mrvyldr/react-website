import React, { Component } from 'react'

class Main extends Component {
    render() {
        return (
            <div>
                <h3>Main Component</h3>

                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.school}</li>
                </ul>
            </div>
        )
    }
}

export default Main;