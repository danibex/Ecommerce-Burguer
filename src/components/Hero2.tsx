import mulherHero from "@/images/mulher-hero.png"
import Image from "next/image"
import Link from "next/link"
export default function Hero2() {
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]"
    return(
        <div className="flex sm:flex-row flex-col justify-center items-center w-[100%] px-5 py-20 gap-2">
            <div className="flex justify-center items-center w-1/2">
                <Image src={mulherHero} alt="Mulher" className="w-[70%]"/>
            </div>
            <div className="w-1/2 sm:block flex flex-col justify-center items-center">
                <h1 className="text-2xl font-black my-8 w-[70%]">Nossos produtos são 100% originais</h1>
                <p className="my-8 w-[70%]">Nosso delivery é mais rápido que descongelar aquela comida</p>
                <Link className={`my-8 ${estiloBotao}`} href={""}>Ver Cardápio</Link>
            </div>
        </div>
    )
}