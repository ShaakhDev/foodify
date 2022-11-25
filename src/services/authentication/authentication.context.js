import React, { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser,
        onLogin,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
