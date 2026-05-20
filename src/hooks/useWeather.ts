"use client";

import { useEffect, useState } from "react";
import {
  getCurrentWeather,
  getForecast,
  getOtherCitiesWeather,
} from "@/lib/weatherApi";

import {
  formatCurrentWeather,
  formatWeeklyForecast,
  formatOverviewData,
  formatOtherCities,
} from "@/lib/weatherUtils";

const DEFAULT_CITY = "Baku";

type TodayWeather = {
  day: string;
  time: string;
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  realFeel: number;
  wind: string;
  pressure: string;
  humidity: string;
  sunrise: string;
  sunset: string;
};

type ForecastDay = {
  day: string;
  temperature: number;
  minTemperature?: number;
  maxTemperature?: number;
  condition: string;
  icon: string;
};

type OverviewData = {
  wind: {
    title: string;
    speed: string;
    unit: string;
    time: string;
    bars: number[];
    deg?: number;
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
    icon: string;
  };
};

type OtherCity = {
  country: string;
  city: string;
  condition: string;
  icon: string;
  temperature?: number;
};

export function useWeather() {
  const [city, setCity] = useState(DEFAULT_CITY);

  const [todayWeather, setTodayWeather] = useState<TodayWeather | null>(null);
  const [weeklyForecast, setWeeklyForecast] = useState<ForecastDay[]>([]);
  const [overviewData, setOverviewData] = useState<OverviewData | null>(null);
  const [otherCities, setOtherCities] = useState<OtherCity[]>([]);

  const [loading, setLoading] = useState(true);
  const [otherCitiesLoading, setOtherCitiesLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchWeatherByCity(cityName: string) {
    try {
      setLoading(true);
      setError("");

      const [currentWeatherData, forecastData] = await Promise.all([
        getCurrentWeather(cityName),
        getForecast(cityName),
      ]);

      setTodayWeather(formatCurrentWeather(currentWeatherData));
      setWeeklyForecast(formatWeeklyForecast(forecastData));
      setOverviewData(formatOverviewData(currentWeatherData));
      setCity(cityName);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  function searchWeather(cityName: string) {
    const trimmedCityName = cityName.trim();

    if (!trimmedCityName) {
      return;
    }

    fetchWeatherByCity(trimmedCityName);
  }

  useEffect(() => {
    async function loadInitialWeather() {
      try {
        const [currentWeatherData, forecastData, otherCitiesData] =
          await Promise.all([
            getCurrentWeather(DEFAULT_CITY),
            getForecast(DEFAULT_CITY),
            getOtherCitiesWeather(),
          ]);

        setTodayWeather(formatCurrentWeather(currentWeatherData));
        setWeeklyForecast(formatWeeklyForecast(forecastData));
        setOverviewData(formatOverviewData(currentWeatherData));
        setOtherCities(formatOtherCities(otherCitiesData));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to load weather data.");
        }
      } finally {
        setLoading(false);
        setOtherCitiesLoading(false);
      }
    }

    loadInitialWeather();
  }, []);

  return {
    city,
    todayWeather,
    weeklyForecast,
    overviewData,
    otherCities,
    loading,
    otherCitiesLoading,
    error,
    searchWeather,
  };
}