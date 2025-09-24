import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <>
            <header className="flex justify-between items-center z-50 sticky top-0 px-4 py-3 shadow bg-white">
                {/* logo  */}
                <p className="font-bold text-3xl md:pr-25">LOGO</p>

                {/* lien de navigation  */}
                <nav className="flex justify-between gap-10 items-center">
                    <NavLink className="p-3 hover:bg-gray-200 rounded" to="/">Home</NavLink>
                    <NavLink className="p-3 hover:bg-gray-200 rounded" to="/about">About</NavLink>
                    <NavLink className="p-3 hover:bg-gray-200 rounded" to="/profile">Profile</NavLink>
                    <NavLink className="p-3 hover:bg-gray-200 rounded" to="/forum">Forum</NavLink>
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