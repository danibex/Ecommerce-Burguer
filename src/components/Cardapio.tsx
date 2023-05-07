import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'
import TotalCarrinho from "./TotalCarrinho"
import { use, useState } from "react"
const estiloLinhaCardapio = "flex flex-col sm:flex-row justify-center items-center py-10 px-2 gap-5"
export default function Cardapio() {
        let [valorTotal, setValorTotal] = useState(0)
        const [produtosAcumulados, setProdutosAcumulados] = useState<{ nome: string; quantidade: number; preco: number }[]>([])
        function adicionaValorAoTotal(value: any) {
            setValorTotal(valorTotal + value)
            {/* Colocar quantidade, nome e botão deletar dentro do total carrinho */}
        }
        function limpar() {
            setValorTotal(0)
            setProdutosAcumulados([])
        }
   
        function receberQuanitdadeENome(quantidade: number, nome: string, preco: number) {
            setProdutosAcumulados(produtosAcumulados => [...produtosAcumulados, { nome, quantidade, preco }])
        }

        function removerProduto(posicao: number, quantidade: number) {
            const produtosAtualizados = [...produtosAcumulados]
            setValorTotal(valorTotal - (produtosAtualizados[posicao].preco * quantidade))
            produtosAtualizados.splice(posicao, 1)
            setProdutosAcumulados(produtosAtualizados)
        }


return(
<>
<div className={`${estiloLinhaCardapio} flex-wrap`} id="cardapio">
    {produtos.map((produto) => {
        return(
            <CardapioItem funcaoReceberQuantidadeENome={receberQuanitdadeENome} onStateChange={adicionaValorAoTotal}  url={produto.url} id={produto.id} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} key={produto.id}/>
        )
    })}
</div>
<TotalCarrinho removerProduto={removerProduto} valorTotal={valorTotal} produtosAcumulados={produtosAcumulados} limpar={limpar}/>
</>
)
}