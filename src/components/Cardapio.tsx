import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'
import TotalCarrinho from "./TotalCarrinho"
import { useState } from "react"
const estiloLinhaCardapio = "flex flex-col sm:flex-row justify-center items-center py-10 px-2 gap-5"
export default function Cardapio() {
        let [valorTotal, setValorTotal] = useState(0)
        function adicionaValorAoTotal(value: any) {
            setValorTotal(valorTotal + value)
            {/* Colocar quantidade, nome e botão deletar dentro do total carrinho */}
        }
        function limpar() {
            setValorTotal(0)
        }
return(
<>
<div className={`${estiloLinhaCardapio} flex-wrap`} id="cardapio">
    {produtos.map((produto) => {
        return(
            <CardapioItem onStateChange={adicionaValorAoTotal}  url={produto.url} id={produto.id} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} key={produto.id}/>
        )
    })}
</div>
<TotalCarrinho valorTotal={valorTotal}  limpar={limpar}/>
</>
)
}