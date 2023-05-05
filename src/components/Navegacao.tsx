import Link from "next/link";
import logoMenor from "../images/logo-menor.png"
import Image from "next/image";
import { useState } from "react";
import { IconMenu2 } from '@tabler/icons-react';
import Menu from "./Menu";
interface NavegacaoProps {
    children: any
}
export default function Navegacao(props: NavegacaoProps) {   
const [toggle, setToggle] = useState(false)
const toggleMenu = () => {
    setToggle(!toggle)
}

    return(
        <>
        <div className="flex flex-row justify-around items-center">
            <div className="sm:hidden"><button onClick={toggleMenu}><IconMenu2 width={50} height={50}/></button></div>
            <div className="hidden sm:flex m-4">
            <Link className="ml-[-15px] flex justify-center items-center" href="/home"><Image src={logoMenor} alt="Logo Menor Hambuguer"width={100} height={100}/></Link>
            </div>
            <nav className="hidden sm:flex justify-center items-center">
                <ul className="flex flex-row justify-center items-center">
                    <Menu/>
                </ul>
            </nav>
            <div className="flex flex-row justify-center items-center">
                <Link className="m-2 flex justify-center items-center text-red-600 text-2xl" href="/">Criar Conta</Link>
                <Link className="m-2 flex justify-center items-center text-2xl bg-red-600 text-white rounded-md w-[100px] h-[50px]" href="/">Entrar</Link>
            </div>
        </div>
        
            <div>
            <nav className={`${toggle ? "flex" : "hidden"} flex-col justify-center items-center`}>
                <ul className="flex flex-col justify-center items-center">
                    <Menu/>
                </ul>
            </nav>
            </div>
    
        <div>
            {props.children}
        </div>
        </>
    )
}