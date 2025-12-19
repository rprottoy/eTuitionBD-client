import { useState, useMemo } from "react";

const usePermission = () => {
  const [role, setRole] = useState(() => {
    const role = localStorage.getItem("role");
    return role;
  });

  const { isAdmin, isStudent, isTutor } = useMemo(() => {
    if (role) localStorage.setItem("role", role);
    return {
      isAdmin: role === "admin",
      isStudent: role === "student",
      isTutor: role === "tutor",
    };
  }, [role]);

  return {
    role,
    setRole,
    isAdmin,
    isStudent,
    isTutor,
  };
};

export default usePermission;
