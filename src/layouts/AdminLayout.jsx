import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Aside from "./Aside";

export default function AdminLayout() {
    return (
        <>
            <main className="flex min-h-screen flex-col" >
                <Header/>
                <section id="top" className="grow flex">
                    <Aside/>
                    <div className="border-l overflow-auto h-screen border-l-gray-200 p-4 w-[85%]" >
                        <Outlet/>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}