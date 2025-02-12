import wind from '../../img/wind.svg';
import pressure from '../../img/pressure.svg';
import humidity from '../../img/humidity.svg';
import sunsetImg from '../../img/sunset.png';
import sunriseImg from '../../img/sunrise.png';
import './WeatherCard.scss';
import { useGlobalContext } from '../../Context/Context';
import Moment from 'react-moment';
export default function WeatherCardd() {
  const { location } = useGlobalContext();
  const humidityVal = location?.main?.humidity ?? 0;
 

  const visibilityInMeters = location?.visibility ?? 0;
  const visibilityInKm = (visibilityInMeters / 1000).toFixed(1);

  const pressureHpa = location?.main?.pressure ?? 0;
  const pressureMmHg = (pressureHpa * 0.75006).toFixed(1);

  const seaLevelHpa = location?.main?.sea_level ?? 0;
  const seaLevelAtm = (seaLevelHpa / 1013.25).toFixed(3);

 

  return (
    <div className='weatherCard'>
      <div className='weatherCard__container'>
        <div className='weatherCard__item'>
          <img className='weatherCard__img' src={humidity} alt='wind' />
          <div className='weatherCard__name'>
            <p className='weatherCard__text'>Humidity</p>
            <p className='weatherCard__value'>{humidityVal}%</p>
          </div>
        </div>

        <div className='weatherCard__item'>
          <img className='weatherCard__img' src={pressure} alt='wind' />
          <div className='weatherCard__name'>
            <p className='weatherCard__text'>Visibility</p>
            <p className='weatherCard__value'>{visibilityInKm} km</p>
          </div>
        </div>

        <div className='weatherCard__item'>
          <img className='weatherCard__img' src={wind} alt='wind' />
          <div className='weatherCard__name'>
            <p className='weatherCard__text'>Wind</p>
            <p className='weatherCard__value'>{location?.wind?.speed.toFixed()} m/s</p>
          </div>
        </div>

        <div className='weatherCard__item sunrise'>
          <div className='weatherCard__sunriseSunset'>
            <div className='sunrise__item'>
              <img className='sunrise__img' src={sunriseImg} alt='sunrise' />
              <p className='sunrise__text'>Sunrise</p>
              <Moment unix className='sunrise__time' format='HH:mm'>
                {location?.sys?.sunrise}
              </Moment>
            </div>
            <div className='sunrise__item'>
              <img className='sunrise__img' src={sunsetImg} alt='sunrise' />
              <p className='sunrise__text'>Sunset</p>
              <Moment unix className='sunrise__time' format='HH:mm'>
                {location?.sys?.sunset}
              </Moment>
            </div>
          </div>
        </div>

        <div className='weatherCard__item'>
          <img className='weatherCard__img' src={pressure} alt='wind' />
          <div className='weatherCard__name'>
            <p className='weatherCard__text'>Pressure</p>
            <p className='weatherCard__value'>{pressureMmHg} hpA</p>
          </div>
        </div>

        <div className='weatherCard__item'>
          <img className='weatherCard__img' src={pressure} alt='wind' />
          <div className='weatherCard__name'>
            <p className='weatherCard__text'>Sea level</p>
            <p className='weatherCard__value'>{seaLevelAtm}</p>
          </div>
        </div>
      
    
      </div>
    </div>
  );
}
