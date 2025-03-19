export interface MenuItem {
    name: string
    url: string
    subMenu: MenuItem[]
}

export interface BreadcrumbItem {
    title: string
    url: string
    parent?: BreadcrumbItem
}

export interface BlogCategory {
    name: string
    value: string
    total: number
}

export interface BlogCategoryResponse {
    slug: string
    total: number
}

export interface Blog {
    title: string
    slug: string
    readTime: string
    author: Author
    reaction: {
        like: number
        heart: number
        interesting: number
        surprise: number
        boring: number
        angry: number
    }
    content: string
    createdAt: string
    category: string
    cover?: string
}

export interface Author {
    name: string
    avatar?: string
}
