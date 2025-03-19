import Image from "next/image"
import { Images } from "../../constants/images"

const BlogsHeaderImages = () => {
    return (
        <>
            <div className="absolute w-[4.0625rem] h-[4.1875rem] md:w-[5.875rem] md:h-[calc(8.375rem/1.5)] lg:w-[8.8125rem] lg:h-[8.375rem] top-[13.15625rem] left-0 ml-4 md:ml-6 lg:ml-8">
                <Image
                    src={Images.NoteImage}
                    alt="note-image"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="absolute w-[5rem] h-[4.1875rem] md:w-[calc(10rem/1.5)] md:h-[calc(8.375rem/1.5)] lg:w-[10rem] lg:h-[8.375rem] top-[13.15625rem] right-0 mr-4 md:mr-6 lg:mr-8">
                <Image
                    src={Images.HandImage}
                    alt="note-image"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </>
    )
}

export default BlogsHeaderImages
