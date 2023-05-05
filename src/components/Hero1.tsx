import hamburguerLateral from '@/images/hamburguer-lateral-grande.png'
import { IconAccessible, IconBeer, IconChefHat, IconShoppingCart } from '@tabler/icons-react'
import Image from 'next/image'
export default function Hero1() {
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]"
    
    const scrollToCardapio = () => {
        const cardapioElement:any = document.getElementById("cardapio");
        cardapioElement.scrollIntoView({ behavior: "smooth" });
      };
    
    return(
        <div className="flex justify-center items-center flex-col sm:flex-row W-[100%] m-5">
            <div className="w-[100%] sm:w-[60%] flex flex-col justify-center items-center sm:justify-around sm:items-start">
                <div className='sm:block flex flex-col sm:flex-row justify-center items-center'>
                    <h1 className='text-3xl w-[100%] sm:w-[50%] my-2 font-black '>Receba seu pedido em até 30 minutos</h1>
                    <h2 className='text-xl w-[100%] sm:w-[50%] my-2'>Nosso delivery é mais rapido que descongelar aquela comida</h2>
                <button className={estiloBotao} onClick={scrollToCardapio}>Ver Cardápio</button >
                </div>
                <div className='w-[100%] my-8 flex flex-col justify-center items-center'>
                    <ul className='flex flex-row w-[100%] m-1 sm:justify-start justify-center items-center'>
                        <li className='m-2 flex flex-nowrap'><IconShoppingCart className='mx-1 rounded-full bg-red-600 text-white p-1'/>Lorem ipsum dolor sit.</li>
                        <li className='m-2 flex flex-nowrap'><IconAccessible className='mx-1 rounded-full bg-gray-600 text-white p-1'/>Lorem ipsum dolor sit.</li>
                    </ul>
                    <ul className='flex flex-row w-[100%] m-1 sm:justify-start justify-center items-center'>
                        <li className='m-2 flex flex-nowrap'><IconBeer className='mx-1 rounded-full bg-green-600 text-white p-1'/>Lorem ipsum dolor sit.</li>
                        <li className='m-2 flex flex-nowrap'><IconChefHat className='mx-1 rounded-full bg-yellow-600 text-white p-1'/>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
            </div>
            <div className="w-[40%] flex justify-center items-center text-center"><Image src={hamburguerLateral} alt="Hamburguer Lateral Grande"/></div>
        </div>
    )
}