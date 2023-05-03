import Link from "next/link";
import React from "react";

export default function FomularioLogin() {
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg m-4 w-[200px] h-[50px]"
    const estiloInput = "m-1 rounded-md h-8 p-2 bg-gray-400 text-white"
    const estiloFormulario = "flex flex-col items-center"
    return (
        <>
        <form className={estiloFormulario}>
            <label htmlFor="username">Usuário:</label>
            <input className={estiloInput} type="text" placeholder="Login" name="login"/>
            <label htmlFor="password">Senha:</label>
            <input className={estiloInput} type="password" placeholder="Senha" name="senha"/>
        </form>
            <Link href="/home" className={estiloBotao}>Entrar</Link>
        </>
    )
}