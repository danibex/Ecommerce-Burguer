import Endereco from "@/components/Endereco";
import Navegacao from "@/components/Navegacao";
import {  IconCashBanknote, IconCreditCard, IconQrcode, IconWallet } from "@tabler/icons-react";
import Image from "next/image";
import Visa from "@/images/Bandeiras/Visa.png"
import Master from "@/images/Bandeiras/Master.png"
import Cielo from "@/images/Bandeiras/Cielo.png"
export default function Finalizar() {
    return (
<div className="h-[100vh] p-1 m-0">
    <Navegacao>
        <div className="flex flex-col sm:flex-row w-[100%] h-full p-5 justify-center items-center">
            <div className="w-[100%] sm:w-[55%] flex flex-col justify-center items-center">
                <Endereco/>
                <div className="flex flex-col justify-start items-start shadow-xl p-5 rounded-lg w-[100%] my-3">
                    <div className="flex flex-row justify-center items-center"><IconWallet size={25} className="text-red-600"/><h1 className="text-2xl font-black">Pagamento</h1></div>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <h2 className="text-lg font-bold">Aceitamos:</h2>
                    <div className="flex flex-row w-[100%] justify-between p-2 items-center my-2">
                        <Image src={Visa} alt="Bandeira Visa"/>
                        <Image src={Master} alt="Bandeira Master"/>
                        <Image src={Cielo} alt="Bandeira Cielo"/>
                    </div>
                    <div className="flex flex-row justify-between items-center w-[100%] my-2">
                        <button className="flex fled-row hover:bg-gray-400 active:bg-gray-500 justify-around bg-gray-300 text-black rounded-md p-3 font-bold"><IconCreditCard className="mr-2 text-red-500"/>Débito</button>
                        <button className="flex fled-row hover:bg-gray-400 active:bg-gray-500 justify-around bg-gray-300 text-black rounded-md p-3 font-bold"><IconCreditCard className="mr-2 text-red-500"/>Credito</button>
                        <button className="flex fled-row hover:bg-gray-400 active:bg-gray-500 justify-around bg-gray-300 text-black rounded-md p-3 font-bold"><IconCashBanknote className="mr-2 text-red-500"/>Dinheiro</button>
                        <button className="flex fled-row hover:bg-gray-400 active:bg-gray-500 justify-around bg-gray-300 text-black rounded-md p-3 font-bold"><IconQrcode className="mr-2 text-red-500"/>Pix</button>
                    </div>
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