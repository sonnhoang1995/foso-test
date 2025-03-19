import Image from "next/image"
import { Images } from "../../constants/images"

const Socials = () => {
    return (
        <div className="fixed z-40 flex flex-col items-center gap-2 top-1/3 xl:left-4 w-14 right-4">
            <p className="font-extrabold text-tertiary-text text-nowrap">
                Chia sẻ
            </p>
            <div className="w-[2.875rem] h-[2.875rem] border-[1px] border-main p-3 rounded-2xl">
                <Image
                    src={Images.ZaloIcon}
                    width={24}
                    height={24}
                    alt="zalo-icon"
                />
            </div>
            <div className="w-[2.875rem] h-[2.875rem] border-[1px] border-main p-3 rounded-2xl">
                <Image
                    src={Images.FacebookIcon}
                    width={24}
                    height={24}
                    alt="facebook-icon"
                />
            </div>
            <div className="w-[2.875rem] h-[2.875rem] border-[1px] border-main p-3 rounded-2xl">
                <Image src={Images.XIcon} width={24} height={24} alt="x-icon" />
            </div>
            <div className="w-[2.875rem] h-[2.875rem] border-[1px] border-main p-3 rounded-2xl">
                <Image
                    src={Images.LinkedInIcon}
                    width={24}
                    height={24}
                    alt="linked-in-icon"
                />
            </div>
            <div className="w-[2.875rem] h-[2.875rem] border-[1px] border-main p-3 rounded-2xl">
                <Image
                    src={Images.RedditIcon}
                    width={24}
                    height={24}
                    alt="reddit-icon"
                />
            </div>
        </div>
    )
}

export default Socials
