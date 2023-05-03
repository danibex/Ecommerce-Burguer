interface Cards1Props {
    titulo: string
    descricao: string
    icon: any
    cor: string
}
export default function Cards1(props: Cards1Props) {
    return(
        <div className={`m-5 flex flex-row flex-nowrap justify-center items-center w-[80%] ${props.cor} rounded-md p-8 text-white`}>
            <div>
                <h1 className="font-black text-2xl">{props.titulo}</h1>
                <p className="text-sm">{props.descricao}</p>
            </div>
            <div>
                {props.icon}
            </div>
        </div>
    )
}