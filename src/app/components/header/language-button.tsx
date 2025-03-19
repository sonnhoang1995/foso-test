"use client"

import Image from "next/image"
import { Images } from "../../constants/images"
import { Button } from "../ui/button"

const LanguageButton = () => {
    return (
        <Button className="w-24 h-full bg-language border border-language-border justify-between px-3 py-2 rounded-[2.5rem] shrink-0 shadow-none hover:cursor-pointer hover:bg-main">
            <Image src={Images.VNIcon} width="24" height="24" alt="vn-icon" />
            <div className="flex gap-1 items-center w-[2.125rem] h-[1.3125rem]">
                <p className="text-sm font-medium text-secondary-text">VI</p>
                <Image
                    src={Images.CaretDown}
                    width="11.5"
                    height="6.5"
                    alt="caret-down"
                />
            </div>
        </Button>
    )
}

export default LanguageButton
