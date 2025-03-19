import { StaticImageData } from "next/image"
import { Images } from "./constants/images"
import { BreadcrumbItem, MenuItem } from "./types/types"

export const HEADER_MENU: MenuItem[] = [
    {
        name: "Về chúng tôi",
        url: "/ve-chung-toi",
        subMenu: []
    },
    {
        name: "Giải pháp",
        url: "/giai-phap",
        subMenu: [
            {
                name: "Giải pháp 1",
                url: "/giai-phap/giai-phap-1",
                subMenu: []
            },
            {
                name: "Giải pháp 2",
                url: "/giai-phap/giai-phap-2",
                subMenu: []
            },
            {
                name: "Giải pháp 3",
                url: "/giai-phap/giai-phap-3",
                subMenu: []
            }
        ]
    },
    {
        name: "Tài nguyên",
        url: "/tai-nguyen",
        subMenu: [
            {
                name: "Blog",
                url: "/tai-nguyen/blog",
                subMenu: []
            },
            {
                name: "Video",
                url: "/tai-nguyen/video",
                subMenu: []
            }
        ]
    },
    {
        name: "Liên hệ",
        url: "/lien-he",
        subMenu: []
    }
]

export const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
    {
        title: "Về chúng tôi",
        url: "/ve-chung-toi"
    },
    {
        title: "Giải pháp",
        url: "/giai-phap"
    },
    {
        title: "Giải pháp 1",
        url: "/giai-phap/giai-phap-1",
        parent: { title: "Giải pháp", url: "/giai-phap" }
    },
    {
        title: "Giải pháp 2",
        url: "/giai-phap/giai-phap-2",
        parent: { title: "Giải pháp", url: "/giai-phap" }
    },
    {
        title: "Giải pháp 3",
        url: "/giai-phap/giai-phap-3",
        parent: { title: "Giải pháp", url: "/giai-phap" }
    },
    {
        title: "Tài nguyên",
        url: "/tai-nguyen"
    },
    {
        title: "Blog",
        url: "/tai-nguyen/blog",
        parent: { title: "Tài nguyên", url: "/tai-nguyen" }
    },
    {
        title: "Thiết Kế Website",
        url: "/tai-nguyen/blog?category=thiet-ke-website",
        parent: {
            title: "Blog",
            url: "/tai-nguyen/blog",
            parent: { title: "Tài nguyên", url: "/tai-nguyen" }
        }
    },
    {
        title: "Thiết Kế App Mobile",
        url: "/tai-nguyen/blog?category=thiet-ke-app-mobile",
        parent: {
            title: "Blog",
            url: "/tai-nguyen/blog",
            parent: { title: "Tài nguyên", url: "/tai-nguyen" }
        }
    },
    {
        title: "Quản Lý Sản Xuất",
        url: "/tai-nguyen/blog?category=quan-ly-san-xuat",
        parent: {
            title: "Blog",
            url: "/tai-nguyen/blog",
            parent: { title: "Tài nguyên", url: "/tai-nguyen" }
        }
    },
    {
        title: "Quản Lý Bán Hàng",
        url: "/tai-nguyen/blog?category=quan-ly-ban-hang",
        parent: {
            title: "Blog",
            url: "/tai-nguyen/blog",
            parent: { title: "Tài nguyên", url: "/tai-nguyen" }
        }
    },
    {
        title: "Báo Chí Nói Về FOSO",
        url: "/tai-nguyen/blog?category=bao-chi-noi-ve-foso",
        parent: {
            title: "Blog",
            url: "/tai-nguyen/blog",
            parent: { title: "Tài nguyên", url: "/tai-nguyen" }
        }
    },
    {
        title: "Tin Tức FOSO",
        url: "/tai-nguyen/blog?category=tin-tuc-foso",
        parent: {
            title: "Blog",
            url: "/tai-nguyen/blog",
            parent: { title: "Tài nguyên", url: "/tai-nguyen" }
        }
    },
    {
        title: "Video",
        url: "/tai-nguyen/video",
        parent: { title: "Tài nguyên", url: "/tai-nguyen" }
    },
    {
        title: "Liên hệ",
        url: "/lien-he"
    }
]

export enum PATHNAMES {
    AboutUs = "/ve-chung-toi",
    Solution = "/giai-phap",
    Resource = "/tai-nguyen",
    Blog = "/tai-nguyen/blog",
    Video = "/tai-nguyen/video",
    Contact = "/lien-he"
}

export const CATEGORIES_MAP: Record<string, string> = {
    "tat-ca": "Tất cả",
    "thiet-ke-website": "Thiết Kế Website",
    "thiet-ke-app-mobile": "Thiết Kế App Mobile",
    "quan-ly-san-xuat": "Quản Lý Sản Xuất",
    "quan-ly-ban-hang": "Quản Lý Bán Hàng",
    "bao-chi-noi-ve-foso": "Báo Chí Nói Về FOSO",
    "tin-tuc-foso": "Tin Tức FOSO"
}

export const LIMIT_BLOG_ITEMS = 10

export const REACTIONS_MAP: Record<
    string,
    { title: string; imgSrc: StaticImageData }
> = {
    like: { title: "Hữu ích", imgSrc: Images.LikeIcon },
    heart: { title: "Yêu thích", imgSrc: Images.HeartIcon },
    interesting: { title: "Thú vị", imgSrc: Images.StarStruckIcon },
    surprise: { title: "Bất ngờ", imgSrc: Images.SurpriseIcon },
    boring: { title: "Nhàm chán", imgSrc: Images.BoringIcon },
    angry: { title: "Tức giận", imgSrc: Images.AngryIcon }
}
