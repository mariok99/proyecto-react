import { createContext, useState, useContext } from "react";
import { useEffectLoading } from "../utils/myUseEffect.jsx";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config.js";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const callback = () => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        })
        return unsubscribe;
    }

    useEffectLoading(callback, [], setLoading);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("Occur an error while logging out", error);
        }
    }

    //supongo que en este punto se renderiza los componentes dentro de un contexto
    //logueado.
    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}