"use client";

import { useAuth } from "@/context/AuthContetx";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const { user, logout } = useAuth();

    return (
      <div className="bg-yellow-300 h-[100px] w-full flex justify-center items-center z-50 overflow-hidden shadow-xl relative">
        {user ? (
          <div className="flex justify-center items-end w-full px-8 gap-x-72 ">
            <a href="/">
              <div className="flex flex-col items-center">
                <img
                  src="./imgs/logo-memory-compress.png"
                  className="w-14 h-full pb-2"
                />
                <span className="text-[10px] text-blue-950 font-bold">
                  MERCADO LIBRE
                </span>
                <span className="text-[8px] text-blue-950 font-bold">
                  MEMORY GAME
                </span>
              </div>
            </a>
            <div className="flex items-end gap-x-6">
              <img
                src={user.image}
                alt={user.username}
                width={60}
                className="rounded-full border-2 border-blue-500"
              />
              <p className="text-blue-950 font-bold uppercase  ">
                {user.username}
              </p>
              <button
                className="px-[20px] py-[3px] text-[12px] text-blue-900 underline underline-offset-2 w-[100px] hover:font-bold hover:scale-110 transition-all duration-500 ease-in-out"
                onClick={() => logout()}
              >
                LOGOUT
              </button>
              <button
                className="px-[20px] py-[3px] text-[12px] text-blue-900 underline underline-offset-2 w-[150px] hover:font-bold hover:scale-110 transition-all duration-500 ease-in-out"
                onClick={() => {
                  router.push("/score");
                }}
              >
                PUNTAJES
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-end w-full px-8 gap-x-44 ">
            <a href="/">
              <div className="flex flex-col items-center">
                <img
                  src="./imgs/logo-memory-compress.png"
                  className="w-14 h-full pb-2"
                />
                <span className="text-[10px] text-blue-950 font-bold">
                  MERCADO LIBRE
                </span>
                <span className="text-[8px] text-blue-950 font-bold">
                  MEMORY GAME
                </span>
              </div>
            </a>
            <div className="flex items-end gap-x-6">
              <button
                className="rounded-lg px-[20px] py-[10px] text-[12px] text-blue-950 underline underline-offset-[6px] w-[150px] hover:font-bold hover:scale-110 transition-all duration-500 ease-in-out"
                onClick={() => {
                  router.push("/register");
                }}
              >
                CREÁ TU CUENTA
              </button>
              <button
                className="rounded-lg px-[20px] py-[10px] text-[12px] text-blue-950 underline underline-offset-[6px] w-[150px] hover:font-bold hover:scale-110 transition-all duration-500 ease-in-out"
                onClick={() => {
                  router.push("/login");
                }}
              >
                INGRESÁ
              </button>
              <button
                className="rounded-lg px-[20px] py-[10px] text-[12px] text-blue-950 underline underline-offset-[6px] w-[150px] hover:font-bold hover:scale-110 transition-all duration-500 ease-in-out"
                onClick={() => {
                  router.push("/score");
                }}
              >
                PUNTAJES
              </button>
              
            </div>
          </div>
        )}
      </div>
    );

}
