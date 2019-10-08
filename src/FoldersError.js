import React, { Component } from 'react'

export default class FoldersError extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: false,
        }
    }

    static getDerivedStateFromError(error){
        return {
            error: true
        }
    }

    render(){
        if (this.state.error) {
            return <p>NOT RUNNING FINE</p>
        }
        return this.props.children;
    }
}