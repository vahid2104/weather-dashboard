"use client";

import { motion } from "framer-motion";
import { tabsStyles } from "./tabs.styles";

type TabsProps = {
  dayTabs: string[];
  activeDayTab: string;
  modeTabs: string[];
  activeModeTab: string;
};

function combineClasses(...classes: string[]) {
  return classes.join(" ");
}

export default function Tabs({
  dayTabs,
  activeDayTab,
  modeTabs,
  activeModeTab,
}: TabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      className={tabsStyles.wrapper}
    >
      <div className={tabsStyles.dayTabs}>
        {dayTabs.map((tab) => {
          const isActive = tab === activeDayTab;

          return (
            <button
              key={tab}
              className={combineClasses(
                tabsStyles.dayTabButton,
                isActive
                  ? tabsStyles.activeDayTabButton
                  : tabsStyles.inactiveDayTabButton
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className={tabsStyles.modeTabs}>
        {modeTabs.map((tab) => {
          const isActive = tab === activeModeTab;

          return (
            <button
              key={tab}
              className={combineClasses(
                tabsStyles.modeTabButton,
                isActive
                  ? tabsStyles.activeModeTabButton
                  : tabsStyles.inactiveModeTabButton
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}