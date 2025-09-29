import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

{/*Inscription stocké dans localStorage*/}
export const inscrire = (user) => {
    const users = JSON.parse(localStorage.getItem('Users') || '[]')
    if (users.find(u => u.email === user.email)) {
        return { succes: false, message: "Utilisateur existe déjà" }
    }
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users))
    return { succes: true, user }
}

{/*Fonction principale de context user*/}
function Auth({ children }) {

    const [User, setUser] = useState(() => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null
    })

    {/*Verification pour le login */}
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('Users'))
        const user = users.find(u => u.email === email && u.password === password)
        if (!user) {
            return { succes: false, message: "Verifier votre identifiant" }
        }
        setUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user))
        return { succes: true, user }
    }

    {/**Deconnexion */}
    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser')
    }

    return (
        <AuthContext.Provider value={{ User, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default Auth
