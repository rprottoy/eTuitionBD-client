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
  // 🔹 Load user from localStorage first (prevents flicker)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState(() => {
    const role = localStorage.getItem("role");
    return role;
  });

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

  // Google SignIn
  const signInGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    setUser(null);
    setLoading(false);
  };

  // Update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const { isAdmin, isStudent, isTutor } = useMemo(() => {
    if (role) localStorage.setItem("role", role);
    return {
      isAdmin: role?.toLowerCase() === "admin",
      isStudent: role?.toLowerCase() === "student",
      isTutor: role?.toLowerCase() === "tutor",
    };
  }, [role]);

  // 🔐 Firebase auth observer (source of truth)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerUser,
    signInUser,
    signInGoogle,
    user,
    loading,
    logOut,
    updateUserProfile,
    role,
    setRole,
    isAdmin,
    isStudent,
    isTutor,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
