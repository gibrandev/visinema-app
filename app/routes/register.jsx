import Guest from "../layouts/guest";
import { NavLink } from "react-router";

export function meta({}) {
  return [
    { title: "Register" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Guest>
      <div class="w-full max-w-md space-y-8 p-4">
        <div class="text-center">
          <h1 class="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">
            Create Your Account
          </h1>
          <p class="mt-2 text-base text-slate-500 dark:text-slate-400">
            Get started by filling out the form below.
          </p>
        </div>
        <div class="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800/50 dark:bg-background-dark sm:p-8">
          <form className="space-y-6">
            <div>
              <label class="flex flex-col">
                <span class="pb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </span>
                <input
                  class="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-transparent p-3 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-1 focus:ring-primary/20 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Enter your full name"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label class="flex flex-col">
                <span class="pb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </span>
                <input
                  class="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-transparent p-3 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-1 focus:ring-primary/20 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>
            <div>
              <label class="flex flex-col">
                <span class="pb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </span>
                <div class="relative flex w-full flex-1 items-center">
                  <input
                    class="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-transparent p-3 pr-10 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-1 focus:ring-primary/20 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                    placeholder="Enter a secure password"
                    type="password"
                  />
                  <button
                    class="absolute right-0 mr-3 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                    type="button"
                  >
                    <span class="material-symbols-outlined text-xl">
                      visibility
                    </span>
                  </button>
                </div>
              </label>
            </div>
            <div>
              <button
                class="flex h-12 w-full items-center justify-center rounded-lg bg-blue-400 cursor-pointer px-6 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <p class="text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account?
          <NavLink class="font-semibold text-primary hover:underline" to="/">
            Log in
          </NavLink>
        </p>
      </div>
    </Guest>
  );
}
