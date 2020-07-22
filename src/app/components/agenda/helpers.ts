import { groupBy } from 'lodash'

export const dates = {
    tuesday: '2020-07-28',
    wednesday: '2020-07-29',
    thursday: '2020-07-30'
}

export function normalizeEventsByHour(events) {
    return groupBy(events, (event) => event.start.split(':')[0])
}

export function normalizeEventData(eventsRaw, date) {
    console.log(eventsRaw, date)
    const eventsToday = groupBy(eventsRaw, 'date')[date]
    return groupBy(eventsToday, 'track')
}

export function getEarliestEventHour(events) {
    return Math.min(...getHourFromEvents(events))
}

export function getLatestEventHour(events) {
    return Math.max(...getHourFromEvents(events))
}

function getHourFromEvents(events) {
    return events
        .map(event => event.start)
        .map(time => time.split(':'))
        .map(splittedTime => splittedTime[0])
        .map(Number)
}
