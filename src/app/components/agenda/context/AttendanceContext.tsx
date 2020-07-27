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

const attendeeRoleId = 'c5e1bbae-9b8a-4631-9d28-9f8ee1b4691b';
const baseUrl = 'https://tp1lwwnt8j.execute-api.eu-central-1.amazonaws.com/development/agenda/sessions';
const eventMobiUrl = 'https://api.eventmobi.com/v2/events'

function AttendanceProvider({ children }) {
    const { userId, dfwEventId } = React.useContext(AppContext);
    const { rawEventData, setRawEventData, getEventById } = React.useContext(EventContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState(null);

    const modifyAttendance = async ({ sessionId, isAttending }) => {
        // We don't care if it resolves/errors or when
        await modifyAttendanceForEventMobi({ sessionId, isAttending });
        
        try {
            setLoading(true);
            const res = await fetch(
                `${baseUrl}/${sessionId}`,
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

    const isUserAttending = (selectedSessionData) => {
        return selectedSessionData.attendees.includes(userId);
    }

    const modifyAttendanceForEventMobi = async ({ sessionId, isAttending }) => {
        const session = getEventById(sessionId);
        try {
            if (isAttending) {
                await fetch(`${eventMobiUrl}/${dfwEventId}/people/resources/${userId}/roles/${attendeeRoleId}/sessions`, {
                    method: 'POST',
                    body: JSON.stringify({ sessionIds: [ sessionId ] }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': EVENTMOBI_API_KEY
                    }
                })
            } else {
                const attendees = session.attendees.filter(id => id !== userId);
                await fetch(`${eventMobiUrl}/${dfwEventId}/people/resources/${session.extId}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ attendees }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': EVENTMOBI_API_KEY
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AttendanceContext.Provider value={{ loading, response, error, modifyAttendance, isUserAttending }}>
            { children }
        </AttendanceContext.Provider>
    )
}

export { AttendanceContext, AttendanceProvider }
