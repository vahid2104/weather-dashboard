import Navbar from "@/components/navbar";
import Tabs from "@/components/tabs";
import TodayWeatherCard from "@/components/today-weather-card";
import WeeklyForecast from "@/components/weekly-forecast";
import {
  navbarData,
  tabsData,
  todayWeather,
  weeklyForecast,
} from "@/lib/mockData";

const Dashboard = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#2b2b2b] px-10 py10">
      <div className="mx-auto h-190 w-305 rounded-[10px] bg-[#0f0f15] p-5 shadow-2xl">
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
      </div>
    </main>
  );
};

export default Dashboard;
