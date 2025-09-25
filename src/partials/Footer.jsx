import arrow_up from "../assets/arrow-up.svg"
export default function Footer() {
    return (
        <>
            <footer className="shadow flex relative bg-slate-800 text-white flex-col  p-10">
                <div className="flex justify-center items-center" >
                    <form className="flex justify-center items-center" action="">
                        <input className=" text-slate-900 rounded-r-none bg-gray-100 w-90 p-3" placeholder="Question...." type="search" name="" id="" />
                        <button type="submit" className="bg-green-600 text-white p-3" >Envoyer</button>
                    </form>
                </div>
                <div className="grow grid grid-cols-3  p-10" >
                    <ul className="text-left" >
                        <li className="my-3" >Lorem.</li>
                        <li className="my-3" >Molestias.</li>
                        <li className="my-3" >Dolorem.</li>
                    </ul>
                    <ul className="md:text-center text-center" >
                        <li className="my-3" >Lorem.</li>
                        <li className="my-3" >Molestias.</li>
                        <li className="my-3" >Dolorem.</li>
                    </ul>
                    <ul className="md:text-right text-right" >
                        <li className="my-3" >Lorem.</li>
                        <li className="my-3" >Molestias.</li>
                        <li className="my-3" >Dolorem.</li>
                    </ul>
                </div>
                <div className="flex  justify-center items-center" >
                    <p> &copy; Lorem ipsum dolor sit amet.</p>
                </div>
                <a className="absolute right-1/2 -top-6 rounded-t-xl cursor-pointer bg-green-600 p-3" href="#top">
                    <img src={arrow_up} className="" alt="arrow_up" />
                </a>
            </footer>
        </>
    )
}