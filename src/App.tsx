import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getWeather } from './api'
import Card from './components/Card'
import DailyWeatherCard from './components/DailyWeatherCard'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import HourlyWeatherCard from './components/HourlyWeatherCard'


function App() {

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 0, lon: 50, timeline: '1day'})
  })
  return (
    <div className='flex flex-col gap-4'>
      <CurrentWeatherCard />
      <HourlyWeatherCard />
      <DailyWeatherCard />
      
    </ div>
  )
}

export default App
