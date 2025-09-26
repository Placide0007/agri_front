import { Link } from "react-router-dom"
import jubotron_image from "../../assets/jumbotron.png"
import image1 from "../../assets/moissonneuse-batteuse-sur-le-terrain.jpg"
import image2 from "../../assets/pexels-nc-farm-bureau-mark-2252584.jpg"
export default function Home() {
    return (
        <>
            {/* landing page (Page de presentation du site) */}
            <section className="min-h-screen  flex justify-center  items-center" id="hero">
                <div className=" gap-5 max-w-[850px]  flex justify-center items-center flex-col" >
                    <p className="text-white font-bold text-center  text-7xl " >Lorem ipsum dolor sit amet adipisicing.</p>
                    <p className="text-slate-200" >Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <a className="py-3 px-6 bg-green-600 text-white" href="#jumbotron">Voir les formations</a>
                </div>
            </section>

            <section id="jumbotron" className="p-5 bg-gray-50" >
                <div className="p-10 flex justify-center items-center gap-7 flex-col" >
                    <p className="text-5xl font-extrabold">Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className=" grid md:grid-cols-3 grid-cols-1 md:p-10 p-1  gap-5">

                    <div className="shadow-lg hover:-translate-y-4 bg-white duration-300  rounded w-full">
                        <h1 className=" text-center  font-semibold p-4" >Lorem ipsum dolor sit amet.</h1>
                        <div>
                            <img className="hover:grayscale-75" src={image2} alt="image2" />
                        </div>
                        <div className="p-3" >
                            <button className="bg-green-600 py-1 px-3 rounded cursor-pointer text-white" >Voir</button>
                        </div>
                    </div>

                    <div className="shadow-lg hover:-translate-y-4 bg-white duration-300  rounded w-full">
                        <h1 className=" text-center  font-semibold p-4" >Lorem ipsum dolor sit amet.</h1>
                        <div>
                            <img className="hover:grayscale-75" src={image2} alt="image2" />
                        </div>
                        <div className="p-3" >
                            <button className="bg-green-600 py-1 px-3 rounded cursor-pointer text-white" >Voir</button>
                        </div>
                    </div>

                    <div className="shadow-lg hover:-translate-y-4 bg-white duration-300  rounded w-full">
                        <h1 className=" text-center  font-semibold p-4" >Lorem ipsum dolor sit amet.</h1>
                        <div>
                            <img className="hover:grayscale-75" src={image2} alt="image2" />
                        </div>
                        <div className="p-3" >
                            <button className="bg-green-600 py-1 px-3 rounded cursor-pointer text-white" >Voir</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" >
                <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                    <div className="flex justify-center items-center flex-col gap-4" >
                        <p className="text-3xl font-bold" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, pariatur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit explicabo architecto, ullam dolore fugiat nisi, repudiandae, exercitationem animi culpa accusantium optio quis rem pariatur a necessitatibus modi vel sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odit, ad dolore perspiciatis fugiat voluptas vitae accusamus laborum! Facere rerum doloribus consequatur accusantium consequuntur molestias quidem soluta velit sit iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe ratione nesciunt voluptates, exercitationem ab quo excepturi obcaecati voluptatem quidem quibusdam, dolor at? Odio debitis nulla laudantium sapiente eveniet maxime.</p>
                    </div>

                    <div className="  flex justify-center items-center" >
                        <img src={jubotron_image} width="60%" className=" z-20 grayscale-0 hover:grayscale-75 hover:-translate-y-2 duration-300" alt="jubotron_image" />
                    </div>
                </div>
            </section>
        </>
    )
}