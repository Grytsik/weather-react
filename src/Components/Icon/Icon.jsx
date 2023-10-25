import thunderStorm from '../../animate-icon/thunderstorms-rain.svg';
import drizzle from '../../animate-icon/drizzle.svg';
import rain from '../../animate-icon/rain.svg';
import snow from '../../animate-icon/snow.svg';
import clouds from '../../animate-icon/fog.svg';
import fog from '../../animate-icon/fog.svg';
import haze from '../../animate-icon/haze.svg';
import smoke from '../../animate-icon/smoke.svg';
import clearDay from '../../animate-icon/clear-day.svg';
import cloudyBack from '../../img/cloud-backgr.jpg';
import lighting from '../../img/lightingBack.jpg';
import rainBack from '../../img/rainBack.jpg';
import clearBack from '../../img/clearBack.jpg';
import snowBack from '../../img/snowBack.jpg';

export default function Icon(icon, isForecast) {
  let result = clearDay;
  let backgroundUrl = '';

  if (!isForecast) {
    switch (icon) {
      case 'Thunderstorm':
        result = thunderStorm;
        backgroundUrl = `url(${lighting})`;
        break;
      case 'Drizzle':
        result = drizzle;
        backgroundUrl = `url(${rainBack})`;
        break;
      case 'Rain':
        result = rain;
        backgroundUrl = `url(${rainBack})`;
        break;
      case 'Snow':
        result = snow;
        backgroundUrl = `url(${snowBack})`;
        break;
      case 'Clear':
        result = clearDay;
        backgroundUrl = `url(${clearBack})`;
        break;
      case 'Clouds':
        result = clouds;
        backgroundUrl = `url(${cloudyBack})`;
        break;
      case 'Fog':
        result = fog;
        break;
      case 'Haze':
        result = haze;
        break;
      case 'Smoke':
        result = smoke;
        break;
      default:
        break;
    }

    document.body.style.backgroundImage = backgroundUrl;

    return result;
  } else {
    switch (icon) {
      case 'Thunderstorm':
        result = thunderStorm;
        break;
      case 'Drizzle':
        result = drizzle;
        break;
      case 'Rain':
        result = rain;
        break;
      case 'Snow':
        result = snow;
        break;
      case 'Clear':
        result = clearDay;
        break;
      case 'Clouds':
        result = clouds;
        break;
      case 'Fog':
        result = fog;
        break;
      case 'Haze':
        result = haze;
        break;
      case 'Smoke':
        result = smoke;
        break;
      default:
        break;
    }
    return result;
  }
}
