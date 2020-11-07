import React from 'react'

const Toto = (props) => {
	console.log(props)
	const btnResponseToto =
		props.leState.messageMaman !== null ? (
			<button onClick={props.responseToto}>réponse</button>
		) : (
			<button disabled>réponse</button>
		)
	console.log(btnResponseToto)
	return (
		<div>
			<h2>{props.name}</h2>
			{btnResponseToto}
			<p>{props.leState.messageToto}</p>
		</div>
	)
}

export default Toto
