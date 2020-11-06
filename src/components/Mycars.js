import React, { Component } from 'react'
import Cars from './Cars';

class Mycars extends Component {
    render(){
        console.log(this);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <Cars color="red">Renault</Cars>
                <Cars >Peugeot</Cars>
                <Cars color="yello"></Cars>
            </div>
        )
    }
}

export default Mycars
