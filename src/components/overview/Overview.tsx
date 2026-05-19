"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Eye } from "lucide-react";
import { overviewStyles as styles } from "./overview.styles";

type OverviewData = {
  wind: {
    title: string;
    speed: string;
    unit: string;
    time: string;
    bars: number[];
  };
  uvIndex: {
    title: string;
    value: string;
    unit: string;
    max: number;
  };
  humidity: {
    title: string;
    value: string;
    unit: string;
    description: string;
  };
  visibility: {
    title: string;
    value: string;
    unit: string;
    description: string;
  };
};

type MapBannerData = {
  title: string;
  buttonText: string;
  imageUrl: string;
};

type OverviewProps = {
  data: OverviewData;
  mapBanner: MapBannerData;
};

export default function Overview({ data, mapBanner }: OverviewProps) {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Today&apos;s Overview</h2>

        <div className={styles.grid}>
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{data.wind.title}</h3>

            <div className={styles.windBars}>
              {data.wind.bars.map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                    ease: "easeOut",
                  }}
                  className={styles.windBar}
                />
              ))}
            </div>

            <div className={styles.cardFooter}>
              <p>
                <span className={styles.footerValue}>{data.wind.speed}</span>{" "}
                <span className={styles.footerMuted}>{data.wind.unit}</span>
              </p>

              <p className={styles.footerMuted}>{data.wind.time}</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{data.uvIndex.title}</h3>

            <div className={styles.uvWrapper}>
              <div className={styles.uvGauge}>
                <div className={styles.uvArcBase} />
                <div className={styles.uvArcValue} />
                <div className={styles.uvNumbers}>
                  <p>5 7</p>
                  <p className="mt-2">10</p>
                  <p className="mt-2">12</p>
                </div>
              </div>

              <p className={styles.uvValue}>
                {data.uvIndex.value} {data.uvIndex.unit}
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{data.humidity.title}</h3>

            <div className={styles.centerIcon}>
              <Droplets size={64} className="text-[#c8e4f4]" strokeWidth={1.8} />
            </div>

            <div className={styles.bottomInfo}>
              <p className={styles.bigValue}>
                {data.humidity.value}
                {data.humidity.unit}
              </p>

              <p className={styles.smallDescription}>
                {data.humidity.description}
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{data.visibility.title}</h3>

            <div className={styles.centerIcon}>
              <Image
                src="/icons/weather/foggy.png"
                alt="Visibility fog icon"
                width={82}
                height={56}
                className={styles.visibilityIcon}
              />
            </div>

            <div className={styles.bottomInfo}>
              <p className={styles.bigValue}>
                {data.visibility.value}{" "}
                <span className="text-[13px] font-medium">
                  {data.visibility.unit}
                </span>
              </p>

              <p className={styles.smallDescription}>
                <Eye size={13} className="mr-1 inline text-white/45" />
                {data.visibility.description}
              </p>
            </div>
          </motion.article>
        </div>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className={styles.mapBanner}
        style={{ backgroundImage: `url(${mapBanner.imageUrl})` }}
      >
        <div className={styles.mapOverlay} />

        <div className={styles.mapTitleBox}>
          <h3 className={styles.mapTitle}>{mapBanner.title}</h3>
        </div>

        <button className={styles.mapButton}>{mapBanner.buttonText}</button>
      </motion.article>
    </section>
  );
}