import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <form className="w-[500px] md:shadow p-5 flex flex-col gap-3 bg-white rounded" action="" method="post">
                <p className="text-center font-bold text-2xl text-slate-800 mb-4">Inscription</p>
                {/* nom de l utilisateur */}
                <div>
                    <label htmlFor="first_name">Nom</label>
                    <input className="p-3 mt-2 bg-gray-200 w-full" type="text" name="first_name" id="irst_name"/>
                </div>
                {/* prenom de l utilisateur  */}
                <div>
                    <label htmlFor="last_name">Prenom(s)</label>
                    <input className="p-3 mt-2 bg-gray-200 w-full" type="text" name="last_name" id="last_name"/>
                </div>
                {/* email de l utilisateur */}
                <div>
                    <label htmlFor="email">Adresse email</label>
                    <input className="p-3 mt-2 bg-gray-200 w-full" type="email" name="email" id="email"/>
                </div>
                {/* mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="email">Mot de passe</label>
                    <input className="p-3 mt-2 bg-gray-200 w-full" type="password" name="password" id="password"/>
                </div>
                {/* bouton s'inscrire */}
                <div>
                    <button className="bg-green-600  text-white w-full cursor-pointer p-4 my-3" >Soumettre</button>
                </div>
                {/* lien alternative */}
                <div className="flex justify-center gap-3 items-center" >
                    <p>A deja un compte?</p>
                    <Link className="underline font-bold text-slate-800" to="/login" >Se connecter</Link>
                </div>

            </form>
        </>
    )
}