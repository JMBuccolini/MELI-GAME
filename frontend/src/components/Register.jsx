"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContetx";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const router = useRouter();
  const [selectImg, setSelectImg] = useState("");
  const [loader, setLoader] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
   
    setLoader(true);
    await signup(values);

    router.push("/login");
  });

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300">
      <div className="bg-white max-w-md p-10 rounded-md text-red-500">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-blue-500">Signup</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-white border-2 border-blue-300 text-blue-300 px-4 py-2 rounded-md m-2"
            placeholder="username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-white border-2 border-blue-300 text-blue-300 px-4 py-2 rounded-md m-2"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-white border-2 border-blue-300 text-blue-300 px-4 py-2 rounded-md m-2"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <div className="my-4">
            <p className="text-white">Select an Avatar:</p>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  value="/avatars/avatar1.jpg"
                  {...register("img", { required: true })}
                  className="hidden"
                  onClick={() => setSelectImg("/avatars/avatar1.jpg")}
                />
                <img
                  src="/avatars/avatar1.jpg"
                  alt="Avatar 1"
                  className={`w-16 h-16 cursor-pointer border-2 
                    ${
                      selectImg == "/avatars/avatar1.jpg"
                        ? "border-blue-500 border-2"
                        : "border-transparent hover:border-blue-500"
                    }`}
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="/avatars/avatar2.jpeg"
                  {...register("img", { required: true })}
                  className="hidden"
                  onClick={() => setSelectImg("/avatars/avatar2.jpg")}
                />
                <img
                  src="/avatars/avatar2.jpeg"
                  alt="Avatar 2"
                  className={`w-16 h-16 cursor-pointer border-2 
                    ${
                      selectImg == "/avatars/avatar2.jpg"
                        ? "border-blue-500 border-2"
                        : "border-transparent hover:border-blue-500"
                    }`}
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="/avatars/avatar3.jpeg"
                  {...register("img", { required: true })}
                  className="hidden"
                  onClick={() => setSelectImg("/avatars/avatar3.jpg")}
                />
                <img
                  src="/avatars/avatar3.jpeg"
                  alt="Avatar 3"
                  className={`w-16 h-16 cursor-pointer border-2 
                    ${
                      selectImg == "/avatars/avatar3.jpg"
                        ? "border-blue-500 border-2"
                        : "border-transparent hover:border-blue-500"
                    }`}
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="/avatars/avatar4.png"
                  {...register("img", { required: true })}
                  className="hidden"
                  onClick={() => setSelectImg("/avatars/avatar4.jpg")}
                />
                <img
                  src="/avatars/avatar4.png"
                  alt="Avatar 4"
                  className={`w-16 h-16 cursor-pointer border-2 
                    ${
                      selectImg == "/avatars/avatar4.jpg"
                        ? "border-blue-500 border-2"
                        : "border-transparent hover:border-blue-500"
                    }`}
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="/avatars/avatar5.jpeg"
                  {...register("img", { required: true })}
                  className="hidden"
                  onClick={() => setSelectImg("/avatars/avatar5.jpg")}
                />
                <img
                  src="/avatars/avatar5.jpeg"
                  alt="Avatar 5"
                  className={`w-16 h-16 cursor-pointer border-2 
                    ${
                      selectImg == "/avatars/avatar5.jpg"
                        ? "border-blue-500 border-2"
                        : "border-transparent hover:border-blue-500"
                    }`}
                />
              </label>
            </div>
            {errors.img && (
              <p className="text-red-500">Please select an avatar</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-lg px-[20px] py-[10px] text-[18px] text-white border-2 bg-[#3483fa] border-blue-500 w-full hover:bg-blue-600 hover:scale-110 transition-all duration-500 ease-in-out mb-14 mt-4"
          >
            {loader ? (
              <p className="flex">
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
                <span>...espere un momento</span>
              </p>
            ) : (
              "Registrarse"
            )}
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">
          Already have an account?{" "}
          <Link href="/login" className="text-sky-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
