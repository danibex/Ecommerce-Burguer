import Cards1 from "@/components/Cards1";
import CardsPromo from "@/components/CardsPromo";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Navegacao from "@/components/Navegacao";
import Image from "next/image";
import logoPizza from "@/images/logo-pizza-estendida.png"
export default function Home() {
    return(
        <div className="h-[100vh] p-1 m-0">
            <Navegacao>
                <Hero1/>
                <Cards1/>
                <Hero2/>
                <CardsPromo/>
                <Image className="w-[100%] h-[250px] mt-32" src={logoPizza} alt="Logo pizza estendida"/>
            </Navegacao>
        </div>
    )
}