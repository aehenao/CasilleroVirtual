export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="w-full max-w-md p-4">
        {children}
      </div>
    </div>
  );
}
