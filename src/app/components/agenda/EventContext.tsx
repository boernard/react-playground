import * as React from 'react';
import { dates, normalizeEventData } from './helpers';
const sample = require('./sample.json');

const EventContext = React.createContext({
    loading: true,
    error: false,
    eventData: [],
    date: dates.tuesday
});
 
const EventProvider = (props) => {
    const [eventData, setEventData] = React.useState([]);
    const [date, setDate] = React.useState(dates.tuesday);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // const url = 'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/inputs/sessions.json';

    const fetchEventData = async () => {
        try {
        //   const eventData = await fetch(url)
        //   const { events } = await eventData.json()
          setEventData(normalizeEventData(sample, date))
          setLoading(false)
        //   console.log(events)
        } catch (e) {
          if (e) {
            setError(true);
          }
        }
    }

    React.useEffect(() => {
        fetchEventData();
    }, [])
    return (
        <EventContext.Provider value={{ eventData, loading, error, date }}>
            {props.children}
        </EventContext.Provider>
    );
}


export { EventContext, EventProvider };
