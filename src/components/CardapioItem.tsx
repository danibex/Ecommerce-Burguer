import Image from "next/image"
interface CardapioItemProps {
    id: number
    nome: string
    descricao: string
    preco: any
    url: any
}
export default function CardapioItem(props: CardapioItemProps) {
    return(
    <div className="flex flex-col">
        <div>
            <h2>{props.nome}</h2>
            <h1>{props.descricao}</h1>
        </div>
        <div>
            <Image src={props.url} alt={props.descricao}/>
        </div>
        <div className="m-5 flex flex-row items-center justify-start">
            <p>{props.preco}</p>
            <div className="flex flex-row m-0">
                <span>Quantidade</span>
                <button>Carrinho</button>
            </div>
        </div>
    </div>
    )
}