"use client";

import { useAuth } from "@/context/AuthContetx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Cargando...</div>; // O un spinner si prefieres
  }

  if (!isAuthenticated) {
    return null; 
  }

  return children;
};

export default ProtectedRoute;
