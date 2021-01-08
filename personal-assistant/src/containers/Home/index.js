import React, {useState, useEffect} from 'react'
import { Jumbo } from '../../components/Jumbotron/index'
import { Container } from './styles'

export const Home = () => {

    const [weather, setWeather] = useState('')
    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=flushing&appid=886705b4c1182eb1c69f28eb8c520e20')
      const data = await res.json()
      setWeather(data.weather[0].description)
    }
  fetchData()
  }, [])

  return (
      <>
        <Jumbo name="Home" />

        <Container>

          <h3>Welcome to your Personal Assistant!</h3>

          The current weather in Flushing, New York is {weather}.
          
        </Container>
        
        
      </>

  )

}


