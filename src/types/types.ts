export interface WeatherData extends LocationData {
  dt_txt: string;
}

interface LocationMainData {
  length: number | null;
  feels_like: number;
  humidity: number | undefined;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface LocationWeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface LocationSysData {
  country: string;
  sunrise: string;
  sunset: string;
}

interface LocationWindData {
  deg?: number;
  speed: number;
}

export interface LocationData {
  name: string;
  length: number;
  dt_txt: string;
  visibility: number;
  wind: LocationWindData;
  sys: LocationSysData;
  main: LocationMainData;
  weather: LocationWeatherData[];
}
