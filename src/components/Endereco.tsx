import { IconMapPin, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export default function Finalizar() {
    const [cep, setCep] = useState("");
    const [cepRaw, setCepRaw] = useState("");
    const [enderecoCompleto, setEnderecoCompleto] = useState({logradouro: "", bairro: "", localidade: "", uf: ""})
    function FormatarCep(event: { target: { value: any; }; }) {
    let cepValue = event.target.value;

    // Remove tudo que não é número
    cepValue = cepValue.replace(/\D/g, "");

    // Formata o CEP com hífen
    const formattedCep = cepValue.replace(/^(\d{5})(\d{3})?$/, "$1-$2");

    // Atualiza o estado com o CEP formatado e não formatado
    setCep(formattedCep);
    setCepRaw(cepValue);
    console.log(cepRaw)
}

function preencherEndereco() {
const url = `https://viacep.com.br/ws/${cepRaw}/json/` 
    fetch(url)
        .then(resp =>  resp.json()) 
        .then(endereco => { setEnderecoCompleto(endereco); console.log(enderecoCompleto)})
        .catch(error => {
            window.alert(`[ERRO] ${error}`)
          })
}

    return (
        <div className="flex flex-col justify-start items-start shadow-lg p-3 rounded-lg">
            <div className="flex flex-row"><IconMapPin className="text-red-600"/><h1>Endereço de Entrega</h1></div>
            <p>Informe o endereço onde deseja receber o seu pedido:</p>  
            <form onSubmit={(e) => { e.preventDefault(); preencherEndereco() }}>
                <div className="w-[100%] flex justify-start items-center ">
                <input maxLength={8} onChange={FormatarCep} value={cep} className="bg-gray-200 rounded-md m-2 p-2 w-[40%]" type="text" name="CEP" id="CEP" placeholder="CEP"/>
                <button className="bg-red-600 text-white rounded-xl p-2 flex justify-center items-center"><IconSearch className="font-black"/></button>
                </div>
                <input className="bg-gray-200 rounded-md m-2 p-2 w-[95%]" type="text" name="Rua" id="Rua" placeholder="Rua" readOnly value={enderecoCompleto.logradouro}/>
                <input className="bg-gray-200 rounded-md m-2 p-2 w-[46%]" type="text" name="Numero" id="Numero" placeholder="Número" />
                <input className="bg-gray-200 rounded-md m-2 p-2 w-[46%]" type="text" name="Complemento" id="Complemento" placeholder="Complemento" />
                <input className="bg-gray-200 rounded-md m-2 p-2 w-[38%]" type="text" name="Bairro" id="Bairro" placeholder="Bairro" readOnly value={enderecoCompleto.bairro}/>
                <input className="bg-gray-200 rounded-md m-2 p-2 w-[38%]" type="text" name="Cidade" id="Cidade" placeholder="Cidade" readOnly value={enderecoCompleto.localidade}/>
                <input className="bg-gray-200 rounded-md m-2 p-2 w-[10%]" type="text" name="UF" id="UF" placeholder="UF" readOnly value={enderecoCompleto.uf}/>
            </form> 
        </div> 
    )
}