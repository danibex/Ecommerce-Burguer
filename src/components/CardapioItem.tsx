import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import blackBurguer from "@/images/black-burguer.png"
interface CardapioItemProps {
    id: number
    nome: string
    descricao: string
    preco: any
    url: any
}
export default function CardapioItem(props: CardapioItemProps): JSX.Element {
    return(
    <div className="flex flex-col my-8 mx-1/2 shadow-xl p-3 rounded-md">
        <div className="m-3">
            <h2 className="text-lg text-red-600 font-semibold m-1">{props.nome}</h2>
            <h1 className="text-2xl font-black w-[80%] m-1">{props.descricao}</h1>
        </div>
        <div className="flex justify-center items-center">
            <Image src={blackBurguer} alt={props.descricao} width={200} height={200}/>
        </div>
        <div className="mx-2 my-0 flex flex-row items-center justify-start">
            <p className="font-black mr-10 ml-0">{props.preco}</p>
            <div className="flex flex-row m-2">
                <span className="mx-1 bg-gray-300 rounded-md flex flex-row">
                    <button className="p-2">-</button>
                    <p className="p-2">0</p>
                    <button className="p-2">+</button>
                </span>
                <button className="bg-red-700 rounded-md p-1 mx-1 p-1"><IconShoppingCart className="text-white font-black"/></button>
            </div>
        </div>
    </div>
    )
}