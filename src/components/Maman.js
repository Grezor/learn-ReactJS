import React, { Component } from 'react'

class Maman extends Component {
	state = {
		messageMaman: null,
		messageToto: null,
	}

	ordreMaman = () => {
		this.setState(0)
	}

	render() {
		return (
			<div>
				<h1>Maman</h1>
				<button onClick={this.ordreMaman}>Ordre de la mère</button>
				<p></p>
				<hr />
				<h1>Enfants</h1>
			</div>
		)
	}
}
export default Maman
