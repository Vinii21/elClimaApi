const DarkMode = ({darkMode, setDarkMode}) => {
    return (
        <div className="DarkMode__container" onClick={()=>setDarkMode(!darkMode)}>
            <i className={darkMode ? 'bx bxs-moon right' : 'bx bxs-sun left'}></i>
        </div>
    );
}
 
export default DarkMode;