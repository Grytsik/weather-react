import { apiKEY, apiURL } from '../api';
import { useEffect, useState } from 'react';

export default function useGlobal() {
  const [searchValue, setSearchValue] = useState('');
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(true);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

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
    await fetch(`${apiURL}/forecast?${how_to_search}&lang=ua&units=metric&appid=${apiKEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setForecast([]);
          setLoading(false);
        } else {
          const dailyDate = data.list.filter((item) => item.dt_txt.includes('18:00:00'));
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
          setLocation([]);
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  };

  return {
    searchValue,
    setSearchValue,
    location,
    forecast,
    icon,
    loading,
  };
}
