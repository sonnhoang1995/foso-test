import Image from "next/image"
import Link from "next/link"
import { HEADER_MENU } from "../../config"
import { Images } from "../../constants/images"
import { MenuItem } from "../../types/types"
import BecomeAMember from "./become-a-member"
import LanguageButton from "./language-button"
import MenuButton from "./menu-button"

const Header = () => {
    return (
        <div className="sticky z-50 flex items-center justify-between w-full h-20 px-4 mx-auto my-4 bg-white top-4 lg:shadow-lg lg:rounded-full lg:w-5xl lg:px-12 xl:w-7xl xl:px-32">
            <div className="w-12 h-12 p-0 bg-white shadow lg:hidden">
                <MenuButton />
            </div>
            <Link href="/">
                <Image
                    src={Images.FosoLogo}
                    width="134"
                    height="56"
                    alt="foso-logo"
                    className="mx-auto lg:mx-0"
                />
            </Link>
            <nav className="hidden lg:block">
                <ul className="flex gap-2">
                    {HEADER_MENU.map((menuItem: MenuItem, index: number) => (
                        <li
                            key={`${menuItem.name}-${index}`}
                            className={`${
                                menuItem.subMenu.length > 0
                                    ? "relative group"
                                    : ""
                            } text-secondary-text p-2 flex items-center gap-2 hover:cursor-pointer font-medium text-sm hover:text-main`}
                        >
                            <Link href={menuItem.url}>{menuItem.name}</Link>
                            {menuItem.subMenu.length > 0 && (
                                <Image
                                    src={Images.CaretDown}
                                    width="11"
                                    height="6"
                                    alt="caret-down"
                                />
                            )}
                            {menuItem.subMenu.length > 0 && (
                                <ul className="absolute left-0 hidden w-full text-gray-800 transition-opacity duration-300 bg-white rounded-lg shadow-lg opacity-0 group-hover:block top-full group-hover:opacity-100">
                                    {menuItem.subMenu.map(
                                        (subItem: MenuItem, index: number) => (
                                            <Link
                                                href={subItem.url}
                                                key={`${subItem.name}-${index}`}
                                                className="flex p-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer"
                                            >
                                                {subItem.name}
                                            </Link>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex h-10 gap-2">
                <LanguageButton />
                <BecomeAMember isMobile={false} />
            </div>
        </div>
    )
}

export default Header
