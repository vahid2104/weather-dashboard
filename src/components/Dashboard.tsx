import Navbar from "@/components/navbar";
import Tabs from "@/components/tabs";
import TodayWeatherCard from "@/components/today-weather-card";
import WeeklyForecast from "@/components/weekly-forecast";
import {
  navbarData,
  tabsData,
  todayWeather,
  weeklyForecast,
  overviewData,
  mapBannerData,
} from "@/lib/mockData";
import Overview from "./overview";

const Dashboard = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#2b2b2b] px-10 py10">
      <div className="mx-auto min-h-205 w-300 rounded-[10px] bg-[#0f0f15] p-5 shadow-2xl">
        <Navbar
          location={navbarData.location}
          searchPlaceholder={navbarData.searchPlaceholder}
          avatarUrl={navbarData.avatarUrl}
        />
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
    </main>
  );
};

export default Dashboard;
