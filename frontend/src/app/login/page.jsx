"use client";

import { useAuth } from "@/context/AuthContetx";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);
  const router = useRouter()

  const { signin,errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit( async(data) => {
    setLoader(true)
   await signin(data);

    setTimeout(()=>{
      router.push("/home")
    },1000)

  
  });


  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300">
      <div className="bg-white border-2 border-blue-300 max-w-md w-full p-10 rounded-md text-blue-300">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-blue-500 mb-4">Login</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-white border-2 border-blue-300 text-blue-500 px-4 py-2 rounded-md"
            placeholder="email"
          />
          {signinErrors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-white border-2 border-blue-300 text-blue-500 px-4 py-2 rounded-md mt-4"
            placeholder="password"
          />
          {signinErrors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button type="submit"  className="rounded-lg px-[20px] py-[10px] text-[18px] text-white border-2 bg-[#3483fa] border-blue-500 w-full hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14 mt-4">
            {
              loader? <p className="flex">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>...espere hay muchos jugadores</span>
            </p>: 'Enviar'
            }
          </button>
        </form>

          <p className="flex gap-x-2 justify-between">
            Don't have an account? <Link  href='/register' className="text-sky-500" >
            Sign Up
            </Link>
          </p>

      </div>
    </div>
  );
}
