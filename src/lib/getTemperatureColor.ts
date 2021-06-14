import chroma from 'chroma-js'
// Quick color-temperature scale based on Tailwind CSS default colors
// Far from perfectly balanced, but was a fun experiment!
export const temperatureColors = chroma
    .scale([
        '#2563EB',
        '#3B82F6',
        '#60A5FA',
        '#93C5FD',
        '#34D399',
        '#6EE7B7',
        '#FCD34D',
        '#FBBF24',
        '#F59E0B',
        '#EF4444',
        '#DC2626',
        '#991B1B',
        '#DB2777',
    ])
    .mode('lch')
    .colors(90) // From -40 to + 50.

export default function getTemperatureColor(temperature: number) {
    return temperatureColors[Math.round(temperature) + 20] ?? 'gray-800'
}
