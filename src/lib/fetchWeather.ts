import { WEATHER_API_URL } from './constants'
import formatDateTime from './formatDateTime'
import type { WeatherForecast, WeatherForecastError } from './interfaces'

export default async function fetchWeather(query: string): Promise<{
    forecast?: WeatherForecast
    error?: WeatherForecastError
}> {
    let error: WeatherForecastError
    let forecast: WeatherForecast

    const data = await fetch(
        `${WEATHER_API_URL}?q=${query}&units=metric&appid=${
            import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
        }`,
    )
        .then((res) => res.json())
        .catch((err) => {
            // HTTP connection error.
            error = err
        })

    // API returns some error - for example for invalid queries.
    if (data.cod && parseInt(data.cod, 10) > 400) {
        error = data.message
    }

    if (!error) {
        const [date, time] = formatDateTime(new Date())
        forecast = {
            city: data.name,
            country: data.sys.country,
            weather: data.weather[0].main,
            icon: data.weather[0].id,
            temperature: data.main.temp,
            time,
            date,
        }
    }

    return { forecast, error }
}
