import type { Theme } from "@/types/theme";
import { createContext } from "react";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: "system", setTheme: () => null });
