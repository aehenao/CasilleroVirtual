"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  PackageSearch, 
  Warehouse, 
  ClipboardList, 
  Users, 
  ShieldCheck,
  LogOut 
} from "lucide-react";

const navItems = [
  { name: "Panel Principal", href: "/admin", icon: BarChart3 },
  { name: "Pre-alertas", href: "/admin/pre-alerts", icon: PackageSearch },
  { name: "Bodega Global", href: "/admin/inventory", icon: Warehouse },
  { name: "Peticiones (Tickets)", href: "/admin/services", icon: ClipboardList },
  { name: "Clientes", href: "/admin/users", icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-full w-64 flex-col border-r border-slate-800 bg-slate-950 text-slate-300">
      <div className="flex h-16 items-center px-6 border-b border-slate-800 bg-slate-900">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="size-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <ShieldCheck className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">ArkaAdmin</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-6">
        <div className="px-4 mb-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gestión Agencia</p>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-indigo-600/20 text-indigo-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "mr-3 size-5 flex-shrink-0 transition-colors",
                  isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
                )} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-slate-400 rounded-md hover:bg-red-900/20 hover:text-red-400 transition-colors">
          <LogOut className="mr-3 size-5" />
          Salir del Admin
        </button>
      </div>
    </div>
  );
}
