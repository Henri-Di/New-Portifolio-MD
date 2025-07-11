import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface UserPayload {
  exp: number;
  iat: number;
  roles: string[];
  // adicione outros campos do payload do token se precisar
}

interface AuthContextType {
  token: string | null;
  role: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      try {
        const decoded = jwtDecode<UserPayload>(storedToken);
        setRole(decoded.roles[0] || null);
      } catch {
        setToken(null);
        setRole(null);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    const decoded = jwtDecode<UserPayload>(newToken);
    setRole(decoded.roles[0] || null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setRole(null);
  };

  const isAuthenticated = !!token;
  const isAdmin = role === "ROLE_ADMIN";

  return (
    <AuthContext.Provider value={{ token, role, login, logout, isAuthenticated, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
