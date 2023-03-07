
const Search = ({country, setCountry}) => {

     const onSubmit = (e) => {
        e.preventDefault();
     }

    return (
        <form onSubmit={onSubmit} className="form">
            <div className="input__container"><i class='bx bx-search-alt-2'></i><input type="text" onChange={(e)=>setCountry(e.target.value)} value={country} placeholder="Buscar por ciudad"/></div>
        </form>
    );
}
 
export default Search;