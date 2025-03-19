import { Blog as BlogType } from "../../types/types"
import Blog from "./blog"

interface Props {
    blogs: BlogType[]
}

const RelatedBlogs = ({ blogs }: Props) => {
    return (
        blogs.length > 0 && (
            <div className="flex flex-col w-full gap-6">
                <p className="text-4xl font-extrabold text-primary-text">
                    Bài Viết Liên Quan
                </p>
                <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
                    {blogs.map((blog: BlogType, index: number) => (
                        <Blog
                            key={`${blog.slug}-${index}`}
                            blog={blog}
                            className="h-48 md:w-[calc(100%/3-4rem/3)] md:h-auto"
                            breakPoint="md"
                        />
                    ))}
                </div>
            </div>
        )
    )
}

export default RelatedBlogs
