import { useEffect, useState } from "react";
import { NavLink, Outlet, redirect } from "react-router";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router";

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
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      try {
        setUser(stored ? JSON.parse(stored) : null);
      } catch {
        setUser(null);
      }
    }
  }, []);

  const logout = () => {
    Cookies.remove('token');
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div className="relative flex min-h-screen w-full">
      <aside className="flex fixed h-screen w-64 flex-col justify-between border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-primary"
              data-alt="Application Logo"
            ></div>
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
            <NavLink
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
            </NavLink>
          </nav>
        </div>
        <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
          <div className="flex items-center gap-3 p-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="User avatar"
            ></div>
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
      <main className="flex-1 ml-64 flex-col overflow-y-auto">
        {children}
        <Outlet />
      </main>
    </div>
  );
}
