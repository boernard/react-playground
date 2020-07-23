import * as React from 'react';
import { useLocation } from 'react-router-dom';
import * as qs from 'query-string';
import { dates, normalizeEventData, getHourRange, getDefaultDate } from './helpers';
const events = require('./sample.json');

const EventContext = React.createContext({
    loading: true,
    error: false,
    eventData: [],
    date: getDefaultDate(),
    languageFilter: null,
    hourRange: [9,19],
    handleDateChange: (date) => {},
    handleLanguageFilterChange: (lang) => null,
    userId: '',
    handleOpenModal: (event) => null,
    handleCloseModal: (event) => null,
    isModalOpen: false,
    selectedEventData: {}
});
 
const EventProvider = (props) => {
    const [eventData, setEventData] = React.useState([]);
    const [date, setDate] = React.useState(dates.tuesday);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedEventData, setSelectedEventData] = React.useState({});
    const [languageFilter, setLanguageFilter] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [hourRange, setHourRange] = React.useState([10, 22]);

    const location = useLocation();
    const params = qs.parse(location.search);

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

    const handleOpenModal = (event) => {
      setIsModalOpen(true);
      setSelectedEventData(event);
    }

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedEventData({});
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
          userId: params.ext_id as string || '',
          handleOpenModal,
          handleCloseModal,
          isModalOpen,
          selectedEventData
        }}>
            {props.children}
        </EventContext.Provider>
    );
}


export { EventContext, EventProvider };
