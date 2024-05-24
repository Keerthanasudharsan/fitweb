// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider1 = ({ children }) => {
    const [user, setUser] = useState(null);

    
    const loginUser = (userData) => {
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
