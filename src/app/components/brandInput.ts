export interface IBrandItem {
    key: number
    name: string
    logo: string
    keywords: string
    description: string
    categories: string[]
}

export interface ICategorizedBrandList {
    [key: string]: IBrandItem[]
}

const logoPath = './assets'

const brandList: IBrandItem[] = [
    {
        key: 1,
        name: 'Chiemsee',
        logo: 'Chiemsee.svg',
        keywords: 'beachwear, sport, active',
        description: 'nice brand',
        categories: ['Menswear', 'Womenswear', 'Activewear', 'Alles Wear'],
    },
    {
        key: 2,
        name: 'Digel',
        logo: 'digel.png',
        keywords: 'anzug, suits, anzüge',
        description: 'nice brand',
        categories: ['Menswear', 'Womenswear'],
    },
    {
        key: 3,
        name: 'Betty Barclay',
        logo: 'betty.png',
        keywords: 'anzug, suits, anzüge',
        description: 'nice brand',
        categories: ['Womenswear'],
    },
    {
        key: 4,
        name: 'Marc Cain',
        logo: 'marcCain.png',
        keywords: 'premium, luxury, dresses',
        description: 'nice brand',
        categories: ['Womenswear'],
    },
    {
        key: 5,
        name: "Marc O'Polo",
        logo: 'mop.png',
        keywords: 'anzug, suits, anzüge',
        description: 'nice brand',
        categories: ['Menswear', 'Womenswear'],
    },
]

const dummyBrandList = brandList.sort((a, b) => {
    return a.name > b.name ? 1 : -1
})

const categorizedBrandList: ICategorizedBrandList = {}

dummyBrandList.forEach(i => {
    i.categories.forEach(category => {
        if (typeof categorizedBrandList[category] === 'undefined') {
            categorizedBrandList[category] = []
        }
        categorizedBrandList[category].push(i)
    })
})

const categories = ['Menswear', 'Womenswear', 'Activewear', 'Alles Wear']

export { categorizedBrandList, categories, dummyBrandList }
