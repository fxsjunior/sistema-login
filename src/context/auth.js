import { paste } from "@testing-library/user-event/dist/paste";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("users_db");

        if (userToken && userStorage) {
            const hasUser = JSON.parse(userStorage)?.filter((user) => user.email);

            if (hasUser) setUser(hasUser[0])
        }

    }, [])

    const signin = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = userStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }))
                setUser({ email, password })
                return
            } else {
                return "Email ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrado"
        }
    }

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))

        const hasUser = usersStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            return "Já tem uma conta com esse e-mail";
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    }

    const signout = () => {
        setUser(null)
        localStorage.removeItem("user-token")
    }


    return (

        <AuthContext.Provider value={{user, signed: !!user, signin, signup, signout}}>
            {children}
        </AuthContext.Provider>
    )
}