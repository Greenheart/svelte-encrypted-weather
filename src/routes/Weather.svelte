<script context="module" lang="ts">
    import Layout from '../components/Layout.svelte'
    import City from '../components/City.svelte'
    import fetchWeather from '../lib/fetchWeather'
</script>

<script lang="ts">
    import { queries } from '../lib/stores'
    import { onMount } from 'svelte'

    let newQuery = ''
    let forecasts = []
    let errors = []

    async function fetchForecasts(queries: string[]) {
        const responses = await Promise.all(
            queries.map((query) => fetchWeather(query)),
        )

        return responses.reduce(
            (result, response) => {
                if (response.error) result.errors.push(response.error)
                if (response.forecast) result.forecasts.push(response.forecast)
                return result
            },
            { forecasts: [], errors: [] },
        )
    }

    onMount(async () => {
        const result = await fetchForecasts($queries)
        forecasts = result.forecasts ?? []
        errors = result.errors ?? []
    })

    async function addQuery() {
        errors = []
        $queries = $queries.concat(newQuery)
        const { forecast, error } = await fetchWeather(newQuery)

        if (error) {
            errors = [error]
        } else {
            forecasts = forecasts.concat(forecast)
        }

        newQuery = ''
    }
</script>

<Layout title="Weather">
    <form on:submit|preventDefault={addQuery}>
        <input
            bind:value={newQuery}
            type="text"
            placeholder="Add a new weather query"
            class="text-black p-4 mt-8"
        />
    </form>
    {#each errors as error}
        <p class="text-red-500 p-2 mb-8">
            {JSON.stringify(error, null, 2)}
        </p>
    {/each}
    <div class="grid sm:grid-cols-2 gap-4 px-4 text-center items-center h-full">
        {#each forecasts as forecast}
            <City {forecast} />
        {:else}
            <p>Loading weather...</p>
        {/each}
    </div>
</Layout>
