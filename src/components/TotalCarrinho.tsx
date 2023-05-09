import { IconArrowsDiagonalMinimize2, IconShoppingCart, IconTrash } from "@tabler/icons-react"
import Link from "next/link";
import { useState } from "react";


interface TotalCarrinhoProps {
   valorTotal: number
   limpar?: () => void;
   produtosAcumulados?: any
   removerProduto?: any
}
const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-1 my-6 h-[50px]"

export default function TotalCarrinho(props: TotalCarrinhoProps) {    
    const [aberto, setAberto] = useState(true)

    function removerProduto(posicao: number, quantidade: number) {
        props.removerProduto(posicao, quantidade)
    }
    function abrirFechar() {
        setAberto(!aberto)
    }
    return(
        <>
        <div className={`${props.valorTotal != 0 && aberto ? "flex" : "hidden"} p-3 bg-white sm:w-[300px] w-[100%] sm:h-auto fixed sm:flex-col flex-row justify-around sm:justify-center items-center sm:rounded-lg shadow-lg sm:bottom-2 sm:right-2 right-0 bottom-0 sm:border border-t border-black`}>
            <div className="flex flex-col w-[100%] justify-center items-center">
                <div className="flex justify-end items-end w-[100%]">
                    <button onClick={abrirFechar}>{aberto ? <IconArrowsDiagonalMinimize2 className="text-red-700" size={30}/> : ""}</button>
                </div>
                <div className="flex flex-col justify-between w-[100%]">
                <table className={`${aberto ? "flex" : "hidden"}  sm:flex flex-col justify-center items-center w-[100%]`}>
                    <thead className="flex flex-row justify-between w-[100%] mb-3">
                        <tr className="flex flex-row justify-between items-center w-[100%]">
                            <th className="w-[50%] flex justify-start items-start">Nome</th>
                            <th className="w-[25%]">Qntd.</th>
                            <th className="w-[25%]">Excluir</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col justify-between w-[100%]">
                    {props.produtosAcumulados && props.produtosAcumulados.length > 0 && props.produtosAcumulados.map((produto: any,index: number) => {
                        if(produto.quantidade != 0) {
                            return (    
                                <tr key={index} className="flex flex-row justify-between items-center w-[100%] my-1">
                                    <td className="w-[50%] flex justify-start items-start">{produto.nome}</td>
                                    <td className="w-[25%] flex justify-center">{produto.quantidade}</td>
                                    <td className="w-[25%] flex justify-center"><button onClick={() => removerProduto(index, produto.quantidade)}><IconTrash className="text-red-700"/></button></td>
                                </tr>
                            )
                        }
                    })}
                    </tbody>
                </table>
                <div className="flex sm:flex-col flex-row justify-between sm:justify-center items-center mt-2 w-[100%]">
                    <p className="font-semibold pb-0 pt-2 text-3xl">R$ {props.valorTotal},00</p>
                    <div className="flex flex-row items-center justify-center">
                    <Link href="/finalizar" className={`${estiloBotao} w-[180px]`}>Finalizar</Link>
                    <button className={`${estiloBotao} w-[50px]`} onClick={props.limpar}><IconTrash/></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className={`${aberto ? "hidden" : "block"} rounded-xl bg-black text-white fixed right-5 bottom-3 p-2`}>
            <div className="rounded-full p-2 bg-red-600 text-white font-black flex justify-center items-center w-[20px] h-[20px] absolute mt-[-15px] ml-[-15px]">{props.produtosAcumulados.length}</div>
            <button onClick={abrirFechar}><IconShoppingCart size={40}/></button>
        </div>
        </>
    )
}


