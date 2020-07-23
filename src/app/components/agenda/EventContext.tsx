import * as React from 'react';
import { dates, normalizeEventData, getHourRange } from './helpers';
const sample = require('./sample.json');

const EventContext = React.createContext({
    loading: true,
    error: false,
    eventData: [],
    date: dates.tuesday,
    languageFilter: null,
    hourRange: [9,19],
    handleDateChange: (date) => {},
    handleLanguageFilterChange: (lang) => null
});
 
const EventProvider = (props) => {
    const [eventData, setEventData] = React.useState([]);
    const [date, setDate] = React.useState(dates.tuesday);
    const [languageFilter, setLanguageFilter] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [hourRange, setHourRange] = React.useState([10, 22]);

    // const url = 'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/inputs/sessions.json';

    const fetchEventData = async () => {
        try {
        //   const eventData = await fetch(url)
        //   const { events } = await eventData.json()
          setHourRange(getHourRange(sample, date));
          setEventData(normalizeEventData(sample, date))
          setLoading(false)
        //   console.log(events)
        } catch (e) {
          if (e) {
            setError(true);
          }
        }
    }

    const handleDateChange = (dateValue) => {
      setDate(dateValue);
      setEventData(normalizeEventData(sample, dateValue));
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
          handleLanguageFilterChange
        }}>
            {props.children}
        </EventContext.Provider>
    );
}


export { EventContext, EventProvider };
