import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [error, setError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        const res = login(user.email, user.password
                         
        return res.succes ? navigate("/") : setError(res.message)
    }

    return (
        <>
            <form onSubmit={onSubmit} className="w-[500px] md:shadow p-6 flex flex-col gap-3 bg-white rounded" action="" method="post">
                <p className="text-center font-bold text-2xl text-slate-800 mb-4">Connexion</p>
                {

                    error && error != "" && <p className="bg-red-200 text-center p-1 rounded">{error}</p>
                }
                
                {/* email de l'utilisateur */}
                <div>
                    <label htmlFor="email">Adresse Email</label>
                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="p-3 outline-green-600 mt-2 bg-gray-200 w-full" type="email" name="email" id="email" />

                    error && error!="" && <p className="bg-red-200 text-center p-1 rounded">{error}</p>
                 } 
                {/* email de l'utilisateur */}
                <div>
                    <label htmlFor="email">Adresse Email</label>
                    <input value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className="p-3 outline-green-600 mt-2 bg-gray-200 w-full" type="email" name="email" id="email"/>

                </div>
                {/* mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="password">Mot de passe</label>

                    <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="p-3 mt-2 bg-gray-200 w-full" type="password" name="password" id="password" />
                    <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className="p-3 mt-2 bg-gray-200 w-full" type="password" name="password" id="password"/>
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