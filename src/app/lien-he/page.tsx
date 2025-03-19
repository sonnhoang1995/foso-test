import Breadcrumb from "../components/breadcrumb"
import { PATHNAMES } from "../config"

export default function Contact() {
    return (
        <div className="container flex flex-col items-center">
            <Breadcrumb url={PATHNAMES.Contact} />
            <h1 className="text-6xl font-bold">Liên hệ</h1>
        </div>
    )
}
