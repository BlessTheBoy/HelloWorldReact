import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        
        this.inputRefs = React.createRef()
    }

    clickHandler = () => {
        this.inputRefs.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRefs} />
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default FRParentInput
