import { IconBaguette } from "@tabler/icons-react";
import CardsItem from "./CardsItem";
export default function Cards1() {
    return(
        <div className="flex flex-col sm:flex-row justify-center items-center w-[100%] p-10">
            <CardsItem cor="bg-red-600" titulo="Hamburgues" descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit." icon={<IconBaguette width={50} height={50}/>}/>
            <CardsItem cor="bg-yellow-600" titulo="Hamburgues" descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit." icon={<IconBaguette width={50} height={50}/>}/>
            <CardsItem cor="bg-green-600" titulo="Hamburgues" descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit." icon={<IconBaguette width={50} height={50}/>}/>
        </div>
    )
}