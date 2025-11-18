import { NavLink } from "react-router";
import ChartDaily from '../../components/chartDaily';
import ChartMonthly from "../../components/chartMonthly";
import ChartRevenue from "../../components/chartRevenue";
import ChartFilm from "../../components/chartFilm";

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
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          Daily Transactions
        </h2>
        <div className="dark:border-border-dark bg-card-light dark:bg-card-dark lg:col-span-2">
          <div className="w-full bg-background-light dark:bg-background-dark rounded-lg">
            <ChartDaily/>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          Monthly Transactions
        </h2>
        <div className="dark:border-border-dark bg-card-light dark:bg-card-dark lg:col-span-2">
          <div className="w-full bg-background-light dark:bg-background-dark rounded-lg">
            <ChartMonthly/>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          Revenue
        </h2>
        <div className="dark:border-border-dark bg-card-light dark:bg-card-dark lg:col-span-2">
          <div className="w-full bg-background-light dark:bg-background-dark rounded-lg">
            <ChartRevenue/>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          Film
        </h2>
        <div className="dark:border-border-dark bg-card-light dark:bg-card-dark lg:col-span-2">
          <div className="w-full bg-background-light dark:bg-background-dark rounded-lg">
            <ChartFilm/>
          </div>
        </div>
      </div>
    </div>
  );
}
