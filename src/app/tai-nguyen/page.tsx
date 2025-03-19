import Breadcrumb from "../components/breadcrumb"
import { PATHNAMES } from "../config"

export default function Resources() {
    return (
        <div className="container flex flex-col items-center">
            <Breadcrumb url={PATHNAMES.Resource} />
            <h1 className="text-6xl font-bold">Tài nguyên</h1>
        </div>
    )
}
