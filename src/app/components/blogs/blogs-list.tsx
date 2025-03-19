import { Blog as BlogType } from "../../types/types"
import Blog from "./blog"
import MainBanner from "./main-banner"

interface Props {
    blogs: BlogType[]
}
const BlogsList = ({ blogs }: Props) => {
    return (
        <div className="flex flex-col w-full lg:w-[72.36%] gap-8">
            <div className="h-[4.5rem] flex items-center">
                <h1 className="text-4xl font-bold ">Tất cả bài viết</h1>
            </div>
            <MainBanner />
            {blogs.length > 0 ? (
                <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
                    {blogs.map((blog: BlogType) => (
                        <Blog
                            key={blog.slug}
                            blog={blog}
                            className="h-48 sm:w-[calc(50%-0.75rem)] sm:h-auto"
                            breakPoint="sm"
                        />
                    ))}
                </div>
            ) : (
                <p className="text-6xl font-bold text-center text-primary">
                    Không có kết quả
                </p>
            )}
        </div>
    )
}

export default BlogsList
