import ThemeProvider from "@/providers/theme-provider";
import type { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}
export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}
