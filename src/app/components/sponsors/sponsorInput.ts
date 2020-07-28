export interface IBrandItem {
    key: number
    name: string
    logo: string
    url: string
    categories: string[]
}

export interface ICategorizedBrandList {
    [key: string]: IBrandItem[]
}

const logoPath = './assets'

const brandList: IBrandItem[] =
    [
        {
            "key": 1,
            "name": "Cloudstock",
            "logo": "DFW-Cloudstock-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "ERP system (Warenwirtschaft)",
                "PIM",
                "Cloud-Services"
            ],
            "url": "https://fashion.cloud/de/dfw20/cloudstock/"
        },
        {
            "key": 2,
            "name": "unitex",
            "logo": "DFW-unitex-Logo-300-2.jpg",
            "categories": [
                "Associations (Verbände)",
                "Other"
            ],
            "url": "https://fashion.cloud/de/dfw20/unitex/"
        },
        {
            "key": 3,
            "name": "heyconnect GmbH",
            "logo": "DFW-heyconnect-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "ERP system (Warenwirtschaft)",
                "PIM",
                "Other"
            ],
            "url": "https://fashion.cloud/de/dfw20/heyconnect/"
        },
        {
            "key": 4,
            "name": "autoRetouch",
            "logo": "DFW-autoretouch-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "PIM",
                "Artificial Intelligence",
                "Cloud-Services"
            ],
            "url": "https://fashion.cloud/en/dfw20/autoretouch/"
        },
        {
            "key": 5,
            "name": "Hutter & Unger Werbeagentur",
            "logo": "DFW-hutterunger-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "Cloud-Services",
                "ERP system (Warenwirtschaft)"
            ],
            "url": "https://fashion.cloud/de/dfw20/hutter-unger/"
        },
        {
            "key": 6,
            "name": "NOW Communication",
            "logo": "DFW-now-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "Cloud-Services",
                "Other"
            ],
            "url": "https://fashion.cloud/de/dfw20/now-communication/"
        },
        {
            "key": 7,
            "name": "INTEX EDV-Software",
            "logo": "DFW-intex-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "ERP system (Warenwirtschaft)",
                "Cloud-Services",
                "Other"
            ],
            "url": "https://fashion.cloud/de/dfw20/intex/"
        },
        {
            "key": 8,
            "name": "Gallery",
            "logo": "DFW-gallery-Logo-300.jpg",
            "categories": [
                "Other"
            ],
            "url": "https://fashion.cloud/de/dfw20/gallery-fashion-and-shoes/"
        },
        {
            "key": 9,
            "name": "BLVRD",
            "logo": "DFW-BLVRD-Logo-300.jpg",
            "categories": [
                "eCommerce",
                "Other"
            ],
            "url": "https://fashion.cloud/en/dfw20/blvrd/"
        },
        {
            "key": 10,
            "name": "LEUCHTTURM1917",
            "logo": "DFW-Leuchturm-Logo-300.jpg",
            "categories": [
                "Other"
            ],
            "url": "https://fashion.cloud/en/dfw20/leuchtturm1917/"
        },
        {
            "key": 11,
            "name": "advarics",
            "logo": "DFW-advarics-Logo-300.jpg",
            "categories": [
                "ERP system (Warenwirtschaft)",
                "Cloud-Services"
            ],
            "url": "https://fashion.cloud/de/dfw20/advarics/"
        },
        {
            "key": 12,
            "name": "Panther Solutions",
            "logo": "DFW-panther-solutions-Logo-300.jpg",
            "categories": [
                "Cloud-Services",
                "Other",
                "Artificial Intelligence"
            ],
            "url": "https://fashion.cloud/en/dfw20/panther-solutions/"
        },
        {
            "key": 13,
            "name": "Fashion Cloud",
            "logo": "DFW-Fashion-Cloud-Logo-300.jpg",
            "categories": [
                "Cloud-Services",
                "Other",
                "eCommerce"
            ],
            "url": "https://fashion.cloud/en/dfw20/fashion-cloud/"
        }
    ]

const dummyBrandList = brandList.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
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

export { categorizedBrandList, categories, dummyBrandList, }
