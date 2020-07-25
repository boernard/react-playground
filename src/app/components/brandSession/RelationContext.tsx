import * as React from 'react';
import { AppContext } from '../../AppContext';

const RelationContext = React.createContext({
    loading: false,
    hasRelation: false,
    error: null,
    postRelation: () => null,
})

const baseUrl = 'https://tp1lwwnt8j.execute-api.eu-central-1.amazonaws.com/development/agenda';

function RelationProvider({ children }) {
    const { userId, videoId } = React.useContext(AppContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [hasRelation, setHasRelation] = React.useState(false);

    const postRelation = async () => {
        try {
            setLoading(true);
            const res = await fetch(baseUrl, { method: 'POST', body: JSON.stringify({ videoId, userId }) });
            setHasRelation(res.status === 201);
            setLoading(false)
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    };

    React.useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const rawResponse = await fetch(`${baseUrl}/${userId}/${videoId}`);
                const res = await rawResponse.json();
                setLoading(false)
                setHasRelation(res.hasRelation)
            } catch (e) {
                setLoading(false)
                setError(e)
            }
        }

        if (userId){
            getData();
        }
    }, [userId])

    return (
        <RelationContext.Provider value={{ loading, hasRelation, error, postRelation }}>
            { children }
        </RelationContext.Provider>
    )
}

export { RelationContext, RelationProvider}
