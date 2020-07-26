import * as React from 'react'
import { useLocation } from 'react-router-dom'
import * as qs from 'query-string'

const AppContext = React.createContext({
    userId: '',
    videoId: '',
    dfwEventId: '664a8df5-0643-481c-ab54-cb7f42a58376'
})

function AppProvider(props) {
    const [userId, setUserId] = React.useState('');
    const { search } = useLocation();
    const id = (qs.parse(search).eventmobi_user as string) || '';
    const videoId = (qs.parse(search).videoId as string) || '';
    const dfwEventId = '664a8df5-0643-481c-ab54-cb7f42a58376'

    React.useEffect(() => {
        if (id) {
            setUserId(id);
        }
    }, [search])

    return (
        <AppContext.Provider value={{ userId, videoId, dfwEventId }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
