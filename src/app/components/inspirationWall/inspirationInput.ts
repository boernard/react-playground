export interface IInspirationItem {
    key: number
    name: string
    image: string
    url: string
    categories: string[]
}

const imagePath = './assets'

const inspirationInput: IInspirationItem[] = [
    {
        "key": 1,
        "name": "NÜ Denmark",
        "image": "400X400_1.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/nue-denmark/"
    },
    {
        "key": 2,
        "name": "NÜ Denmark",
        "image": "400X400_2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/nue-denmark/"
    },
    {
        "key": 3,
        "name": "NÜ Denmark",
        "image": "400X400_3.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/nue-denmark/"
    },
    {
        "key": 4,
        "name": "NÜ Denmark",
        "image": "400X400_4.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/nue-denmark/"
    },
    {
        "key": 5,
        "name": "MOS MOSH",
        "image": "135430_Selby_Denim_Dress.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/mos-mosh/"
    },
    {
        "key": 6,
        "name": "MOS MOSH",
        "image": "",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/mos-mosh/"
    },
    {
        "key": 7,
        "name": "MOS MOSH",
        "image": ",",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/mos-mosh/"
    },
    {
        "key": 8,
        "name": "Raffaello Rossi",
        "image": "Inspirationalwall_Visual_RR_HaileyStick.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/raffaellorossi/"
    },
    {
        "key": 9,
        "name": "Raffaello Rossi",
        "image": "Inspirationalwall_Visual_RR_Jane.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/raffaellorossi/"
    },
    {
        "key": 10,
        "name": "Raffaello Rossi",
        "image": "Inspirationwall_Visual_RR_Liv.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/raffaellorossi/"
    },
    {
        "key": 11,
        "name": "Raffaello Rossi",
        "image": "Inspirationwall_Visual_RR_Tara.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Premium",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/raffaellorossi/"
    },
    {
        "key": 12,
        "name": "LANIUS",
        "image": "1.jpg",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Premium",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/lanius/"
    },
    {
        "key": 13,
        "name": "LANIUS",
        "image": "2.jpg",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Premium",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/lanius/"
    },
    {
        "key": 14,
        "name": "LANIUS",
        "image": "3.jpg",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Premium",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/lanius/"
    },
    {
        "key": 15,
        "name": "LANIUS",
        "image": "4.jpg",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Premium",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/lanius/"
    },
    {
        "key": 16,
        "name": "GARCIA",
        "image": "Adults_Organic.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/garcia/"
    },
    {
        "key": 17,
        "name": "GARCIA",
        "image": "Teens_together.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/garcia/"
    },
    {
        "key": 18,
        "name": "GARCIA",
        "image": "Campaign_Tiles_600x600px2.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/garcia/"
    },
    {
        "key": 19,
        "name": "GARCIA",
        "image": "Campaign_Tiles_600x600px.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/garcia/"
    },
    {
        "key": 20,
        "name": "Fuchs Schmitt",
        "image": "InspirationWall_400px_1.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/fuchs-schmitt/"
    },
    {
        "key": 21,
        "name": "Fuchs Schmitt",
        "image": "InspirationWall_400px_2.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/fuchs-schmitt/"
    },
    {
        "key": 22,
        "name": "Fuchs Schmitt",
        "image": "InspirationWall_400px_3.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/fuchs-schmitt/"
    },
    {
        "key": 23,
        "name": "Fuchs Schmitt",
        "image": "InspirationWall_400px_4.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/fuchs-schmitt/"
    },
    {
        "key": 24,
        "name": "Lipsy London",
        "image": "SS_AC_P3_SHOT_11_R31468_844.jpg",
        "categories": [
            "Womenswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/lipsy-london/"
    },
    {
        "key": 25,
        "name": "Lipsy London",
        "image": "SS_P2_LA_SHOT_R31834_1911.jpg",
        "categories": [
            "Womenswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/lipsy-london/"
    },
    {
        "key": 26,
        "name": "Lipsy London",
        "image": "SS_P3_AC_SHOT06_R31458_551.jpg",
        "categories": [
            "Womenswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/lipsy-london/"
    },
    {
        "key": 27,
        "name": "Lipsy London",
        "image": "SS20_P1_3_BRIDAL_SHOT_26_0155.jpg",
        "categories": [
            "Womenswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/lipsy-london/"
    },
    {
        "key": 28,
        "name": "CG-Club of Gents",
        "image": "Inspiration_Wall_1.jpg",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Day & Night Wear",
            "Accessoires",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/club-of-gents/"
    },
    {
        "key": 29,
        "name": "CG-Club of Gents",
        "image": "Inspiration_Wall_2.jpg",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Day & Night Wear",
            "Accessoires",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/club-of-gents/"
    },
    {
        "key": 30,
        "name": "CG-Club of Gents",
        "image": "Inspiration_Wall_3.jpg",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Day & Night Wear",
            "Accessoires",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/club-of-gents/"
    },
    {
        "key": 31,
        "name": "CG-Club of Gents",
        "image": "Inspiration_Wall_4.jpg",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Day & Night Wear",
            "Accessoires",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/club-of-gents/"
    },
    {
        "key": 32,
        "name": "William Lockie Knitwear Nederland",
        "image": "_4497_min.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/nl/dfw20/william-lockie/"
    },
    {
        "key": 33,
        "name": "William Lockie Knitwear Nederland",
        "image": "_3570_min.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/nl/dfw20/william-lockie/"
    },
    {
        "key": 34,
        "name": "William Lockie Knitwear Nederland",
        "image": "_3426_min.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/nl/dfw20/william-lockie/"
    },
    {
        "key": 35,
        "name": "William Lockie Knitwear Nederland",
        "image": "_3951_min.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/nl/dfw20/william-lockie/"
    },
    {
        "key": 36,
        "name": "STORY OF MINE",
        "image": "som_1__1__min.jpg",
        "categories": [
            "Womenswear",
            "Green Brand",
            "Newcomer",
            "Premium",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/story-of-mine/"
    },
    {
        "key": 37,
        "name": "STORY OF MINE",
        "image": "som_content__04_2_3_web_min.jpg",
        "categories": [
            "Womenswear",
            "Green Brand",
            "Newcomer",
            "Premium",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/story-of-mine/"
    },
    {
        "key": 38,
        "name": "STORY OF MINE",
        "image": "som_content__05_2_3_hochformat_web_min.jpg",
        "categories": [
            "Womenswear",
            "Green Brand",
            "Newcomer",
            "Premium",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/story-of-mine/"
    },
    {
        "key": 39,
        "name": "STORY OF MINE",
        "image": "som_content__07_2_3_hochformat_web_min.jpg",
        "categories": [
            "Womenswear",
            "Green Brand",
            "Newcomer",
            "Premium",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/story-of-mine/"
    },
    {
        "key": 40,
        "name": "Club of Comfort",
        "image": "CoC_modische_Kapsel_inspiration_wall.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/club-of-comfort/"
    },
    {
        "key": 41,
        "name": "Club of Comfort",
        "image": "CC_Titel_SS_2021.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/club-of-comfort/"
    },
    {
        "key": 42,
        "name": "Club of Comfort",
        "image": "CoC_Shorts_2.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/club-of-comfort/"
    },
    {
        "key": 43,
        "name": "Club of Comfort",
        "image": "CoC_Performance_Fabrics.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/club-of-comfort/"
    },
    {
        "key": 44,
        "name": "Carl Gross",
        "image": "InspirationWall_1.jpg",
        "categories": [
            "Menswear",
            "Accessoires",
            "Formal Wear",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/carl-gross/"
    },
    {
        "key": 45,
        "name": "Carl Gross",
        "image": "InspirationWall_2.jpg",
        "categories": [
            "Menswear",
            "Accessoires",
            "Formal Wear",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/carl-gross/"
    },
    {
        "key": 46,
        "name": "Carl Gross",
        "image": "InspirationWall_3.jpg",
        "categories": [
            "Menswear",
            "Accessoires",
            "Formal Wear",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/carl-gross/"
    },
    {
        "key": 47,
        "name": "Carl Gross",
        "image": "InspirationWall_4.jpg",
        "categories": [
            "Menswear",
            "Accessoires",
            "Formal Wear",
            "Green Brand",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/carl-gross/"
    },
    {
        "key": 48,
        "name": "CHIEMSEE",
        "image": "CHI_fc_iw_women_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Kids",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/chiemsee/"
    },
    {
        "key": 49,
        "name": "CHIEMSEE",
        "image": "CHI_fc_iw_men_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Kids",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/chiemsee/"
    },
    {
        "key": 50,
        "name": "CHIEMSEE",
        "image": ",",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Kids",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/chiemsee/"
    },
    {
        "key": 51,
        "name": "OKLAHOMA",
        "image": "OKL_PD_iw_fc_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/oklahoma/"
    },
    {
        "key": 52,
        "name": "OKLAHOMA",
        "image": "OKL_Jeans_iw_fc_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/oklahoma/"
    },
    {
        "key": 53,
        "name": "OKLAHOMA",
        "image": ",",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Pants",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/oklahoma/"
    },
    {
        "key": 54,
        "name": "Goosecraft",
        "image": "inspirationwall1.jpg",
        "categories": [
            "Leather",
            "Womenswear",
            "Menswear",
            "Premium",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/goosecraft/"
    },
    {
        "key": 55,
        "name": "Goosecraft",
        "image": "inspirationwall2.jpg",
        "categories": [
            "Leather",
            "Womenswear",
            "Menswear",
            "Premium",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/goosecraft/"
    },
    {
        "key": 56,
        "name": "Goosecraft",
        "image": "inspirationwall3.jpg",
        "categories": [
            "Leather",
            "Womenswear",
            "Menswear",
            "Premium",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/goosecraft/"
    },
    {
        "key": 57,
        "name": "Goosecraft",
        "image": "visual4.jpg",
        "categories": [
            "Leather",
            "Womenswear",
            "Menswear",
            "Premium",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/goosecraft/"
    },
    {
        "key": 58,
        "name": "Ledûb",
        "image": "Inspiration_wall.zip",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/ledub/"
    },
    {
        "key": 59,
        "name": "Ledûb",
        "image": "",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/ledub/"
    },
    {
        "key": 60,
        "name": "Ledûb",
        "image": ",",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/ledub/"
    },
    {
        "key": 61,
        "name": "Circle of Trust",
        "image": "Fashioncloud_Inspirational_wall_400x400_pxl.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Day & Night Wear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/circle-of-trust/"
    },
    {
        "key": 62,
        "name": "Circle of Trust",
        "image": "Fashioncloud_Inspirational_wall_400x400_pxl2.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Day & Night Wear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/circle-of-trust/"
    },
    {
        "key": 63,
        "name": "Circle of Trust",
        "image": "Fashioncloud_Inspirational_wall_400x400_pxl3.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Day & Night Wear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/circle-of-trust/"
    },
    {
        "key": 64,
        "name": "Circle of Trust",
        "image": "Fashioncloud_Inspirational_wall_400x400_pxl4.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Day & Night Wear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/circle-of-trust/"
    },
    {
        "key": 65,
        "name": "Fynch-Hatton",
        "image": "INSPIRATION_WALL_400X400.jpg",
        "categories": [
            "Menswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 66,
        "name": "Fynch-Hatton",
        "image": "INSPIRATION_WALL2_400X400.jpg",
        "categories": [
            "Menswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 67,
        "name": "Fynch-Hatton",
        "image": ",",
        "categories": [
            "Menswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 68,
        "name": "Kyra&Ko",
        "image": "2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/kyra-ko/"
    },
    {
        "key": 69,
        "name": "Kyra&Ko",
        "image": "6.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/kyra-ko/"
    },
    {
        "key": 70,
        "name": "Kyra&Ko",
        "image": "2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/kyra-ko/"
    },
    {
        "key": 71,
        "name": "Kyra&Ko",
        "image": "2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/kyra-ko/"
    },
    {
        "key": 72,
        "name": "OLYMP Signature",
        "image": "OLYMP_Signature_Brand_Overview_04__400x400.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Accessoires",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/olymp-signature/"
    },
    {
        "key": 73,
        "name": "OLYMP Signature",
        "image": "OLYMP_Signature_Brand_Overview_01__400x400.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Accessoires",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/olymp-signature/"
    },
    {
        "key": 74,
        "name": "OLYMP Signature",
        "image": "OLYMP_Signature_Brand_Overview_03__400x400.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Accessoires",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/olymp-signature/"
    },
    {
        "key": 75,
        "name": "OLYMP Signature",
        "image": "OLYMP_Signature_Brand_Overview_02__400x400.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Accessoires",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/olymp-signature/"
    },
    {
        "key": 76,
        "name": "Nina von C. + like it!",
        "image": "NinavonC_keypiece_lingerie_pearl.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/nina-von-c/"
    },
    {
        "key": 77,
        "name": "Nina von C. + like it!",
        "image": "NinavonC_keypiece_lingerie_doveblue.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/nina-von-c/"
    },
    {
        "key": 78,
        "name": "Nina von C. + like it!",
        "image": "NinavonC_keypiece_lingerie_coral.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/nina-von-c/"
    },
    {
        "key": 79,
        "name": "Nina von C. + like it!",
        "image": "NinavonC_keypiece_lounge_coral.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/nina-von-c/"
    },
    {
        "key": 80,
        "name": "like it!",
        "image": "likeit_keypiece1.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/de/dfw20/like-it/"
    },
    {
        "key": 81,
        "name": "like it!",
        "image": "likeit_keypiece2.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/de/dfw20/like-it/"
    },
    {
        "key": 82,
        "name": "like it!",
        "image": "likeit_keypiece4.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/de/dfw20/like-it/"
    },
    {
        "key": 83,
        "name": "like it!",
        "image": "likeit_keypiece6.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/de/dfw20/like-it/"
    },
    {
        "key": 84,
        "name": "Wiederbelebt",
        "image": "wall10.jpg",
        "categories": [
            "Menswear",
            "Womenswear",
            "Newcomer",
            "Green Brand",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/wiederbelebt/"
    },
    {
        "key": 85,
        "name": "Wiederbelebt",
        "image": "wall9.jpg",
        "categories": [
            "Menswear",
            "Womenswear",
            "Newcomer",
            "Green Brand",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/wiederbelebt/"
    },
    {
        "key": 86,
        "name": "Wiederbelebt",
        "image": "wall7.jpg",
        "categories": [
            "Menswear",
            "Womenswear",
            "Newcomer",
            "Green Brand",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/wiederbelebt/"
    },
    {
        "key": 87,
        "name": "Wiederbelebt",
        "image": "wall4.jpg",
        "categories": [
            "Menswear",
            "Womenswear",
            "Newcomer",
            "Green Brand",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/wiederbelebt/"
    },
    {
        "key": 88,
        "name": "Pierre Cardin",
        "image": "Inspirational_Wall_4__PC_DigitalFashionWeek_400x400px13.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants",
            "Activewear & Outerwear",
            "Formal Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/pierre-cardin/"
    },
    {
        "key": 89,
        "name": "Pierre Cardin",
        "image": "Inspiration_Wall_1_PC_DigitalFashionWeek_400x400px___Kopie.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants",
            "Activewear & Outerwear",
            "Formal Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/pierre-cardin/"
    },
    {
        "key": 90,
        "name": "Pierre Cardin",
        "image": "Inspiration_Wall_2__PC_DigitalFashionWeek_400x400px16.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants",
            "Activewear & Outerwear",
            "Formal Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/pierre-cardin/"
    },
    {
        "key": 91,
        "name": "Pierre Cardin",
        "image": "Inspirational_Wall_3_PC_DigitalFashionWeek_400x400px4.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Pants",
            "Activewear & Outerwear",
            "Formal Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/pierre-cardin/"
    },
    {
        "key": 92,
        "name": "Bellice Evening",
        "image": "IMG_4778.JPG",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/bellice-evening/"
    },
    {
        "key": 93,
        "name": "Bellice Evening",
        "image": "IMG_4779.JPG",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/bellice-evening/"
    },
    {
        "key": 94,
        "name": "Bellice Evening",
        "image": "IMG_4780.JPG,",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/bellice-evening/"
    },
    {
        "key": 95,
        "name": "Star Night  &  Star Night Plus",
        "image": "Inspiration.JPG",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Young Fashion",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/star-night/"
    },
    {
        "key": 96,
        "name": "Star Night  &  Star Night Plus",
        "image": "Inspiration__2_.JPG",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Young Fashion",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/star-night/"
    },
    {
        "key": 97,
        "name": "Star Night  &  Star Night Plus",
        "image": "Inspiration33.JPG,",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Young Fashion",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/star-night/"
    },
    {
        "key": 98,
        "name": "BARTS",
        "image": "BartsS21_Email_Teaser_Fashion.jpeg",
        "categories": [
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/barts/"
    },
    {
        "key": 99,
        "name": "BARTS",
        "image": "BartsS21_Email_Teaser_Lingerie.jpeg",
        "categories": [
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/barts/"
    },
    {
        "key": 100,
        "name": "BARTS",
        "image": "BartsS21_Email_Teaser_Sport.jpeg,",
        "categories": [
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/barts/"
    },
    {
        "key": 101,
        "name": "TAIFUN",
        "image": "_IVO_TAIFUN_K1K2_day1_11_16_2211_2_760013_11079_9700_19709.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/taifun/"
    },
    {
        "key": 102,
        "name": "TAIFUN",
        "image": "OF_11_2020_07_07_IVO_TAIFUN_K1K2_day2_11_16_2211_2_772041_15112_6360_22141_neu.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/taifun/"
    },
    {
        "key": 103,
        "name": "TAIFUN",
        "image": "OF_10_2020_07_06_IVO_TAIFUN_K1K2_day1_11_16_2211_2_730011_11068_5300_18321_neu.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/taifun/"
    },
    {
        "key": 104,
        "name": "TAIFUN",
        "image": "TAIFUN_Inspowall_2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/taifun/"
    },
    {
        "key": 105,
        "name": "No Excess",
        "image": "KEY_PIECE_1_11630208.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Activewear & Outerwear",
            "Pants",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/no-excess/"
    },
    {
        "key": 106,
        "name": "No Excess",
        "image": "KEY_PIECE_6_11640203.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Activewear & Outerwear",
            "Pants",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/no-excess/"
    },
    {
        "key": 107,
        "name": "No Excess",
        "image": "KEY_PIECE_5_11630205.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Activewear & Outerwear",
            "Pants",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/no-excess/"
    },
    {
        "key": 108,
        "name": "No Excess",
        "image": "KEY_PIECE_3_11630207.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Activewear & Outerwear",
            "Pants",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/no-excess/"
    },
    {
        "key": 109,
        "name": "St. Barth",
        "image": "Ontwerp_zonder_titel__5_.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/st-barth/"
    },
    {
        "key": 110,
        "name": "St. Barth",
        "image": "Ontwerp_zonder_titel__4_.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/st-barth/"
    },
    {
        "key": 111,
        "name": "St. Barth",
        "image": ",",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/st-barth/"
    },
    {
        "key": 112,
        "name": "No One Else",
        "image": "Ontwerp_zonder_titel__13_.jpg",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/no-one-else/"
    },
    {
        "key": 113,
        "name": "No One Else",
        "image": "Ontwerp_zonder_titel__12_.jpg",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/no-one-else/"
    },
    {
        "key": 114,
        "name": "No One Else",
        "image": "Ontwerp_zonder_titel__11_.jpg,",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/no-one-else/"
    },
    {
        "key": 115,
        "name": "Soaked in Luxury",
        "image": "2020_07_01_SL_MS21_Image_Anders2908_min_1_.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/soaked-in-luxury/"
    },
    {
        "key": 116,
        "name": "Soaked in Luxury",
        "image": "2020_07_01_SL_MS21_Image_Anders3115_min_1_.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/soaked-in-luxury/"
    },
    {
        "key": 117,
        "name": "Soaked in Luxury",
        "image": "2020_07_01_SL_MS21_Image_Anders2750_min_1_.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/soaked-in-luxury/"
    },
    {
        "key": 118,
        "name": "Soaked in Luxury",
        "image": "2020_07_01_SL_MS21_Image_Anders2806_min_1_.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/soaked-in-luxury/"
    },
    {
        "key": 119,
        "name": "Tramontana",
        "image": "Inspiration_12.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/tramontana/"
    },
    {
        "key": 120,
        "name": "Tramontana",
        "image": "Inspiration_1.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/tramontana/"
    },
    {
        "key": 121,
        "name": "Tramontana",
        "image": "Inspiration_13.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/tramontana/"
    },
    {
        "key": 122,
        "name": "Tramontana",
        "image": "Inspiration_132.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/tramontana/"
    },
    {
        "key": 123,
        "name": "A fish named Fred",
        "image": "_MGF7508.jpeg",
        "categories": [
            "Menswear",
            "Young Fashion",
            "Shoes",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/a-fish-named-fred/"
    },
    {
        "key": 124,
        "name": "A fish named Fred",
        "image": "_MGF8302.jpeg",
        "categories": [
            "Menswear",
            "Young Fashion",
            "Shoes",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/a-fish-named-fred/"
    },
    {
        "key": 125,
        "name": "A fish named Fred",
        "image": "Image_SS21_1.jpg",
        "categories": [
            "Menswear",
            "Young Fashion",
            "Shoes",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/a-fish-named-fred/"
    },
    {
        "key": 126,
        "name": "A fish named Fred",
        "image": "Image_SS21_13.jpg",
        "categories": [
            "Menswear",
            "Young Fashion",
            "Shoes",
            "Accessoires",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/a-fish-named-fred/"
    },
    {
        "key": 127,
        "name": "Vanzetti",
        "image": "Inspiration_wall_01.jpg",
        "categories": [
            "Leather",
            "Accessoires",
            "Menswear",
            "Womenswear",
            "Kids"
        ],
        "url": "https://fashion.cloud/en/dfw20/vanzetti/"
    },
    {
        "key": 128,
        "name": "Vanzetti",
        "image": "Inspiration_wall_02.jpg",
        "categories": [
            "Leather",
            "Accessoires",
            "Menswear",
            "Womenswear",
            "Kids"
        ],
        "url": "https://fashion.cloud/en/dfw20/vanzetti/"
    },
    {
        "key": 129,
        "name": "Vanzetti",
        "image": "Inspiration_wall_03.jpg,",
        "categories": [
            "Leather",
            "Accessoires",
            "Menswear",
            "Womenswear",
            "Kids"
        ],
        "url": "https://fashion.cloud/en/dfw20/vanzetti/"
    },
    {
        "key": 130,
        "name": "Babyface",
        "image": "Ontwerp_zonder_titel__18_.jpg",
        "categories": [
            "Young Fashion",
            "Kids",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/babyface/"
    },
    {
        "key": 131,
        "name": "Babyface",
        "image": "",
        "categories": [
            "Young Fashion",
            "Kids",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/babyface/"
    },
    {
        "key": 132,
        "name": "Babyface",
        "image": ",",
        "categories": [
            "Young Fashion",
            "Kids",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/babyface/"
    },
    {
        "key": 133,
        "name": "True Religion Brand Jeans Germany",
        "image": "_ANN4035-Bearbeitet_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/true-religion/"
    },
    {
        "key": 134,
        "name": "True Religion Brand Jeans Germany",
        "image": "_ANN5014-Bearbeitet_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/true-religion/"
    },
    {
        "key": 135,
        "name": "True Religion Brand Jeans Germany",
        "image": "_ANN5020-Bearbeitet_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/true-religion/"
    },
    {
        "key": 136,
        "name": "True Religion Brand Jeans Germany",
        "image": "IMG_5352xxx_400x400.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/true-religion/"
    },
    {
        "key": 137,
        "name": "Olsen",
        "image": "Inspiration_Wall_01.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/olsen/"
    },
    {
        "key": 138,
        "name": "Olsen",
        "image": "Inspiration_Wall_02.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/olsen/"
    },
    {
        "key": 139,
        "name": "Olsen",
        "image": "Inspiration_Wall_04.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/olsen/"
    },
    {
        "key": 140,
        "name": "Olsen",
        "image": "Inspiration_Wall_03.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/olsen/"
    },
    {
        "key": 141,
        "name": "b.belt",
        "image": "Inspiration_wall_01.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Accessoires",
            "Premium",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/b-belt/"
    },
    {
        "key": 142,
        "name": "b.belt",
        "image": "Inspiration_wall_02.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Accessoires",
            "Premium",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/b-belt/"
    },
    {
        "key": 143,
        "name": "b.belt",
        "image": "Inspiration_wall_03.jpg,",
        "categories": [
            "Womenswear",
            "Menswear",
            "Accessoires",
            "Premium",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/b-belt/"
    },
    {
        "key": 144,
        "name": "Digel AG",
        "image": "DIGEL_SS21_16_400px.jpg",
        "categories": [
            "Menswear",
            "Shoes",
            "Formal Wear",
            "Pants",
            "Activewear & Outerwear"
        ],
        "url": "https://fashion.cloud/en/dfw20/digel/"
    },
    {
        "key": 145,
        "name": "Digel AG",
        "image": "MOVE_SS21_13_400px.jpg",
        "categories": [
            "Menswear",
            "Shoes",
            "Formal Wear",
            "Pants",
            "Activewear & Outerwear"
        ],
        "url": "https://fashion.cloud/en/dfw20/digel/"
    },
    {
        "key": 146,
        "name": "Digel AG",
        "image": "DIGEL_SS21_18_400px.jpg",
        "categories": [
            "Menswear",
            "Shoes",
            "Formal Wear",
            "Pants",
            "Activewear & Outerwear"
        ],
        "url": "https://fashion.cloud/en/dfw20/digel/"
    },
    {
        "key": 147,
        "name": "Digel AG",
        "image": "MOVE_SS21_15_400.jpg",
        "categories": [
            "Menswear",
            "Shoes",
            "Formal Wear",
            "Pants",
            "Activewear & Outerwear"
        ],
        "url": "https://fashion.cloud/en/dfw20/digel/"
    },
    {
        "key": 148,
        "name": "Sportalm GmbH",
        "image": "Sportalm_fashion_9_7_20_2096ret.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/sportalm/"
    },
    {
        "key": 149,
        "name": "Sportalm GmbH",
        "image": "Sportalm_fashion_9_7_20_2139ret.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/sportalm/"
    },
    {
        "key": 150,
        "name": "Sportalm GmbH",
        "image": "Sportalm_fashion_9_7_20_2350ret.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/sportalm/"
    },
    {
        "key": 151,
        "name": "Sportalm GmbH",
        "image": "Sportalm_fashion_9_7_20_0377ret.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/sportalm/"
    },
    {
        "key": 152,
        "name": "Stehmann",
        "image": "FS21_Stehmann_Igor_680_95012_4314_142.jpg",
        "categories": [
            "Womenswear",
            "Pants",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/stehmann/"
    },
    {
        "key": 153,
        "name": "Stehmann",
        "image": "_43A9373.jpg",
        "categories": [
            "Womenswear",
            "Pants",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/stehmann/"
    },
    {
        "key": 154,
        "name": "Stehmann",
        "image": "FS21_Stehmann_Fortuna_701_95031_1831_014.jpg",
        "categories": [
            "Womenswear",
            "Pants",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/stehmann/"
    },
    {
        "key": 155,
        "name": "Stehmann",
        "image": "_43A9286.jpg",
        "categories": [
            "Womenswear",
            "Pants",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/stehmann/"
    },
    {
        "key": 156,
        "name": "Part Two",
        "image": "parttwo_266x400_ispoWall5.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/part-two/"
    },
    {
        "key": 157,
        "name": "Part Two",
        "image": "parttwo_266x400_ispoWall4.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/part-two/"
    },
    {
        "key": 158,
        "name": "Part Two",
        "image": "parttwo_266x400_ispoWall3.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/part-two/"
    },
    {
        "key": 159,
        "name": "Part Two",
        "image": "parttwo_266x400_ispoWall2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/part-two/"
    },
    {
        "key": 160,
        "name": "Simple",
        "image": "Schermafbeelding_2020_07_21_om_17.06.53.png",
        "categories": [
            "Womenswear",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/simple/"
    },
    {
        "key": 161,
        "name": "Simple",
        "image": "",
        "categories": [
            "Womenswear",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/simple/"
    },
    {
        "key": 162,
        "name": "Simple",
        "image": ",",
        "categories": [
            "Womenswear",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/simple/"
    },
    {
        "key": 163,
        "name": "Royal Lounge Intimates",
        "image": "©Leis_D521_FB_0001_edit_sqaure.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 164,
        "name": "Royal Lounge Intimates",
        "image": "©Leis_D521_FB_0004.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 165,
        "name": "Royal Lounge Intimates",
        "image": "©Leis_D521_FB_0010.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 166,
        "name": "Royal Lounge Intimates",
        "image": "©Leis_D521_FB_0005_edit.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 167,
        "name": "Summum",
        "image": "Premium_X_Joor_950x950px_02.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/summum/"
    },
    {
        "key": 168,
        "name": "Summum",
        "image": "Premium_X_Joor_950x950px_05.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/summum/"
    },
    {
        "key": 169,
        "name": "Summum",
        "image": "Premium_X_Joor_950x950px_07.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/summum/"
    },
    {
        "key": 170,
        "name": "Summum",
        "image": "Premium_X_Joor_950x950px_06..jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/summum/"
    },
    {
        "key": 171,
        "name": "SAMOON",
        "image": "SAMOON_Inspo_1.1.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/samoon/"
    },
    {
        "key": 172,
        "name": "SAMOON",
        "image": "SAMOON_Inspo_1.2.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/samoon/"
    },
    {
        "key": 173,
        "name": "SAMOON",
        "image": "SAMOON_Inspo_1.3.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/samoon/"
    },
    {
        "key": 174,
        "name": "SAMOON",
        "image": "SAMOON_Inspo_1.4.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/samoon/"
    },
    {
        "key": 175,
        "name": "STACCATO",
        "image": "600x600px_Campain_Images4.jpg",
        "categories": [
            "Young Fashion",
            "Kids"
        ],
        "url": "https://fashion.cloud/de/dfw20/staccato/"
    },
    {
        "key": 176,
        "name": "STACCATO",
        "image": "600x600px_Campain_Images5.jpg",
        "categories": [
            "Young Fashion",
            "Kids"
        ],
        "url": "https://fashion.cloud/de/dfw20/staccato/"
    },
    {
        "key": 177,
        "name": "STACCATO",
        "image": "600x600px_Campain_Images6.jpg",
        "categories": [
            "Young Fashion",
            "Kids"
        ],
        "url": "https://fashion.cloud/de/dfw20/staccato/"
    },
    {
        "key": 178,
        "name": "STACCATO",
        "image": "600x600px_Campain_Images7.jpg",
        "categories": [
            "Young Fashion",
            "Kids"
        ],
        "url": "https://fashion.cloud/de/dfw20/staccato/"
    },
    {
        "key": 179,
        "name": "Tamaris",
        "image": "1_Tamaris_Inspiration_Wall.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Leather",
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 180,
        "name": "Tamaris",
        "image": "2_Tamaris_Inspiration_Wall.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Leather",
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 181,
        "name": "Tamaris",
        "image": "4_Tamaris_Inspiration_Wall.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Leather",
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 182,
        "name": "Tamaris",
        "image": "5_Tamaris_Inspiration_Wall.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Leather",
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 183,
        "name": "BALI-BALI",
        "image": "fs_21_pure_white.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Green Brand",
            "Young Fashion",
            "Leather"
        ],
        "url": "https://fashion.cloud/en/dfw20/bali-bali/"
    },
    {
        "key": 184,
        "name": "BALI-BALI",
        "image": "adiwerna.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Green Brand",
            "Young Fashion",
            "Leather"
        ],
        "url": "https://fashion.cloud/en/dfw20/bali-bali/"
    },
    {
        "key": 185,
        "name": "BALI-BALI",
        "image": "adiwerna_black.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Green Brand",
            "Young Fashion",
            "Leather"
        ],
        "url": "https://fashion.cloud/en/dfw20/bali-bali/"
    },
    {
        "key": 186,
        "name": "BALI-BALI",
        "image": "metal_05_3.jpg",
        "categories": [
            "Shoes",
            "Accessoires",
            "Green Brand",
            "Young Fashion",
            "Leather"
        ],
        "url": "https://fashion.cloud/en/dfw20/bali-bali/"
    },
    {
        "key": 187,
        "name": "Qubz",
        "image": "KEY_PCS_9.jpg",
        "categories": [
            "Menswear",
            "Newcomer",
            "Activewear & Outerwear",
            "Day & Night Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 188,
        "name": "Qubz",
        "image": "KEY_PCS_2.jpg",
        "categories": [
            "Menswear",
            "Newcomer",
            "Activewear & Outerwear",
            "Day & Night Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 189,
        "name": "Qubz",
        "image": "KEY_PCS_4.jpg",
        "categories": [
            "Menswear",
            "Newcomer",
            "Activewear & Outerwear",
            "Day & Night Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 190,
        "name": "Qubz",
        "image": "KEY_PCS_9.jpg",
        "categories": [
            "Menswear",
            "Newcomer",
            "Activewear & Outerwear",
            "Day & Night Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/qubz/"
    },
    {
        "key": 191,
        "name": "IVKO Woman",
        "image": "IVKO_Woman_Inspirational_Wall_04.jpg",
        "categories": [
            "Womenswear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/ivko-woman/"
    },
    {
        "key": 192,
        "name": "IVKO Woman",
        "image": "IVKO_Woman_Inspirational_Wall_02.jpg",
        "categories": [
            "Womenswear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/ivko-woman/"
    },
    {
        "key": 193,
        "name": "IVKO Woman",
        "image": "IVKO_Woman_Inspirational_Wall_01.jpg",
        "categories": [
            "Womenswear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/ivko-woman/"
    },
    {
        "key": 194,
        "name": "IVKO Woman",
        "image": "IVKO_Woman_Inspirational_Wall_03.jpg",
        "categories": [
            "Womenswear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/ivko-woman/"
    },
    {
        "key": 195,
        "name": "MORE & MORE",
        "image": "2021_FS_PREV_07_1280_A4_72dpi_eciRGBv2.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Denim",
            "Pants",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/more-and-more/"
    },
    {
        "key": 196,
        "name": "MORE & MORE",
        "image": "2021_FS_PREV_05_0973_A4_72dpi_eciRGBv2.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Denim",
            "Pants",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/more-and-more/"
    },
    {
        "key": 197,
        "name": "MORE & MORE",
        "image": "2021_FS_PREV_01_0115_A4_72dpi_eciRGBv2.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Denim",
            "Pants",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/more-and-more/"
    },
    {
        "key": 198,
        "name": "MORE & MORE",
        "image": "2021_FS_PREV_10_1564_A4_72dpi_eciRGBv2.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Denim",
            "Pants",
            "Leather"
        ],
        "url": "https://fashion.cloud/de/dfw20/more-and-more/"
    },
    {
        "key": 199,
        "name": "BALDESSARINI",
        "image": "12034_Baldessarini_400x400_07_1078.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Shoes"
        ],
        "url": "https://fashion.cloud/de/dfw20/baldessarini/"
    },
    {
        "key": 200,
        "name": "BALDESSARINI",
        "image": "12034_Baldessarini_400x400.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Shoes"
        ],
        "url": "https://fashion.cloud/de/dfw20/baldessarini/"
    },
    {
        "key": 201,
        "name": "BALDESSARINI",
        "image": "12034_Baldessarini_400x400_Look09_11984.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Shoes"
        ],
        "url": "https://fashion.cloud/de/dfw20/baldessarini/"
    },
    {
        "key": 202,
        "name": "BALDESSARINI",
        "image": "12034_Baldessarini_400x400_Look_15_0422.jpg",
        "categories": [
            "Menswear",
            "Denim",
            "Premium",
            "Formal Wear",
            "Shoes"
        ],
        "url": "https://fashion.cloud/de/dfw20/baldessarini/"
    },
    {
        "key": 203,
        "name": "CINQUE",
        "image": "CINQUE_Inspiration_Wall_1.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires"
        ],
        "url": ""
    },
    {
        "key": 204,
        "name": "CINQUE",
        "image": "CINQUE_Inspiration_Wall_2.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires"
        ],
        "url": ""
    },
    {
        "key": 205,
        "name": "CINQUE",
        "image": "CINQUE_Inspiration_Wall_3.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires"
        ],
        "url": ""
    },
    {
        "key": 206,
        "name": "CINQUE",
        "image": "CINQUE_Inspiration_Wall_4.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires"
        ],
        "url": ""
    },
    {
        "key": 207,
        "name": "Maria",
        "image": "390303.jpg",
        "categories": [
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 208,
        "name": "Maria",
        "image": "381423.jpg",
        "categories": [
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 209,
        "name": "Maria",
        "image": "381400_392897_2.jpg",
        "categories": [
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 210,
        "name": "Maria",
        "image": "390323_2.jpg",
        "categories": [
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 211,
        "name": "bugatti",
        "image": "bug_0121_pre_stills_be_happy_01_003.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Denim",
            "Pants"
        ],
        "url": ""
    },
    {
        "key": 212,
        "name": "bugatti",
        "image": "bug_0121_pre_stills_behappy_01_110260.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Denim",
            "Pants"
        ],
        "url": ""
    },
    {
        "key": 213,
        "name": "bugatti",
        "image": "bug_0121_pre_stills_flexcity_premium_01_013.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Denim",
            "Pants"
        ],
        "url": ""
    },
    {
        "key": 214,
        "name": "bugatti",
        "image": "bug_0121_pre_graphichorizons_12_37003.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Denim",
            "Pants"
        ],
        "url": ""
    },
    {
        "key": 215,
        "name": "comma",
        "image": "Motive_comma_4_400x400px.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Premium",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma/"
    },
    {
        "key": 216,
        "name": "comma",
        "image": "Motive_comma_5_400x400px.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Premium",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma/"
    },
    {
        "key": 217,
        "name": "comma",
        "image": "Motive_comma_6_400x400px.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Premium",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma/"
    },
    {
        "key": 218,
        "name": "comma",
        "image": "Motive_comma_7_400x400px.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Premium",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma/"
    },
    {
        "key": 219,
        "name": "s.Oliver",
        "image": "RL_.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/de/dfw20/s-oliver/"
    },
    {
        "key": 220,
        "name": "s.Oliver",
        "image": "RL_2.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/de/dfw20/s-oliver/"
    },
    {
        "key": 221,
        "name": "s.Oliver",
        "image": "RL_3.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/de/dfw20/s-oliver/"
    },
    {
        "key": 222,
        "name": "s.Oliver",
        "image": "RL_5.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/de/dfw20/s-oliver/"
    },
    {
        "key": 223,
        "name": "comma casual identity",
        "image": "Motive_CI_1_400x400px.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Young Fashion",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma-casual-identity/"
    },
    {
        "key": 224,
        "name": "comma casual identity",
        "image": "Motive_CI_2_400x400px.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Young Fashion",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma-casual-identity/"
    },
    {
        "key": 225,
        "name": "comma casual identity",
        "image": "Motive_CI_3_400x400px.jpg,",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Young Fashion",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/comma-casual-identity/"
    },
    {
        "key": 226,
        "name": "s.Oliver Black Label",
        "image": "BL_.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium",
            "Menswear"
        ],
        "url": ""
    },
    {
        "key": 227,
        "name": "s.Oliver Black Label",
        "image": "BL_2.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium",
            "Menswear"
        ],
        "url": ""
    },
    {
        "key": 228,
        "name": "s.Oliver Black Label",
        "image": "BL_3.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium",
            "Menswear"
        ],
        "url": ""
    },
    {
        "key": 229,
        "name": "s.Oliver Black Label",
        "image": "BL_4.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium",
            "Menswear"
        ],
        "url": ""
    },
    {
        "key": 230,
        "name": "GERRY WEBER",
        "image": "Inspo_1.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/gerry_weber/"
    },
    {
        "key": 231,
        "name": "GERRY WEBER",
        "image": "Inspo_2.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/gerry_weber/"
    },
    {
        "key": 232,
        "name": "GERRY WEBER",
        "image": "Inspo_3.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/gerry_weber/"
    },
    {
        "key": 233,
        "name": "GERRY WEBER",
        "image": "Inspo_4.jpg",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/gerry_weber/"
    },
    {
        "key": 234,
        "name": "Marlies Dekkers",
        "image": "MD_SS21_Style___Dame_de_Paris___egyptian_ivory_2_zw.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 235,
        "name": "Marlies Dekkers",
        "image": "MD_SS21_Style___Meringue___black_1_zw.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 236,
        "name": "Marlies Dekkers",
        "image": "MD_SS21_Style___Dame_de_Paris___egyptian_ivory_1_CMYK.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 237,
        "name": "Marlies Dekkers",
        "image": "MD_SS21_Style___Siren_of_the_Nile___turquoise.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 238,
        "name": "Tango Shoes",
        "image": "inspiration_wall_1.jpg",
        "categories": [
            "Shoes",
            "Leather",
            "Accessoires",
            "Womenswear",
            "Menswear"
        ],
        "url": "https://fashion.cloud/nl/dfw20/tango-shoes/"
    },
    {
        "key": 239,
        "name": "Tango Shoes",
        "image": "inspiration_wall_2.jpg",
        "categories": [
            "Shoes",
            "Leather",
            "Accessoires",
            "Womenswear",
            "Menswear"
        ],
        "url": "https://fashion.cloud/nl/dfw20/tango-shoes/"
    },
    {
        "key": 240,
        "name": "Tango Shoes",
        "image": "inspiration_wall_3.jpg",
        "categories": [
            "Shoes",
            "Leather",
            "Accessoires",
            "Womenswear",
            "Menswear"
        ],
        "url": "https://fashion.cloud/nl/dfw20/tango-shoes/"
    },
    {
        "key": 241,
        "name": "Tango Shoes",
        "image": "inspiration_wall_4.jpg",
        "categories": [
            "Shoes",
            "Leather",
            "Accessoires",
            "Womenswear",
            "Menswear"
        ],
        "url": "https://fashion.cloud/nl/dfw20/tango-shoes/"
    },
    {
        "key": 242,
        "name": "DKNY",
        "image": "50_YI2919259_037__3_.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Activewear & Outerwear"
        ],
        "url": ""
    },
    {
        "key": 243,
        "name": "DKNY",
        "image": "50_Y2819259_030_DETAIL.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Activewear & Outerwear"
        ],
        "url": ""
    },
    {
        "key": 244,
        "name": "DKNY",
        "image": "DKNY_90_YI2919259_400_FRONT.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Activewear & Outerwear"
        ],
        "url": ""
    },
    {
        "key": 245,
        "name": "DKNY",
        "image": "50_Y2719259_001_SIDE.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Activewear & Outerwear"
        ],
        "url": ""
    },
    {
        "key": 246,
        "name": "Lauren by Ralph Lauren",
        "image": "8141226_680_PINK.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 247,
        "name": "Lauren by Ralph Lauren",
        "image": "8_8131326_100_WHITE_0203.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 248,
        "name": "Lauren by Ralph Lauren",
        "image": "55_819702_650_PKWTS_1244.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 249,
        "name": "Lauren by Ralph Lauren",
        "image": "58_811950_64_GREY_1379.jpg",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 250,
        "name": "Joseph Ribkoff",
        "image": "JosephRibkoff_InspirationalWall1.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants",
            "Premium",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/joseph-ribkoff/"
    },
    {
        "key": 251,
        "name": "Joseph Ribkoff",
        "image": "JosephRibkoff_InspirationalWall2.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants",
            "Premium",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/joseph-ribkoff/"
    },
    {
        "key": 252,
        "name": "Joseph Ribkoff",
        "image": "JosephRibkoff_InspirationalWall3.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants",
            "Premium",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/joseph-ribkoff/"
    },
    {
        "key": 253,
        "name": "Joseph Ribkoff",
        "image": "JosephRibkoff_InspirationalWall4.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants",
            "Premium",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/joseph-ribkoff/"
    },
    {
        "key": 254,
        "name": "ALIFE AND KICKIN",
        "image": "AK_WeAreAlife_1.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Activewear & Outerwear",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/alife-and-kickin/"
    },
    {
        "key": 255,
        "name": "ALIFE AND KICKIN",
        "image": "AK_WeAreAlife_2.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Activewear & Outerwear",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/alife-and-kickin/"
    },
    {
        "key": 256,
        "name": "ALIFE AND KICKIN",
        "image": "AK_WeAreAlife_4.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Activewear & Outerwear",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/alife-and-kickin/"
    },
    {
        "key": 257,
        "name": "ALIFE AND KICKIN",
        "image": "AK_WeAreAlife_5.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Activewear & Outerwear",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/alife-and-kickin/"
    },
    {
        "key": 258,
        "name": "LERROS casual",
        "image": "Artischocke_01.jpg",
        "categories": [
            "Menswear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/lerros/"
    },
    {
        "key": 259,
        "name": "LERROS casual",
        "image": "Key_Outfit_01_Close.jpg",
        "categories": [
            "Menswear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/lerros/"
    },
    {
        "key": 260,
        "name": "LERROS casual",
        "image": "Hosen.jpg",
        "categories": [
            "Menswear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/lerros/"
    },
    {
        "key": 261,
        "name": "LERROS casual",
        "image": "T_shirts.jpg",
        "categories": [
            "Menswear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/lerros/"
    },
    {
        "key": 262,
        "name": "TOM TAILOR Denim",
        "image": "TTD_Look1.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/tom-tailor-denim/"
    },
    {
        "key": 263,
        "name": "TOM TAILOR Denim",
        "image": "TTD_Look2.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/tom-tailor-denim/"
    },
    {
        "key": 264,
        "name": "TOM TAILOR Denim",
        "image": "TTD_Look3.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/tom-tailor-denim/"
    },
    {
        "key": 265,
        "name": "TOM TAILOR Denim",
        "image": "TTD_Look4.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/tom-tailor-denim/"
    },
    {
        "key": 266,
        "name": "gang",
        "image": "inspiration_01.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Premium",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 267,
        "name": "gang",
        "image": "inspiration_03.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Premium",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 268,
        "name": "gang",
        "image": "inspiration_02.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Premium",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 269,
        "name": "gang",
        "image": "inspiration_04.jpg",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Premium",
            "Day & Night Wear"
        ],
        "url": ""
    },
    {
        "key": 270,
        "name": "CALAMAR",
        "image": "calamar_1.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Newcomer"
        ],
        "url": ""
    },
    {
        "key": 271,
        "name": "CALAMAR",
        "image": "calamar_2.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Newcomer"
        ],
        "url": ""
    },
    {
        "key": 272,
        "name": "CALAMAR",
        "image": "calamar_3.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Newcomer"
        ],
        "url": ""
    },
    {
        "key": 273,
        "name": "CALAMAR",
        "image": "calamar_5.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Newcomer"
        ],
        "url": ""
    },
    {
        "key": 274,
        "name": "ROY ROBSON",
        "image": "Slider_Party.jpg",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Shoes",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/roy-robson/"
    },
    {
        "key": 275,
        "name": "ROY ROBSON",
        "image": "Slider_Jersey.jpg",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Shoes",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/roy-robson/"
    },
    {
        "key": 276,
        "name": "ROY ROBSON",
        "image": "Slider_Lite_Suit.jpg,",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Shoes",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/roy-robson/"
    },
    {
        "key": 277,
        "name": "Tepe.MEN",
        "image": "background_visual_henninig_tepe_1000_55.jpg",
        "categories": [
            "Menswear",
            "Premium",
            "Newcomer",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 278,
        "name": "Tepe.MEN",
        "image": "blau_ocean_400_400.jpg",
        "categories": [
            "Menswear",
            "Premium",
            "Newcomer",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 279,
        "name": "Tepe.MEN",
        "image": "nische_400_400.jpg",
        "categories": [
            "Menswear",
            "Premium",
            "Newcomer",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 280,
        "name": "Tepe.MEN",
        "image": "roter_ocean_400_400.jpg",
        "categories": [
            "Menswear",
            "Premium",
            "Newcomer",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 281,
        "name": "Van Gils Fashion",
        "image": "Fashion_Cloud_Inspiration_wall_1.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Formal Wear",
            "Green Brand",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 282,
        "name": "Van Gils Fashion",
        "image": "Fashion_Cloud_Inspiration_wall_2.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Formal Wear",
            "Green Brand",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 283,
        "name": "Van Gils Fashion",
        "image": ",",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Formal Wear",
            "Green Brand",
            "Premium"
        ],
        "url": ""
    },
    {
        "key": 284,
        "name": "Rösch",
        "image": "RÖSCH_inspiration_3_400x400.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 285,
        "name": "Rösch",
        "image": "RÖSCH_inspiration_2_400x400.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 286,
        "name": "Rösch",
        "image": "RÖSCH_inspiration_1_400x400.jpg,",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 287,
        "name": "Féraud Paris",
        "image": "FERAUD_FS21_07010_campaign_400x400.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Premium",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 288,
        "name": "Féraud Paris",
        "image": "FERAUD_FS21_06740_inspiration_400x400.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Premium",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 289,
        "name": "Féraud Paris",
        "image": "FERAUD_FS21_07287_inspiration_400x400.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Premium",
            "Green Brand"
        ],
        "url": ""
    },
    {
        "key": 290,
        "name": "Féraud Paris",
        "image": "FERAUD_FS21_06634_inspiration_400x400.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Premium",
            "Green Brand"
        ],
        "url": ""
    }
]


let categoriesSet = new Set()
inspirationInput.forEach(i => {
    i.categories.forEach(cat => {
        categoriesSet.add(cat)
    })
})

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(inspirationInput)

const categories = Array.from(categoriesSet) as string[]

categories.sort()

export { categories, inspirationInput }
