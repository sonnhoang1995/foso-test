import Breadcrumb from "../../components/breadcrumb"
import { PATHNAMES } from "../../config"

interface Props {
    params: Promise<{ slug: string }>
}

export default async function SolutionDetail({ params }: Props) {
    const { slug } = await params
    return (
        <div className="container flex flex-col items-center">
            <Breadcrumb url={`${PATHNAMES.Solution}/${slug}`} />
            <h1 className="text-6xl font-bold">Giải pháp: {slug}</h1>
        </div>
    )
}
