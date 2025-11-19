import { useEffect, useState } from "react";
import { NavLink, Outlet, redirect } from "react-router";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router";
import toast, { Toaster } from 'react-hot-toast';

export async function loader({ request }) {
  const cookie = request.headers.get("Cookie");

  const token = cookie
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    throw redirect("/");
  }

  return null;
}

export default function Admin({ children }) {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    const stored = localStorage.getItem("user");
    try {
      setUser(stored ? JSON.parse(stored) : null);
    } catch {
      setUser(null);
    }
  }, []);

  const openMenu = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("flex");
  }

  const logout = () => {
    Cookies.remove('token');
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div className="relative flex min-h-screen w-full">
      <aside id="sidebar" className="hidden z-40 md:flex fixed h-screen w-64 flex-col justify-between border-r border-border-light dark:border-border-dark bg-white dark:bg-card-dark p-4 transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">
              WebApp
            </h1>
          </div>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "bg-blue-300 text-white" : "",
                  isTransitioning ? "transitioning" : "",
                  "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20"
                ].join(" ")
              }
            >
              <span className="material-symbols-outlined fill text-primary">
                dashboard
              </span>
              <p className="text-primary text-sm font-medium leading-normal">
                Dashboard
              </p>
            </NavLink>
            {user?.role === 'admin' ? <NavLink
              to="/admin/user"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "bg-blue-300 text-white" : "",
                  isTransitioning ? "transitioning" : "",
                  "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20"
                ].join(" ")
              }
            >
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark">
                group
              </span>
              <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                User Management
              </p>
            </NavLink>: null }
          </nav>
        </div>
        <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
          <div className="flex items-center gap-3 p-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="User avatar"
            >
              <img src="/avatar.jpeg" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <p className="text-text-light dark:text-text-dark text-sm font-medium">
                {user?.name}
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs">
                {user?.email}
              </p>
            </div>
          </div>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer"
            onClick={logout}
          >
            <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark">
              logout
            </span>
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
              Logout
            </p>
          </button>
        </div>
      </aside>
      <div className="fixed right-0 md:hidden z-50" id="menu">
        <button onClick={() => openMenu()} className="bg-blue-300 p-2 text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
          </svg>
        </button>
      </div>
      <main id="main-content" className="flex-1 md:ml-64 flex-col overflow-y-auto">
        {children}
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
