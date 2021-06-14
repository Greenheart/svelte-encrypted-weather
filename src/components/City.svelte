<script context="module" lang="ts">
    import type { WeatherForecast } from '../lib/interfaces'
    import getTemperatureColor from '../lib/getTemperatureColor'
</script>

<script lang="ts">
    export let forecast: WeatherForecast
    const color = getTemperatureColor(forecast.temperature)
</script>

<!--  NOTE: These colors are not fully accessible, and should be updated in a production app -->
<article
    class="border-0 rounded-lg shadow-2xl w-64 h-96 flex flex-col items-center justify-between"
    style="background: {color};"
>
    <div
        class="flex justify-between uppercase tabular-nums tracking-wide p-4 w-full"
    >
        <span class="text-gray-600">{forecast.time}</span>
        <span>{forecast.date}</span>
    </div>

    <span
        class="text-white justify-center items-center"
        style="font-size: 6rem;"
    >
        <i class={`wi wi-owm-${forecast.icon}`} />
    </span>
    <p
        class="text-center flex items-center justify-center px-8 text-gray-600 text-4xl"
    >
        {Math.round(forecast.temperature)}°
    </p>
    <p class="uppercase tabular-nums tracking-wide text-gray-600 my-4 text-xl">
        {forecast.weather}
    </p>
    <div
        class="flex justify-between uppercase tabular-nums tracking-wide border-t-2 border-t-white p-4 w-full"
    >
        <span>{forecast.city}</span>
        <span>{forecast.country}</span>
    </div>
</article>
