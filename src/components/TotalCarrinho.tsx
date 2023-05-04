export default function TotalCarrinho() {
    const estiloBotao = "flex justify-center items-center bg-red-700 text-white text-lg rounded-lg mx-4 my-6 w-[200px] h-[50px]"
    return(
        <div className=" p-3 bg-white w-[300px] fixed flex flex-col justify-center items-center rounded-lg shadow-lg bottom-2 right-2">
            <p className="font-semibold pb-0 pt-2 text-3xl">R$ 15,00</p>
            <button className={`${estiloBotao} `}>Finalizar</button>
        </div>
    )
}