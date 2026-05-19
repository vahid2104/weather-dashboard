import Navbar from "./Navbar";
import { navbarData } from "@/lib/mockData";

const Dashboard = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#2b2b2b] px-10 py10">
      <div className="mx-auto h-190 w-305 rounded-[10px] bg-[#0f0f15] p-5 shadow-2xl">
        <Navbar location={navbarData.location} searchPlaceholder={navbarData.searchPlaceholder} avatarUrl={navbarData.avatarUrl} />
      </div>
    </main>
  );
};

export default Dashboard;
