import WeatherDescription from '../WeatherDescription/WeatherDescription.jsx';
import Icon from '../Icon/Icon';
import WeatherCard from '../WeatherCard/WeatherCard';
import Clock from 'react-live-clock';
import { useGlobalContext } from '../../Context/Context';
import { Card } from 'react-bootstrap';
import './Weather.scss';

export default function Weather() {
  const { location } = useGlobalContext();

  return (
    <div className='weather'>
      <div className='container'>
        {location?.length !== 0 ? (
          <>
            <p className='weather__city'>
              {location?.name}, {location?.sys?.country}
            </p>
            <div className='weather__container'>
              <div className='weather__item'>
                <span className='weather__temp'>
                  {location?.main?.temp.toFixed()}
                  &deg;
                </span>
                <img
                  className='weather__animate'
                  src={Icon(location?.weather[0]?.main, false)}
                  alt='icon'
                />
                <div className='clock'>
                  <Clock
                    locale='en'
                    format={'dddd'}
                    style={{ fontSize: 30, textAlign: 'center' }}
                  />
                  <Clock
                    className='clock__big'
                    format={'HH:mm:ss'}
                    ticking={true}
                    style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}
                  />
                </div>
              </div>
            </div>
            <WeatherCard />
            <WeatherDescription />
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
