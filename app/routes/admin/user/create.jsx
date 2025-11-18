export function meta({}) {
  return [
    { title: "User Management" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
          <form class="flex flex-col">
            <div class="p-6 md:p-8 space-y-6">
              <div class="flex flex-col">
                <label
                  class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal pb-2"
                  for="full-name"
                >
                  Full Name
                </label>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-sm font-normal leading-normal"
                  id="full-name"
                  placeholder="Enter user's full name"
                  type="text"
                  value=""
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
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-red-500 dark:border-red-500 bg-background-light dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-sm font-normal leading-normal"
                  id="email"
                  placeholder="Enter user's email address"
                  type="email"
                  value="john.doe@"
                />
                <p class="text-red-600 dark:text-red-500 text-xs mt-1.5">
                  Invalid email format
                </p>
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
                    value=""
                  />
                  <button
                    class="absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                    type="button"
                  >
                    <span class="material-symbols-outlined text-base">
                      visibility_off
                    </span>
                  </button>
                </div>
                <p class="text-slate-500 dark:text-slate-400 text-xs mt-1.5">
                  Minimum 8 characters, include one number and one special
                  character.
                </p>
                <div class="mt-2 flex items-center gap-2">
                  <div class="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div class="h-1 w-1/3 rounded-full bg-red-500"></div>
                  </div>
                  <div class="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div class="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <p class="text-red-600 dark:text-red-500 text-xs font-medium">
                    Weak
                  </p>
                </div>
              </div>

              <div class="flex flex-col">
                <label
                  class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal pb-2"
                  for="role"
                >
                  Role
                </label>
                <select
                  class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-1 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary h-12 px-4 text-sm font-normal leading-normal"
                  id="role"
                >
                  <option>Admin</option>
                  <option selected="">Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
            </div>

            <div class="flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/20 p-4 rounded-b-xl">
              <button
                class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-5 transition-colors"
                type="button"
              >
                Cancel
              </button>
              <button
                class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-blue-400 text-white hover:bg-primary/90 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-5 transition-colors"
                type="submit"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
