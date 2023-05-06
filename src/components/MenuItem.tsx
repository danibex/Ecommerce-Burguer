import Link from "next/link";
interface MenuItemProps {
    children: any
    url: string
}
export default function MenuItem(props: MenuItemProps) {
    return(
        <li className="m-4 text-xl hover:text-gray-500 flex flex-row flex-nowrap"><Link className="flex flex-row flex-nowrap" href={props.url}>{props.children}</Link></li>
    )
}