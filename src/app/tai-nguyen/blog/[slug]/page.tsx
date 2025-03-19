import { redirect } from "next/navigation"
import BlogDetail from "../../../components/blogs/blog-detail"
import RelatedBlogs from "../../../components/blogs/related-blogs"
import SideBanners from "../../../components/blogs/side-banners"
import Socials from "../../../components/blogs/socials"
import TableOfContents from "../../../components/blogs/table-of-contents"
import Breadcrumb from "../../../components/breadcrumb"
import { PATHNAMES } from "../../../config"
import { getBlog, getRelatedBlogs } from "../../../libs/get-blogs"

interface Props {
    params: Promise<{ slug: string }>
}

export default async function ResourceDetail({ params }: Props) {
    const { slug } = await params
    const blog = await getBlog(slug)
    if (!blog) redirect("/")
    const reactions = blog.reaction
    const totalReactions = Object.values(reactions).reduce(
        (prev: number, curr: number) => prev + curr
    )
    const relatedBlogs = await getRelatedBlogs(slug, blog.category)

    return (
        <>
            <Socials />
            <div className="container flex flex-col w-full">
                <Breadcrumb
                    url={`${PATHNAMES.Blog}?category=${blog.category}`}
                    className="justify-start"
                />
                <div className="flex flex-col-reverse w-full lg:gap-12 lg:flex-row lg:justify-between">
                    <BlogDetail
                        blog={blog}
                        reactions={reactions}
                        totalReactions={totalReactions}
                    />
                    <div className="flex flex-col gap-6 lg:w-[37.5%] mt-4 lg:mt-16">
                        <TableOfContents content={blog.content} />
                        <SideBanners className="w-3/4" />
                    </div>
                </div>
                <RelatedBlogs blogs={relatedBlogs} />
            </div>
        </>
    )
}
