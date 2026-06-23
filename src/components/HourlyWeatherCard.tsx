import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeatherHourly } from '../api'
import Card from './Card'

type Props = {}

export default function HourlyWeatherCard({ }: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ['weather-h'],
        queryFn: () => getWeatherHourly({ lat: 0, lon: 50 })
    })
    return (
        <Card title='Hourly Forecast'>
            <div className='flex gap-4 overflow-x-auto'>
                {data?.data.map(hour => (
                    <div className='flex flex-col items-center'>
                        <p>{new Date(hour.dt*1000).toLocaleTimeString(undefined, {
                            hour: "numeric",
                            minute:"2-digit"
                            
                        })}</p>
                        <img className='size-8'
                            src={`https://openweathermap.org/payload/api/media/file/${hour.weather[0].icon}.png`} alt="Hourly Forecast" />
                        <p className='size-2xl'>{Math.round(hour.temp)}°F</p>
                    </div>
                ))}

            </div>

        </ Card >
    )
}