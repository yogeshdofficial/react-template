import { Outlet } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import AppSidebar from "./components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function BaseLayout() {
  return (
    <div className="min-h-screen">
      <SidebarProvider className="flex">
        <AppSidebar />
        <div className="min-h-screen flex flex-1 flex-col">
          <Header className="" />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  );
}
