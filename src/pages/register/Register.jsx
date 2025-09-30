import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth ,inscrire} from "../../Context/Auth";

export default function Register() {

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [user, setUser] = useState({
        first_name: "",
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.password === user.password_confirmation) {
            const res = inscrire({
                first_name: user.first_name + user.last_name,
                email: user.email,
                password: user.password
            })
            return res.succes ? navigate("/login") : setError(res.message)
        }
        setError('Mot de passe ne correspondent pas')
        return ;
    }


    return (
        <>
            <form onSubmit={onSubmit} className="w-[500px] md:shadow px-6 py-4 flex flex-col gap-3 bg-white rounded" action="" method="post">
                <p className="text-center font-bold text-2xl text-slate-800 mb-4">Inscription</p>
                {
                    error && <p className="bg-red-200 text-center p-1 rounded">{error}</p>
                }

                {/* first_name de l utilisateur */}

                <div>
                    <label htmlFor="first_name">Nom</label>
                    <input value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} className="p-3 mt-2 bg-gray-200 w-full" type="text" name="first_name" id="irst_name" />
                </div>

                {/* prefirst_name de l utilisateur  */}
                <div>
                    <label htmlFor="last_name">Prenom(s)</label>
                    <input value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} className="p-3 mt-2 bg-gray-200 w-full" type="text" name="last_name" id="last_name" />
                </div>

                {/* email de l utilisateur */}
                <div>
                    <label htmlFor="email">Adresse email</label>
                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="p-3 mt-2 bg-gray-200 w-full" type="email" name="email" id="email" />
                </div>

                {/* mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="email">Mot de passe</label>
                    <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="p-3 mt-2 bg-gray-200 w-full" type="password" name="password" id="password" />
                </div>

                {/*Confirmation mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="password2">Confirmation</label>
                    <input value={user.password_confirmation} onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })} className="p-3 mt-2 bg-gray-200 w-full" type="password" name="password2" id="password2" />
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