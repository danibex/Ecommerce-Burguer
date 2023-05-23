import Image from "next/image"
import logoGrande from "../images/logo-grande-login.png"
import Formulario from "./components/Formulario"
import Titulo from "./components/Titulo"
import BotaoAncora from "./components/BotaoAncora"

interface LoginProps {

}

export default function Login(props: LoginProps) {
    return(
        <div className="flex md:flex-row flex-col gap-2 flex-nowrap justify-center items-center text-center h-[100vh]">
            <div  className="w-1/2 md:h-[100%] flex flex-nowrap justify-center items-center text-center">
                <Image src={logoGrande} alt="Entregador de pizza"/>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-[50%]">
                <Titulo>Testando GitHubActions</Titulo>
                <Formulario/>
                <div className="flex justify-start text-left flex-nowrap">
                <BotaoAncora url="http://www.google.com.br">Cadastre-se</BotaoAncora>
                <BotaoAncora url="http://www.google.com.br">Esqueçeu a senha?</BotaoAncora>
                </div>
            </div>
        </div>
    )
}