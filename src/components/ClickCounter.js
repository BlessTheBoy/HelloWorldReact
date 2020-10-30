import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        let {count, incrementCount} = this.props
        return <button onClick={incrementCount}>Button clicked {count} times</button>
    }
}
export default UpdatedComponent(ClickCounter)