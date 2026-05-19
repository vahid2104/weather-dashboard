const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/weather-dashboard" : "";

export const navbarData = {
  location: "Dhaka, Bangladesh",
  searchPlaceholder: "Search City",
  avatarUrl: "https://i.pravatar.cc/80?img=32",
};

export const tabsData = {
  dayTabs: ["Today", "Tomorrow", "Next 7 days"],
  activeDayTab: "Next 7 days",
  modeTabs: ["Forecast", "Air Quality"],
  activeModeTab: "Forecast",
};

export const todayWeather = {
  day: "Friday",
  time: "11:45 AM",
  temperature: 16,
  condition: "Partly Cloudy",
  icon: `${BASE_PATH}/icons/weather/sunny-cloudy.png`,
  realFeel: 18,
  wind: "N-E. 6-7km/h",
  pressure: "100MB",
  humidity: "51%",
  sunrise: "5:30AM",
  sunset: "6:45",
};

export const weeklyForecast = [
  {
    day: "SAT",
    temperature: 10,
    condition: "Rainy",
    icon: `${BASE_PATH}/icons/weather/rainy.png`,
  },
  {
    day: "SUN",
    temperature: 15,
    condition: "Thunder",
    icon: `${BASE_PATH}/icons/weather/thunderstorm.png`,
  },
  {
    day: "MON",
    temperature: 11,
    condition: "Cloudy",
    icon: `${BASE_PATH}/icons/weather/partly-cloudy.png`,
  },
  {
    day: "TUE",
    temperature: 10,
    condition: "Rainy",
    icon: `${BASE_PATH}/icons/weather/rainy.png`,
  },
  {
    day: "WED",
    temperature: 12,
    condition: "Storm",
    icon: `${BASE_PATH}/icons/weather/thunder-rain.png`,
  },
  {
    day: "THU",
    temperature: 10,
    condition: "Windy Rain",
    icon: `${BASE_PATH}/icons/weather/windy-rainy.png`,
  },
  {
    day: "FRI",
    temperature: 16,
    condition: "Sunny Cloudy",
    icon: `${BASE_PATH}/icons/weather/sunny-cloudy.png`,
  },
];

export const overviewData = {
  wind: {
    title: "Wind Status",
    speed: "7.50",
    unit: "km/h",
    time: "6.20 AM",
    bars: [28, 34, 42, 48, 56, 64, 70, 82, 88, 78, 68, 60, 52, 44, 38, 32],
  },
  uvIndex: {
    title: "UV Indesx",
    value: "5.50",
    unit: "UV",
    max: 12,
  },
  humidity: {
    title: "Humidity",
    value: "84",
    unit: "%",
    description: "The dew point is 27° right now",
  },
  visibility: {
    title: "Visibility",
    value: "04",
    unit: "km",
    description: "Haze is affecting visibility",
    icon: `${BASE_PATH}/icons/weather/foggy.png`,
  },
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
    {
      time: "10AM",
      value: 68,
    },
    {
      time: "11AM",
      value: 62,
    },
    {
      time: "12AM",
      value: 92,
    },
    {
      time: "01PM",
      value: 38,
    },
    {
      time: "02PM",
      value: 78,
    },
    {
      time: "03PM",
      value: 32,
    },
  ],
};

export const otherCities = [
  {
    country: "China",
    city: "Beijing",
    condition: "Cloudy",
    icon: `${BASE_PATH}/icons/weather/partly-cloudy.png`,
  },
  {
    country: "US",
    city: "California",
    condition: "Windy",
    icon: `${BASE_PATH}/icons/weather/windy-rainy.png`,
  },
  {
    country: "Dubai",
    city: "Arab Emirates",
    condition: "Mostly Sunny",
    icon: `${BASE_PATH}/icons/weather/sunny-cloudy.png`,
  },
  {
    country: "Canada",
    city: "Charlottetown",
    condition: "Light Snow Shower",
    icon: `${BASE_PATH}/icons/weather/partly-rainy.png`,
  },
];