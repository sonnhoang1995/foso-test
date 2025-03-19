import Image from "next/image"
import Link from "next/link"
import { Images } from "../../constants/images"

const MainBanner = () => {
    return (
        <div className="relative h-[9.9375rem] md:h-[13.25rem] lg:h-[19.875rem] rounded-[2.5rem] blogs-banner w-full">
            <div className="py-5 pl-5 md:py-8 md:pl-8 lg:py-[3.75rem] lg:pl-[3.75rem] h-full flex flex-col justify-between">
                <div className="w-[11.75rem] md:w-[calc(23.5rem/1.5)] lg:w-[23.5rem]">
                    <p className="text-base font-bold text-white md:text-xl lg:text-4xl">
                        Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát
                        triển!
                    </p>
                </div>
                <Link
                    href="#"
                    className="flex items-center justify-between px-6 py-2 w-[10.75rem] md:w-[13.5rem] md:h-[3.125rem] border-2 border-white rounded-full"
                >
                    <p className="text-xs font-bold text-white md:text-sm">
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
            <div className="absolute w-[14.75rem] h-[9rem] md:w-[calc(29.5rem/1.5)] md:h-48 lg:w-[29.5rem] lg:h-[18rem] right-4 bottom-0">
                <Image src={Images.BannerImage} fill alt="banner-image" />
            </div>
        </div>
    )
}

export default MainBanner
