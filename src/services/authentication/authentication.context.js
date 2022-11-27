import React, { useState, createContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message.toString());
        setIsLoading(false);
      });
  };

  const onLogout = async () => {
    await signOut(auth);
    setUser(null);
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser,
        onLogin,
        onRegister,
        onLogout,
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
