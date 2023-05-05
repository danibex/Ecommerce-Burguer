import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'
import TotalCarrinho from "./TotalCarrinho"
import { useState } from "react"
export default function Cardapio() {
    const estiloLinhaCardapio = "flex flex-col sm:flex-row justify-center items-center py-10 px-2 gap-5"
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]"
    
 

        let [valorTotal, setValorTotal] = useState(0)
        function adicionaValorAoTotal(value: any) {
            setValorTotal(valorTotal + value)
            {/* Colocar quantidade, nome e botão deletar dentro do total carrinho */}
        }
    

    return(
    <>
        <div className={`${estiloLinhaCardapio} flex-wrap`}>
            {produtos.map((produto) => {
                return(
                    <CardapioItem onStateChange={adicionaValorAoTotal}  url={produto.url} id={produto.id} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} key={produto.id}/>
                )
            })}
        </div>
        <TotalCarrinho valorTotal={valorTotal}/>
    </>
    )
}

