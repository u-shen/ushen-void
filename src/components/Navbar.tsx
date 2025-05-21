"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Links = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <ul
      className="flex flex-col gap-4 py-2 sm:flex-row"
      onClick={() => closeMenu()}
    >
      <li className="">
        <Link href="#about">{`// about`}</Link>
      </li>
      <li>
        <Link href="#experience">{`// experience`}</Link>
      </li>
      <li>
        <Link href="#contact">{`// contact`}</Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [showMenu, setMenuState] = useState(false);

  function toggleTheme() {
    if (resolvedTheme) {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    }
  }

  return (
    <nav className="sticky top-0 flex flex-col justify-between bg-primary-foreground">
      <div className="flex items-center justify-end gap-4">
        <Icon
          icon="solar:hamburger-menu-broken"
          className="text-3xl sm:hidden"
          onClick={() => setMenuState(!showMenu)}
        />
        <div className="hidden sm:block">
          <Links closeMenu={() => {}} />
        </div>

        <Button variant="link" className="px-0">
          <Icon
            icon={
              resolvedTheme === "dark"
                ? "line-md:sun-rising-filled-loop"
                : "line-md:moon-loop"
            }
            onClick={toggleTheme}
            className="text-2xl"
          />
        </Button>
      </div>
      <div className={cn("hidden", { block: showMenu })}>
        <Links closeMenu={() => setMenuState(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
