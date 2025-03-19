import Image from "next/image"
import Link from "next/link"
import { Images } from "../../constants/images"

interface Props {
    isMobile: boolean
}
const BecomeAMember = ({ isMobile }: Props) => {
    return (
        <Link
            className={`${
                isMobile ? "flex w-full" : "hidden lg:flex w-[13.125rem]"
            }  items-center justify-between h-10 px-3 py-2 rounded-full bg-secondary`}
            href="#"
        >
            <p className="text-sm font-bold text-quaternary-text">
                Trở thành khách hàng
            </p>
            <div className="flex items-center justify-center w-[1.375rem] h-[1.375rem] bg-black rounded-full">
                <Image
                    src={Images.RedirectIcon}
                    width={7.88}
                    height={7.88}
                    alt="redirect-icon"
                />
            </div>
        </Link>
    )
}

export default BecomeAMember
