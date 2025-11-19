import Guest from "../layouts/guest";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

export function meta({}) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Login gagal");
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      Cookies.set('token', result.token, { expires: 7 })
      localStorage.setItem('user', JSON.stringify(result.user))
      navigate('/admin/dashboard')
      console.log(result);
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <Guest>
      <div class="w-full max-w-md p-6">
        <div class="flex flex-col items-center justify-center">
          <span class="material-symbols-outlined text-primary text-5xl mb-2">
            lock_open
          </span>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome Back
          </h1>
          <p class="mt-2 text-base font-normal text-slate-600 dark:text-slate-400">
            Log in to access your account
          </p>
        </div>
        <div class="mt-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label class="flex flex-col">
                <p class="text-base font-medium leading-normal pb-2 text-slate-700 dark:text-slate-300">
                  Email
                </p>
                <input
                  class="form-input flex w-full min-w-0 flex-1 py-3 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-700 h-12 px-4 text-base font-normal leading-normal text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1"
                  placeholder="you@example.com"
                  type="email"
                  {...register("email", {required: true})}
                />
              </label>
            </div>
            <div>
              <label class="flex flex-col">
                <p class="text-base font-medium leading-normal pb-2 text-slate-700 dark:text-slate-300">
                  Password
                </p>
                <div class="relative flex w-full flex-1 items-stretch">
                  <input
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-700 h-12 pl-4 pr-12 text-base font-normal leading-normal text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    {...register("password", {required: true})}
                  />
                  <button
                    aria-label="Toggle password visibility"
                    class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span class="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </label>
            </div>
            <div>
              <button
                class="flex cursor-pointer w-full items-center justify-center rounded-lg bg-blue-400 px-4 py-3 text-base font-semibold leading-6 text-white shadow-sm hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <p class="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?
            <NavLink
              class="font-semibold leading-6 text-primary hover:text-primary/80"
              to="/register"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </Guest>
  );
}
