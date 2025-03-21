"use client"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Images } from "../../constants/images"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import BecomeAMember from "./become-a-member"
import MobileMenu from "./mobile-menu"

const MenuButton = () => {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <Drawer
            direction="left"
            autoFocus={true}
            open={open}
            onOpenChange={setOpen}
        >
            <DrawerTrigger>
                <Image src={Images.MenuIcon} alt="menu-icon" />
            </DrawerTrigger>
            <DrawerContent className="h-screen w-[70vw] p-4 lg:hidden pt-24 sm:pt-4">
                <VisuallyHidden>
                    <DrawerTitle></DrawerTitle>
                </VisuallyHidden>
                <div className="flex justify-center mb-8">
                    <Image
                        src={Images.FosoLogo}
                        width="134"
                        height="56"
                        alt="foso-logo"
                    />
                </div>
                <MobileMenu />
                <BecomeAMember isMobile={true} />
            </DrawerContent>
        </Drawer>
    )
}

export default MenuButton
