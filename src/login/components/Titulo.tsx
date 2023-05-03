interface TituloLoginProps {
    children: string
}
export default function TituloLogin(props: TituloLoginProps) {
    return(
        <h1 className="md:mb-40 mb-5 text-5xl text-red-700 font-black">{props.children}</h1>
    )
}