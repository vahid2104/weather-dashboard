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

export function useWeather() {
  const [city, setCity] = useState(DEFAULT_CITY);

  const [todayWeather, setTodayWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [overviewData, setOverviewData] = useState(null);
  const [otherCities, setOtherCities] = useState([]);

  const [loading, setLoading] = useState(true);
  const [otherCitiesLoading, setOtherCitiesLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchWeatherByCity(cityName) {
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
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function searchWeather(cityName) {
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
        setError(error.message || "Failed to load weather data.");
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