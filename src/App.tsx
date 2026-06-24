import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import DailyWeatherCard from './components/DailyWeatherCard'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import HourlyWeatherCard from './components/HourlyWeatherCard'
import AdditionalInfoCard from './components/AdditionalInfoCard'


function App() {

  return (
    <div className='flex flex-col gap-4'>
      <CurrentWeatherCard />
      <HourlyWeatherCard />
      <DailyWeatherCard />
      <AdditionalInfoCard />
      
    </ div>
  )
}

export default App
