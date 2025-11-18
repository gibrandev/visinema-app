import { NavLink } from "react-router";

export function meta({}) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex min-w-72 flex-col gap-1 mb-8">
        <p className="text-text-light dark:text-text-dark text-3xl font-black leading-tight tracking-[-0.033em]">
          Welcome, Admin!
        </p>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">
          Here's an overview of your application's activity.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">
            Total Users
          </p>
          <p className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight">
            1,482
          </p>
          <p className="text-[#078838] text-sm font-medium leading-normal">
            +5.2% from last month
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">
            Monthly Active Users
          </p>
          <p className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight">
            312
          </p>
          <p className="text-[#078838] text-sm font-medium leading-normal">
            +1.8% from last month
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">
            New Sign-ups
          </p>
          <p className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight">
            56
          </p>
          <p className="text-red-600 text-sm font-medium leading-normal">
            -3.1% from last month
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">
            Pending Approvals
          </p>
          <p className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight">
            8
          </p>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">
            No change
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold">
              User Activity
            </h2>
            <button className="flex items-center gap-2 rounded-lg border border-border-light dark:border-border-dark px-3 py-1.5 text-sm text-text-muted-light dark:text-text-muted-dark hover:bg-primary/10">
              Last 30 days
              <span className="material-symbols-outlined text-base">
                expand_more
              </span>
            </button>
          </div>
          <div className="mt-6 h-72 flex items-center justify-center bg-background-light dark:bg-background-dark rounded-lg">
            <img
              className="h-full w-full object-contain mix-blend-luminosity dark:invert"
              data-alt="A line chart showing user sign-ups over the last 30 days"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV8nc8GQHiAms5tKGsMuJekW8V2bs9GM7GWetxZiNjiYyzbJHdSNso5GvRdTVOf_1yhJ483ekdoVLyQxJsfRVT8NvNAOCgbJ7OwXE3LRolR_gP-m55dgDjjDGYZv4h73ft67KFoClXmpbHJ1zqatgFt9_RutqWLp7v90n2x99XfOx993gryN-AC5_F9PAKAOtr9A9WUWLSMhIZWIiqumKnIDadJwK_4QQSeQWdHxeL_sbNKMVGKZRzSdJOnuYIWpFtUYXMxDLOSeq8"
            />
          </div>
        </div>
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
          <h2 className="text-text-light dark:text-text-dark text-lg font-bold">
            Users by Type
          </h2>
          <div className="mt-6 h-72 flex items-center justify-center bg-background-light dark:bg-background-dark rounded-lg">
            <img
              className="h-4/5 w-4/5 object-contain mix-blend-luminosity dark:invert"
              data-alt="A pie chart showing the distribution of user roles"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVNUdDdSqNWuelvlTgHJCGTEpOfOVNCqaPQVj18N8HRxWqSMWiQ-sbDwwOaKmvwUANZerzYgQc6HPPfWyzGa3RJ_v6byqCpCwpzG_3IA7LWPWYOTPFfclk8u3b0SrOyAkxj0r3nRD_IODhPLGf905rTPdUwmkU_h5dmK0j3yYYdvKaouXfTQz_6N76ulBgMfpSrfzem_M2wJ8sQNZlVyH6xKyFE5jDF1cvZj5MEqCPy87PPUlLJhgUaD2nQiM_S-1_tTcsSRIijoF"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          Recent Registrations
        </h2>
        <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
              <thead className="bg-background-light dark:bg-background-dark">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    scope="col"
                  >
                    Email
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    scope="col"
                  >
                    Registration Date
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    scope="col"
                  >
                    Status
                  </th>
                  <th className="relative px-6 py-3" scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="size-10 flex-shrink-0">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                          data-alt="Avatar of Olivia Martin"
                        ></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text-light dark:text-text-dark">
                          Olivia Martin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                    olivia.martin@example.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                    2024-05-21
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <a className="text-primary hover:underline" href="#">
                      View Details
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="size-10 flex-shrink-0">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                          data-alt="Avatar of Liam Johnson"
                        ></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text-light dark:text-text-dark">
                          Liam Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                    liam.johnson@example.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                    2024-05-20
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <a className="text-primary hover:underline" href="#">
                      View Details
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="size-10 flex-shrink-0">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                          data-alt="Avatar of Ava Williams"
                        ></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text-light dark:text-text-dark">
                          Ava Williams
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                    ava.williams@example.com
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                    2024-05-20
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                      Pending
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <a className="text-primary hover:underline" href="#">
                      View Details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
