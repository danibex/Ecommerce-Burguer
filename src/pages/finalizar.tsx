import Navegacao from "@/components/Navegacao";
import { IconMapPin, IconSearch } from "@tabler/icons-react";

export default function Finalizar() {
    function subir() {
        console.log("Enviado!!!")
    }
    return (
<div className="h-[100vh] p-1 m-0">
    <Navegacao>
        <div className="flex flex-col sm:flex-row w-[100%] h-full p-5 justify-center items-center">
            <div className="w-[100%] sm:w-[55%] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-start shadow-xl p-3 rounded-lg">
                    <div className="flex flex-row"><IconMapPin className="text-red-600"/><h1>Endereço de Entrega</h1></div>
                    <p>Informe o endereço onde deseja receber o seu pedido:</p>  
                    <form onSubmit={subir}>
                        <div className="w-[100%] flex justify-start items-center ">
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[40%]" type="text" name="CEP" id="CEP" placeholder="CEP"/>
                        <button className="bg-red-600 text-white rounded-xl p-2 flex justify-center items-center"><IconSearch className="font-black"/></button>
                        </div>
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[95%]" type="text" name="Rua" id="Rua" placeholder="Rua" />
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[46%]" type="text" name="Numero" id="Numero" placeholder="Número"/>
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[46%]" type="text" name="Complemento" id="Complemento" placeholder="Complemento"/>
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[38%]" type="text" name="Bairro" id="Bairro" placeholder="Bairro"/>
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[38%]" type="text" name="Cidade" id="Cidade" placeholder="Cidade"/>
                        <input className="bg-gray-200 rounded-md m-2 p-2 w-[10%]" type="text" name="UF" id="UF" placeholder="UF"/>
                    </form> 
                </div>
                
                
                
                <div>
                    Pagamento
                </div>


            </div>
            <div className="w-[100%] sm:w-[45%]">
                Resumo do pedido
            </div>
        </div>
    </Navegacao>
</div>
    )
}