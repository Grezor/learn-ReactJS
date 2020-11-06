import React, { Component } from 'react'
import Cars from './Cars';

class Mycars extends Component {
    noCopy = () => {
        alert('merci de ne pas copier le texte');
    }

    addStyle = (e) => {
        console.log(e.target);
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        } else {
            e.target.classList.toggle('styled');
        }
    }

    render(){
        console.log(this);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit eveniet
                 facere aperiam iusto
                ut consectetur, praesentium molestias, natus, nihil aliquid adipisci delectus odio optio dolor?
                Nemo officia corrupti quasi!
                </p>
                <p onMouseOver={this.addStyle} className="styled">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas veniam, sequi expedita quis alias, quam nobis iste quae odit maiores illum? A doloremque accusantium quidem sit natus qui voluptatum.</p>
                <p>{this.props.paragraphe}</p>
                <Cars color="red">Renault</Cars>
                <Cars >Peugeot</Cars>
                <Cars color="yello"></Cars>
            </div>
        )
    }
}

export default Mycars
