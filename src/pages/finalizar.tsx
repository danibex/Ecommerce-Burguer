import Endereco from "@/components/Endereco";
import Navegacao from "@/components/Navegacao";
import FormasDePagamento from "@/components/FormasDePagamento";

export default function Finalizar() {
    return (
<div className="h-[100vh] p-1 m-0">
    <Navegacao>
        <div className="flex flex-col sm:flex-row w-[100%] h-full p-5 justify-center items-center">
            <div className="w-[100%] sm:w-[55%] flex flex-col justify-center items-center">
                <Endereco/>
                <FormasDePagamento/>
            </div>
            <div className="w-[100%] sm:w-[45%] sm:mx-5 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-start shadow-xl p-5 rounded-lg w-[100%] my-3">
                    <div className="flex flex-col w-[100%] m-2 p-2 justify-center items-center">
                        ForEach de Array de Hamburguers Exemplo Abaixo:
                        <div className="w-[100%] m-0 flex flex-row justify-between items-center">
                            <div>Imagem</div>
                            <div className="flex flex-row items-center justify-center">
                                <h2 className="mx-1">Nome</h2>
                                <h2 className="mx-1">Quantidade</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h1>Total</h1>
                                <button>Remover</button>
                            </div>
                        </div> 
                    </div>
                    <div className="w-[100%] flex justify-center items-center my-2">
                        <hr  className="w-[90%]"/>
                    </div>
                    <div className="w-[100%] flex flex-col">
                        <div className="flex flex-row justify-between w-[100%] text-lg">
                            <h2>Valor dos itens</h2><h2>R$ 95,00</h2>
                        </div>
                        <div className="flex flex-row justify-between w-[100%] text-lg">
                            <h2>Entrega</h2><h2>R$ 5,00</h2>
                        </div>
                        <div className="flex flex-row justify-between w-[100%] text-2xl font-bold">
                            <h1>Total</h1><h1>R$ 100,00</h1>                       
                        </div>
                        <div className="w-[100%] flex justify-center items-center">
                            <button className="flex justify-center items-center bg-red-600 text-white font-bold text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]">Confirmar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Navegacao>
</div>
    )
}