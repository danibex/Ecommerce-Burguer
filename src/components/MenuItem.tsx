import Link from "next/link";
interface MenuItemProps {
    children: string
    url: string
}
export default function MenuItem(props: MenuItemProps) {
    return(
        <li className="m-4 text-xl hover:text-gray-500"><Link href={props.url}>{props.children}</Link></li>
    )
}