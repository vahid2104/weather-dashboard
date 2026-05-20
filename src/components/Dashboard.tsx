"use client";

import Navbar from "@/components/navbar";
import Tabs from "@/components/tabs";
import TodayWeatherCard from "@/components/today-weather-card";
import WeeklyForecast from "@/components/weekly-forecast";
import Overview from "@/components/overview";
import RightPanel from "@/components/right-panel";

import { useWeather } from "@/hooks/useWeather";

import {
  navbarData,
  tabsData,
  mapBannerData,
  chanceOfRainData,
} from "@/lib/staticData";

export default function Dashboard() {
  const {
    todayWeather,
    weeklyForecast,
    overviewData,
    otherCities,
    loading,
    otherCitiesLoading,
    error,
    searchWeather,
  } = useWeather();

  return (
    <main className="min-h-screen bg-[#2b2b2b] px-10 py-10">
      <section className="mx-auto min-h-205 w-300 rounded-[10px] bg-[#0f0f15] p-5 shadow-2xl overflow-hidden flex-none">
        <Navbar
          location={todayWeather?.location || navbarData.location}
          searchPlaceholder={navbarData.searchPlaceholder}
          avatarUrl={navbarData.avatarUrl}
          onSearch={searchWeather}
        />

        {error && (
          <div className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {loading ? (
          <div className="mt-10 flex h-140 items-center justify-center text-white/70">
            Loading weather data...
          </div>
        ) : (
          <section className="mt-7 flex items-start gap-7">
            <div className="w-241.25">
              <Tabs
                dayTabs={tabsData.dayTabs}
                activeDayTab={tabsData.activeDayTab}
                modeTabs={tabsData.modeTabs}
                activeModeTab={tabsData.activeModeTab}
              />

              <section className="mt-6 flex items-start gap-8">
                {todayWeather && (
                  <TodayWeatherCard weather={todayWeather} />
                )}

                <WeeklyForecast forecast={weeklyForecast} />
              </section>

              {overviewData && (
                <Overview
                  data={overviewData}
                  mapBanner={mapBannerData}
                />
              )}
            </div>

            <RightPanel
              chanceOfRain={chanceOfRainData}
              cities={otherCities}
              otherCitiesLoading={otherCitiesLoading}
            />
          </section>
        )}
      </section>
    </main>
  );
}