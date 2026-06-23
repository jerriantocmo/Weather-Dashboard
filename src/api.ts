import { currentWeatherResponseSchema } from "./schemas/currentWeatherSchema"
import { dailyWeatherResponseSchema } from "./schemas/dailyWeatherSchema"
import { hourlyWeatherResponseSchema } from "./schemas/hourlyWeatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeatherCurrent({ lat, lon }: { lat: number, lon: number }) {
    const res = await fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&units=imperial&excludes=minutely,alerts&lang=en&appid=${API_KEY}`)

    const data = await res.json()

    return currentWeatherResponseSchema.parse(data)

}
export async function getWeatherHourly({ lat, lon }: { lat: number, lon: number }) {
    const res = await fetch(`https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=${lat}&lon=${lon}&units=imperial&excludes=minutely,alerts&lang=en&appid=${API_KEY}`)

    const data = await res.json()

    return hourlyWeatherResponseSchema.parse(data)
}

export async function getWeatherDaily({ lat, lon }: { lat: number, lon: number }) {
    const res = await fetch(`https://api.openweathermap.org/data/4.0/onecall/timeline/1day?lat=${lat}&lon=${lon}&units=imperial&excludes=minutely,alerts&lang=en&appid=${API_KEY}`)

    const data = await res.json()

    return dailyWeatherResponseSchema.parse(data)
}