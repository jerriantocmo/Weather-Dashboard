import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeatherCurrent } from '../api'
import Card from './Card'
import type { Coord } from '../types'

type Props = {
    coords: Coord
}

export default function CurrentWeatherCard({ coords }: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ['weather-current', coords],
        queryFn: () => getWeatherCurrent({ lat: coords.lat, lon: coords.lon})
    })

    const current = data.data[0]
    return (
        <Card title='Current Forecast'>
            <div className='flex flex-col items-center gap-2'>
                <h3 className='text-6xl'>{Math.round(current.temp)}°F</h3>
                <img className='size-18' src={`https://openweathermap.org/payload/api/media/file/${current.weather[0].icon}.png`} alt="Current Weather" />
                <h3 className='text-4xl'>{new Date(current.dt * 1000).toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: data.timezone,
                })} </h3>
                <div className='flex gap-2 justify-between w-full'>
                    <div className='flex flex-col items-center gap-2'>
                        <p>Feels Like</p>
                        <p>{Math.round(current.feels_like)}°F</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <p>Humidity</p>
                        <p>{current.humidity}%</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <p>Wind</p>
                        <p>{current.wind_speed} mph</p>
                    </div>
                </div>
            </div>
        </ Card >
    )
}