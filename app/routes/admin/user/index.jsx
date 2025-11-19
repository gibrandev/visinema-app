import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';

export function meta({}) {
  return [
    { title: "User Management" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = Cookies.get('token')
    setLoading(true);
    const res = await fetch(`/api/users?q=${search}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const token = Cookies.get('token');
    if (confirm("Are you sure delete this user?") == true) {
      try {
        toast.loading('Loading...');
        setLoading(true);
        const response = await fetch(`/api/users/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          toast.dismiss();
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        toast.dismiss();
        toast.success(result.message);
        fetchUsers();
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  return (
    <div className="mx-auto max-w-7xl p-6 lg:p-8">
      <header className="mb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-black tracking-tight text-text-light dark:text-text-dark">
              User Management
            </h1>
            <p className="text-base font-normal text-subtext-light dark:text-subtext-dark">
              Administer and manage all user accounts in the system.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <div className="flex gap-2">
                <input
                  className="w-full rounded-lg border-border-light bg-surface-light py-2 pr-4 text-text-light placeholder:text-subtext-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:placeholder:text-subtext-dark"
                  placeholder="Search by name..."
                  type="search"
                  onChange={e => setSearch(e.target.value)}
                />
                <button onClick={() => fetchUsers()} className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-green-400 px-4 text-sm font-bold text-white">
                  Search
                </button>
              </div>
            </div>
            <NavLink to="/admin/user/create" className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-400 px-4 text-sm font-bold text-white">
              <span className="truncate">Add User</span>
            </NavLink>
          </div>
        </div>
      </header>
      {loading ? <div className="p-4">Loading...</div>
        :<div className="overflow-hidden rounded-xl border border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Name
                </th>
                <th className="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Email
                </th>
                <th className="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Role
                </th>
                <th className="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  Created Date
                </th>
                <th className="px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(u =><tr key={u.id} className="border-border-light dark:border-border-dark hover:bg-primary/5">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">
                  {u.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  {u.email}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:bg-primary/20">
                    {u.role}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-subtext-light dark:text-subtext-dark">
                  {u.createdAt}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <NavLink to={`/admin/user/${u.id}/edit`} className="flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-warning/10 hover:text-warning dark:text-subtext-dark dark:hover:bg-warning/20">
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </NavLink>
                    <button onClick={() => handleDelete(u.id)} className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg text-subtext-light hover:bg-danger/10 hover:text-danger dark:text-subtext-dark dark:hover:bg-danger/20">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div> 
      </div>}
    </div>
  );
}
