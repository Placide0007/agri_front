import { Link } from "react-router-dom";


export default function Login() {
    return (
        <>
            <form  className="w-[500px] md:shadow p-5 flex flex-col gap-3 bg-white rounded" action="" method="post">
                <p className="text-center font-bold text-2xl text-slate-800 mb-4">Connexion</p>
                {/* email de l'utilisateur */}
                <div>
                    <label htmlFor="email">Adresse Email</label>
                    <input className="p-3 outline-green-600 mt-2 bg-gray-200 w-full" type="email" name="email" id="email"/>
                </div>
                {/* mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="email">Mot de passe</label>
                    <input className="p-3 mt-2 bg-gray-200 w-full" type="password" name="password" id="password"/>
                </div>
                {/* bouton d authentification */}
                <div>
                    <button className="bg-green-600  text-white w-full cursor-pointer p-4 my-3" >Se connecter</button>
                </div>
                {/* lien alternative */}
                <div className="flex justify-center gap-3 items-center" >
                    <p>Vous n'avez pas de compte?</p>
                    <Link className="underline font-bold text-slate-800" to="/register" >Creer un compte</Link>
                </div>
            </form>
        </>
    )
}