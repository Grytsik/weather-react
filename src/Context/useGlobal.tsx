import { apiKEY, apiURL } from '../api';
import { useEffect, useState } from 'react';
import { LocationData, WeatherData } from '../types/types';

export default function useGlobal() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [location, setLocation] = useState<LocationData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [icon, setIcon] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [lon, setLon] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  },[theme]);

  useEffect(() => {
    if (!searchValue) {
      getCurrentPosition();
    }
    getForecast();
    getWeatherIp();
  }, [lat, searchValue]);

  const how_to_search = searchValue ? `q=${searchValue}` : `lat=${lat}&lon=${lon}`;

  // Погода на 5 дней
  const getForecast = async () => {
    setLoading(true);
    await fetch(`${apiURL}/forecast?${how_to_search}&lang=ua&units=metric&appid=${apiKEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setForecast([]);
          setLoading(false);
        } else {
          const dailyDate = data.list.filter((item: WeatherData) =>
            item.dt_txt.includes('18:00:00')
          );
          setForecast(dailyDate);
          setLoading(false);
        }
      });
  };
  // Текущая погода
  const getWeatherIp = async () => {
    setLoading(true);

    await fetch(`${apiURL}/weather?${how_to_search}&lang=ua&units=metric&appid=${apiKEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setLocation(null);
          setLoading(false);
        } else {
          setIcon(data?.weather[0]?.main);
          setLocation(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Определение погоды по айпи
  const getCurrentPosition = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      setLoading(false);
    }
  };

  return {
    searchValue,
    setSearchValue,
    location,
    forecast,
    icon,
    loading,
    toggleTheme,
    theme,
    lon,
    lat,
  };
}
