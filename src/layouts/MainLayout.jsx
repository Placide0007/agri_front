import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function MainLayout() {
    return (
        <>
            <main className="flex min-h-screen flex-col" >
                <Header />
                <section className="grow">
                    <Outlet />
                </section>
                <Footer />
            </main>
        </>
    )
}