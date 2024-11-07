import NavMenuMidt from "@/components/NavMenuMidt"
import NavMenuRight from "@/components/NavMenuRight"
import { SiApple } from "react-icons/si";


const NavMenuFull = () => {
    return <div className="NavMenuFull">
        <SiApple className="apple_icon" />
        <NavMenuMidt />
        <NavMenuRight />
    </div> 
}
 
export default NavMenuFull;