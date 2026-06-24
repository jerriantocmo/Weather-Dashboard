import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import DailyWeatherCard from './components/DailyWeatherCard'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import HourlyWeatherCard from './components/HourlyWeatherCard'
import AdditionalInfoCard from './components/AdditionalInfoCard'
import Map from './components/Map'
import type { Coord } from './types'

function App() {
  const [coordinates, setCoords] = useState<Coord>({lat: 20, lon: 20})

  const onMapClick = (lat: number, lon: number) => {
    setCoords({lat: lat, lon: lon})
  };

  console.log(coordinates)
  return (
    <div className='flex flex-col max-w-screen h-1000 gap-4 '>
      <Map coords={coordinates} onMapClick={onMapClick} />
      <CurrentWeatherCard coords={coordinates}/>
      <HourlyWeatherCard coords={coordinates}/>
      <DailyWeatherCard coords={coordinates}/>
      <AdditionalInfoCard coords={coordinates}/>
      
    </ div>
  )
}

export default App
