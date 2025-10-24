import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import { useForm } from 'react-hook-form'

export default function Register() {

    //ceci utilise react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"})
    const { inscrire } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const onSubmit = (data) => {
        setError("")
        if (data.password === data.confirmPassword) {
            const res = inscrire({
                nom: `${data.firstname} ${data.lastname}` ,
                email: data.email,
                password: data.password
            })
            return res.succes ? navigate("/login") : setError(res.message)
        }
        setError('Mot de passe ne correspondent pas')
        return;
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] md:shadow p-6 flex flex-col gap-3 bg-white rounded" action="" method="post">
                <p className="text-center font-bold text-2xl text-slate-800 mb-4">Inscription</p>
                {
                    error !== "" && <p className="bg-red-200 text-center p-1 rounded">{error}</p>
                }

                {/* nom de l utilisateur */}
                <div>
                    <label htmlFor="first_name">Nom</label>
                    <input {...register('firstname', {
                        required: true
                    })} className="p-3 mt-2 bg-gray-200 w-full" type="text" />
                </div>

                {/* prenom de l utilisateur  */}
                <div>
                    <label htmlFor="lastname">Prenom(s)</label>
                    <input {...register('lastname')} className="p-3 mt-2 bg-gray-200 w-full" type="text" />
                </div>
                {/* email de l utilisateur */}
                <div>
                    <label htmlFor="email">Adresse email</label>
                    <input {...register('email', { required: true, message: "le champ email est obligatoire" })} className="p-3 mt-2 bg-gray-200 w-full" type="email" />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                {/* mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input {...register('password', { required: true })} className="p-3 mt-2 bg-gray-200 w-full" type="password" />
                </div>
                {/*Confirmation mot de passe de l'utilisateur */}
                <div>
                    <label htmlFor="confirmPassword">Confirmer Mot de passe</label>
                    <input {...register("confirmPassword", { required: true })} className="p-3 mt-2 bg-gray-200 w-full" type="password" />
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