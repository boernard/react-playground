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

const brandList: IBrandItem[] = [
    {
        "key": 1,
        "name": "NÜ Denmark",
        "logo": "logo_250_PX.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/nue-denmark/"
    },
    {
        "key": 2,
        "name": "MOS MOSH",
        "logo": "logo_2016_kvadrat.png",
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
        "key": 3,
        "name": "Raffaello Rossi",
        "logo": "RR_Logo_B_coolgrey_kleine_Version.png",
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
        "key": 4,
        "name": "LANIUS",
        "logo": "lanius_logo_cotton.png",
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
        "key": 5,
        "name": "GARCIA",
        "logo": "GARCIA___Logo___Horizontal_white.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/garcia/"
    },
    {
        "key": 6,
        "name": "Fuchs Schmitt",
        "logo": "Logo_250px.png",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/fuchs-schmitt/"
    },
    {
        "key": 7,
        "name": "Lipsy London",
        "logo": "lipsy_Master_logo_full.png",
        "categories": [
            "Womenswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/lipsy-london/"
    },
    {
        "key": 8,
        "name": "CG-Club of Gents",
        "logo": "Logo.jpg.png",
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
        "key": 9,
        "name": "William Lockie Knitwear Nederland",
        "logo": "Lockies_Logo_EPS_Raw_version_Logo.png",
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
        "key": 10,
        "name": "STORY OF MINE",
        "logo": "SOM.png",
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
        "key": 11,
        "name": "Club of Comfort",
        "logo": "COC_LOGO_FINAL_weiss_CMYK.png",
        "categories": [
            "Menswear",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/club-of-comfort/"
    },
    {
        "key": 12,
        "name": "Carl Gross",
        "logo": "Logo_claim_550.png",
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
        "key": 13,
        "name": "CHIEMSEE",
        "logo": "CHI_logo_png.png",
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
        "key": 14,
        "name": "OKLAHOMA",
        "logo": "OKL_PD_J_logo.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Denim",
            "Pants",
            "Green Brand"
        ],
        "url": " https://fashion.cloud/de/dfw20/oklahoma/ "
    },
    {
        "key": 15,
        "name": "Goosecraft",
        "logo": "logo_wit.png",
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
        "key": 16,
        "name": "Ledûb",
        "logo": "ledub.png",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/ledub/"
    },
    {
        "key": 17,
        "name": "Circle of Trust",
        "logo": "circle_womens_logo_new_kopie.png",
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
        "key": 18,
        "name": "Freebird",
        "logo": "Freebird_logo.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/freebird/"
    },
    {
        "key": 19,
        "name": "Fynch-Hatton",
        "logo": "FH_Logo_black.jpg",
        "categories": [
            "Menswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/fynch-hatton/"
    },
    {
        "key": 20,
        "name": "Kyra&Ko",
        "logo": "LOGO_KYRA_KO_PINK.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/kyra-ko/"
    },
    {
        "key": 21,
        "name": "OLYMP Signature",
        "logo": "OLYMP_SIGNATURE_groesser_80mm_breit_schwarz.png",
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
        "key": 22,
        "name": "Nina von C. + like it!",
        "logo": "NINAvonC_Logo.png",
        "categories": [
            "Day & Night Wear",
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/nina-von-c/"
    },
    {
        "key": 23,
        "name": "like it!",
        "logo": "likeit_Logo.png",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/de/dfw20/like-it/"
    },
    {
        "key": 25,
        "name": "Betty Barclay",
        "logo": "BB_Logo_18_medium_250px.png",
        "categories": [
            "Womenswear",
            "Pants",
            "Accessoires",
            "Denim"
        ],
        "url": "https://fashion.cloud/de/dfw20/betty-barclay/"
    },
    {
        "key": 26,
        "name": "Wiederbelebt",
        "logo": "Logo_01.png",
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
        "key": 27,
        "name": "Pierre Cardin",
        "logo": "Schriftzug_PierreCardin_neg.png",
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
        "key": 28,
        "name": "Bellice Evening",
        "logo": "Logo_BelliceEveningwear.png",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/bellice-evening/"
    },
    {
        "key": 29,
        "name": "Star Night  &  Star Night Plus",
        "logo": "Logo_Star_Night___Star_Night_Plus._2.png",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Young Fashion",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/star-night/"
    },
    {
        "key": 30,
        "name": "BARTS",
        "logo": "logo.png",
        "categories": [
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/barts/"
    },
    {
        "key": 31,
        "name": "TAIFUN",
        "logo": "TAIFUN_RZ_neg.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/taifun/"
    },
    {
        "key": 32,
        "name": "No Excess",
        "logo": "LOGO_NO_EXCESS_with_additive_WHITE_TRANS.png",
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
        "key": 33,
        "name": "St. Barth",
        "logo": "Ontwerp_zonder_titel__3_.jpg",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/st-barth/"
    },
    {
        "key": 34,
        "name": "No One Else",
        "logo": "Ontwerp_zonder_titel.png",
        "categories": [
            "Womenswear",
            "Accessoires",
            "Formal Wear",
            "Pants"
        ],
        "url": " https://fashion.cloud/de/dfw20/no-one-else/"
    },
    {
        "key": 35,
        "name": "Euretco Fashion",
        "logo": "EKFASHION_250px.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids"
        ],
        "url": "https://fashion.cloud/nl/dfw20/euretco-fashion/"
    },
    {
        "key": 36,
        "name": "EK Fashion",
        "logo": "Ontwerp_zonder_titel.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Kids",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/de/dfw20/ek-fashion/"
    },
    {
        "key": 37,
        "name": "Soaked in Luxury",
        "logo": "SIL_logo_black_250x70px.png",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/soaked-in-luxury/"
    },
    {
        "key": 38,
        "name": "Tramontana",
        "logo": "Naamlogo___slogan.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/tramontana/"
    },
    {
        "key": 39,
        "name": "A fish named Fred",
        "logo": "logo_color.png",
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
        "key": 40,
        "name": "Vanzetti",
        "logo": "vanzetti.png",
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
        "key": 41,
        "name": "Babyface",
        "logo": "Ontwerp_zonder_titel__1_.png",
        "categories": [
            "Young Fashion",
            "Kids",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/babyface/"
    },
    {
        "key": 42,
        "name": "True Religion Brand Jeans Germany",
        "logo": "TRBJ_Logo___Kopie.jpg",
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
        "key": 43,
        "name": "Backstage",
        "logo": "backstage_logo_schwarz.png",
        "categories": [
            "Womenswear",
            "Premium",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/backstage/"
    },
    {
        "key": 44,
        "name": "Olsen",
        "logo": "Olsen_Logo.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/olsen/"
    },
    {
        "key": 45,
        "name": "b.belt",
        "logo": "b.belt_Logo.png",
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
        "key": 46,
        "name": "Digel AG",
        "logo": "digel.png",
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
        "key": 47,
        "name": "Sportalm GmbH",
        "logo": "Logo_300x120px.png",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/sportalm/"
    },
    {
        "key": 48,
        "name": "Stehmann",
        "logo": "Stehmann_PassionForPants.jpg",
        "categories": [
            "Womenswear",
            "Pants",
            "Denim"
        ],
        "url": "https://fashion.cloud/en/dfw20/stehmann/"
    },
    {
        "key": 49,
        "name": "Part Two",
        "logo": "PT_Logo_Hvid_Est86.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/part-two/"
    },
    {
        "key": 50,
        "name": "Simple",
        "logo": "SIMPLE_NEW_logo.png",
        "categories": [
            "Womenswear",
            "Premium",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/simple/"
    },
    {
        "key": 51,
        "name": "Royal Lounge Intimates",
        "logo": "RLI_circle_logo_ohne.png",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/royal-lounge-intimates/"
    },
    {
        "key": 52,
        "name": "Summum",
        "logo": "summum.png",
        "categories": [
            "Womenswear",
            "Denim",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/summum/"
    },
    {
        "key": 53,
        "name": "SAMOON",
        "logo": "samoon.png",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/samoon/"
    },
    {
        "key": 54,
        "name": "MARC O’POLO",
        "logo": "MOP_Logo.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Green Brand",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/marc-o-polo/"
    },
    {
        "key": 55,
        "name": "MARC O’POLO DENIM",
        "logo": "Logo_DENIM.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion",
            "Denim",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/en/dfw20/marc-o-polo-denim/"
    },
    {
        "key": 56,
        "name": "STACCATO",
        "logo": "1_STC_Logo.png",
        "categories": [
            "Young Fashion",
            "Kids"
        ],
        "url": "https://fashion.cloud/de/dfw20/staccato/"
    },
    {
        "key": 57,
        "name": "Tamaris",
        "logo": "Tamaris_Logo_250px.png",
        "categories": [
            "Shoes",
            "Accessoires",
            "Leather",
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/tamaris/"
    },
    {
        "key": 58,
        "name": "BALI-BALI",
        "logo": "logo_bali_bali.png",
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
        "key": 59,
        "name": "Qubz",
        "logo": "Logo_QUBZ_kit.png",
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
        "key": 60,
        "name": "IVKO Woman",
        "logo": "LOGO_ivko_white_250px.png",
        "categories": [
            "Womenswear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/ivko-woman/"
    },
    {
        "key": 61,
        "name": "Dstrezzed",
        "logo": "logo_250px_digital_fashion_week.png",
        "categories": [
            "Menswear",
            "Denim",
            "Pants",
            "Accessoires",
            "Formal Wear"
        ],
        "url": "https://fashion.cloud/en/dfw20/dstrezzed/"
    },
    {
        "key": 62,
        "name": "Marco Manzini | Born With Appetite",
        "logo": "Ontwerp_zonder_titel__2_.png",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Formal Wear",
            "Pants"
        ],
        "url": "https://fashion.cloud/de/dfw20/marco-manzini-born-with-appetite/"
    },
    {
        "key": 63,
        "name": "MORE & MORE",
        "logo": "MOREandMORE_Logo.png",
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
        "key": 65,
        "name": "BALDESSARINI",
        "logo": "Logo_Baldessarini_250px.png",
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
        "key": 66,
        "name": "CINQUE",
        "logo": "logo_white_white_CMYK.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Premium",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/de/dfw20/cinque/"
    },
    {
        "key": 67,
        "name": "Maria",
        "logo": "PermeGattina.jpg",
        "categories": [
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/de/dfw20/gattina/"
    },
    {
        "key": 68,
        "name": "bugatti",
        "logo": "bug_0000_gld_logo_200x200px.jpg",
        "categories": [
            "Womenswear",
            "Menswear",
            "Activewear & Outerwear",
            "Denim",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/bugatti"
    },
    {
        "key": 69,
        "name": "comma",
        "logo": "comma_schwarz_4c.png",
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
        "key": 70,
        "name": "s.Oliver",
        "logo": "sOliver_RGB.png",
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
        "key": 71,
        "name": "comma casual identity",
        "logo": "CI_schwarz_4c.png",
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
        "key": 72,
        "name": "s.Oliver Black Label",
        "logo": "s.Oliver_cmyk_white.png",
        "categories": [
            "Womenswear",
            "Formal Wear",
            "Premium",
            "Menswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/s-oliver-black-label/"
    },
    {
        "key": 73,
        "name": "GERRY WEBER",
        "logo": "gerry_weber.png",
        "categories": [
            "Womenswear",
            "Premium"
        ],
        "url": "https://fashion.cloud/de/dfw20/gerry_weber/"
    },
    {
        "key": 74,
        "name": "Marlies Dekkers",
        "logo": "MD.jpg",
        "categories": [
            "Womenswear",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/de/dfw20/marlies-dekkers/"
    },
    {
        "key": 75,
        "name": "Tango Shoes",
        "logo": "tango_logo_2019.png",
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
        "key": 76,
        "name": "DKNY",
        "logo": "DKNY_Logo_groß.jpg",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Activewear & Outerwear"
        ],
        "url": "https://fashion.cloud/de/dfw20/dkny/"
    },
    {
        "key": 77,
        "name": "Lauren by Ralph Lauren",
        "logo": "Lauren.png",
        "categories": [
            "Womenswear",
            "Activewear & Outerwear",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/de/dfw20/lauren-by-ralph-lauren/"
    },
    {
        "key": 78,
        "name": "Joseph Ribkoff",
        "logo": "JosephRibkoff_Logo_Black.png",
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
        "key": 79,
        "name": "ALIFE AND KICKIN",
        "logo": "ALIFE_AND_KICKIN_square_black.png",
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
        "key": 80,
        "name": "LERROS casual",
        "logo": "Wappen_complete_black.png",
        "categories": [
            "Menswear",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/lerros/"
    },
    {
        "key": 81,
        "name": "TOM TAILOR",
        "logo": "tom_tailor.png",
        "categories": [
            "Menswear",
            "Womenswear"
        ],
        "url": "https://fashion.cloud/en/dfw20/tom-tailor/"
    },
    {
        "key": 82,
        "name": "TOM TAILOR Denim",
        "logo": "tom_tailor_denim.png",
        "categories": [
            "Womenswear",
            "Menswear",
            "Young Fashion"
        ],
        "url": "https://fashion.cloud/en/dfw20/tom-tailor-denim/"
    },
    {
        "key": 83,
        "name": "JOY Sportswear",
        "logo": "joy_logo_rgb.png",
        "categories": [
            "Womenswear",
            "Menswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/joy-sportswear/"
    },
    {
        "key": 84,
        "name": "gang",
        "logo": "GANG_LOGO_SCRIPT_TM.png",
        "categories": [
            "Womenswear",
            "Denim",
            "Pants",
            "Premium",
            "Day & Night Wear"
        ],
        "url": "https://fashion.cloud/de/dfw20/gang/"
    },
    {
        "key": 85,
        "name": "CALAMAR",
        "logo": "CALAMAR_Logo_SW.png",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Newcomer"
        ],
        "url": "https://fashion.cloud/de/dfw20/calamar/"
    },
    {
        "key": 86,
        "name": "ROY ROBSON",
        "logo": "Logo_White_CMYK.png",
        "categories": [
            "Menswear",
            "Formal Wear",
            "Premium",
            "Shoes",
            "Pants"
        ],
        "url": "https://fashion.cloud/en/dfw20/roy-robson/"
    },
    {
        "key": 87,
        "name": "Tepe.MEN",
        "logo": "Bildschirmfoto_2015_02_23_um_17.43.56.png",
        "categories": [
            "Menswear",
            "Premium",
            "Newcomer",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/tepe-men/"
    },
    {
        "key": 88,
        "name": "Van Gils Fashion",
        "logo": "Van_Gils_Logo_white.png",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Formal Wear",
            "Green Brand",
            "Premium"
        ],
        "url": "https://fashion.cloud/en/dfw20/van-gils/"
    },
    {
        "key": 89,
        "name": "Rösch",
        "logo": "roesch_logo.png",
        "categories": [
            "Day & Night Wear",
            "Womenswear",
            "Green Brand"
        ],
        "url": " https://fashion.cloud/de/dfw20/roesch/"
    },
    {
        "key": 90,
        "name": "Féraud Paris",
        "logo": "feraud_logo.png",
        "categories": [
            "Womenswear",
            "Day & Night Wear",
            "Premium",
            "Green Brand"
        ],
        "url": "https://fashion.cloud/de/dfw20/feraud/"
    },
    {
        "key": 91,
        "name": "State of Art",
        "logo": "State_of_Art_Logo.jpg",
        "categories": [
            "Menswear",
            "Pants",
            "Activewear & Outerwear",
            "Premium",
            "Accessoires"
        ],
        "url": "https://fashion.cloud/en/dfw20/state-of-art/"
    },
    {
        "key": 92,
        "name": "Bluefields",
        "logo": "logo_Bluefields_correct_01.jpg",
        "categories": [
            "Menswear",
            "Activewear & Outerwear",
            "Pants"
        ],
        "url": "https://fashion.cloud/nl/dfw20/bluefields/"
    },
    {
        "key": 93,
        "name": "Fashion Cloud",
        "logo": "fashioncloud.jpg",
        "categories": [
            "Newcomer"
        ],
        "url": "https://fashion.cloud/en/dfw20/fashion-cloud/"
    },
    {
        "key": 94,
        "name": "Betty & Co",
        "logo": "betty_co.jpg",
        "categories": [
            "Womenswear"
        ],
        "url": "https://fashion.cloud/de/dfw20/betty-co/"
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

export { categorizedBrandList, categories, dummyBrandList }
