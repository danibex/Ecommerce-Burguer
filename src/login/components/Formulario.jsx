import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function FormularioLogin() {
  const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg m-4 w-[200px] h-[50px]";
  const estiloInput = "m-1 rounded-md h-8 p-2 bg-gray-400 text-white";
  const estiloFormulario = "flex flex-col items-center";
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function alterarUsuario(e) {
    setUsuario(e.target.value);
  }

  function alterarSenha(e) {
    setSenha(e.target.value);
  }

  function handleEntrarClick() {
    if (usuario === "admin" && senha === "admin") {
      router.push("/home");
    } else {
      window.alert("Usuário ou senha incorretos!!!");
    }
  }

  return (
    <>
      <form className={estiloFormulario}>
        <label htmlFor="username">Usuário:</label>
        <input
          value={usuario}
          onChange={alterarUsuario}
          className={estiloInput}
          type="text"
          placeholder="Login"
          name="login"
        />
        <label htmlFor="password">Senha:</label>
        <input
          value={senha}
          onChange={alterarSenha}
          className={estiloInput}
          type="password"
          placeholder="Senha"
          name="senha"
        />
      </form>
      <button onClick={handleEntrarClick} className={estiloBotao}>
        Entrar
      </button>
    </>
  );
}
