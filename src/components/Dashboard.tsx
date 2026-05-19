import Navbar from "@/components/navbar";
import { navbarData, tabsData } from "@/lib/mockData";
import Tabs from "@/components/tabs";

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
      </div>
    </main>
  );
};

export default Dashboard;
