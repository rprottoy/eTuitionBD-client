import React, { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registration
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        };

        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, []);

  const { isAdmin, isTutor, isStudent } = useMemo(() => {
    return {
      isAdmin: user?.role?.toLowerCase() === "admin",
      isTutor: user?.role?.toLowerCase() === "tutor",
      isStudent: user?.role?.toLowerCase() === "student",
    };
  }, [user]);

  const authInfo = {
    registerUser,
    signInUser,
    signInGoogle,
    user,
    loading,
    logOut,
    updateUserProfile,
    isAdmin,
    isTutor,
    isStudent,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
