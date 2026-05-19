"use client";

import { Bell, Grid2X2, MapPin, Moon, Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navbarStyles } from "./navbar.styles";
type NavbarProps = {
  location: string;
  searchPlaceholder: string;
  avatarUrl: string;
};

const Navbar = ({ location, searchPlaceholder, avatarUrl }: NavbarProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={navbarStyles.header}
    >
      <div className={navbarStyles.leftSection}>
        <button className={navbarStyles.iconButton}>
          <Grid2X2 />
        </button>

        <button className={navbarStyles.iconButton}>
          <Bell size={18} />
        </button>

        <div className={navbarStyles.locationWrapper}>
          <MapPin size={18} className="text-white" />
          <span>{location}</span>
        </div>
      </div>
      <div className={navbarStyles.searchWrapper}>
        <Search size={19} className={navbarStyles.searchIcon} />
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={navbarStyles.searchInput}
        />
      </div>

      <div className={navbarStyles.rightSection}>
        <button className={navbarStyles.themeToggle}>
          <span className={navbarStyles.themeCircle}>
            <Moon size={18} />
          </span>
        </button>
        <Image
          width={40}
          height={40}
          src={avatarUrl}
          alt="User Avatar"
          className={navbarStyles.avatar}
        />
      </div>
    </motion.header>
  );
};

export default Navbar;
