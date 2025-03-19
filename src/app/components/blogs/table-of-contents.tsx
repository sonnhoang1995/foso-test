"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "../ui/accordion"

interface Props {
    content: string
}

interface HeaderElement {
    id: string
    value: string
    type: "h2" | "h3"
}

function getHeaderFromContent(content: string) {
    const headers: HeaderElement[] = []
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const elements = doc.querySelectorAll("h2, h3")
    Array.from(elements).forEach((element) => {
        if (element.nodeName === "H2") {
            headers.push({
                id: element.id,
                value: element.innerHTML,
                type: "h2"
            })
        }

        if (element.nodeName === "H3") {
            headers.push({
                id: element.id,
                value: element.innerHTML,
                type: "h3"
            })
        }
    })

    return headers
}

const TableOfContents = ({ content }: Props) => {
    const [headers, setHeaders] = useState<HeaderElement[]>([])

    useEffect(() => {
        const headers = getHeaderFromContent(content)
        setHeaders(headers)
    }, [content])

    return (
        <Accordion type="single" collapsible defaultValue="content">
            <AccordionItem value="content" className="border-b-0">
                <AccordionTrigger className="flex items-center justify-between w-full h-12 text-2xl">
                    <p>Nội dung bài viết</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col">
                    {headers.map((header: HeaderElement, index: number) => (
                        <Link
                            key={`${header.id}-${index}`}
                            href={`#${header.id}`}
                            className={`${
                                header.type === "h3" ? "ml-4" : ""
                            } font-medium text-lg text-tertiary-text leading-[200%]`}
                        >
                            {header.value}
                        </Link>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default TableOfContents
