"use client";

import { useThemeTransition } from "@/hooks/use-theme-transition";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { toggleTheme, resolvedTheme } = useThemeTransition();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-border/60 hover:border-border hover:bg-accent transition-colors"
    >
      {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}