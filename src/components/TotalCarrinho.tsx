import { IconTrash } from "@tabler/icons-react"

interface TotalCarrinhoProps {
   valorTotal: number
   limpar?: () => void;
   produtosAcumulados?: any
   removerProduto?: any
}
const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-1 my-6 h-[50px]"

export default function TotalCarrinho(props: TotalCarrinhoProps) {    
    function removerProduto(posicao: number, quantidade: number) {
        props.removerProduto(posicao, quantidade)
    }
    return(
        <>
        <div className={`${props.valorTotal == 0 ? "hidden" : "flex"} p-3 bg-white sm:w-[300px] w-[100%] sm:h-auto fixed sm:flex-col flex-row justify-around sm:justify-center items-center rounded-lg shadow-lg sm:bottom-2 sm:right-2 right-0 bottom-0`}>
            <div className="flex flex-col justify-between">
            <table className="flex flex-col justify-center items-center w-[100%]">
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
            <div className="flex flex-col justify-center items-center mt-8">
                <p className="font-semibold pb-0 pt-2 text-3xl">R$ {props.valorTotal},00</p>
                <div className="flex flex-row items-center justify-center">
                <button className={`${estiloBotao} w-[180px]`}>Finalizar</button>
                <button className={`${estiloBotao} w-[50px]`} onClick={props.limpar}><IconTrash/></button>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}


