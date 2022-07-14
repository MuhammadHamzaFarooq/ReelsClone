import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const singUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  //  Component DidMount style syntax
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  const store = {
    user,
    singUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={store}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
