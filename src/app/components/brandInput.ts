export interface IBrandItem {
    key: number
    name: string
    logo: string
    keywords: string
    url: string
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
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Womenswear', 'Activewear'],
    },
    {
        key: 2,
        name: 'Digel',
        logo: 'digel.png',
        keywords: 'anzug, suits, anzüge',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear'],
    },
    {
        key: 3,
        name: 'Betty Barclay',
        logo: 'betty.png',
        keywords: 'dresses, casual',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear'],
    },
    {
        key: 4,
        name: 'Marc Cain',
        logo: 'marcCain.png',
        keywords: 'premium, luxury, dresses',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear'],
    },
    {
        key: 5,
        name: "Marc O'Polo",
        logo: 'mop.png',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Womenswear'],
    },
]

const dummyBrandList = brandList.sort((a, b) => {
    return a.name > b.name ? 1 : -1
})

const categorizedBrandList: ICategorizedBrandList = {}
let categories = []
dummyBrandList.forEach(i => {
    i.categories.forEach(category => {
        if (typeof categorizedBrandList[category] === 'undefined') {
            categorizedBrandList[category] = []
            categories.push(category)
        }
        categorizedBrandList[category].push(i)

    })
})

export { categorizedBrandList, categories, dummyBrandList }
