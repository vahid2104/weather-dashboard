"use client";

import { Bell, Grid2X2, MapPin, Moon, Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
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
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-5">
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17181d] text-white/80 transition hover:bg-[#20222a] hover:text-white">
          <Grid2X2 />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17181d] text-white/80 transition hover:bg-[#20222a] hover:text-white">
          <Bell size={18}/>
        </button>

        <div className="flex items-center gap-2 text-[15px] text-white/85">
          <MapPin size={18} className="text-white"/>
          <span>{location}</span>
        </div>
</div>
        <div className="relative w-105">
          <Search size={19} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/80" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="h-11 w-full rounded-[7px] bg-[#1b1b20] pl-14 pr-4 text-[13px] text-white outline-none placeholder:text-white/80 focus:ring-2 focus:ring-[#bcd5e8]/40"
            />
        </div>

        <div className="flex items-center gap-4">
            <button className="flex h-11 w-24 items-center justify-end rounded-full border border-white/20 bg-[#15161b] px-2 transition hover:border-white/40">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d8ecfb] text-[#11131a]">
            <Moon size={18} />
          </span>
        </button>
        <Image width={40} height={40} src={avatarUrl} alt="User Avatar" className="rounded-full object-cover" />
        </div>

      
    </motion.header>
  );
};

export default Navbar;
