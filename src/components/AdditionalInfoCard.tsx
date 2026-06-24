import { useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { getWeatherCurrent } from '../api'
import Card from './Card'
import UpArrow from "../assets/uparrow.svg"
import type { Coord } from '../types'

type Props = {
    coords: Coord
}

export default function AdditionalInfoCard({coords }: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ['weather-current', coords],
        queryFn: () => getWeatherCurrent({ lat: coords.lat, lon: coords.lon}),
        staleTime: 5000
    })
    const current = data.data[0]
    return (
        <Card title='Additional Information' childrenClassName='flex flex-col gap-4 p-2' >
            <div className='flex justify-between w-full size-8'>
                <h3  className='text-gray-500'>Sunrise Time</h3>
                <p>{new Date(current.sunrise).toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                })}</p>
            </div>
            <div className='flex justify-between w-full size-8'>
                <h3 className='text-gray-500'>Sunset Time</h3>
                <p>{new Date(current.sunset).toLocaleTimeString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                })}</p>
            </div>
            <div className='flex justify-between w-full size-8'>
                <h3 className='text-gray-500'>Cloudiness</h3>
                <p>{current.clouds}%</p>
            </div>
            <div className='flex justify-between w-full size-8'>
                <h3 className='text-gray-500'>Wind Direction</h3>
                <img src="src/assets/uparrow.svg" alt="Wind Direction" className="size-8 text-gray-500" style={{ transform: `rotate ${current.wind_deg}` }} />

            </div>
            <div className='flex justify-between w-full size-8'>
                <h3 className='text-gray-500'>Humidity</h3>
                <p>{current.humidity}%</p>
            </div>
            <div className='flex justify-between w-full size-8'>
                <h3 className='text-gray-500'>UVI</h3>
                <p>{current.uvi}%</p>
            </div>
        </Card>
    )
}

function formatComponent({ value, number }: { value: string, number: number }) {
    if (value === 'sunset' || value === 'sunrise') {
        return new Date(number).toLocaleDateString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        })

    }

    if (value === 'wind_deg') {
        return (
            <UpArrow
            />

        )
    }

    return number
}