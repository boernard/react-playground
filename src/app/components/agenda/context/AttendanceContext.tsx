import * as React from 'react';
import { AppContext } from '../../../AppContext';
import { EventContext } from './EventContext';
import { updateItemInArrayByIndex, EVENTMOBI_API_KEY } from '../helpers';

const AttendanceContext = React.createContext({
    loading: false,
    response: null,
    error: null,
    modifyAttendance: ({}) => null,
    isUserAttending: (userId) => false
})

const baseUrl = 'https://tp1lwwnt8j.execute-api.eu-central-1.amazonaws.com/development/agenda';
const eventMobiUrl = 'https://api.eventmobi.com/v2/events'

function AttendanceProvider({ children }) {
    const { userId, dfwEventId } = React.useContext(AppContext);
    const { rawEventData, setRawEventData, getEventById } = React.useContext(EventContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState(null);

    const modifyAttendance = async ({ sessionId, isAttending, externalId }) => {
        // Can be slow to update so let's just leave it in the background
        modifyAttendanceForEventmobi({ isAttending, externalId });
        
        try {
            setLoading(true);
            const res = await fetch(
                `${baseUrl}/sessions/${sessionId}`,
                { method: 'PATCH', body: JSON.stringify({ isAttending, userId }) }
            );
            const updatedSession = await res.json()
            setResponse(updatedSession)
            const index = rawEventData.findIndex(session => session._id === sessionId);
            setRawEventData(prevState => updateItemInArrayByIndex(prevState, updatedSession, index))
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    };

    const modifyAttendanceForEventmobi = async ({ isAttending, externalId }) => {
        await fetch(`${baseUrl}/eventmobi/${externalId}`, {
            method: 'PATCH',
            body: JSON.stringify({ userId, isAttending })
        })
    }

    const isUserAttending = (selectedSessionData) => {
        return selectedSessionData.attendees.includes(userId);
    }

    return (
        <AttendanceContext.Provider value={{ loading, response, error, modifyAttendance, isUserAttending }}>
            { children }
        </AttendanceContext.Provider>
    )
}

export { AttendanceContext, AttendanceProvider }
