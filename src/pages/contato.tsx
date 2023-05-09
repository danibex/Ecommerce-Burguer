import Contato from "@/components/Contato";
import Navegacao from "@/components/Navegacao";


export default function Home() {
    return(
        <div className="h-[100vh] p-1 m-0">
            <Navegacao>
               <Contato/>
            </Navegacao>
        </div>
    )
}