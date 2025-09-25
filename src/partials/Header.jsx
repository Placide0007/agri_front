import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Microsoft-logo.svg";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); 
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* HEADER */}
      <header className="flex justify-between items-center sticky top-0 z-50 px-4 py-0 bg-white shadow">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[130px] cursor-pointer grayscale-0 hover:grayscale-75 hover:-translate-y-1 duration-300"
        />

        {/* Nav links  pour les grand ecrans */}
        <nav className="hidden md:flex gap-10 items-center">
          <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/">Accueil</NavLink>
          <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/about">A propos</NavLink>
          <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/profile">Profile</NavLink>
          <NavLink className="p-3 font-semibold hover:bg-gray-200 rounded" to="/forum">Forum</NavLink>
        </nav>

        {/* Boutons d'authentification   pour les grands ecrans */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink className="border text-green-600 border-green-600 px-3 py-2 rounded-xs" to="/register">S'inscrire</NavLink>
          <NavLink className="bg-green-600 border border-green-600 px-3 py-2 rounded-xs text-white" to="/login">Se connecter</NavLink>
        </div>

        {/* Hamburger button - Mobile seulement */}
        <button onClick={toggleSidebar} className="md:hidden">
          <i className="text-slate-800 cursor-pointer text-2xl fas fa-bars"></i>
        </button>
      </header>

      {/* Sidebar - pour mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header dans le sidebar */}
        <div className="flex justify-between items-center px-4 py-3">
          <img src={logo} alt="logo" className="w-28" />
          <button onClick={closeSidebar} className="text-xl cursor-pointer">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Nav links - pour Mobile */}
        <nav className="flex flex-col gap-2 px-4 py-4">
          <NavLink onClick={closeSidebar} className="p-2 font-semibold hover:bg-gray-100 rounded" to="/">Accueil</NavLink>
          <NavLink onClick={closeSidebar} className="p-2 font-semibold hover:bg-gray-100 rounded" to="/about">A propos</NavLink>
          <NavLink onClick={closeSidebar} className="p-2 font-semibold hover:bg-gray-100 rounded" to="/profile">Profile</NavLink>
          <NavLink onClick={closeSidebar} className="p-2 font-semibold hover:bg-gray-100 rounded" to="/forum">Forum</NavLink>
          <NavLink onClick={closeSidebar} className="border text-green-600 border-green-600 px-3 py-2 rounded text-center" to="/register">S'inscrire</NavLink>
          <NavLink onClick={closeSidebar} className="bg-green-600 border border-green-600 px-3 py-2 rounded text-white text-center" to="/login">Se connecter</NavLink>
        </nav>
      </aside>
    </>
  );
}
