"use client";

import { useAuth } from "@/context/AuthContetx";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const showNavBar = pathname !== "/login" && pathname !== "/register";
 
  if (showNavBar)
    return (
      <div className="bg-yellow-300 h-32 w-full z-50 overflow-hidden shadow-xl relative">
        {user ? (
          <div className="flex justify-end items-end  gap-x-8 w-full pt-8 pr-8">
            <img
              src={user.image}
              alt={user.username}
              width={80}
              className="rounded-full border-2 border-blue-500"
            />
            <p className="text-white font-bold uppercase  ">{user.username}</p>
            <button
              className="rounded-lg px-[20px] py-[10px] text-[12px] text-white border-2 bg-[#3483fa] border-blue-500 w-[100px] hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out"
              onClick={() => logout()}
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-x-8 w-full pt-8 pr-8">
            <button
              className="rounded-lg px-[20px] py-[10px] text-[12px] text-white border-2 bg-[#3483fa] border-blue-500 w-[150px] hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14"
              onClick={() => {
                router.push("/register");
              }}
            >
              CREÁ TU CUENTA
            </button>
            <button
              className="rounded-lg px-[20px] py-[10px] text-[12px] text-white border-2 bg-[#3483fa] border-blue-500 w-[120px] hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14"
              onClick={() => {
                router.push("/login");
              }}
            >
              INGRESÁ
            </button>
            
          </div>
        )}
      </div>
    );
  if (!showNavBar) return null;
}
