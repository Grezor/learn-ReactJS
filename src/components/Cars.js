import React from 'react'
import '../App.css'
const Cars = ({ name, color, year, construc }) => {
	// si je n'est pas de couleur
	const colorInfo = color ? `Couleur : ${color}` : `Couleur neant`
	if (name) {
		// affiche la marque et si il y a une couleur
		return (
			<tr>
				<td>Marque : {name}</td>
				<td>Année : {year}</td>
				<td>construction : {construc}</td>
				{colorInfo}
			</tr>
		)
	} else {
		return null
	}
}
export default Cars
