"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Package, 
  Box, 
  Ticket, 
  Calculator, 
  FileText, 
  CreditCard, 
  User, 
  LogOut 
} from "lucide-react";

const navItems = [
  { name: "Resumen", href: "/", icon: LayoutDashboard },
  { name: "Pre-alertas", href: "/pre-alerts", icon: Package },
  { name: "Paquetes", href: "/inventory", icon: Box },
  { name: "Peticiones", href: "/services", icon: Ticket },
  { name: "Cotizador", href: "/calculator", icon: Calculator },
  { name: "Facturación", href: "/billing", icon: FileText },
  { name: "Perfil", href: "/profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-full w-64 flex-col border-r bg-white dark:bg-slate-900">
      <div className="flex h-16 items-center px-6 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Box className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Arkanet</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              )}
            >
              <item.icon className={cn(
                "mr-3 size-5 flex-shrink-0 transition-colors",
                pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300"
              )} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-red-50 hover:text-red-700 dark:text-slate-400 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
          <LogOut className="mr-3 size-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
