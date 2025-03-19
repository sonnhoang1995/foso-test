import Image from "next/image"
import Link from "next/link"
import { cn } from "../../../lib/utils"
import { Images } from "../../constants/images"

interface Props {
    className?: string
}

const SideBanners = ({ className }: Props) => {
    return (
        <div
            className={`${cn(
                "flex-col hidden w-full gap-8 lg:flex",
                className
            )}`}
        >
            <div className="h-[40.625rem] w-full blogs-banner rounded-3xl py-6 relative flex">
                <div className="absolute w-full h-[15.25rem] top-10 right-0">
                    <Image
                        src={Images.BannerImage3}
                        fill
                        alt="banner-image-3"
                    />
                </div>
                <div className="relative w-full px-4">
                    <div className="absolute w-[8.5rem] h-[8.5rem] left-4 top-[calc(50%+0.5rem)]">
                        <Image
                            src={Images.BannerImage4}
                            fill
                            alt="banner-image-4"
                        />
                    </div>
                    <div className="absolute w-full h-[5.5rem] right-4 top-[calc(50%+2.5rem)]">
                        <Image src={Images.BannerText} fill alt="banner-text" />
                    </div>
                </div>
                <Link
                    href="#"
                    className="absolute flex items-center justify-between px-6 py-2 w-[calc(100%-2rem)] h-[3.125rem] border-[1.5px] border-white rounded-full bottom-10 left-4"
                >
                    <p className="text-sm font-bold text-white">
                        Trải nghiệm ngay
                    </p>
                    <Image
                        src={Images.RedirectIcon}
                        width={10.69}
                        height={10.69}
                        alt="redirect-icon"
                    />
                </Link>
            </div>
            <div className="h-[40.625rem] w-full blogs-banner rounded-3xl py-6 relative flex">
                <div className="absolute w-1/2 h-[calc(25rem/2)] lg:w-full lg:h-[25rem] top-6 right-0">
                    <Image
                        src={Images.BannerImage2}
                        fill
                        alt="banner-image-2"
                    />
                </div>
                <div className="absolute flex flex-col w-full gap-6 px-4 bottom-10">
                    <p className="text-xl font-semibold text-white">
                        Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng
                        phát triển!
                    </p>
                    <Link
                        href="#"
                        className="flex items-center justify-between px-6 py-2 w-full h-[3.125rem] border-[1.5px] border-white rounded-full"
                    >
                        <p className="text-sm font-bold text-white">
                            Tham gia ngay
                        </p>
                        <Image
                            src={Images.RedirectIcon}
                            width={10.69}
                            height={10.69}
                            alt="redirect-icon"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBanners
