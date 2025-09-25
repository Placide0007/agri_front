import { Outlet } from "react-router-dom";
import Footer from "../partials/Footer";

export default function BareLayout() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <section id="top" className="flex justify-center bg-gray-100 items-center min-h-screen">
                    <Outlet />
                </section>
                <Footer/>
            </main>
        </>
    )
}