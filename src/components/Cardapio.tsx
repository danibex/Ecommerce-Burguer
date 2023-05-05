import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'
import TotalCarrinho from "./TotalCarrinho"
import { useState } from "react"
export default function Cardapio() {
    const estiloLinhaCardapio = "flex flex-col sm:flex-row justify-center items-center py-10 px-2 gap-5"
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]"
    
 
        const [stateValue, setStateValue] = useState(0);
        function handleChildState(value: any) {
          setStateValue(value);
        }
    

    return(
    <>
        <div className={`${estiloLinhaCardapio} flex-wrap`}>
            {produtos.map((produto) => {
                return(
                    <CardapioItem onStateChange={handleChildState}  url={produto.url} id={produto.id} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} key={produto.id}/>
                )
            })}
        </div>
        <div className=" p-3 bg-white sm:w-[300px] w-[100%] h-[80px] sm:h-auto fixed flex sm:flex-col flex-row justify-around sm:justify-center items-center rounded-lg shadow-lg sm:bottom-2 sm:right-2 right-0 bottom-0">
            <p className="font-semibold pb-0 pt-2 text-3xl">R$ {stateValue},00</p>
            <button className={`${estiloBotao} `}>Finalizar</button>
        </div>
    </>
    )
}

