import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function Auth({ children }) {
    const USER_KEY = "users"
    const CURRENT_KEY = 'currentUser'

    const [User, setUser] = useState()

    //Executé une fois au demarrage
    useEffect(() => {
        const storedUser = localStorage.getItem(CURRENT_KEY);
        console.log("User actif dans localStorage :" + storedUser)
        console.log("User stocké dans localStorage :" + localStorage.getItem(USER_KEY))
        storedUser ? JSON.parse(storedUser) : null
        setUser(storedUser)
    }, [])


    {/*Inscription stocké dans localStorage*/ }
    const inscrire = (newUser) => {
        const users = JSON.parse(localStorage.getItem(USER_KEY)) || []

        if (users) {
            if (users.find(u => u.email === newUser.email)) {
                return { succes: false, message: "Utilisateur existe déjà" }
            }
        } 
        const updateUser = [...users, newUser]
        localStorage.setItem(USER_KEY, JSON.stringify(updateUser))
        return { succes: true, newUser }
    }

    {/*Verification pour le login */ }
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem(USER_KEY))
        if (!users) return 
        const user = users.find(u => u.email === email && u.password === password)
        if (!user) {
            return { succes: false, message: "Verifier votre identifiant" }
        }
        setUser(user);
        localStorage.setItem(CURRENT_KEY, JSON.stringify(user))
        return { succes: true, user }
    }

    {/**Deconnexion */ }
    const logout = () => {
        setUser(null);
        localStorage.removeItem(CURRENT_KEY)
    }

    return (
        <AuthContext.Provider value={{ User, login, logout, inscrire }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default Auth
