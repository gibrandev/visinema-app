import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';
import { useState } from "react";

export function meta({}) {
  return [
    { title: "User Management" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      const token = Cookies.get('token')
      try {
        setLoading(true);
        const response = await fetch("/api/users/create", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          setLoading(false);
          throw new Error(`Response status: ${response.status}`);
        }
  
        const result = await response.json();
        setLoading(false);
        navigate('/admin/user')
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
    };
  return (
    <main class="flex-1 p-6 lg:p-10">
      <div class="mx-auto max-w-4xl">
        <div class="flex flex-wrap gap-2 mb-4">
          <a
            class="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#"
          >
            User Management
          </a>
          <span class="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
            /
          </span>
          <span class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
            Create User
          </span>
        </div>

        <div class="flex flex-wrap justify-between gap-3 mb-8">
          <h1 class="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
            Create New User
          </h1>
        </div>

        <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
          <form class="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div class="p-6 md:p-8 space-y-6">
              <div class="flex flex-col">
                <label
                  class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal pb-2"
                  for="full-name"
                >
                  Full Name
                </label>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-4 text-sm font-normal leading-normal"
                  id="full-name"
                  placeholder="Enter user's full name"
                  type="text"
                  {...register("name", { required: true })}
                />
              </div>

              <div class="flex flex-col">
                <label
                  class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal pb-2"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-4 pr-10 text-sm font-normal leading-normal"
                  id="email"
                  placeholder="Enter user's email address"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>

              <div class="flex flex-col">
                <label
                  class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal pb-2"
                  for="password"
                >
                  Password
                </label>
                <div class="relative">
                  <input
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 pr-10 text-sm font-normal leading-normal"
                    id="password"
                    placeholder="Create a password"
                    type="password"
                    {...register("password", { required: true, min: 8 })}
                  />
                </div>
                <p class="text-slate-500 dark:text-slate-400 text-xs mt-1.5">
                  Minimum 8 characters, include one number and one special
                  character.
                </p>
              </div>

              <div class="flex flex-col">
                <label
                  class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal pb-2"
                  for="role"
                >
                  Role
                </label>
                <select
                  class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 px-4 py-2 text-sm font-normal leading-normal"
                  id="role"
                  {...register("role", { required: true })}
                >
                  <option value={'admin'}>Admin</option>
                  <option value={'user'} selected>User</option>
                </select>
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/20 p-4 rounded-b-xl">
              <NavLink
                class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-5 transition-colors"
                to={"/admin/user"}
              >
                Cancel
              </NavLink>
              <button
                class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-blue-400 text-white hover:bg-primary/90 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-5 transition-colors"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Processing' : 'Create User'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
