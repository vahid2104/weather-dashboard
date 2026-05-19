import Navbar from "@/components/navbar";
import Tabs from "@/components/tabs";
import TodayWeatherCard from "@/components/today-weather-card";
import WeeklyForecast from "@/components/weekly-forecast";
import Overview from "@/components/overview";
import RightPanel from "@/components/right-panel";

import {
  navbarData,
  tabsData,
  todayWeather,
  weeklyForecast,
  overviewData,
  mapBannerData,
  chanceOfRainData,
  otherCities,
} from "@/lib/mockData";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#2b2b2b] px-10 py-10">
      <section className="mx-auto min-h-205 w-311 rounded-[10px] bg-[#0f0f15] p-5 shadow-2xl">
        <Navbar
          location={navbarData.location}
          searchPlaceholder={navbarData.searchPlaceholder}
          avatarUrl={navbarData.avatarUrl}
        />

        <section className="mt-7 flex items-start gap-7">
          <div className="w-241.25">
            <Tabs
              dayTabs={tabsData.dayTabs}
              activeDayTab={tabsData.activeDayTab}
              modeTabs={tabsData.modeTabs}
              activeModeTab={tabsData.activeModeTab}
            />

            <section className="mt-6 flex items-start gap-8">
              <TodayWeatherCard weather={todayWeather} />
              <WeeklyForecast forecast={weeklyForecast} />
            </section>

            <Overview data={overviewData} mapBanner={mapBannerData} />
          </div>

          <RightPanel chanceOfRain={chanceOfRainData} cities={otherCities} />
        </section>
      </section>
    </main>
  );
}