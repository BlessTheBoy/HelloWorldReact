import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "BlessTheBoy"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "BlessTheBoy"
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent component render')
        return (
            <div>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
