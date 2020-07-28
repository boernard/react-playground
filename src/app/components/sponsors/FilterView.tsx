import * as React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './FilterView.css'
import {
    dummyBrandList as dummyBrandListInput,
    categories as categoriesInput,
    IBrandItem,
} from './sponsorInput'
import CloseIcon from '../../../assets/Close.svg'
import { CategoryFilter } from '../categoryFilter'
import * as qs from 'query-string'

const logoPath = 'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/sponsor-logos'
const backendUrl =
    'https://tp1lwwnt8j.execute-api.eu-central-1.amazonaws.com/development/agenda/record'

interface ISearchBrandItem extends IBrandItem {
    searchField: string
}

const normalizeString = (str: string) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f,\.\-\:;]/g, '')
        .toLowerCase()
}

interface ICategoryFilter {
    [key: string]: boolean
}

const initializeCategoryState = (categories): ICategoryFilter => {
    let filters = {}
    categories.forEach((i) => {
        filters[i] = false
    })
    return filters
}

const searchableBrandList: ISearchBrandItem[] = dummyBrandListInput.map((i) => {
    return { ...i, searchField: normalizeString(i.name) }
})

export function Sponsors() {
    const [searchInput, setSearchInput] = useState('')
    const [isCategoryFilterActive, setIsCategoryFilterActive] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState(initializeCategoryState(categoriesInput))
    document.title = 'Brand Search'
    return (
        <div className='brandSearch'>
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
            <CategoryFilter
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                categories={categoriesInput}
                isCategoryFilterActive={isCategoryFilterActive}
                setIsCategoryFilterActive={setIsCategoryFilterActive}
            />
            <div className='divider'></div>
            <BrandList
                searchInput={searchInput}
                categoryFilter={categoryFilter}
                searchableBrandList={searchableBrandList}
                isCategoryFilterActive={isCategoryFilterActive}
            />
        </div>
    )
}

interface BrandListProps {
    searchInput: string
    searchableBrandList: ISearchBrandItem[]
    categoryFilter: any
    isCategoryFilterActive: boolean
}

function BrandList(props: BrandListProps) {
    const { searchInput, searchableBrandList, categoryFilter, isCategoryFilterActive } = props
    const { search } = useLocation()
    const userId = qs.parse(search).eventmobi_user as string

    let brands = searchableBrandList
    if (isCategoryFilterActive) {
        brands = filterBrandsByCategory(searchableBrandList, categoryFilter)
    }
    if (searchInput.length > 0) {
        brands = searchBrandList(brands, searchInput)
    }

    return (
        <div className='brandList'>
            <AnimatePresence>
                {brands.map((b) => {
                    return (
                        <BrandCard
                            name={b.name}
                            categories={b.categories}
                            logo={b.logo}
                            url={b.url}
                            key={b.key}
                            userId={userId}
                        />
                    )
                })}
            </AnimatePresence>
        </div>
    )
}

const filterBrandsByCategory = (
    brands: ISearchBrandItem[],
    categoryFilter: ICategoryFilter
): ISearchBrandItem[] => {
    function hasOverlap(arr1, arr2) {
        for (let i = 0; i <= arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                return true
            }
        }
        return false
    }

    function getActiveCategories(categoryFilter: ICategoryFilter) {
        let activeCategories = []
        Object.keys(categoryFilter).forEach((c) => {
            if (categoryFilter[c]) {
                activeCategories.push(c)
            }
        })
        return activeCategories
    }

    const activeCategories = getActiveCategories(categoryFilter)

    return brands.filter((brand) => hasOverlap(brand.categories, activeCategories))
}

const searchBrandList = (
    searchableBrandList: ISearchBrandItem[],
    searchInput: string
): ISearchBrandItem[] => {
    if (searchInput.length > 2) {
        const normalizedSearchInput = normalizeString(searchInput)
        const filteredBrandArray = searchableBrandList.filter((i) => {
            return i.searchField.indexOf(normalizedSearchInput) >= 0
        })
        return filteredBrandArray
    } else {
        return searchableBrandList
    }
}

interface BrandCardProps {
    name: string
    categories: string[]
    logo: string
    url: string
    userId: string
}

const spring = {
    type: 'spring',
    damping: 120,
    stiffness: 1500,
    mass: 0.5,
}

function BrandCard(props: BrandCardProps) {
    const { name, categories, logo, url, userId } = props

    const handleClick = async (evt) => {
        evt.preventDefault()
        await fetch(backendUrl, {
            method: 'POST',
            body: JSON.stringify({ userId, brandUrl: url, source: 'sponsors' }),
        })
        window.location.href = url
    }
    return (
        <div onClick={handleClick}>
            <motion.div
                layoutTransition={spring}
                className='brandCard'
                key={name}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
            >
                <div className='logoContainer'>
                    <div className='logo'>
                        <img src={`${logoPath}/${logo}`} />
                    </div>
                </div>
                <div className='brandInfo'>
                    <h2>{name}</h2>
                    <p className='categories'>{categories.join(', ')}</p>
                </div>
            </motion.div>
        </div>
    )
}

function SearchInput(props) {
    const { searchInput, setSearchInput } = props
    const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(ev.target.value)
    }

    const handleOnClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ev.preventDefault()
        setSearchInput('')
    }

    return (
        <div className='searchInput'>
            <input
                type='text'
                className='searchInputField'
                onChange={(ev) => handleOnChange(ev)}
                value={searchInput}
                placeholder='Suche nach Name / Search by name'
            ></input>
            <div className='closeIcon' onClick={(ev) => handleOnClick(ev)}>
                <CloseIcon width='15px' height='15px' style={{ fill: '#93b0b9' }} />
            </div>
        </div>
    )
}
