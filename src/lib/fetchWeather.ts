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

    console.log(data)

    return {
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].main,
        icon: data.weather[0].id,
        temperature: data.main.temp,
        //  Since we're using the current weather API, we know the API gives us the weather right now and thus can set the date + time ourselves.
        // TODO: Update to use Intl.DateTimeFormat
        time: '14:26',
        date: '14 JUN',
    }
}
