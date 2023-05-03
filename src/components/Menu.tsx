import Link from "next/link"
import MenuItem from "./MenuItem"

export default function Menu() {
    return(
    <> 
        <MenuItem url="/home">HOME</MenuItem>
        <MenuItem url="/">Loja</MenuItem>
        <MenuItem url="/">Contato</MenuItem>
        <MenuItem url="/">Minha Conta</MenuItem>
    </>    
    )
}