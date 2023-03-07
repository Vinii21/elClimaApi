import { useState } from "react";
import brokenClouds from "../assets/icons/brokenClouds.svg";
import mist from '../assets/icons/mist.svg';
import rain from '../assets/icons/rain.svg';
import snow from '../assets/icons/snow.svg';
import sun from '../assets/icons/sun.svg';
import thunderstorm from '../assets/icons/thunderstorm.svg';

const Card = ({name, country, wind, description, temp, pressure, humidity, darkMode}) => {

    const [ changeCelsius, setChangeCelsius ] = useState(true)

    const icons = {"Clouds": brokenClouds, 'Mist': mist, 'Rain': rain, 'Snow': snow, 'Clear': sun, 'Thunderstorm': thunderstorm}

    return (
        <>
        <div className="card" style={darkMode ? {backgroundImage: 'url(/cardDark.svg)'} : {backgroundImage: 'url(/card.svg)'}}>
            <h3 className="card__grade">{changeCelsius ? Math.round(temp) : Math.round((Math.round(temp)*9/5)+32)}&deg;</h3>
            <img className="card__img" src={icons[description]} alt={description}/>
                <ul className="card__info">
                    <li>Viento: {wind}Km</li>
                    <li>Humedad: {humidity}</li>
                    <li>Presión: {pressure}</li>
                </ul>
                <div className="card__country">
                    <p>{name}, {country}</p>
                    <p>{description}</p>
                </div>
        </div>
        <button className='btn' onClick={()=>setChangeCelsius(!changeCelsius)}>{changeCelsius ? 'Cambiar a F' : 'Volver a C'}&deg;</button>
        </>
    );
}
 
export default Card;