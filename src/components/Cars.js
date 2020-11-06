import React from 'react';
import '../App.css'
const Cars = ({children, color}) => {
    // si je n'est pas de couleur
    const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p>Couleur neant</p>);
    if (children) {
        // affiche la marque et si il y a une couleur
        return (
            <div className="cars">
                <p>Marque : {children}</p>
                {colorInfo}
            </div>
        )
    } else {
        return (
            <div className="cars">
                {/* quand il n'a pas de marque */}
                <p>Il n'a pas de marque</p>
            </div>
        )
    }

}
export default Cars;
