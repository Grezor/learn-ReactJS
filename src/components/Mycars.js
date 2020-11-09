import React, { Component, Fragment } from 'react'
import Cars from './Cars'
class Mycars extends Component {
	noCopy = () => {
		alert('merci de ne pas copier le texte')
	}

	addStyle = (e) => {
		if (e.target.classList.contains('styled')) {
			e.target.classList.remove('styled')
		} else {
			e.target.classList.toggle('styled')
		}
	}

	state = {
		voitures: [
			{
				name: 'Ford',
				color: 'red',
				year: 2000,
				construc: 2000,
			},
			{
				name: 'Maserati',
				color: 'green',
				year: 2006,
				construc: 2006,
			},
			{
				name: 'Zoe',
				color: 'bleu',
				year: 2015,
				construc: 2015,
			},
		],
		titre: 'titre 2 ',
	}
	/**
	 * Ajoute 10 ans a la date
	 */
	addTenYears = () => {
		const updatedState = this.state.voitures.map((param) => {
			return (param.year -= 10)
		})
		// met a jour le state
		this.setState({
			updatedState,
		})
	}

	render() {
		const year = new Date().getFullYear()

		return (
			<>
				<h1>{this.props.title}</h1>
				<h1>{this.state.titre}</h1>
				<p onCopy={this.noCopy}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					fugit eveniet facere aperiam iusto ut consectetur, praesentium
					molestias, natus, nihil aliquid adipisci delectus odio optio dolor?
					Nemo officia corrupti quasi!
				</p>
				<p onMouseOver={this.addStyle} className='styled'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas
					veniam, sequi expedita quis alias, quam nobis iste quae odit maiores
					illum? A doloremque accusantium quidem sit natus qui voluptatum.
				</p>
				<p>{this.props.paragraphe}</p>

				{/* on peu utiliser ceci */}
				{/* 
                    <Cars year="2000" color="red">Renault</Cars>
                    <Cars >Peugeot</Cars>
                    <Cars color="yello"></Cars> 
                */}

				<button onClick={this.addTenYears}>+10 ans</button>

				{/* On recupere tout depuis state */}
				{/* 
					<Cars 
						construc={year - this.state.voitures[0].year + 'ans'} 
						year={ this.state.voitures[0].year + 'ans'} 
						color={this.state.voitures[0].color}>
						{this.state.voitures[0].name}
					</Cars>
					<Cars construc={year - this.state.voitures[0].year + 'ans'} 
						year={this.state.voitures[1].year} 
							color={this.state.voitures[1].color}>
						{this.state.voitures[1].name}
					</Cars>
					<Cars year={this.state.voitures[2].year} color={this.state.voitures[2].color}>
						{this.state.voitures[2].name}
					</Cars>   
			*/}

				{/* simplifier */}
				<table className='carsTable'>
					<tr>
						<th>Marque</th>
						<th>age</th>

						<th>construction</th>
						<th>couleur</th>
					</tr>
					{this.state.voitures.map((voitures, index) => {
						return (
							<Fragment key={index}>
								<Cars
									key={index}
									name={voitures.name}
									color={voitures.color}
									year={voitures.year}
									construc={year - voitures.construc + 'ans'}
								/>
							</Fragment>
						)
					})}
				</table>
			</>
		)
	}
}

export default Mycars
