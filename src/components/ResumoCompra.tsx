import oClassico from "@/images/Produtos/o-classico.png"
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
interface ResumoProps {
    alternarFinalizar: any
    removerProduto: any
    valorTotal: any
    produtosAcumulados: any
    limpar: any
}
export default function Resumo(props: ResumoProps) {
function alternarFinalizar() {
    props.alternarFinalizar()
}
function removerProduto(posicao: number, quantidade: number) {
    props.removerProduto(posicao, quantidade)
}

console.log("")
return(
<div className="w-[100%] sm:w-[45%] sm:mx-5 flex flex-col justify-center items-center">
    <div className="flex flex-col justify-start items-start shadow-xl p-5 rounded-lg w-[100%] my-3">
        <div className="flex flex-col w-[100%] m-2 p-2 justify-center items-center">
                {props.produtosAcumulados.map((produto: any, index: any) => {
                    return(
                    <div className="w-[100%] m-0 flex flex-row justify-between items-center" key={index}>
                        <div className="w-[10%]">
                            <Image src={oClassico} width={100} alt="Produto"/>
                        </div>
                        <div className="flex w-[70%] flex-row items-center mx-3 justify-start">
                            <h2 className="mx-1">{produto.nome}</h2>
                            <h2 className="ml-[60%]">{produto.quantidade}</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[20%]">
                            <h1 className="whitespace-no-wrap font-black">R$ {produto.quantidade * produto.preco},00</h1>
                            <button onClick={() => removerProduto(index, produto.quantidade)}><IconTrash className="text-red-700 my-1"/></button>
                        </div>
                    </div> 
                   
                )
                })}

        </div>
        <div className="w-[100%] flex justify-center items-center my-2">
            <hr  className="w-[90%]"/>
        </div>
        <div className="w-[100%] flex flex-col">
            <div className="flex flex-row justify-between w-[100%] text-lg">
                <h2>Valor dos itens</h2><h2>R$ {props.valorTotal},00</h2>
            </div>
            <div className="flex flex-row justify-between w-[100%] text-lg">
                <h2>Entrega</h2><h2>R$ 5,00</h2>
            </div>
            <div className="flex flex-row justify-between w-[100%] text-2xl font-bold">
                <h1>Total</h1><h1>R$ {props.valorTotal + 5},00</h1>                       
            </div>
            <div className="w-[100%] flex justify-center items-center">
                <button className="flex justify-center items-center bg-red-600 text-white font-bold text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]">Confirmar Pedido</button>
                <button onClick={alternarFinalizar} className="flex justify-center items-center border-red-600 border text-black font-bold text-lg rounded-lg mx-4 my-6 w-[100px] h-[50px]">Voltar</button>
            </div>
        </div>
    </div>
</div>
)
}