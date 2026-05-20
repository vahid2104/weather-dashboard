"use client";

import { motion } from "framer-motion";
import WeatherIcon from "@/components/weather-icon";
import { rightPanelStyles as styles } from "./rightPanel.styles";

type RainItem = {
  time: string;
  value: number;
};

type ChanceOfRainData = {
  title: string;
  labels: string[];
  timeline: RainItem[];
};

type City = {
  country: string;
  city: string;
  condition: string;
  icon: string;
  temperature?: number;
};

type RightPanelProps = {
  chanceOfRain: ChanceOfRainData;
  cities: City[];
  otherCitiesLoading?: boolean;
};

export default function RightPanel({
  chanceOfRain,
  cities,
  otherCitiesLoading = false,
}: RightPanelProps) {
  return (
    <aside className={styles.panel}>
      <motion.section
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        className={styles.rainCard}
      >
        <h2 className={styles.rainTitle}>{chanceOfRain.title}</h2>

        <div className={styles.chart}>
          <div className={styles.yLabels}>
            {chanceOfRain.labels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className={styles.chartArea}>
            <div className={styles.gridLineTop} />
            <div className={styles.gridLineMiddle} />
            <div className={styles.gridLineBottom} />

            <div className={styles.barsWrapper}>
              {chanceOfRain.timeline.map((item, index) => (
                <div key={item.time} className={styles.barGroup}>
                  <div className={styles.barTrack}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      transition={{
                        duration: 0.65,
                        delay: 0.35 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className={styles.bar}
                    />

                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.6 + index * 0.08,
                      }}
                      className={styles.dot}
                      style={{ bottom: `${item.value}%` }}
                    />
                  </div>

                  <span className={styles.timeLabel}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section>
        <div className={styles.citiesHeader}>
          <h2 className={styles.citiesTitle}>Other Cities</h2>

          <button type="button" className={styles.seeAll}>
            See All
          </button>
        </div>

        {otherCitiesLoading ? (
          <div className={styles.citiesLoading}>Loading cities...</div>
        ) : (
          <div className={styles.citiesList}>
            {cities.map((city, index) => (
              <motion.article
                key={`${city.country}-${city.city}`}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.35 + index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02, x: -3 }}
                className={styles.cityCard}
              >
                <div>
                  <p className={styles.country}>{city.country}</p>

                  <h3 className={styles.city}>{city.city}</h3>

                  <p className={styles.condition}>
                    {city.condition}

                    {typeof city.temperature === "number" && (
                      <span className={styles.cityTemperature}>
                        {" "}
                        • {city.temperature}°
                      </span>
                    )}
                  </p>
                </div>

                <WeatherIcon
                  icon={city.icon}
                  size={48}
                  alt={`${city.city} weather`}
                  className={styles.cityIcon}
                />
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </aside>
  );
}