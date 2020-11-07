import React, { Component } from 'react'
import Toto from './Toto'
class Maman extends Component {
	state = {
		messageMaman: null,
		messageToto: null,
	}

	ordreMaman = () => {
		this.setState({
			messageMaman: 'va ranger ta chambre',
		})
	}

	responseToto = () => {
		this.setState({
			messageToto: 'ok mamam',
		})
	}

	render() {
		return (
			<div>
				<h1>Maman</h1>
				<button onClick={this.ordreMaman}>Ordre de la mère</button>
				<p>{this.state.messageMaman}</p>
				<hr />
				<h1>
					<Toto
						name='toto'
						leState={this.state}
						responseToto={this.responseToto}
					/>
				</h1>
			</div>
		)
	}
}
export default Maman
