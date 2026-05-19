"use client";

import { motion } from "framer-motion";
import WeatherIcon from "@/components/weather-icon";
import { weeklyForecastStyles as styles } from "./weeklyForecast.styles";

type ForecastDay = {
  day: string;
  temperature: number;
  condition: string;
  icon: string;
};

type WeeklyForecastProps = {
  forecast: ForecastDay[];
};

export default function WeeklyForecast({ forecast }: WeeklyForecastProps) {
  return (
    <div className={styles.wrapper}>
      {forecast.map((item, index) => (
        <motion.article
          key={item.day}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: 0.18 + index * 0.05,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.03, y: -4 }}
          className={styles.card}
        >
          <p className={styles.day}>{item.day}</p>

          <div className={styles.divider} />

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className={styles.iconWrapper}
          >
            <WeatherIcon icon={item.icon} size={44} alt={item.condition} />
          </motion.div>

          <p className={styles.temperature}>{item.temperature}°</p>

          <p className={styles.condition}>{item.condition}</p>
        </motion.article>
      ))}
    </div>
  );
}
