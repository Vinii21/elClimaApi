import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'
import Search from './components/Search'
import Loader from './components/Loader'
import DarkMode from './components/DarkMode'
import Footer from './components/Footer'

function App() {
  const [weather, setWeather] = useState({})

  const [country, setCountry] = useState("")
  const [loader, setLoader] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f9fa1d8aaf78107c7e03d2116092ba57&units=metric&lang=es`)
        .then((resp)=>{
          setWeather(resp.data)
          setLoader(false)
        })
        .catch(error=>console.log(error))

    }, error=>{console.log(error)})
  },[])

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=f9fa1d8aaf78107c7e03d2116092ba57&units=metric&lang=es`)
      .then((resp)=>{
        setWeather(resp.data)
      })
      .catch(error=>console.log(error))
  },[country])

  return (
    <div className={darkMode ? "App dark" : "App"}>
      {
        loader && <Loader />
      }
      <header className='header'>
        <h1>Weather app</h1>
        <DarkMode 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          name={weather?.name}
        />      
        <Search 
          country={country}
          setCountry={setCountry}
        />
      </header>
      <Card 
      country={weather?.sys?.country}
      name={weather?.name}
      wind={weather?.wind?.speed}
      description={weather?.weather?.[0].main}
      temp={weather?.main?.temp}
      pressure={weather?.main?.pressure}
      humidity={weather?.main?.humidity}
      darkMode={darkMode}
      />
      <Footer />
    </div>
  )
}

export default App
