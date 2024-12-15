import WeatherDescription from '../WeatherDescription/WeatherDescription';
import Icon from '../Icon/Icon';
import WeatherCard from '../WeatherCard/WeatherCard';
import Clock from 'react-live-clock';
import { useGlobalContext } from '../../Context/Context';
import { Card } from 'react-bootstrap';
import './Weather.scss';

export default function Weather() {
  const { location } = useGlobalContext();

  function capitalizeFirstLetter(text: string) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
  }
  
  console.log(location);
  return (
    <div className='weather'>
      <div className='container weather__container'>
        {location !== null ? (
          <>
            <div className='weather__current'>
              <p className='weather_current__title'>Current Weather</p>
              <div className='weather__clock'>
                <Clock
                  className='clock__big'
                  format={'HH:mm'}
                  ticking={true}
                  style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
                />
                <Clock className='clock__big' locale='en' format={'ddd'} style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }} />
              </div>
            </div>

            <div className='weather__item'>
              <img
                className='weather__animate'
                src={Icon(location?.weather[0]?.main ?? '', false)}
                alt='icon'
              />
              <span className='weather__temp'>
                {location?.main?.temp.toFixed()}
                &deg;<sup>c</sup>
              </span>
              <div className='weather-item__description'>
                <span className='weather-description__span'>{location?.weather[0]?.main}</span>
                <p className='weather-description__text'>Feels like {location?.main?.feels_like.toFixed()}&deg;</p>
              </div>
            </div>
            {capitalizeFirstLetter(location?.weather[0]?.description)}
            {/* <WeatherCard />
            <WeatherDescription /> */}
          </>
        ) : (
          <Card className='weather__error'>
            <Card.Title className='weather__error-text'>
              Oops, we couldn't find this city...
            </Card.Title>
            <span className='weather__error_span'>¯\_(ツ)_/¯</span>
          </Card>
        )}
      </div>
    </div>
  );
}
