import Breadcrumb from "../../components/breadcrumb"
import { PATHNAMES } from "../../config"

export default function Videos() {
    return (
        <div className="container flex flex-col items-center">
            <Breadcrumb url={PATHNAMES.Video} />
            <h1 className="text-6xl font-bold">Videos</h1>
        </div>
    )
}
