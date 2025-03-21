import Image from "next/image"
import { REACTIONS_MAP } from "../../config"

interface Props {
    reactions: {
        like: number
        heart: number
        interesting: number
        surprise: number
        boring: number
        angry: number
    }
    total: number
}

const Reactions = ({ reactions, total }: Props) => {
    return (
        <div className="flex flex-col w-full gap-6 pt-6 bg-white h-auto rounded-3xl shadow-[0px_1px_3px_0px_#1212171A]">
            <div className="flex flex-col gap-2 h-[3.75rem] justify-center items-center">
                <p className="text-xl font-extrabold text-tertiary-text">
                    Bạn thấy bài viết như thế nào?
                </p>
                <p className="font-medium text-tertiary-text">
                    {total} phản hồi
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full gap-0 sm:gap-8 sm:flex-nowrap">
                {Object.keys(reactions).map((key: string, index: number) => (
                    <div
                        key={`${key}-${index}`}
                        className="w-[calc(100%/3)] sm:w-[10%] h-[6.875rem] flex flex-col p-4 items-center hover:outline-1 hover:outline-[#10805B] hover:cursor-pointer"
                    >
                        <Image
                            src={REACTIONS_MAP[key].imgSrc}
                            width="48"
                            height="48"
                            alt="like-icon"
                        />
                        <p className="font-bold text-tertiary-text">
                            {reactions[key as keyof typeof reactions]}
                        </p>
                        <p className="text-sm font-medium text-tertiary-text text-nowrap">
                            {REACTIONS_MAP[key].title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reactions
