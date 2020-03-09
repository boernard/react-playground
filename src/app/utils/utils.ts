import { array } from "prop-types"


export const utils = {
    // Sum an array
    sum: (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min: number, max: number): number => min + Math.floor(Math.random() * (max - min + 1))
};