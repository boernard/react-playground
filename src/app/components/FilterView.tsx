import * as React from 'react'
import { useState, useEffect } from 'react'
import './FilterView.css'
import {
    categorizedBrandList as categorizedBrandListInput,
    dummyBrandList as dummyBrandListInput,
    categories as categoriesInput,
    IBrandItem,
    ICategorizedBrandList,
} from './brandInput'
import CloseIcon from '../../assets/Close.svg'
import { CategoryFilter } from './categoryFilter'

const logoPath = './assets'

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

const searchBrandList: ISearchBrandItem[] = dummyBrandListInput.map((i) => {
    return { ...i, searchField: normalizeString([i.name, i.keywords, i.description].join(' ')) }
})

export function BrandSearch() {
    const [searchInput, setSearchInput] = useState('')
    const [isCategoryFilterActive, setIsCategoryFilterActive] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState(initializeCategoryState(categoriesInput))
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
                searchBrandList={searchBrandList}
                isCategoryFilterActive={isCategoryFilterActive}
                categorizedBrandList={categorizedBrandListInput}
            />
        </div>
    )
}

interface BrandListProps {
    searchInput: string
    searchBrandList: ISearchBrandItem[]
    categoryFilter: any
    isCategoryFilterActive: boolean
    categorizedBrandList: ICategorizedBrandList
}

export function BrandList(props: BrandListProps) {
    const {
        searchInput,
        searchBrandList,
        categorizedBrandList,
        categoryFilter,
        isCategoryFilterActive,
    } = props
    if (searchInput) {
        return <SearchedBrandList searchInput={searchInput} searchList={searchBrandList} />
    } else {
        return (
            <CategorizedBrandList
                categorizedBrandList={categorizedBrandList}
                categoryFilter={categoryFilter}
                isCategoryFilterActive={isCategoryFilterActive}
            />
        )
    }
}

interface SearchedBrandListProps {
    searchInput: string
    searchList: ISearchBrandItem[]
}

export function SearchedBrandList(props: SearchedBrandListProps) {
    const { searchInput, searchList } = props
    return (
        <div className='brandList'>
            {filterBrandList(searchList, searchInput).map((i) => (
                <BrandCard
                    name={i.name}
                    categories={i.categories}
                    logo={i.logo}
                    key={i.key}
                    url={i.url}
                />
            ))}
        </div>
    )
}

export function CategorizedBrandList(props) {
    const { categorizedBrandList, categoryFilter, isCategoryFilterActive } = props
    const categories = Object.keys(categorizedBrandList)
    if (isCategoryFilterActive) {
        return (
            <div className='brandList'>
                {categories.map((c) => {
                    if (categoryFilter[c]) {
                        return <Category categoryName={c} brands={categorizedBrandList[c]} />
                    }
                })}
            </div>
        )
    } else {
        return (
            <div className='brandList'>
                {categories.map((c) => {
                    return <Category categoryName={c} brands={categorizedBrandList[c]} />
                })}
            </div>
        )
    }
}

interface CategoryProps {
    brands: IBrandItem[]
    categoryName: string
}

export function Category(props: CategoryProps) {
    const { brands, categoryName } = props
    return (
        <div className='category'>
            <div className='categoryHeader'>
                <h2>{categoryName}</h2>
            </div>
            {brands.map((b) => {
                return (
                    <BrandCard name={b.name} categories={b.categories} logo={b.logo} url={b.url} />
                )
            })}
        </div>
    )
}

const filterBrandList = (
    brandArray: ISearchBrandItem[],
    searchInput: string
): ISearchBrandItem[] => {
    if (searchInput.length > 2) {
        const normalizedSearchInput = normalizeString(searchInput)
        const filteredBrandArray = brandArray.filter((i) => {
            return i.searchField.indexOf(normalizedSearchInput) >= 0
        })
        return filteredBrandArray
    } else {
        return brandArray
    }
}

interface BrandCardProps {
    name: string
    categories: string[]
    logo: string
    url: string
}

export function BrandCard(props: BrandCardProps) {
    const { name, categories, logo, url } = props
    return (
        <a href={url}>
            <div className='brandCard'>
                <div className='logo'>
                    <img src={`${logoPath}/${logo}`} />
                </div>
                <div className='brandInfo'>
                    <h2>{name}</h2>
                    <p className='categories'>{categories.join(', ')}</p>
                </div>
            </div>
        </a>
    )
}

export function SearchInput(props) {
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
