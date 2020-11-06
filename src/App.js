import './App.css'
import React, { Component } from 'react'

import Mycars from './components/Mycars'

class App extends Component {
	state = {
		titre: 'Mon Catalogue voitures',
		para: 'je suis un para',
	}

	// changeTitle = (e) => {
	//   console.log(e.target);
	//   this.setState({
	//     titre: 'mon nouveau titre'
	//   })
	// }
	// changeViaParam = (titre) => {
	//   this.setState({
	//     titre: titre
	//   })
	// }

	// changeViabind = (param) => {
	//   this.setState({
	//     titre: param
	//   })
	// }

	// changeViaInput = (e) => {
	//   console.log(e.target.value);
	//   this.setState({
	//     para: e.target.value
	//   })
	// }

	render() {
		return (
			<div className='App'>
				<Mycars title={this.state.titre} paragraphe={this.state.para} />
				{/* <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={()=> this.changeViaParam('titre via un param')}>Changer le param</button>
        <button onClick={this.changeViabind.bind(this, 'titre via bind')}>via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.para} /> */}
			</div>
		)
	}
}

export default App
