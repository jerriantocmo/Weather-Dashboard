import { currentWeatherResponseSchema, dailyWeatherResponseSchema, hourlyWeatherResponseSchema } from "./schemas/weatherschema"

const API_KEY = import.meta.env.VITE_API_KEY

 export async function getWeather({lat, lon, timeline}: {lat: number, lon: number, timeline: 'current' | '1h' | '1day'}){

    const endpointPath = timeline ==='current' ? '/current' : `/timeline/${timeline}`
    
    const res = await fetch(`https://api.openweathermap.org/data/4.0/onecall${endpointPath}?lat=${lat}&lon=${lon}&units=imperial&excludes=minutely,alerts&lang=en&appid=${API_KEY}`)
    
    const data = await res.json()
    
    switch(timeline){
        case 'current':
            return currentWeatherResponseSchema.parse(data)
        case '1h':
            return hourlyWeatherResponseSchema.parse(data)
        case '1day':
            return dailyWeatherResponseSchema.parse(data)
    }
 }