import { useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useState } from "react";
import app from "@/firebase/firebase.config";

const auth = getAuth(app);
const useUser = () => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userSignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (profile: any) => {
    setLoading(true);
    // return updateProfile(auth.currentUser:user , profile:any);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const logOut = () => {
    return signOut(auth);
  };

  return {
    user,
    loading,
    setLoading,
    userSignUp,
    userSignIn,
    googleSignIn,
    updateUserProfile,
    logOut,
  };
};

export default useUser;
