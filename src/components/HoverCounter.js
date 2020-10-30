import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    render() {
        let {count, incrementCount, name} = this.props
        return <h1 onMouseOver={incrementCount}>{name} hovered {count} times</h1>
    }
}

export default UpdatedComponent(HoverCounter)
