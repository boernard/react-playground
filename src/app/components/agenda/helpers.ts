import { groupBy, flatMap } from 'lodash'

export const dates = {
    tuesday: '2020-07-28',
    wednesday: '2020-07-29',
    thursday: '2020-07-30'
}

export function isUserRetailer(userId, events) {
    const retailerIds = flatMap(events, (event) => event.attendees);
    return retailerIds.includes(userId)
}

export function getDefaultDate() {
    const todaysDate = new Date().getDate();
    const dateValue = `2020-07-${todaysDate}`;
    return Object.values(dates).includes(dateValue) ? dateValue : dates.tuesday;
}

export function getHourRange(eventsRaw, date) {
    const eventsToday = groupBy(eventsRaw, 'date')[date];
    const earliestEvent = getEarliestEventHour(eventsToday);
    const latestEvent = getLatestEventHour(eventsToday);

    return [earliestEvent, latestEvent];
}

export function getTopOffset(events, index, cellHeight) {
    return events
        .slice(0, index)
        .reduce((acc, val) => {
            const eventDuration = Number(getEventDuration(val.start, val.end) / 1000 / 60);
            const height = Math.round((cellHeight / 60) * eventDuration)
            return acc + height
        }, 0);
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
    const eventsToday = groupBy(eventsRaw, 'date')[date]
    return groupBy(eventsToday, 'track')

}

function getEarliestEventHour(events) {
    return Math.min(...getHourFromEvents(events, 'start'))
}

function getLatestEventHour(events) {
    return Math.max(...getHourFromEvents(events, 'end'))
}

function getHourFromEvents(events, timeProp) {
    return events
        .map(event => event[timeProp])
        .map(time => time.split(':'))
        .map(splittedTime => splittedTime[0])
        .map(Number)
}

export function formatDate(date) {
    return date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1')
}
