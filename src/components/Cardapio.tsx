import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'

export default function Cardapio() {
    const estiloLinhaCardapio = "flex flex-col sm:flex-row justify-center items-center py-10 px-2 gap-5"
    return(
    <>
        <div className={`${estiloLinhaCardapio} flex-wrap`}>
            {produtos.map((produto, index) => {
                return(
                    <CardapioItem url={produto.url} id={produto.id} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} key={produto.id}/>
                )
            })}
        </div>
    </>
    )
}