import React, { Component } from 'react'

class ClickCounter2 extends Component {
    render() {
        let {count, incrementCount} = this.props
        return <button onClick={incrementCount}>Button clicked {count} times</button>
    }
}

export default ClickCounter2
