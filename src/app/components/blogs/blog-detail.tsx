import Image from "next/image"
import { formatDate } from "../../../lib/utils"
import { CATEGORIES_MAP } from "../../config"
import { Images } from "../../constants/images"
import { Blog } from "../../types/types"
import Reactions from "./reactions"

interface Props {
    blog: Blog
    reactions: {
        like: number
        heart: number
        interesting: number
        surprise: number
        boring: number
        angry: number
    }
    totalReactions: number
}

const BlogDetail = ({ blog, reactions, totalReactions }: Props) => {
    return (
        <div className="w-full mt-4 lg:mt-16 lg:w-[62.5%] mb-24">
            <div className="flex flex-col items-start gap-4">
                <div className="h-[1.625rem] py-1 px-2 flex items-center justify-center text-[#0F4F9E] bg-[#E2F0FE] text-xs font-medium w-fit rounded-3xl">
                    {CATEGORIES_MAP[blog.category]}
                </div>
                <h1 className="text-4xl font-extrabold text-primary-text">
                    {blog.title}
                </h1>
                <div className="flex items-center justify-between w-full h-16">
                    <div className="flex items-center justify-between w-auto gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white px-1.5 py-[0.3125rem] flex items-center justify-center border-[1px] border-[#F1F5F7]">
                            <Image
                                src={blog.author.avatar ?? Images.SmallFosoLogo}
                                className={`w-[25.5rem] h-6 sm:w-[26rem] sm:h-8`}
                                alt="foso-logo"
                            />
                        </div>
                        <div className="my-auto">
                            <p className="text-xs font-medium sm:text-sm text-quinary-text">
                                Tác giả
                            </p>
                            <p className="text-sm font-bold sm:text-base text-tertiary-text text-nowrap">
                                {blog.author.name}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center h-6 gap-1 sm:gap-3 text-quinary-text">
                        <div className="flex items-center justify-end h-full gap-1 text-xs font-medium sm:gap-2 sm:justify-start ">
                            <Image
                                src={Images.CalendarIcon}
                                className="w-[0.84375rem] h-[0.9140625rem] sm:w-[1.125rem] sm:h-[1.21875rem]"
                                alt="calendar-icon"
                            />
                            <p className="w-[70%] sm:w-auto">
                                Cập nhật vào: {formatDate(blog.createdAt)}
                            </p>
                        </div>
                        <div className="h-full border-r-[1px] border-quinary-text"></div>
                        <div className="flex items-center h-full gap-1 text-xs font-medium sm:gap-2 sm:text-base">
                            <Image
                                src={Images.ClockIcon}
                                className="w-[0.9140625rem] h-[0.9140625rem] sm:w-[1.21875rem] sm:h-[1.21875rem]"
                                alt="calendar-icon"
                            />
                            <p>{blog.readTime} đọc</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="mb-24"
            ></div>
            <Reactions reactions={reactions} total={totalReactions} />
        </div>
    )
}

export default BlogDetail
