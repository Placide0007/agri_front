import { Link } from "react-router-dom"
import jubotron_image from "../../assets/jumbotron.png"
export default function Home() {
    return (
        <>  
            {/* landing page (Page de presentation du site) */}
            <section className="min-h-screen  flex justify-center  items-center" id="hero">
                <div className=" gap-5 max-w-[850px]  flex justify-center items-center flex-col" >
                    <p className="text-white font-bold text-center  text-7xl" >Lorem ipsum dolor sit amet adipisicing.</p>
                    <p className="text-slate-200" >Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <Link className="py-3 px-6 bg-green-600 text-white" >Lorem, ipsum dolor.</Link>
                </div>
            </section>

            <section id="jumbotron" className="p-5 bg-gray-200 " >
                <p className="text-5xl font-extrabold text-center p-10">Lorem ipsum dolor sit amet.</p>
                <div className=" grid md:grid-cols-2 grid-cols-1 p-10 gap-3">
                    <div className="flex justify-center items-center flex-col gap-4" >
                        <p className="text-3xl font-bold" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, pariatur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est mollitia dicta libero non veritatis quisquam expedita iste optio. Vero autem quos, eius delectus iste porro ipsa enim asperiores tenetur?</p>
                    </div>
                    <div className="  flex justify-center items-center" >
                        <img src={jubotron_image} width="80%" className=" z-20 grayscale-0 hover:grayscale-75 hover:-translate-y-2 duration-300" alt="jubotron_image" />
                    </div>
                </div>
            </section>
        </>
    )
}