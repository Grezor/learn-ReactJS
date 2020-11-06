import React from 'react'
import '../App.css'
const Cars = ({ children, color, year, construc }) => {
	// si je n'est pas de couleur
	const colorInfo = color ? <p>Couleur : {color}</p> : <p>Couleur neant</p>
	if (children) {
		// affiche la marque et si il y a une couleur
		return (
			<div className='cars'>
				<p>Marque : {children}</p>
				<p>Année : {year}</p>
				<p>construction : {construc}</p>
				{colorInfo}
			</div>
		)
	} else {
		return null
	}
}
export default Cars
