import Breadcrumb from "../components/breadcrumb"
import { PATHNAMES } from "../config"

export default function Solution() {
    return (
        <div className="container flex flex-col items-center">
            <Breadcrumb url={PATHNAMES.Solution} />
            <h1 className="text-6xl font-bold">Giải pháp</h1>
        </div>
    )
}
