import Endereco from "@/components/Endereco";
import Navegacao from "@/components/Navegacao";
import FormasDePagamento from "@/components/FormasDePagamento";
import ResumoCompra from "@/components/ResumoCompra";

export default function Finalizar() {
    return (
<div className="h-[100vh] p-1 m-0">
    <Navegacao>
        <div className="flex flex-col sm:flex-row w-[100%] h-full p-5 justify-center items-center">
            <div className="w-[100%] sm:w-[55%] flex flex-col justify-center items-center">
                <Endereco/>
                <FormasDePagamento/>
            </div>
            <ResumoCompra/>
        </div>
    </Navegacao>
</div>
    )
}