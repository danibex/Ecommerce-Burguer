import { useState } from "react"
interface TotalCarrinhoProps {
    total?: void
}


export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]"


    return(
        <div className=" p-3 bg-white sm:w-[300px] w-[100%] h-[80px] sm:h-auto fixed flex sm:flex-col flex-row justify-around sm:justify-center items-center rounded-lg shadow-lg sm:bottom-2 sm:right-2 right-0 bottom-0">
            <p className="font-semibold pb-0 pt-2 text-3xl">R$ {},00</p>
            <button className={`${estiloBotao} `}>Finalizar</button>
        </div>
    )
}


