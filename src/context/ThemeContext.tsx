import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useRef } from "react";

export type ThemeMode = "auto" | "light" | "dark";

interface ThemeCtx {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  toggle: () => void;
  flash: boolean;
  resolve: (variant?: "light" | "dark") => "light" | "dark";
}

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "auto";
    return (localStorage.getItem("nx-theme") as ThemeMode) || "auto";
  });
  const [flash, setFlash] = useState(false);
  const flashTimer = useRef<number | null>(null);

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
    localStorage.setItem("nx-theme", m);
    setFlash(true);
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setFlash(false), 900);
  }, []);

  const toggle = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  const resolve = useCallback(
    (variant?: "light" | "dark") => {
      if (mode === "auto") return variant ?? "light";
      return mode;
    },
    [mode]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.themeMode = mode;
  }, [mode]);

  return (
    <Ctx.Provider value={{ mode, setMode, toggle, flash, resolve }}>
      {children}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-700 ${
          flash ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 theme-flash-burst" />
      </div>
    </Ctx.Provider>
  );
}

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}
