import { useState } from "react";
import axios from "axios";

const Search = ({setWeather}) => {

    const [value, setValue] = useState('')

     const onSubmit = (e) => {
        e.preventDefault();
     }

     const findCity = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f9fa1d8aaf78107c7e03d2116092ba57&units=metric&lang=es`)
      .then((resp)=>{
        setWeather(resp.data)
      })
      .catch(error=>console.log(error))
     }

    return (
        <form onSubmit={onSubmit} className="form">
            <div className="input__container"><button className="btn__input" onClick={findCity} type="submit"><i className='bx bx-search-alt-2'></i></button><input type="text" onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Buscar por ciudad"/></div>
        </form>
    );
}
 
export default Search;