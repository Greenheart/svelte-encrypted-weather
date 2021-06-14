<script context="module" lang="ts">
    import Layout from '../components/Layout.svelte'
    import City from '../components/City.svelte'
    import fetchWeather from '../lib/fetchWeather'
</script>

<script lang="ts">
    function fetchForecasts(queries: string[]) {
        return queries.map((query) => fetchWeather(query))
    }

    const forecasts = fetchForecasts(['London,UK', 'Bengaluru,IN'])

    // Working with cached data during development to reduce unneeded API requests.
    // const forecasts = [
    //     {
    //         city: 'London',
    //         country: 'GB',
    //         weather: 'Clouds',
    //         icon: 804,
    //         temperature: 28.36,
    //         time: '15:48',
    //         date: '14 Jun',
    //     },
    //     {
    //         city: 'Bengaluru',
    //         country: 'IN',
    //         weather: 'Clouds',
    //         icon: 803,
    //         temperature: 24.8,
    //         time: '15:48',
    //         date: '14 Jun',
    //     },
    // ]
</script>

<Layout title="Weather">
    <div class="grid sm:grid-cols-2 gap-4 px-4 text-center items-center h-full">
        {#await Promise.all(forecasts)}
            <p>Loading weather...</p>
        {:then forecasts}
            {#each forecasts as forecast}
                <City {forecast} />
            {/each}
        {/await}
    </div>
</Layout>
