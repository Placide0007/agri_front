import { Outlet } from "react-router-dom";

export default function AdminLayout(){
    return (
        <>
            <section className="container mx-auto">
                <Outlet/>
            </section>
        </>
    )
}