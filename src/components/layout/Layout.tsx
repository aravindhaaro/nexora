import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
  variant?: "light" | "dark";
}

export function Layout({ children, hideFooter = false, variant = "light" }: LayoutProps) {
  const { resolve } = useTheme();
  const effective = resolve(variant);
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${effective === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar variant={effective} />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}