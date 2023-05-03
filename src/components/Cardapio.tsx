import CardapioItem from "./CardapioItem"
import { produtos } from '@/data/Produtos'

export default function Cardapio() {
    const estiloLinhaCardapio = "flex flex-row sm:flex-col justify-center items-center py-10 px-2 gap-2"
    return(
    <>
        <div className={`${estiloLinhaCardapio}`}>
            {produtos.map((produto, index) => {
                return(
                    <CardapioItem url={produto.url} id={produto.id} nome={produto.nome} descricao={produto.descricao} preco={produto.preco}/>
                )
            })}
        </div>
    </>
    )
}