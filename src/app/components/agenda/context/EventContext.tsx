import * as React from 'react'
import { dates, normalizeEventData, getHourRange, getDefaultDate, isUserRetailer } from '../helpers'
import { AppContext } from '../../../AppContext'

export const EventContext = React.createContext({
    loading: true,
    error: false,
    eventData: [],
    date: getDefaultDate(),
    languageFilter: null,
    hourRange: [9, 19],
    handleDateChange: (date) => {},
    handleLanguageFilterChange: (lang) => null,
    isRetailer: false,
    userId: '',
})

export function EventProvider(props) {
    const [eventData, setEventData] = React.useState([])
    const [date, setDate] = React.useState(dates.tuesday)
    const [languageFilter, setLanguageFilter] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [hourRange, setHourRange] = React.useState([10, 22])
    const { userId } = React.useContext(AppContext)

    const isRetailer = React.useMemo(() => isUserRetailer(userId, eventData), [userId, eventData])

    const url = 'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/inputs/sessions.json'

    const fetchEventData = async () => {
        try {
            const eventData = await fetch(url)
            const events = await eventData.json()
            setLoading(false)
            setHourRange(getHourRange(events, date))
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
        setEventData((prevData) => normalizeEventData(prevData, dateValue))
    }

    const handleLanguageFilterChange = (langValue) => {
        setLanguageFilter(langValue)
    }

    React.useEffect(() => {
        fetchEventData()
    }, [])

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
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}
