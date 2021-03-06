import * as React from 'react'
import { useState, useEffect } from 'react'
import './CategoryFilter.css'
import CloseIcon from '../../../assets/Close.svg'

interface ICategoryFilter {
    [key: string]: boolean
}

interface CategoryFilterProps {
    categoryFilter: any
    setCategoryFilter: React.Dispatch<React.SetStateAction<ICategoryFilter>>
    categories: string[]
    isCategoryFilterActive: boolean
    setIsCategoryFilterActive: React.Dispatch<React.SetStateAction<Boolean>>
}

function areFiltersActive(categoryFilter) {
    const categories = Object.keys(categoryFilter)
    let isActive = false
    categories.forEach((c) => {
        if (categoryFilter[c]) {
            isActive = true
        }
    })
    return isActive
}

export function CategoryFilter(props: CategoryFilterProps) {
    const {
        categoryFilter,
        setCategoryFilter,
        categories,
        isCategoryFilterActive,
        setIsCategoryFilterActive,
    } = props

    useEffect(() => {
        setIsCategoryFilterActive(areFiltersActive(categoryFilter))
    }, [categoryFilter])

    return (
        <div className='filterContainer'>
            <div className='filterButtons'>
                {categories.map((c) => (
                    <CategoryToggle
                        categoryName={c}
                        isActive={categoryFilter[c]}
                        setCategoryFilter={setCategoryFilter}
                        categoryFilter={categoryFilter}
                    />
                ))}
            </div>
        </div>
    )
}

export function CategoryToggle(props) {
    const { categoryName, isActive, setCategoryFilter, categoryFilter } = props
    const handleClick = (ev) => {
        setCategoryFilter({ ...categoryFilter, [categoryName]: !isActive })
    }
    const iconClassName = `iconPlaceholder ${isActive ? 'visible' : 'hidden'}`
    const className = `categoryToggle ${isActive ? 'active' : ''}`
    return (
        <div className={className} onClick={handleClick}>
            <div className='buttonText'>{categoryName}</div>
            <div className='closeIcon'>
                <div className={iconClassName}>
                    <CloseIcon width='15px' height='15px' style={{ fill: '#93b0b9' }} />
                </div>
            </div>
        </div>
    )
}
