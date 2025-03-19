import BlogCategories from "../../components/blogs/blog-categories"
import BlogHeader from "../../components/blogs/blogs-header"
import BlogsHeaderImages from "../../components/blogs/blogs-header-images"
import BlogsList from "../../components/blogs/blogs-list"
import Pagination from "../../components/pagination"
import { CATEGORIES_MAP, PATHNAMES } from "../../config"
import { getBlogCategories, getBlogs } from "../../libs/get-blogs"
import { BlogCategory, BlogCategoryResponse } from "../../types/types"

interface Props {
    searchParams: Promise<{ [key: string]: string | undefined }>
}
export default async function Blogs({ searchParams }: Props) {
    const query = await searchParams
    const blogCategories = await getBlogCategories()

    const mappedBlogCategories: BlogCategory[] = blogCategories.map(
        (category: BlogCategoryResponse) => ({
            name: CATEGORIES_MAP[category.slug] || "",
            value: category.slug !== "tat-ca" ? category.slug : "",
            total: category.total
        })
    )

    const page = query.page ? Number(query.page) : 1
    const category = query.category
    const { blogs, total } = await getBlogs(page, category)
    const finalPage = Math.ceil(total / 10)
    const path = category
        ? `${PATHNAMES.Blog}?category=${category}&`
        : `${PATHNAMES.Blog}?`

    return (
        <div className="container flex flex-col items-center">
            <BlogsHeaderImages />
            <BlogHeader />
            <div className="flex flex-col-reverse w-full lg:flex-row lg:justify-between">
                <BlogsList blogs={blogs} />
                <BlogCategories categories={mappedBlogCategories} />
            </div>
            <Pagination currentPage={page} finalPage={finalPage} path={path} />
        </div>
    )
}
