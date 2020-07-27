import * as React from 'react'
const InspirationContext = React.createContext({} as any)
const baseUrl =
    'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/eventmobiData/inspirationInput.json'

function InspirationProvider({ children }) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [inspirationData, setInspirationData] = React.useState([])
    const [categories, setCategories] = React.useState([])
    const getData = async () => {
        try {
            setLoading(true)
            const rawResponse = await fetch(baseUrl)
            const response = shuffle(await rawResponse.json())
            setInspirationData(response)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    React.useEffect(() => {
        setCategories(getCategories(inspirationData))
    }, [inspirationData])

    return (
        <InspirationContext.Provider value={{ loading, inspirationData, categories, error }}>
            {children}
        </InspirationContext.Provider>
    )
}

function getCategories(inspirationInput) {
    let categoriesSet = new Set()
    inspirationInput.forEach((i) => {
        i.categories.forEach((cat) => {
            categoriesSet.add(cat)
        })
    })
    const categories = Array.from(categoriesSet) as string[]
    categories.sort()
    return categories
}

function shuffle(a) {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }
    return a
}

export { InspirationContext, InspirationProvider }
