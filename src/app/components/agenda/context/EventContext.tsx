import * as React from 'react'
import { dates, normalizeEventData, getHourRange, isUserRetailer } from '../helpers'
import { AppContext } from '../../../AppContext'

export const EventContext = React.createContext({} as any)

export function EventProvider(props) {
    const [eventData, setEventData] = React.useState([])
    const [retailerData, setRetailerData] = React.useState([])
    const [rawEventData, setRawEventData] = React.useState([])
    const [date, setDate] = React.useState(dates.tuesday)
    const [languageFilter, setLanguageFilter] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [hourRange, setHourRange] = React.useState([10, 22])
    const { userId } = React.useContext(AppContext)

    const isRetailer = React.useMemo(() => isUserRetailer(userId, retailerData), [
        userId,
        rawEventData,
    ])

    const url = 'https://tp1lwwnt8j.execute-api.eu-central-1.amazonaws.com/development/agenda'

    const fetchEventData = async () => {
        try {
            const eventData = await fetch(url)
            const events = await eventData.json()
            const attendeeData = await fetch(
                'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/eventmobiData/retailers.json'
            )
            const retailers = await attendeeData.json()
            setRetailerData(retailers)
            setLoading(false)
            setHourRange(getHourRange(events, date))
            setRawEventData(events)
            setEventData(normalizeEventData(events, date))
        } catch (e) {
            if (e) {
                setError(true)
                setLoading(false)
            }
        }
    }

    const handleDateChange = (dateValue) => {
        setDate(dateValue)
    }

    const handleLanguageFilterChange = (langValue) => {
        setLanguageFilter(langValue)
    }

    const getEventById = (id) => {
        return rawEventData.find((event) => event._id === id)
    }

    React.useEffect(() => {
        fetchEventData()
    }, [])

    React.useEffect(() => {
        setEventData(normalizeEventData(rawEventData, date))
    }, [rawEventData, date])

    return (
        <EventContext.Provider
            value={{
                eventData,
                loading,
                error,
                date,
                languageFilter,
                hourRange,
                handleDateChange,
                handleLanguageFilterChange,
                isRetailer,
                userId,
                rawEventData,
                setRawEventData,
                getEventById,
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}
