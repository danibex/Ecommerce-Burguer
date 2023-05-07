import contatoImage from "@/images/mao-segurando-lanche.png"
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react"
import Image from "next/image"
export default function Contato() {
    return(
        <div className="bg-red-700 p-5 flex flex-row justify-around items-center">
            <div className="m-0">
                <Image src={contatoImage} alt={"Mão segurando sacola de lanche"}/>
            </div>
            <div className="bg-white sm:w-[400px] sm:h-[400px] h-auto w-auto rounded-3xl px-5 py-0 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-start w-[100%]">
                    <h1 className="font-medium text-3xl my-1">Entre em Contato</h1>
                    <p className="my-1 font-normal text-xl">Faça Seu Pedido Por Telefone</p>
                    <p className="my-1 text-3xl text-red-600">71 9 98765-4321</p>
                </div>
                <div className="flex flex-row my-1">
                    <div>
                        <div>
                            <h2 className="text-2xl font-semibold">Endereço:</h2>
                            <p className="text-gray-600 text-lg">Estrada de Campinas, 395</p>
                        </div>
                        <div className="my-2 flex flex-row justify-center items-center gap-3 mt-5"><IconBrandInstagram/><IconBrandFacebook/><IconBrandWhatsapp/></div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium text-center">Segunda a Sábado:</h3>
                        <p className="text-gray-600 text-lg text-center">17:00 ás 00:00</p>
                        <h3 className="text-2xl font-medium text-center">Domigo:</h3>
                        <p className="text-gray-600 text-lg text-center">16:00 ás 00:00</p>
                    </div>
                    </div>
            </div> 
        </div>
    )
}