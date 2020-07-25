import * as React from 'react'
import { useLocation } from 'react-router-dom'
import * as qs from 'query-string'

const AppContext = React.createContext({
    userId: '',
})

function AppProvider(props) {
    const [userId, setUserId] = React.useState('');
    const { search } = useLocation();
    const id = (qs.parse(search).eventmobi_user as string) || '';

    React.useEffect(() => {
        setUserId(id);
    }, [])

    return (
        <AppContext.Provider value={{ userId }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
