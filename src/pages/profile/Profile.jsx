import { useAuth } from "../../Context/Auth"
export default function Profile() {
    const { User } = useAuth()
    return (
        <>
            <p>vous êtes connecté en tant que {User.nom}</p>
        </>
    )
}