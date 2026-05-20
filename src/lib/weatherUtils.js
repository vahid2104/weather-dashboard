const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/weather-dashboard" : "";

export function formatTemperature(temp) {
  return Math.round(temp);
};

export function formatUnixTime(unixTime) {
  return new Date(unixTime * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatVisibility(visibilityInMeters) {
    if (!visibilityInMeters) {
        return "0";
    }
return String(Math.round(visibilityInMeters / 1000)).padStart(2, "0");
}

export function getWeatherIcon(openWeatherIconCode) {
  const iconMap = {
    "01d": "sunny-cloudy.png",
    "01n": "sunny-cloudy.png",

    "02d": "sunny-cloudy.png",
    "02n": "partly-cloudy.png",

    "03d": "partly-cloudy.png",
    "03n": "partly-cloudy.png",

    "04d": "partly-cloudy.png",
    "04n": "partly-cloudy.png",

    "09d": "rainy.png",
    "09n": "rainy.png",

    "10d": "partly-rainy.png",
    "10n": "partly-rainy.png",

    "11d": "thunderstorm.png",
    "11n": "thunderstorm.png",

    "13d": "partly-rainy.png",
    "13n": "partly-rainy.png",

    "50d": "foggy.png",
    "50n": "foggy.png",
  };

  const fileName = iconMap[openWeatherIconCode] || "partly-cloudy.png";

  return `${BASE_PATH}/icons/weather/${fileName}`;
}

export function formatCurrentWeather(currentWeather) {
  return {
    day: new Date().toLocaleDateString("en-US", {
      weekday: "long",
    }),
    time: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    location: `${currentWeather.name}, ${currentWeather.sys.country}`,
    temperature: formatTemperature(currentWeather.main.temp),
    condition: currentWeather.weather[0].description,
    icon: getWeatherIcon(currentWeather.weather[0].icon),
    realFeel: formatTemperature(currentWeather.main.feels_like),
    wind: `${Math.round(currentWeather.wind.speed)} km/h`,
    pressure: `${currentWeather.main.pressure}MB`,
    humidity: `${currentWeather.main.humidity}%`,
    sunrise: formatUnixTime(currentWeather.sys.sunrise),
    sunset: formatUnixTime(currentWeather.sys.sunset),
  };
}

export function formatOverviewData(currentWeather) {
  const windSpeed = currentWeather.wind.speed;
  const visibility = formatVisibility(currentWeather.visibility);

  return {
    wind: {
      title: "Wind Status",
      speed: windSpeed.toFixed(2),
      unit: "km/h",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      bars: [28, 34, 42, 48, 56, 64, 70, 82, 88, 78, 68, 60, 52, 44, 38, 32],
      deg: currentWeather.wind.deg,
    },
    uvIndex: {
      title: "UV Indesx",
      value: "5.50",
      unit: "UV",
      max: 12,
    },
    humidity: {
      title: "Humidity",
      value: String(currentWeather.main.humidity),
      unit: "%",
      description: "The dew point is 27° right now",
    },
    visibility: {
      title: "Visibility",
      value: visibility,
      unit: "km",
      description: "Haze is affecting visibility",
      icon: `${BASE_PATH}/icons/weather/foggy.png`,
    },
  };
}

export function formatWeeklyForecast(forecastData) {
  const groupedByDay = {};

  forecastData.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!groupedByDay[date]) {
      groupedByDay[date] = [];
    }

    groupedByDay[date].push(item);
  });

  return Object.entries(groupedByDay)
    .slice(0, 7)
    .map(([date, items]) => {
      const temps = items.map((item) => item.main.temp);
      const middleItem = items[Math.floor(items.length / 2)];

      return {
        day: new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
        }).toUpperCase(),
        temperature: formatTemperature(
          (Math.min(...temps) + Math.max(...temps)) / 2
        ),
        minTemperature: formatTemperature(Math.min(...temps)),
        maxTemperature: formatTemperature(Math.max(...temps)),
        condition: middleItem.weather[0].main,
        icon: getWeatherIcon(middleItem.weather[0].icon),
      };
    });
}

export function formatOtherCities(citiesWeather) {
  return citiesWeather.map((item) => {
    return {
      country: item.country,
      city: item.label,
      condition: item.weather.weather[0].description,
      icon: getWeatherIcon(item.weather.weather[0].icon),
      temperature: formatTemperature(item.weather.main.temp),
    };
  });
}