import { WEATHER_API_URL } from './constants'
import type { WeatherForecast } from './interfaces'

export default async function fetchWeather(
    query: string,
): Promise<WeatherForecast> {
    const data = await fetch(
        `${WEATHER_API_URL}?q=${query}&units=metric&appid=${
            import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
        }`,
    )
        .then((res) => res.json())
        .catch((err) => console.error(err))

    // Quick date formatting, should be separated into own module in production code.
    const [date, time] = new Intl.DateTimeFormat('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        hour12: false,
        month: 'short',
    })
        .format(new Date())
        .split(', ')

    return {
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].main,
        icon: data.weather[0].id,
        temperature: data.main.temp,
        //  Since we're using the current weather API, we know the API gives us the weather right now and thus can set the date + time ourselves.
        // TODO: Update to use Intl.DateTimeFormat
        time,
        date,
    }
}
