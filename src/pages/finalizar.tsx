import Navegacao from "@/components/Navegacao";
import { IconMapPin } from "@tabler/icons-react";

export default function Finalizar() {
    return (
<div className="h-[100vh] p-1 m-0">
    <Navegacao>
        <div className="flex flex-row w-[100%] h-full p-5 justify-center items-center">
            <div className="w-[55%] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-row"><IconMapPin className="text-red-600"/><h1>Endereço de Entrega</h1></div>
                    <p>Informe o endereço onde deseja receber o seu pedido.</p>   
                </div>
                
                
                
                <div>Pagamento</div>
            </div>
            <div className="w-[45%]">
                Resumo do pedido
            </div>
        </div>
    </Navegacao>
</div>
    )
}