import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './inspirationWall.css'
import { CategoryFilter } from '../categoryFilter'
import { InspirationContext } from './inspirationContext/InspirationContext'
//import { categories as categoriesInput, inspirationInput } from './inspirationInput'
const imagePath =
    'https://digital-fashion-week.s3.eu-central-1.amazonaws.com/assets/inspirationWall'

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

export function InspirationWall() {
    const { inspirationData, categories } = useContext(InspirationContext)
    const [isCategoryFilterActive, setIsCategoryFilterActive] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState(initializeCategoryState(categories))
    return (
        <div className='brandSearch'>
            <CategoryFilter
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                categories={categories}
                isCategoryFilterActive={isCategoryFilterActive}
                setIsCategoryFilterActive={setIsCategoryFilterActive}
            />
            <div className='divider'></div>
            <InspirationwallItems
                categoryFilter={categoryFilter}
                inspirationInput={inspirationData}
                isCategoryFilterActive={isCategoryFilterActive}
            />
        </div>
    )
}

interface IInspirationItem {
    key: number
    name: string
    image: string
    url: string
    categories: string[]
}

interface BrandListProps {
    inspirationInput: IInspirationItem[]
    categoryFilter: any
    isCategoryFilterActive: boolean
}

function InspirationwallItems(props: BrandListProps) {
    const { inspirationInput, categoryFilter, isCategoryFilterActive } = props

    let brands = inspirationInput
    if (isCategoryFilterActive) {
        brands = filterBrandsByCategory(inspirationInput, categoryFilter)
    }

    return (
        <div className='imageList'>
            <AnimatePresence>
                {brands.map((b) => {
                    return (
                        <ImageCard
                            name={b.name}
                            categories={b.categories}
                            image={b.image}
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
    brands: IInspirationItem[],
    categoryFilter: ICategoryFilter
): IInspirationItem[] => {
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

interface imageCardProps {
    name: string
    categories: string[]
    image: string
    url: string
}

const spring = {
    type: 'spring',
    damping: 120,
    stiffness: 1500,
    mass: 0.5,
}

function ImageCard(props: imageCardProps) {
    const { name, categories, image, url } = props
    return (
        <a href={url} className='inspiration'>
            <motion.div
                layoutTransition={spring}
                key={name}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
            >
                <div className='imageContainer'>
                    <img src={`${imagePath}/${image}`} />
                    <div className='overlay'>{name}</div>
                </div>
            </motion.div>
        </a>
    )
}
