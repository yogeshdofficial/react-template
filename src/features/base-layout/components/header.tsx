import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { LucideMenu } from "lucide-react";
import type { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export default function Header({ ...props }: HeaderProps) {
  const { toggleSidebar } = useSidebar();
  return (
    <header
      {...props}
      className={`flex justify-between items-center${props.className}`}
    >
      <div className="flex justify-between items-center">
        <Button size={"icon"} onClick={toggleSidebar}>
          <LucideMenu />
        </Button>
        <h1>NAME</h1>
      </div>
      <div className="flex justify-between items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
