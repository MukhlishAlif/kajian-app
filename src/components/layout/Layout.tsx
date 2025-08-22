import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row container-primary min-h-screen max-w-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 max-h-screen w-screen mt-1 mb-3 justify-start overflow-y-auto overflow-hidden">{children}</main>
    </div>
  );
}
