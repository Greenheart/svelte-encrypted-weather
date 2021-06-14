<script context="module" lang="ts">
    import Layout from '../components/Layout.svelte'
    import City from '../components/City.svelte'
    import type { WeatherForecast } from '../lib/interfaces'
    import fetchWeather from '../lib/fetchWeather'
</script>

<script lang="ts">
    let forecasts: Promise<WeatherForecast>[]

    async function fetchForecasts(queries: string[]) {
        forecasts = await queries.map((query) => fetchWeather(query))
    }

    fetchForecasts(['London,UK', 'Bengaluru,IN'])
</script>

<Layout title="Weather">
    <div class="grid grid-cols-2 gap-4 px-4 text-center">
        {#await Promise.all(forecasts)}
            <p>Loading weather...</p>
        {:then forecasts}
            {#each forecasts as forecast}
                <City {forecast} />
            {/each}
        {/await}
    </div>
</Layout>
