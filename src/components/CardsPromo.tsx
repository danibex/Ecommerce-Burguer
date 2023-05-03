import Image from "next/image"
import promo1 from "@/images/burguer-promo1.png"
import promo2 from "@/images/fries-promo2.png"
import promo3 from "@/images/soda-promo3.png"
export default function CardsPromo() {
    return(
        <div className="flex sm:flex-row flex-col justify-center items-center p-2">
            <Image className="px-2 py-5" src={promo1} width={260} alt="Promoção 1"/>
            <Image className="px-2 py-5" src={promo2} width={280} alt="Promoção 2"/>
            <Image className="px-2 py-5" src={promo3} width={265} alt="Promoção 3"/>
        </div>
    )
}