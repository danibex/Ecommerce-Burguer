import style from "@/styles/login.module.css"

interface botaoAncoraProps {
children: string
url: string
}


export default function botaoAncora(props: botaoAncoraProps) {
    return(
        <a href={props.url} target="_blank" className={`${style.ancora} text-left items-start text-gray-500 m-1 whitespace-nowrap`}>
            {props.children}
        </a>
    )
}