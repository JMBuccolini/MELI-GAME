"use client";

import { useAuth } from "@/context/AuthContetx";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter()

  const { signin,errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit( async(data) => {
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
            className="w-full bg-white border-2 border-blue-300 text-blue-500 px-4 py-2 rounded-md m-2"
            placeholder="email"
          />
          {signinErrors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-white border-2 border-blue-300 text-blue-500 px-4 py-2 rounded-md m-2"
            placeholder="password"
          />
          {signinErrors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button type="submit"  className="rounded-lg px-[20px] py-[10px] text-[18px] text-white border-2 bg-[#3483fa] border-blue-500 w-[100px] hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14 mt-4">
            {" "}
            Enviar
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
