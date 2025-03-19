import Image from "next/image"
import Link from "next/link"
import { Images } from "../constants/images"

interface Props {
    currentPage: number
    finalPage: number
    path: string
}

function getItems(currentPage: number, finalPage: number): { value: string }[] {
    if (finalPage <= 7)
        return Array.from({ length: finalPage }, (x, i) => ({
            value: `${i + 1}`
        }))
    const items: { value: string }[] = []

    items.push({ value: "1" })

    if (currentPage >= 4) {
        items.push({ value: "..." })
    }

    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(finalPage - 1, currentPage + 1)

    if (currentPage <= 4) {
        endPage = Math.min(5, finalPage - 1)
    }

    if (currentPage >= finalPage - 3) {
        startPage = Math.max(finalPage - 4, 2)
    }

    for (let i = startPage; i <= endPage; i++) {
        items.push({ value: `${i}` })
    }

    if (endPage < finalPage - 1) {
        items.push({ value: "..." })
    }

    if (finalPage > 1) {
        items.push({ value: `${finalPage}` })
    }

    return items
}

const Pagination = ({ currentPage, finalPage, path }: Props) => {
    const items = getItems(currentPage, finalPage)
    return (
        <div className="flex items-center justify-between w-full mb-8">
            <Link
                href={`${path}page=${currentPage - 1}`}
                className={`flex items-center justify-start h-6 gap-8 ${
                    currentPage === 1
                        ? "cursor-default pointer-events-none"
                        : ""
                }`}
            >
                <Image
                    src={
                        currentPage === 1
                            ? Images.DisabledLeftArrowIcon
                            : Images.LeftArrowIcon
                    }
                    width="18"
                    height="15"
                    alt="left-arrow-icon"
                />
                <p
                    className={`font-semibold ${
                        currentPage === 1 ? "text-[#B3C5D4]" : "text-[#4D5F6E]"
                    }`}
                >
                    Trang trước
                </p>
            </Link>
            <div className="flex items-center gap-2">
                {items.map((item: { value: string }, index: number) => (
                    <Link
                        key={`$pagination-${index}`}
                        href={`${path}page=${item.value}`}
                        className={`${
                            item.value === "..."
                                ? "cursor-default pointer-events-none"
                                : ""
                        } ${
                            `${currentPage}` === item.value
                                ? "bg-[#D1F7EA] rounded-[0.5rem] text-quaternary-text"
                                : "text-[#809FB8]"
                        } w-10 h-10 flex items-center justify-center font-semibold`}
                    >
                        {item.value}
                    </Link>
                ))}
            </div>
            <Link
                href={`${path}page=${currentPage + 1}`}
                className={`flex items-center justify-end h-6 gap-8 ${
                    currentPage === finalPage
                        ? "cursor-default pointer-events-none"
                        : ""
                }`}
            >
                <p
                    className={`font-semibold ${
                        currentPage === finalPage
                            ? "text-[#B3C5D4]"
                            : "text-[#4D5F6E]"
                    }`}
                >
                    Trang kế tiếp
                </p>
                <Image
                    src={
                        currentPage === finalPage
                            ? Images.DisabledRightArrowIcon
                            : Images.RightArrowIcon
                    }
                    width="18"
                    height="15"
                    alt="left-arrow-icon"
                />
            </Link>
        </div>
    )
}

export default Pagination
