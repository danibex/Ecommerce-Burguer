import {  IconCashBanknote, IconCreditCard, IconQrcode, IconWallet } from "@tabler/icons-react";
import Image from "next/image";
import Visa from "@/images/Bandeiras/Visa.png"
import Master from "@/images/Bandeiras/Master.png"
import Cielo from "@/images/Bandeiras/Cielo.png"
export default function FormasDePagamento() {
    return(
    <div className="flex flex-col justify-start items-start shadow-xl p-5 rounded-lg w-[100%] my-3">
        <div className="flex flex-row justify-center items-center"><IconWallet size={25} className="text-red-600"/><h1 className="text-2xl font-black">Pagamento</h1></div>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <h2 className="text-lg font-bold">Aceitamos:</h2>
        <div className="flex  flex-row w-[100%] justify-between p-2 items-center my-2">
            <Image width={50} src={Visa} alt="Bandeira Visa"/>
            <Image width={50} src={Master} alt="Bandeira Master"/>
            <Image width={50} src={Cielo} alt="Bandeira Cielo"/>
        </div>
        <div className="flex flex-wrap flex-row justify-center gap-3 items-center w-[100%] my-2">
            <button className="flex flex-col my-2 sm:fled-row hover:bg-gray-400 active:bg-gray-500 justify-center items-center bg-gray-300 text-black rounded-md p-3 font-bold min-w-[90px] w-[20%]"><IconCreditCard className="mr-2 text-red-500"/>Débito</button>
            <button className="flex flex-col my-2 sm:fled-row hover:bg-gray-400 active:bg-gray-500 justify-center items-center bg-gray-300 text-black rounded-md p-3 font-bold min-w-[90px] w-[20%]"><IconCreditCard className="mr-2 text-red-500"/>Credito</button>
            <button className="flex flex-col my-2 sm:fled-row hover:bg-gray-400 active:bg-gray-500 justify-center items-center bg-gray-300 text-black rounded-md p-3 font-bold min-w-[90px] w-[20%]"><IconCashBanknote className="mr-2 text-red-500"/>Dinheiro</button>
            <button className="flex flex-col my-2 sm:fled-row hover:bg-gray-400 active:bg-gray-500 justify-center items-center bg-gray-300 text-black rounded-md p-3 font-bold min-w-[90px] w-[20%]"><IconQrcode className="mr-2 text-red-500"/>Pix</button>
        </div>
    </div>
    )
}