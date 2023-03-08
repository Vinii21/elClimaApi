import { useState } from "react";

const Search = ({country, setCountry}) => {

    const [value, setValue] = useState('')

     const onSubmit = (e) => {
        e.preventDefault();
        setCountry(value)
     }

    return (
        <form onSubmit={onSubmit} className="form">
            <div className="input__container"><button className="btn__input" type="submit"><i class='bx bx-search-alt-2'></i></button><input type="text" onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Buscar por ciudad"/></div>
        </form>
    );
}
 
export default Search;