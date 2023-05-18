import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'
import TotalCarrinho from "./TotalCarrinho"
import { useState } from "react"
import Endereco from "./Endereco"
import FormasDePagamento from "./FormasDePagamento"
import ResumoCompra from "./ResumoCompra"
const estiloLinhaCardapio = "flex flex-col sm:flex-row justify-center items-center py-10 px-2 gap-5"  
export default function Cardapio() {
let [valorTotal, setValorTotal] = useState(0)
const [produtosAcumulados, setProdutosAcumulados] = useState<{ nome: string; quantidade: number; preco: number }[]>([])
let [finalizar, setFinalizar] = useState(false)
function alternarFinalizar() {
    setFinalizar(!finalizar)
}
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
produtosAcumulados.length == 0 ? finalizar=false : {}
if(!finalizar){
    return(
    <>
        <div className={`${estiloLinhaCardapio} flex-wrap`} id="cardapio">
            {produtos.map((produto) => {
                return(
                    <CardapioItem 
                        funcaoReceberQuantidadeENome={receberQuanitdadeENome} 
                        onStateChange={adicionaValorAoTotal}  
                        url={produto.url} 
                        id={produto.id} 
                        nome={produto.nome} 
                        descricao={produto.descricao} 
                        preco={produto.preco} 
                        key={produto.id}/>
                )
            })}
        </div>
        <TotalCarrinho 
            alternarFinalizar={alternarFinalizar} 
            removerProduto={removerProduto} 
            valorTotal={valorTotal} 
            produtosAcumulados={produtosAcumulados} 
            limpar={limpar}
        />
    </>
    )
} else {
    return(
    <div className="h-[100vh] p-1 m-0">
    <div className="flex flex-col sm:flex-row w-[100%] h-full p-5 justify-center items-center">
        <div className="w-[100%] sm:w-[55%] flex flex-col justify-center items-center">
            <Endereco/>
            <FormasDePagamento/>
        </div>
        <ResumoCompra 
            alternarFinalizar={alternarFinalizar} 
            removerProduto={removerProduto} 
            valorTotal={valorTotal} 
            produtosAcumulados={produtosAcumulados} 
            limpar={limpar}
        />
    </div>
    </div>
    )
}
}