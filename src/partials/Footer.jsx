export default function Footer() {
    return (
        <>
            <footer className="shadow flex relative bg-slate-800 text-white flex-col  p-10">
                <div className="flex justify-center items-center" >
                    <form className="flex justify-center items-center" action="">
                        <input className=" text-slate-900 rounded-r-none bg-gray-100 w-90 p-3" placeholder="Recherche..." type="search" name="" id="" />
                        <button type="submit" className="bg-green-600 rounded-r text-white p-3" >
                            <i className="fa fa-search" ></i>
                        </button>
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
                    <ul className="md:text-right text-right">
                        <li className="my-3" >Lorem.</li>
                        <li className="my-3" >Molestias.</li>
                        <li className="my-3" >Dolorem.</li>
                    </ul>
                </div>
                <div className="flex  justify-center items-center">
                    <p> &copy; Lorem ipsum dolor sit amet.</p>
                </div>
                <a className="absolute right-4 -top-2 rounded-t h-[35px] w-[50px] flex justify-center items-center cursor-pointer bg-green-600" href="#top">
                    <i className="fas fa-arrow-up arrow-up"></i>
                </a>
            </footer>
        </>
    )
}