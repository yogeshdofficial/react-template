import LangMenu from "@/components/lang-menu";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { LucideMenu } from "lucide-react";
import type { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export default function Header({ ...props }: HeaderProps) {
  const { toggleSidebar } = useSidebar();
  const { t } = useTranslation();
  return (
    <header
      {...props}
      className={`flex justify-between items-center${props.className}`}
    >
      <div className="flex justify-between items-center">
        <Button size={"icon"} onClick={toggleSidebar}>
          <LucideMenu />
        </Button>
        <h1>{t("header.title")}</h1>
      </div>
      <div className="flex justify-between items-center">
        <ThemeToggle />
        <LangMenu />
      </div>
    </header>
  );
}
