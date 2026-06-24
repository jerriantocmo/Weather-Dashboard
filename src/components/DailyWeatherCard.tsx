import React from 'react'
import Card from './Card'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { getWeatherDaily } from '../api'
import type { Coord } from '../types'

type Props = {
    coords: Coord
}
export default function DailyWeatherCard({coords }: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ['weather-daily', coords],
        queryFn: () => getWeatherDaily({ lat: coords.lat, lon: coords.lon }),
        staleTime: 5000

    })
    return (
        <Card title={'Daily Forecast'} childrenClassName="gap-6">
                {data?.data.map((day) => (
                    <div key={day.dt} className='flex justify-between'>
                        <p className='size-2'>{new Date(day.dt * 1000).toLocaleDateString(undefined,
                            {weekday: "short"}
                        )} </p>
                        <img className='size-8'
                          src="https://openweathermap.org/payload/api/media/file/10d%402x.png" alt="" />
                        <p className='size-2'>{Math.round(day.temp.day)}°F</p>
                        <p className='size-2 text-gray-500/75'>{Math.round(day.temp.min)}°F</p>
                        <p className='size-2 text-gray-500/75'>{Math.round(day.temp.max)}°F</p>

                    </div>
                ))}
        </ Card >
    )
}