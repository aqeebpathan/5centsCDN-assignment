import { useEffect, useState } from "react";
import {
  ChevronFirst,
  ChevronLast,
  LogOut,
  Settings,
  LayoutDashboard,
  CircleUserRound,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const sidebarLinks = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Profile", path: "/dashboard/profile", icon: CircleUserRound },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <aside
      className={clsx(
        "bg-background border-active flex h-screen flex-col rounded-xl border-r shadow-md transition-all duration-300",
        collapsed ? "w-18" : "w-64",
      )}
    >
      <nav className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <h1 className={clsx("text-2xl font-semibold", collapsed && "hidden")}>
            Dashboard
          </h1>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-hover cursor-pointer rounded-lg p-1.5"
          >
            {collapsed ? <ChevronLast size={24} /> : <ChevronFirst size={24} />}
          </button>
        </div>

        <ul className="flex-1 space-y-2 px-3">
          {sidebarLinks.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                href={path}
                className={clsx(
                  "flex items-center gap-3 rounded-xl p-3 transition-all",
                  pathname === path ? "bg-active" : "hover:bg-hover",
                )}
              >
                <span className="flex h-6 w-6 items-center justify-center">
                  <Icon size={20} />
                </span>
                {!collapsed && <span>{label}</span>}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-active border-t p-1 py-2">
          <button
            onClick={handleLogout}
            className={clsx(
              "hover:bg-hover flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2",
              collapsed ? "translate-x-2" : "translate-x-0",
            )}
          >
            <span
              className={clsx(
                "flex h-6 w-6 cursor-pointer items-center justify-center transition-transform",
              )}
            >
              <LogOut size={20} />
            </span>
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
