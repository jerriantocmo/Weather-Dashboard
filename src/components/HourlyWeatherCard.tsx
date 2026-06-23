import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeather } from '../api'
import Card from './Card'

type Props = {}

export default function HourlyWeatherCard({ }: Props) {
    const { data } = useQuery({
        queryKey: ['weather-h'],
        queryFn: () => getWeather({ lat: 0, lon: 50, timeline: '1h' })
    })
    return (
         <Card title='Hourly Forecast'>{JSON.stringify(data?.data)} </ Card >
    )
}