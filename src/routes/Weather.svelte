<script context="module" lang="ts">
    import Layout from '../components/Layout.svelte'
    import City from '../components/City.svelte'
    import type { WeatherForecast } from '../lib/interfaces'
</script>

<script lang="ts">
    // TODO: Fetch from weather API instead.
    // TODO: Use API key from secrets.
    console.log(import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY)

    const forecasts: WeatherForecast[] = [
        {
            city: 'London',
            country: 'UK',
            weather: 'Showers',
            // IDEA: Maybe pass actual dates and format with Intl.DateTimeFormat to show in the user's preferred locale and format.
            // Depends on what's returned from the API.
            time: '12:53',
            date: '24 OCT',
        },
        {
            city: 'Kashmir',
            country: 'IND',
            weather: 'Sunny',
            // IDEA: Maybe pass actual dates and format with Intl.DateTimeFormat to show in the user's preferred locale and format.
            // Depends on what's returned from the API.
            time: '12:53',
            date: '24 OCT',
        },
    ]
</script>

<Layout title="Weather">
    <div class="grid grid-cols-2 gap-4 px-4 text-center">
        <!-- TODO: Show loading state until data fetched -->
        <!-- IDEA: Maybe use the svelte built in tag to await promises before rendering, and showing a loading state until ready -->
        {#each forecasts as forecast}
            <City {forecast} />
        {/each}
    </div>
</Layout>
