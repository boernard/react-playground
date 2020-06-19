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
        categories: ['Womenswear',
            'Menswear',
            'Young Fashion',
            'Activewear & Outerwear'],
    },
    {
        key: 2,
        name: 'Digel',
        logo: 'digel.png',
        keywords: 'anzug, suits, anzüge',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Pants', 'Accessoires']
    },
    {
        key: 3,
        name: 'Betty Barclay',
        logo: 'betty.png',
        keywords: 'dresses, casual',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear', 'Day & Night Wear', 'Formal Wear'],
    },
    {
        key: 4,
        name: 'Marc Cain',
        logo: 'marcCain.png',
        keywords: 'premium, luxury, dresses',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear', 'Luxury'],
    },
    {
        key: 5,
        name: "Marc O'Polo",
        logo: 'mop.png',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Womenswear', 'Shoes', 'Kids', 'Premium'],
    },
    {
        key: 6,
        name: "Tom Tailor",
        logo: 'tomTailor.png',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Kids', 'Womenswear', 'Denim', 'Menswear'],
    },
    {
        key: 7,
        name: "Kyra & Ko",
        logo: 'kyraKo.png',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear', 'Green Brands'],
    },
    {
        key: 8,
        name: "Summum",
        logo: 'summum.svg',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear', 'Newcomer', 'Premium', 'Green Brands'],
    },
    {
        key: 9,
        name: "Carl Gross",
        logo: 'carlGross.svg',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Premium', 'Formal Wear'],
    },
    {
        key: 10,
        name: "CG - Club of gents",
        logo: 'cg.svg',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear'],
    },
    {
        key: 11,
        name: "Raffaello Rossi",
        logo: 'raffaelloRossi.svg',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Womenswear', 'Pants'],
    },
    {
        key: 12,
        name: "True Religion",
        logo: 'trueReligion.png',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Denim', 'Pants', 'Menswear', 'Womenswear', 'Young Fashion'],
    },
    {
        key: 13,
        name: "Club of Comfort",
        logo: 'clubOfComfort.svg',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Denim', 'Pants', 'Menswear'],
    },
    {
        key: 14,
        name: "Casa Moda",
        logo: 'casamoda.png',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Formal Wear'],
    },
    {
        key: 15,
        name: "Roy Robson",
        logo: 'royRobson.svg',
        keywords: 'casual, premium',
        description: 'nice brand',
        url: 'https://fashion.cloud/de/demo-brand/',
        categories: ['Menswear', 'Formal Wear'],
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

categories.sort()

export { categorizedBrandList, categories, dummyBrandList }
