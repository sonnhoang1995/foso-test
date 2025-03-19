"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"
import { BREADCRUMB_ITEMS } from "../config"
import { Images } from "../constants/images"
import { BreadcrumbItem } from "../types/types"

function getBreadcrumbItems(url: string): BreadcrumbItem[] {
    let breadcrumbItem = BREADCRUMB_ITEMS.find(
        (breadcrumb: BreadcrumbItem) => breadcrumb.url === url
    )
    const breadcrumbs: BreadcrumbItem[] = []
    if (!breadcrumbItem) return []
    do {
        breadcrumbs.unshift({
            title: breadcrumbItem.title,
            url: breadcrumbItem.url
        })
        breadcrumbItem = breadcrumbItem.parent
            ? breadcrumbItem.parent
            : undefined
    } while (breadcrumbItem)

    return breadcrumbs
}

interface Props {
    url: string
    className?: string
}

const Breadcrumb = ({ url, className }: Props) => {
    const pathname = usePathname()

    const breadcrumbs = getBreadcrumbItems(url)

    return pathname !== "/" ? (
        <div
            className={cn(
                "flex items-center justify-center h-5 gap-2 text-sm text-primary-text",
                className
            )}
        >
            <div className="flex items-center gap-2">
                <Link href="/">Trang chủ</Link>
                {breadcrumbs.length > 0 && (
                    <Image
                        src={Images.CaretRight}
                        width="6"
                        height="6"
                        alt="caret-right"
                    />
                )}
            </div>
            {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => (
                <div
                    key={`${breadcrumb.url}-${index}`}
                    className={`flex items-center gap-2 ${
                        breadcrumbs.length - 1 === index ? "font-bold" : ""
                    }`}
                >
                    <Link href={breadcrumb.url}>{breadcrumb.title}</Link>
                    {breadcrumbs.length - 1 !== index && (
                        <Image
                            src={Images.CaretRight}
                            width="6"
                            height="6"
                            alt="caret-right"
                        />
                    )}
                </div>
            ))}
        </div>
    ) : (
        <></>
    )
}

export default Breadcrumb
