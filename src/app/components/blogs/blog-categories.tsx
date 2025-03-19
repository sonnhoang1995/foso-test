"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { PATHNAMES } from "../../config"
import { Images } from "../../constants/images"
import { BlogCategory } from "../../types/types"
import { Input } from "../ui/input"
import SideBanners from "./side-banners"

interface Props {
    categories: BlogCategory[]
}
const BlogCategories = ({ categories }: Props) => {
    const [value, setValue] = useState<string>("")
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (value.length > 0) {
                router.push(`${PATHNAMES.Blog}?search=${value}`)
            }
        }
    }

    useEffect(() => {
        const searchQuery = searchParams.get("search")
        if (searchQuery) {
            setValue(decodeURI(searchQuery))
        } else {
            setValue("")
        }
    }, [pathname, searchParams])

    return (
        <div className="flex flex-col w-full mb-4 lg:w-[25.42%] lg:mb-0 lg:gap-8">
            <div className="flex items-center justify-between w-full h-[4.5rem] lg:flex-col lg:gap-6 lg:justify-start lg:items-start lg:h-auto">
                <p className="text-2xl font-bold leading-12">Tìm Kiếm</p>
                <div className="w-1/2 h-[6rem] relative flex items-center lg:w-full lg:h-12">
                    <Input
                        placeholder="Tìm kiếm bài viết"
                        type="search"
                        id="search"
                        className="w-full py-3 pl-6 pr-2 h-12 bg-white rounded-[0.75rem] text-base border-none shadow-md outline-none focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-opacity-0"
                        value={value}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                    />
                    <Link
                        href={`${PATHNAMES.Blog}?search=${value}`}
                        className={`absolute bottom-[1.875rem] right-2 flex items-center justify-center w-9 h-9 rounded-[0.375rem] p-[0.375rem] bg-main lg:bottom-1.5 ${
                            value.length > 0
                                ? ""
                                : "pointer-events-none cursor-default"
                        }`}
                    >
                        <Image
                            src={Images.SearchIcon}
                            width={19.52}
                            height={19.52}
                            alt="search-icon"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full mb-4 gap-7">
                <p className="text-2xl font-bold leading-12">Danh Mục</p>
                <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:flex-col">
                    {categories.map((category: BlogCategory, index: number) => (
                        <Link
                            href={`${PATHNAMES.Blog}${
                                category.value
                                    ? `?category=${category.value}`
                                    : ""
                            }`}
                            key={`${category.value}-${index}`}
                            className={`flex items-center h-10 gap-2 px-1 border-2 rounded-full border-main lg:justify-between lg:border-0 lg:rounded-none lg:h-9 lg:px-0  ${
                                categories.length - 1 === index
                                    ? ""
                                    : "lg:border-b-[1px] lg:border-[#f1f5f7]"
                            }`}
                        >
                            <p className="text-sm text-primary-text lg:text-tertiary-text lg:text-lg lg:font-medium">
                                {category.name}
                            </p>
                            <div className="flex items-center justify-center w-6 h-6 text-[0.75rem] text-white rounded-full bg-main lg:text-tertiary-text lg:text-lg lg:font-medium lg:bg-white lg:rounded-none lg:w-auto lg:h-auto lg:block">
                                {category.total}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <SideBanners />
        </div>
    )
}

export default BlogCategories
