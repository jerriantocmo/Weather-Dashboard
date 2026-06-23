import React from 'react'
import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../api'

type Props = {}

export default function DailyWeatherCard({}: Props) {
    const { data } = useQuery({
        queryKey: ['weather-daily'],
        queryFn: () => getWeather({ lat: 0, lon: 50, timeline: '1day' })
    })
  return (
    <Card title={'Daily Forecast'}>
        {JSON.stringify(data?.data)} 
    </ Card >
  )
}