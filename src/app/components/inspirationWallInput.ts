interface IImage {
    file: string
    tags: string[]
}

const images: IImage[] = [
    {
        file: '1.jpg',
        tags: ['Menswear', 'Formal Wear'],
    },
    {
        file: '2.jpg',
        tags: ['Menswear', 'Formal Wear'],
    },
    {
        file: '3.jpg',
        tags: ['Young Fashion', 'Menswear'],
    },
    {
        file: '4.jpg',
        tags: ['Menswear', 'Young Fashion'],
    },
    {
        file: '5.jpg',
        tags: ['Menswear', 'Young Fashion'],
    },
    {
        file: '6.jpg',
        tags: ['Womenswear'],
    },
    {
        file: '7.jpg',
        tags: ['Womenswear', 'Young fashion'],
    },
    {
        file: '8.jpg',
        tags: ['Womenswear', 'Young fashion'],
    },
    {
        file: '9.jpg',
        tags: ['Womenswear', 'Young fashion'],
    },
    {
        file: '10.jpg',
        tags: ['Womenswear', 'Young fashion'],
    },
    {
        file: '11.jpg',
        tags: ['Womenswear'],
    },
    {
        file: '12.jpg',
        tags: ['Womenswear', 'Bags'],
    },
    {
        file: '13.jpg',
        tags: ['Womenswear', 'Bags'],
    },
    {
        file: '14.jpg',
        tags: ['Womenswear', 'Activewear'],
    },
    {
        file: '15.jpg',
        tags: ['Womenswear', 'Activewear'],
    },
    {
        file: '16.jpg',
        tags: ['Womenswear', 'Activewear'],
    },
    {
        file: '17.jpg',
        tags: ['Menswear', 'Formal Wear'],
    },
]

let tagSet = new Set()

images.forEach(i => {
    i.tags.forEach(tag => {
        tagSet.add(tag)
    })
})
const tags: string[] = Array.from(tagSet) as string[]

export { images, tags }
