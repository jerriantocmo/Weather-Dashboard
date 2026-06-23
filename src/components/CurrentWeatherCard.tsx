import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeather } from '../api'
import Card from './Card'

type Props = {}

export default function CurrentWeatherCard({ }: Props) {
    const { data } = useQuery({
        queryKey: ['weather-current'],
        queryFn: () => getWeather({ lat: 0, lon: 50, timeline: 'current' })
    })
    return (
         <Card title='Current Forecast'>{JSON.stringify(data)} </ Card >
    )
}