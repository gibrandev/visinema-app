
export function meta({}) {
  return [
    { title: "User Management" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div class="mx-auto max-w-7xl p-6 lg:p-8">
      <header class="mb-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-black tracking-tight text-text-light dark:text-text-dark">
              User Management
            </h1>
            <p class="text-base font-normal text-subtext-light dark:text-subtext-dark">
              Administer and manage all user accounts in the system.
            </p>
          </div>
          <div class="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <div class="relative flex-1">
              <span class="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark">
                search
              </span>
              <input
                class="w-full rounded-lg border-border-light bg-surface-light py-2 pl-10 pr-4 text-text-light placeholder:text-subtext-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:placeholder:text-subtext-dark"
                placeholder="Search by name or email..."
                type="search"
              />
            </div>
            <button class="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-400 px-4 text-sm font-bold text-white">
              <span class="material-symbols-outlined">add</span>
              <span class="truncate">Add User</span>
            </button>
          </div>
        </div>
      </header>
      <div class="overflow-hidden rounded-xl border border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark">
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="border-b border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark">
              <tr>
                <th class="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Name
                </th>
                <th class="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Email
                </th>
                <th class="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Role
                </th>
                <th class="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Last Active
                </th>
                <th class="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border-light dark:border-border-dark hover:bg-primary/5">
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Olivia Rhye
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  olivia@example.com
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:bg-primary/20">
                    Admin
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  2 days ago
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <div class="flex items-center justify-end gap-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20">
                      <span class="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-warning/10 hover:text-warning dark:text-subtext-dark dark:hover:bg-warning/20">
                      <span class="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-danger/10 hover:text-danger dark:text-subtext-dark dark:hover:bg-danger/20">
                      <span class="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-border-light dark:border-border-dark hover:bg-primary/5">
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Phoenix Baker
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  phoenix@example.com
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span class="inline-flex items-center rounded-full bg-slate-400/10 px-2.5 py-0.5 text-xs font-medium text-subtext-light dark:bg-slate-400/20 dark:text-subtext-dark">
                    Editor
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  1 hour ago
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <div class="flex items-center justify-end gap-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20">
                      <span class="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-warning/10 hover:text-warning dark:text-subtext-dark dark:hover:bg-warning/20">
                      <span class="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-danger/10 hover:text-danger dark:text-subtext-dark dark:hover:bg-danger/20">
                      <span class="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-border-light dark:border-border-dark hover:bg-primary/5">
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Lana Steiner
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  lana@example.com
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span class="inline-flex items-center rounded-full bg-slate-400/10 px-2.5 py-0.5 text-xs font-medium text-subtext-light dark:bg-slate-400/20 dark:text-subtext-dark">
                    Viewer
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  5 days ago
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <div class="flex items-center justify-end gap-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20">
                      <span class="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-warning/10 hover:text-warning dark:text-subtext-dark dark:hover:bg-warning/20">
                      <span class="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-danger/10 hover:text-danger dark:text-subtext-dark dark:hover:bg-danger/20">
                      <span class="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-border-light dark:border-border-dark hover:bg-primary/5">
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Demi Wilkinson
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  demi@example.com
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span class="inline-flex items-center rounded-full bg-slate-400/10 px-2.5 py-0.5 text-xs font-medium text-subtext-light dark:bg-slate-400/20 dark:text-subtext-dark">
                    Editor
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  Jan 21, 2024
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <div class="flex items-center justify-end gap-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20">
                      <span class="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-warning/10 hover:text-warning dark:text-subtext-dark dark:hover:bg-warning/20">
                      <span class="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-danger/10 hover:text-danger dark:text-subtext-dark dark:hover:bg-danger/20">
                      <span class="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Candice Wu
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  candice@example.com
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:bg-primary/20">
                    Admin
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  Jan 15, 2024
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <div class="flex items-center justify-end gap-2">
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20">
                      <span class="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-warning/10 hover:text-warning dark:text-subtext-dark dark:hover:bg-warning/20">
                      <span class="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button class="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-danger/10 hover:text-danger dark:text-subtext-dark dark:hover:bg-danger/20">
                      <span class="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col items-center justify-between gap-4 border-t border-border-light p-4 dark:border-border-dark sm:flex-row">
          <p class="text-sm text-subtext-light dark:text-subtext-dark">
            Showing{" "}
            <span class="font-medium text-text-light dark:text-text-dark">
              1
            </span>{" "}
            to{" "}
            <span class="font-medium text-text-light dark:text-text-dark">
              5
            </span>{" "}
            of{" "}
            <span class="font-medium text-text-light dark:text-text-dark">
              150
            </span>{" "}
            users
          </p>
          <nav class="flex items-center">
            <a
              class="flex size-9 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              <span class="material-symbols-outlined text-xl">
                chevron_left
              </span>
            </a>
            <a
              class="flex size-9 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary"
              href="#"
            >
              1
            </a>
            <a
              class="flex size-9 items-center justify-center rounded-lg text-sm font-normal text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              2
            </a>
            <a
              class="flex size-9 items-center justify-center rounded-lg text-sm font-normal text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              3
            </a>
            <span class="flex size-9 items-center justify-center text-sm font-normal text-subtext-light dark:text-subtext-dark">
              ...
            </span>
            <a
              class="flex size-9 items-center justify-center rounded-lg text-sm font-normal text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              8
            </a>
            <a
              class="flex size-9 items-center justify-center rounded-lg text-sm font-normal text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              9
            </a>
            <a
              class="flex size-9 items-center justify-center rounded-lg text-sm font-normal text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              10
            </a>
            <a
              class="flex size-9 items-center justify-center rounded-lg text-subtext-light hover:bg-primary/10 hover:text-primary dark:text-subtext-dark dark:hover:bg-primary/20"
              href="#"
            >
              <span class="material-symbols-outlined text-xl">
                chevron_right
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
