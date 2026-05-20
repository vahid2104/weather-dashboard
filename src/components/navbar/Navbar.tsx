"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell, Grid2X2, MapPin, Moon, Search } from "lucide-react";
import { motion } from "framer-motion";
import { navbarStyles } from "./navbar.styles";

type NavbarProps = {
  location: string;
  searchPlaceholder: string;
  avatarUrl: string;
  onSearch?: (city: string) => void;
};

type NavbarIconButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
};

function NavbarIconButton({ children, ariaLabel }: NavbarIconButtonProps) {
  return (
    <button type="button" aria-label={ariaLabel} className={navbarStyles.iconButton}>
      {children}
    </button>
  );
}

export default function Navbar({
  location,
  searchPlaceholder,
  avatarUrl,
  onSearch,
}: NavbarProps) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch() {
    const trimmedValue = searchValue.trim();

    if (!trimmedValue || !onSearch) {
      return;
    }

    onSearch(trimmedValue);
    setSearchValue("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={navbarStyles.header}
    >
      <div className={navbarStyles.leftSection}>
        <NavbarIconButton ariaLabel="Open menu">
          <Grid2X2 size={18} />
        </NavbarIconButton>

        <NavbarIconButton ariaLabel="Notifications">
          <Bell size={18} />
        </NavbarIconButton>

        <div className={navbarStyles.locationWrapper}>
          <MapPin size={18} className={navbarStyles.locationIcon} />
          <span>{location}</span>
        </div>
      </div>

      <div className={navbarStyles.searchWrapper}>
        <button
          type="button"
          onClick={handleSearch}
          className={navbarStyles.searchButton}
          aria-label="Search city"
        >
          <Search size={19} />
        </button>

        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={searchPlaceholder}
          className={navbarStyles.searchInput}
        />
      </div>

      <div className={navbarStyles.rightSection}>
        <button type="button" className={navbarStyles.themeToggle}>
          <span className={navbarStyles.themeCircle}>
            <Moon size={18} />
          </span>
        </button>

        <Image
          src={avatarUrl}
          alt="User avatar"
          width={40}
          height={40}
          className={navbarStyles.avatar}
        />
      </div>
    </motion.header>
  );
}