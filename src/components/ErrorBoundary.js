import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error){
        console.log('an error caused state to change')
        return {hasError: true}        
    }

    componentDidCatch(error, info){
        console.log('an error was caught')
    }

    render() {
        return this.state.hasError ? <h1>Something bad happened</h1> : this.props.children
    }
}

export default ErrorBoundary
