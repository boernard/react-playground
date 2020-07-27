import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FilterView.css'
import {
    dummyBrandList as dummyBrandListInput,
    categories as categoriesInput,
    IBrandItem,
} from './brandInput'
import CloseIcon from '../../../assets/Close.svg'
import { CategoryFilter } from '../categoryFilter'

const logoPath = 'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/brand-logos'

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

export function BrandSearch() {
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
}

const spring = {
    type: 'spring',
    damping: 120,
    stiffness: 1500,
    mass: 0.5,
}

function BrandCard(props: BrandCardProps) {
    const { name, categories, logo, url } = props
    return (
        <a href={url}>
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
        </a>
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
                placeholder='Suche nach Marken, Kategorien, Segmenten, ...'
            ></input>
            <div className='closeIcon' onClick={(ev) => handleOnClick(ev)}>
                <CloseIcon width='15px' height='15px' style={{ fill: '#93b0b9' }} />
            </div>
        </div>
    )
}
