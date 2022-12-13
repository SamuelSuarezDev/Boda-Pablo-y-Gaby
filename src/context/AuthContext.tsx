/* eslint-disable react/jsx-no-constructed-context-values */
import {
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCustomToken,
  } from "@firebase/auth";
  import { useNavigate } from "react-router-dom";
  import { createContext, FC, useContext, useEffect, useState } from "react";
  
  import { auth, db } from "../config/firebase";
  
  import { AuthContextType, User, UserConfig } from "./type";
  
  // CONTEXTS
  const AuthContext = createContext<AuthContextType>({} as AuthContextType);
  
  export const AuthProvider: FC<any> = ({ children }) => {
    const [userConfig, setUserConfig] = useState<UserConfig>();
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();
  
    useEffect(() => {
      onAuthStateChanged(auth, (users) => {
        if (users) {
          const { displayName, email, uid, photoURL } = users as UserConfig;
          const userConfigObj = {
            displayName,
            email,
            uid,
            photoURL,
          } as UserConfig;
          setUserConfig(userConfigObj);
        }
      });
    }, []);
  
    // eliminar los datos en el local y en firebase
    const cleanData = (): void => {
      localStorage.clear();
      setUser(undefined);
      setUserConfig(undefined);
      setUserConfig(undefined);
    };
    // google login
    const googleSignIn = (): void => {
      const provider = new GoogleAuthProvider();
      try {
        signInWithPopup(auth, provider);
      } catch (error) {
        cleanData();
      }
    };
  
    // logout
    const logOut = async (): Promise<void> => {
      await signOut(auth);
      cleanData();
    //   navigate("/login", { replace: true });
    };
  
    // login con token
    const getTokenFromJwt = async (token: string): Promise<void> => {
      try {
        await signInWithCustomToken(auth, token);
      } catch (error) {
        sessionStorage.removeItem("USER_CONFIG");
      }
    };
    const value: AuthContextType = {
      userConfig,
      setUserConfig,
      user,
      setUser,
      googleSignIn,
      getTokenFromJwt,
      logOut,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
  
  export const useAuth = (): AuthContextType => useContext(AuthContext);