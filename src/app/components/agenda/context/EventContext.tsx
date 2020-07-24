import * as React from 'react';
import { useLocation } from 'react-router-dom';
import * as qs from 'query-string';
import { dates, normalizeEventData, getHourRange, getDefaultDate, isUserRetailer } from '../helpers';
const events = require('../sample.json');

export const EventContext = React.createContext({
    loading: true,
    error: false,
    eventData: [],
    date: getDefaultDate(),
    languageFilter: null,
    hourRange: [9,19],
    handleDateChange: (date) => {},
    handleLanguageFilterChange: (lang) => null,
    userId: '',
    isRetailer: false
});
 
export function EventProvider(props) {
    const [eventData, setEventData] = React.useState([]);
    const [date, setDate] = React.useState(dates.tuesday);
    
    const [languageFilter, setLanguageFilter] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [hourRange, setHourRange] = React.useState([10, 22]);

    const location = useLocation();
    const userId = qs.parse(location.search).ext_id as string || '';
    const isRetailer = React.useMemo(() => isUserRetailer(userId, events), [userId, events])

    // const url = 'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/inputs/sessions.json';

    const fetchEventData = async () => {
        try {
        //   const eventData = await fetch(url)
        //   const { events } = await eventData.json()
          setHourRange(getHourRange(events, date));
          setEventData(normalizeEventData(events, date))
          setLoading(false)
        } catch (e) {
          if (e) {
            setError(true);
          }
        }
    }

    const handleDateChange = (dateValue) => {
      setDate(dateValue);
      setEventData(normalizeEventData(events, dateValue));
    }

    const handleLanguageFilterChange = (langValue) => {
      setLanguageFilter(langValue);
    }

    React.useEffect(() => {
        fetchEventData();
    }, [])
    return (
        <EventContext.Provider value={{
          eventData,
          loading,
          error,
          date,
          languageFilter,
          hourRange,
          handleDateChange,
          handleLanguageFilterChange,
          userId,
          isRetailer
        }}>
            {props.children}
        </EventContext.Provider>
    );
}
