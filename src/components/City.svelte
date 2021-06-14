<script context="module" lang="ts">
    import type { WeatherForecast } from '../lib/interfaces'
</script>

<script lang="ts">
    export let forecast: WeatherForecast
</script>

<!-- TODO: Fix colors, spacing and typography to match design -->
<article class="border-0 rounded-lg shadow-2xl w-64 bg-gray-800 mb-4">
    <div class="flex justify-between uppercase tabular-nums tracking-wide p-4">
        <span>{forecast.time}</span>
        <span>{forecast.date}</span>
    </div>
    <p class="uppercase tabular-nums text-green-400 tracking-wide">
        {forecast.weather}
    </p>
    <p
        class="h-64 text-xl md:text-2xl text-center flex items-center justify-center px-8"
    >
        <!-- TODO: Show relevant weather icon with weather icons: https://svelte-icons.vercel.app/ -->
        <!-- TODO: Map icons to expected response weather types -->
        <!-- TODO: Change colors of the weather cards based on weather. Create a Map with pre-defined weather types, and related icons + colors -->
    </p>
    <div
        class="flex justify-between uppercase tabular-nums tracking-wide border-t border-t-white p-4"
    >
        <span>{forecast.city}</span>
        <span>{forecast.country}</span>
    </div>
</article>
