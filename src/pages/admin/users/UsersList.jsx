import image from "../../../assets/1.jpg"

export default function UsersList() {
    return (
        <>
            <table className="table-auto w-full text-center" >
                <thead>
                    <tr className="[&_th]:border [&_th]:p-2 [&_th]:bg-slate-600 [&_th]:text-white [&_th]:border-gray-300" >
                        <th>order</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Profile</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="[&_td]:border [&_td]:p-2 [&_td]:border-gray-300" >
                        <td>1</td>
                        <td>Rasoanandrasana</td>
                        <td>Rasoa</td>
                        <td>
                            <div className="flex justify-center items-center" >
                                <img src={image} alt="jumbotron" className="w-[20px]" />
                            </div>
                        </td>
                        <td>rasoa@gmail.com</td>
                        <td>user</td>
                        <td>
                            <div className="flex justify-center items-center gap-5" >
                                <button className="cursor-pointer bg-green-600 text-white py-1 px-3 rounded" >Editer</button>
                                <button className="rounded bg-red-600 py-1 px-3 text-white cursor-pointer">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <tr className="[&_td]:border [&_td]:p-2 [&_td]:border-gray-300" >
                        <td>1</td>
                        <td>Rasoanandrasana</td>
                        <td>Rasoa</td>
                        <td>
                            <div className="flex justify-center items-center" >
                                <img src={image} alt="jumbotron" className="w-[20px]" />
                            </div>
                        </td>
                        <td>rasoa@gmail.com</td>
                        <td>user</td>
                        <td>
                            <div className="flex justify-center items-center gap-5" >
                                <button className="cursor-pointer bg-green-600 text-white py-1 px-3 rounded" >Editer</button>
                                <button className="rounded bg-red-600 py-1 px-3 text-white cursor-pointer">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <tr className="[&_td]:border [&_td]:p-2 [&_td]:border-gray-300" >
                        <td>1</td>
                        <td>Rasoanandrasana</td>
                        <td>Rasoa</td>
                        <td>
                            <div className="flex justify-center items-center" >
                                <img src={image} alt="jumbotron" className="w-[20px]" />
                            </div>
                        </td>
                        <td>rasoa@gmail.com</td>
                        <td>user</td>
                        <td>
                            <div className="flex justify-center items-center gap-5" >
                                <button className="cursor-pointer bg-green-600 text-white py-1 px-3 rounded" >Editer</button>
                                <button className="rounded bg-red-600 py-1 px-3 text-white cursor-pointer">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}