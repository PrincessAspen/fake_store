import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);

    useEffect(() => {
        if(session) {
            const accessToken = session.access_token;
            sessionStorage.setItem('sb-access-token', accessToken)
            sessionStorage.setItem('sb-user', userId);
        }

    }, [session, user])

    return (
        <AuthContext.Provider value={{user, setUser, session, setSession}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext)
}