import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full
        py-5 flex items-center
        justify-center
        border-b
        
        bg-gray-700 
        border-gray-600
        
        "
        >  
        <Link to={`/event`} >
            <Logo />
        </Link>
        </header>
    )
}