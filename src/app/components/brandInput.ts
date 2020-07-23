export interface IBrandItem {
    key: number
    name: string
    logo: string
    keywords?: string
    url: string
    description?: string
    categories: string[]
}

export interface ICategorizedBrandList {
    [key: string]: IBrandItem[]
}

const logoPath = './assets'

const brandList: IBrandItem[] = [
    {
        "key": 1,
        "name": "NÜ Denmark",
        "logo": "logo_250_PX.png",
        "categories": ["Womenswear"],
        "url": "https://fashion.cloud/en/dfw20/nue-denmark/"
    },
    {
        "key": 2,
        "name": "MOS MOSH",
        "logo": "logo_2016_kvadrat.png",
        "categories": ["Womenswear", "Denim", "Premium", "Formal Wear", "Pants"],
        "url": "https://fashion.cloud/en/dfw20/mos-mosh/"
    },
    {
        "key": 3,
        "name": "Raffaello Rossi",
        "logo": "RR_Logo_B_coolgrey_kleine_Version.png",
        "categories": ["Womenswear", "Denim", "Premium", "Pants", "Green Brand"],
        "url": ""
    },
    {
        "key": 4,
        "name": "LANIUS",
        "logo": "lanius_logo_cotton.png",
        "categories": ["Womenswear", "Accessoires", "Premium", "Green Brand", "Day & Night Wear"],
        "url": ""
    },
    {
        "key": 5,
        "name": "GARCIA",
        "logo": "GARCIA___Logo___Horizontal_white.png",
        "categories": ["Womenswear", "Menswear", "Kids", "Denim"],
        "url": ""
    },
    {
        "key": 6,
        "name": "Fuchs Schmitt",
        "logo": "Logo_250px.png",
        "categories": ["Womenswear", "Activewear & Outerwear", "Accessoires"],
        "url": "https://fashion.cloud/en/dfw20/fuchs-schmitt/"
    },
    {
        "key": 7,
        "name": "Lipsy London",
        "logo": "lipsy_Master_logo_full.png",
        "categories": ["Womenswear", "Young Fashion"],
        "url": "https://fashion.cloud/en/dfw20/lipsy-london/"
    },
    {
        "key": 8,
        "name": "CG-Club of Gents",
        "logo": "Logo.jpg.png",
        "categories": ["Menswear", "Formal Wear", "Day & Night Wear", "Accessoires", "Denim"],
        "url": "https://fashion.cloud/en/dfw20/club-of-gents/"
    },
    {
        "key": 9,
        "name": "William Lockie Knitwear Nederland",
        "logo": "Lockies_Logo_EPS_Raw_version_Logo.png",
        "categories": ["Womenswear", "Menswear", "Premium", "Accessoires", "Green Brand"],
        "url": "https://fashion.cloud/nl/dfw20/william-lockie/"
    },
    {
        "key": 10,
        "name": "STORY OF MINE",
        "logo": "SOM.png",
        "categories": ["Womenswear", "Green Brand", "Newcomer", "Premium", "Young Fashion"],
        "url": "https://fashion.cloud/en/dfw20/story-of-mine/"
    },
    {
        "key": 11,
        "name": "Club of Comfort",
        "logo": "COC_LOGO_FINAL_weiss_CMYK.png",
        "categories": ["Menswear", "Denim", "Pants"],
        "url": ""
    },
    {
        "key": 12,
        "name": "Carl Gross",
        "logo": "Logo_claim_550.png",
        "categories": ["Menswear", "Accessoires", "Formal Wear", "Green Brand", "Day & Night Wear"],
        "url": "https://fashion.cloud/en/dfw20/carl-gross/"
    },
    {
        "key": 13,
        "name": "CHIEMSEE",
        "logo": "CHI_logo_png.png",
        "categories": ["Womenswear", "Menswear", "Activewear & Outerwear", "Kids", "Green Brand"],
        "url": "https://fashion.cloud/de/dfw20/chiemsee/"
    },
    {
        "key": 14,
        "name": "Goosecraft",
        "logo": "logo_wit.png",
        "categories": ["Leather", "Womenswear", "Menswear", "Premium", "Day & Night Wear"],
        "url": ""
    },
    {
        "key": 15,
        "name": "Circle of Trust",
        "logo": "circle_womens_logo_new_kopie.png",
        "categories": ["Womenswear", "Denim", "Pants", "Day & Night Wear", "Accessoires"],
        "url": "https://fashion.cloud/en/dfw20/circle-of-trust/"
    },
    {
        "key": 16,
        "name": "Freebird",
        "logo": "Freebird_logo.jpg",
        "categories": ["Womenswear"],
        "url": ""
    },
    {
        "key": 17,
        "name": "Fynch-Hatton",
        "logo": "FH_Logo_black.jpg",
        "categories": ["Menswear", "Premium"],
        "url": ""
    },
    {
        "key": 18,
        "name": "Kyra&Ko",
        "logo": "LOGO_KYRA_KO_PINK.png",
        "categories": ["Womenswear"],
        "url": "https://fashion.cloud/en/dfw20/kyra-ko/"
    },
    {
        "key": 19,
        "name": "OLYMP Signature",
        "logo": "OLYMP_SIGNATURE_groesser_80mm_breit_schwarz.png",
        "categories": ["Menswear", "Activewear & Outerwear", "Accessoires", "Formal Wear", "Premium"],
        "url": "https://fashion.cloud/en/dfw20/olymp-signature/"
    },
    {
        "key": 20,
        "name": "Nina von C. + like it!",
        "logo": "NINAvonC_Logo.png",
        "categories": ["Day & Night Wear", "Womenswear"],
        "url": "https://fashion.cloud/de/dfw20/nina-von-c/"
    },
    {
        "key": 21,
        "name": "like it!",
        "logo": "likeit_Logo.png",
        "categories": ["Womenswear", "Day & Night Wear", "Young Fashion"],
        "url": "https://fashion.cloud/de/dfw20/like-it/"
    },
    {
        "key": 22,
        "name": "advarics",
        "logo": "1._Advarics_Logo_CMYK_1.png",
        "categories": [""],
        "url": "https://fashion.cloud/de/dfw20/advarics/"
    },
    {
        "key": 23,
        "name": "Betty Barclay",
        "logo": "BB_Logo_18_medium_250px.png",
        "categories": ["Womenswear", "Pants", "Accessoires", "Denim"],
        "url": "https://fashion.cloud/de/dfw20/betty-barclay/"
    },
    {
        "key": 24,
        "name": "Wiederbelebt",
        "logo": "Logo_01.png",
        "categories": ["Menswear", "Womenswear", "Newcomer", "Green Brand", "Premium"],
        "url": "https://fashion.cloud/en/dfw20/wiederbelebt/"
    },
    {
        "key": 25,
        "name": "Pierre Cardin",
        "logo": "Schriftzug_PierreCardin_neg.png",
        "categories": ["Menswear", "Denim", "Pants", "Activewear & Outerwear", "Formal Wear"],
        "url": ""
    },
    {
        "key": 26,
        "name": "Bellice Evening",
        "logo": "Logo_BelliceEveningwear.png",
        "categories": ["Womenswear", "Formal Wear", "Premium"],
        "url": ""
    },
    {
        "key": 27,
        "name": "Star Night  &  Star Night Plus",
        "logo": "Logo_Star_Night___Star_Night_Plus._2.png",
        "categories": ["Womenswear", "Formal Wear", "Young Fashion", "Premium"],
        "url": "https://fashion.cloud/de/dfw20/star-night/"
    },
    {
        "key": 28,
        "name": "BARTS",
        "logo": "logo.png",
        "categories": ["Accessoires"],
        "url": "https://fashion.cloud/en/dfw20/barts/"
    },
    {
        "key": 29,
        "name": "TAIFUN",
        "logo": "TAIFUN_RZ_neg.png",
        "categories": ["Womenswear"],
        "url": "https://fashion.cloud/de/dfw20/taifun/"
    },
    {
        "key": 30,
        "name": "St. Barth",
        "logo": "Ontwerp_zonder_titel__3_.jpg",
        "categories": ["Womenswear", "Formal Wear", "Pants"],
        "url": "https://fashion.cloud/de/dfw20/st-barth/"
    },
    {
        "key": 31,
        "name": "No One Else",
        "logo": "Ontwerp_zonder_titel.png",
        "categories": ["Womenswear", "Accessoires", "Formal Wear", "Pants"],
        "url": " https://fashion.cloud/de/dfw20/no-one-else/"
    },
    {
        "key": 32,
        "name": "Euretco Fashion",
        "logo": "EKFASHION_250px.png",
        "categories": ["Womenswear", "Menswear", "Kids"],
        "url": ""
    },
    {
        "key": 33,
        "name": "EK Fashion",
        "logo": "Ontwerp_zonder_titel.png",
        "categories": ["Womenswear", "Menswear", "Kids", "Young Fashion"],
        "url": ""
    },
    {
        "key": 34,
        "name": "Soaked in Luxury",
        "logo": "SIL_logo_black_250x70px.png",
        "categories": ["Womenswear", "Day & Night Wear", "Formal Wear", "Pants"],
        "url": "https://fashion.cloud/en/dfw20/soaked-in-luxury/"
    },
    {
        "key": 35,
        "name": "Tramontana",
        "logo": "Naamlogo___slogan.png",
        "categories": ["Womenswear"],
        "url": "https://fashion.cloud/en/dfw20/tramontana/"
    },
    {
        "key": 36,
        "name": "A fish named Fred",
        "logo": "logo_color.png",
        "categories": ["Menswear", "Young Fashion", "Shoes", "Accessoires", "Green Brand"],
        "url": ""
    },
    {
        "key": 37,
        "name": "Babyface",
        "logo": "Ontwerp_zonder_titel__1_.png",
        "categories": ["Young Fashion", "Kids", "Accessoires"],
        "url": "https://fashion.cloud/de/dfw20/babyface/"
    },
    {
        "key": 38,
        "name": "True Religion Brand Jeans Germany",
        "logo": "TRBJ_Logo___Kopie.jpg",
        "categories": ["Womenswear", "Menswear", "Denim", "Premium", "Pants"],
        "url": ""
    },
    {
        "key": 39,
        "name": "Backstage",
        "logo": "backstage_logo_schwarz.png",
        "categories": ["Womenswear", "Premium", "Day & Night Wear"],
        "url": ""
    },
    {
        "key": 40,
        "name": "Olsen",
        "logo": "Olsen_Logo.png",
        "categories": ["Womenswear"],
        "url": ""
    },
    {
        "key": 41,
        "name": "b.belt",
        "logo": "b.belt_Logo.png",
        "categories": ["Womenswear", "Menswear", "Accessoires", "Premium", "Leather"],
        "url": "https://fashion.cloud/de/dfw20/b-belt/"
    },
    {
        "key": 42,
        "name": "Sportalm GmbH",
        "logo": "Logo_300x120px.png",
        "categories": ["Womenswear", "Activewear & Outerwear", "Premium"],
        "url": "https://fashion.cloud/de/dfw20/sportalm/"
    },
    {
        "key": 43,
        "name": "Stehmann",
        "logo": "Stehmann_PassionForPants.jpg",
        "categories": ["Womenswear", "Pants", "Denim"],
        "url": ""
    },
    {
        "key": 44,
        "name": "Part Two",
        "logo": "PT_Logo_Hvid_Est86.png",
        "categories": ["Womenswear"],
        "url": ""
    },
    {
        "key": 45,
        "name": "Simple",
        "logo": "SIMPLE_NEW_logo.png",
        "categories": ["Womenswear", "Premium", "Pants"],
        "url": ""
    },
    {
        "key": 46,
        "name": "Royal Lounge Intimates",
        "logo": "RLI_circle_logo_ohne.png",
        "categories": ["Womenswear", "Premium"],
        "url": ""
    },
    {
        "key": 47,
        "name": "Summum",
        "logo": "LOGO_december_18_0.png",
        "categories": ["Womenswear", "Denim", "Accessoires"],
        "url": ""
    },
    {
        "key": 48,
        "name": "CINQUE",
        "logo": "logo_white_white_CMYK.jpg",
        "categories": ["Womenswear", "Menswear", "Premium", "Formal Wear"],
        "url": ""
    },
    {
        "key": 49,
        "name": "MARC O’POLO",
        "logo": "MOP_Logo.png",
        "categories": ["Womenswear", "Menswear", "Premium", "Green Brand", "Pants"],
        "url": ""
    },
    {
        "key": 50,
        "name": "MARC O’POLO DENIM",
        "logo": "Logo_DENIM.png",
        "categories": ["Womenswear", "Menswear", "Young Fashion", "Denim", "Green Brand"],
        "url": ""
    }
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
