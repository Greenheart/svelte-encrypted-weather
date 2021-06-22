export default function formatDateTime(inputDate: Date) {
    const [date, time] = new Intl.DateTimeFormat('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        hour12: false,
        month: 'short',
    })
        .format(inputDate)
        .split(', ')

    return [date, time]
}
