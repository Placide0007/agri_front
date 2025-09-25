import { NavLink } from "react-router-dom";
import logo from "../assets/Microsoft-logo.svg"

export default function Header(){
    return (
        <>
            <header className="flex justify-between items-center z-50 sticky top-0 px-4 py-0 shadow bg-white">
                {/* logo  */}
                <img src={logo} alt="logo" className="w-[130px] cursor-pointer grayscale-0 hover:grayscale-75 hover:-translate-y-1 duration-300" />

                {/* lien de navigation  */}
                <nav className="flex  justify-between gap-10 items-center ">
                    <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/">Home</NavLink>
                    <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/about">About</NavLink>
                    <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/profile">Profile</NavLink>
                    <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/forum">Forum</NavLink>
                </nav>

                {/* lien pour l authentification */}
               <div className="flex justify-center items-center gap-4" >
                    <NavLink className="border text-green-600 border-green-600 px-3 py-2 rounded-xs" to="/register">S'inscrire</NavLink>
                    <NavLink className="bg-green-600 border border-green-600 px-3 py-2 rounded-xs text-white" to="/login">Se connecter</NavLink>
               </div>
            </header>
        </>
    )
}