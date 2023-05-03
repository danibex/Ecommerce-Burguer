import Cards1 from "@/components/Cards1";
import Hero1 from "@/components/Hero1";
import Navegacao from "@/components/Navegacao";

export default function Home() {
    return(
        <div className="h-[100vh] p-1">
            <Navegacao>
                <Hero1/>
                <Cards1/>
            </Navegacao>
        </div>
    )
}