import { IconAddressBook, IconHome } from "@tabler/icons-react"
import MenuItem from "./MenuItem"

export default function Menu() {
    return(
    <> 
        <MenuItem url="/home"><IconHome/>Home</MenuItem>
        <MenuItem url="/cardapio"><IconAddressBook/>Cardápio</MenuItem>
        <MenuItem url="/contato"><IconAddressBook/>Contato</MenuItem>
    </>    
    )
}