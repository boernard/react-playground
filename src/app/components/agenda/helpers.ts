import { groupBy } from 'lodash'

export const dates = {
    tuesday: '2020-07-28',
    wednesday: '2020-07-29',
    thursday: '2020-07-30'
}

export function getTopOffset(events, index) {
    return events
        .slice(0, index)
        .reduce((acc, val) => acc + val.offsetHeight, 0);
}

export function getEventDuration(startTime, endTime) {
    const [startHour, startMinute] = startTime.split(':');
    const [endHour, endMinute] = endTime.split(':');
    const startDateMs = new Date(2020, 0, 1, endHour, endMinute).getTime();
    const endDateMs = new Date(2020, 0, 1, startHour, startMinute).getTime();
    return startDateMs - endDateMs;
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
