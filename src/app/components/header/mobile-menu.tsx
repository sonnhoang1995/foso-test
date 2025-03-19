import Link from "next/link"
import { HEADER_MENU } from "../../config"
import { MenuItem } from "../../types/types"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "../ui/accordion"

const MobileMenu = () => {
    return (
        <Accordion type="multiple" className="mb-8">
            {HEADER_MENU.map((item: MenuItem, index: number) => (
                <AccordionItem
                    value={`${item.name}`}
                    key={`${item.url}-${index}`}
                    className="w-full overflow-hidden"
                    disabled={item.subMenu.length === 0}
                >
                    {item.subMenu.length > 0 ? (
                        <>
                            <AccordionTrigger className="flex items-center justify-between w-full text-base">
                                <Link href={item.url}>{item.name}</Link>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col overflow-hidden">
                                {item.subMenu.map(
                                    (subItem: MenuItem, index: number) => (
                                        <Link
                                            key={`${subItem.url}-${index}`}
                                            href={`${subItem.url}`}
                                            className={`${
                                                index ===
                                                item.subMenu.length - 1
                                                    ? "pt-4"
                                                    : "py-4"
                                            } ml-4 font-medium`}
                                        >
                                            {subItem.name}
                                        </Link>
                                    )
                                )}
                            </AccordionContent>
                        </>
                    ) : (
                        <div className="py-4 font-medium">
                            <Link href={item.url}>{item.name}</Link>
                        </div>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default MobileMenu
