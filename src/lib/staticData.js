const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/weather-dashboard" : "";

export const navbarData = {
  location: "Baku, AZ",
  searchPlaceholder: "Search City",
  avatarUrl: "https://i.pravatar.cc/80?img=32",
};

export const tabsData = {
  dayTabs: ["Today", "Tomorrow", "Next 7 days"],
  activeDayTab: "Next 7 days",
  modeTabs: ["Forecast", "Air Quality"],
  activeModeTab: "Forecast",
};

export const mapBannerData = {
  title: "Explore global map of wind weather and ocean condition",
  buttonText: "GET STARTED",
  imageUrl: `${BASE_PATH}/images/map-banner.png`,
};

export const chanceOfRainData = {
  title: "Chance Of Rain",
  labels: ["Rainy", "Sunny", "Heavy"],
  timeline: [
    { time: "10AM", value: 68 },
    { time: "11AM", value: 62 },
    { time: "12AM", value: 92 },
    { time: "01PM", value: 38 },
    { time: "02PM", value: 78 },
    { time: "03PM", value: 32 },
  ],
};