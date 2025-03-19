import Breadcrumb from "../components/breadcrumb"
import { PATHNAMES } from "../config"

export default function AboutUs() {
    return (
        <div className="container flex flex-col items-center">
            <Breadcrumb url={PATHNAMES.AboutUs} />
            <h1 className="text-6xl font-bold">Về chúng tôi</h1>
        </div>
    )
}
