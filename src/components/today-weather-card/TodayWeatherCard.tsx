"use client";

import { motion } from "framer-motion";
import WeatherIcon from "@/components/weather-icon";
import { todayWeatherCardStyles as styles } from "./todayWeatherCard.styles";

type TodayWeather = {
  day: string;
  time: string;
  temperature: number;
  condition: string;
  icon: string;
  realFeel: number;
  wind: string;
  pressure: string;
  humidity: string;
  sunrise: string;
  sunset: string;
};

type TodayWeatherCardProps = {
  weather: TodayWeather;
};

export default function TodayWeatherCard({ weather }: TodayWeatherCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
      className={styles.card}
    >
      <div className={styles.topOverlay}>
        <p className={styles.day}>{weather.day}</p>
        <p className={styles.time}>{weather.time}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.temperature}>{weather.temperature}°</h1>

          <div className={styles.leftDetails}>
            <p className={styles.detailText}>
              Real Feel{" "}
              <span className={styles.detailValue}>{weather.realFeel}°</span>
            </p>

            <p className={styles.detailText}>
              Wind{" "}
              <span className={styles.detailValue}>{weather.wind}</span>
            </p>

            <p className={styles.detailText}>
              Pressure{" "}
              <span className={styles.detailValue}>{weather.pressure}</span>
            </p>

            <p className={styles.detailText}>
              Humidity{" "}
              <span className={styles.detailValue}>{weather.humidity}</span>
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <WeatherIcon icon={weather.icon} size={75} alt={weather.condition} />

          <div className={styles.rightDetails}>
            <p className={styles.detailText}>
              Sunrise{" "}
              <span className={styles.detailValue}>{weather.sunrise}</span>
            </p>

            <p className={styles.detailText}>
              Sunset{" "}
              <span className={styles.detailValue}>{weather.sunset}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}