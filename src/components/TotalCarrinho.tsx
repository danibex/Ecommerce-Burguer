import { IconTrash } from "@tabler/icons-react"

interface TotalCarrinhoProps {
   valorTotal: number
   limpar?: () => void;

}


export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-1 my-6 h-[50px]"
    
    return(
        <>
        <div className={`${props.valorTotal == 0 ? "hidden" : "flex"} p-3 bg-white sm:w-[300px] w-[100%] sm:h-auto fixed sm:flex-col flex-row justify-around sm:justify-center items-center rounded-lg shadow-lg sm:bottom-2 sm:right-2 right-0 bottom-0`}>
            <p className="font-semibold pb-0 pt-2 text-3xl">R$ {props.valorTotal},00</p>
            <div className="flex flex-row items-center justify-center">
            <button className={`${estiloBotao} w-[180px]`}>Finalizar</button>
            <button className={`${estiloBotao} w-[50px]`} onClick={props.limpar}><IconTrash/></button>
            </div>
        </div>
        </>
    )
}


