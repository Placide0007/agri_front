import image from "../../../assets/1.jpg"

export default function CulturesList() {
    return (
        <>
            <div className="flex justify-end items-center p-2">
                <button className="text-white rounded bg-green-600 py-2 px-4" >Ajouter</button>
            </div>
            <table className="table-auto w-full text-center" >
                <thead>
                    <tr className="[&_th]:border [&_th]:p-2 [&_th]:bg-slate-600 [&_th]:text-white [&_th]:border-gray-300" >
                        <th>order</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Date de creation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="[&_td]:border [&_td]:p-2 [&_td]:border-gray-300" >
                        <td>1</td>
                        <td>Culture de manioc</td>
                        <td>Lorem, ipsum dolor....</td>
                        <td>
                            <div className="flex justify-center items-center" >
                                <img src={image} alt="jumbotron" className="w-[20px]" />
                            </div>
                        </td>
                        <td>Mar 25</td>
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