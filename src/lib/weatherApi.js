const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function checkApiKey() {
  if (!API_KEY) {
    throw new Error("OpenWeatherMap API key is missing");
  }
}

export async function getCurrentWeather(city) {
  checkApiKey();

  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch current weather");
  }

  return data;
}

export async function getForecast(city) {
  checkApiKey();

  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch forecast");
  }

  return data;
}

export async function getOtherCitiesWeather() {
  const cities = [
    {
      label: "Beijing",
      country: "China",
      query: "Beijing",
    },
    {
      label: "California",
      country: "US",
      query: "Los Angeles",
    },
    {
      label: "Arab Emirates",
      country: "Dubai",
      query: "Dubai",
    },
    {
      label: "Charlottetown",
      country: "Canada",
      query: "Charlottetown",
    },
  ];

  const requests = cities.map(async (city) => {
    const weather = await getCurrentWeather(city.query);

    return {
      ...city,
      weather,
    };
  });

  return Promise.all(requests);
}