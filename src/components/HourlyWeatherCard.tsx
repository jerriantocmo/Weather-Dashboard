import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeatherHourly } from '../api'
import Card from './Card'
import type { Coord } from '../types'

type Props = {
    coords: Coord
}

export default function HourlyWeatherCard({ coords }: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ['weather-h', coords],
        queryFn: () => getWeatherHourly({ lat: coords.lat , lon: coords.lon})
    })
    return (
        <Card title='Hourly Forecast'>
            <div className='flex gap-8 overflow-x-auto'>
                {data?.data.map(hour => (
                    <div key={hour.dt} className='flex flex-col 2xl:justify-between gap-2 items-center p-2'>
                        <p className='whitespace-nowrap 2xl:scale-110'>{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                            hour: "numeric",
                            minute: "2-digit"

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