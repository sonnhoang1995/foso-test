"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Breadcrumb from "../breadcrumb"

const BlogHeader = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [url, setUrl] = useState<string>("")

    useEffect(() => {
        const categoryQuery = searchParams.get("category")
        if (categoryQuery) {
            setUrl(`${pathname}?category=${decodeURI(categoryQuery)}`)
        } else {
            setUrl(pathname)
        }
    }, [pathname, searchParams])

    return (
        <div className="relative flex flex-col h-[24.5rem] py-12 text-primary-text mb-0 md:mb-12 lg:mb-24">
            <Breadcrumb url={url} className="mb-16" />
            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-center">
                Blog <span className="blogs-header-gradient-text">FOSO</span> -
                <br />
                Cập Nhật Tin Tức{" "}
                <span className="blogs-header-underline-text">Mới Nhất</span>
            </h1>
            <p className="text-xs text-center md:text-sm lg:text-lg text-tertiary-text">
                Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất
                ngay!
            </p>
        </div>
    )
}

export default BlogHeader
