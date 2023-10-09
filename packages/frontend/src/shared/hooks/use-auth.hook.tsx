/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./use-local-storage.hook";
import { RouterKeys } from "../../router/keys";

type AuthProviderProp = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: string;
  login: (data: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProp) => {
  const [user, setUser] = useLocalStorage("TOKEN", null);
  const navigate = useNavigate();

  const login = async (data: string) => {
    setUser(data);
    navigate(RouterKeys.DASHBOARD);
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = React.useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext) as AuthContextType;
};
