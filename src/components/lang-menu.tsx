import { LucideLanguages } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import i18n from "@/utils/i18n";
const langs = {
  en: "English",
  de: "Deutsch",
};

type LangKey = keyof typeof langs;

export default function LangMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"}>
          <LucideLanguages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(Object.keys(langs) as LangKey[]).map((lang, i) => {
          return (
            <DropdownMenuItem key={i} onClick={() => i18n.changeLanguage(lang)}>
              {langs[lang]}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
