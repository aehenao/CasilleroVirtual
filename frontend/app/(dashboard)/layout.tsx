import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { Chatbot } from "@/components/chatbot";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
        <Chatbot />
      </div>
    </div>
  );
}
