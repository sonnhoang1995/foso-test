import Image from "next/image"
import Link from "next/link"
import { cn, formatDate } from "../../../lib/utils"
import { CATEGORIES_MAP, PATHNAMES } from "../../config"
import { Images } from "../../constants/images"
import { Blog as BlogType } from "../../types/types"

interface Props {
    blog: BlogType
    breakPoint: "md" | "sm"
    className?: string
}
const Blog = ({ blog, className, breakPoint }: Props) => {
    return (
        <Link
            href={`${PATHNAMES.Blog}/${blog.slug}`}
            className={`${cn(
                `flex flex-row ${breakPoint}:flex-col gap-6`,
                className
            )}`}
        >
            <div
                className={`relative w-48 h-full ${breakPoint}:w-full ${breakPoint}:aspect-square rounded-3xl`}
            >
                <Image
                    src={blog.cover ?? Images.BlogCover}
                    fill
                    alt="blog-cover"
                />
            </div>
            <div
                className={`flex flex-col justify-between h-full ${breakPoint}:h-auto ${breakPoint}:gap-6 ${breakPoint}:items-start ${breakPoint}:w-full`}
            >
                <div className="h-[1.625rem] py-1 px-2 flex items-center justify-center text-[#0F4F9E] bg-[#E2F0FE] text-xs font-medium w-fit rounded-3xl">
                    {CATEGORIES_MAP[blog.category]}
                </div>
                <p className="text-2xl font-bold text-tertiary-text">
                    {blog.title}
                </p>
                <div className="flex items-center h-6 gap-1.5 text-quinary-text">
                    <div className="flex items-center h-full gap-2 font-medium">
                        <Image
                            src={Images.CalendarIcon}
                            width={18}
                            height={19.5}
                            alt="calendar-icon"
                        />
                        <p>{formatDate(blog.createdAt)}</p>
                    </div>
                    <div className="h-full border-r-[1px] border-quinary-text"></div>
                    <div className="flex items-center h-full gap-2 font-medium">
                        <Image
                            src={Images.ClockIcon}
                            width={19.5}
                            height={19.5}
                            alt="calendar-icon"
                        />
                        <p>{blog.readTime} đọc</p>
                    </div>
                </div>
                <div className="flex items-center h-12 gap-4 text-lg font-semibold text-quinary-text">
                    <p>Khám phá thêm</p>
                    <Image
                        src={Images.ArrowIcon}
                        width="18"
                        height="15"
                        alt="arrow-icon"
                    />
                </div>
            </div>
        </Link>
    )
}

export default Blog
