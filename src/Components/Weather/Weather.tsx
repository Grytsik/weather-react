import Icon from '../Icon/Icon';
import Clock from 'react-live-clock';
import { useGlobalContext } from '../../Context/Context';
import WeatherCard from '../WeatherCard/WeatherCard';
import ErrorComp from '../ErrorComp/ErrorComp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';

import './Weather.scss';

export default function Weather() {
  const { location, theme } = useGlobalContext();

  function capitalizeFirstLetter(text: string) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
  }

  return (
    <>
      <>
        {location && location.main && location.weather ? (
          <div className='weather'>
            <div className='weather__container'>
              <div className='weather__main__time'>
                <div className='weather__time__item'>
                  <p className='weather__main__title'>Current Weather</p>
                  <div className='weather__clock'>
                    <Clock
                      className='clock__big'
                      format={'HH:mm'}
                      ticking={true}
                      style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
                    />
                    <Clock
                      className='clock__big'
                      locale='en'
                      format={'ddd'}
                      style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
                    />
                  </div>
                </div>
                <div className='mobile-location'>
                  <Box display='flex' alignItems='right'>
                    <LocationOnIcon
                      sx={{
                        marginRight: 1,
                        color: `${theme === 'light' ? 'action.active' : 'var(--text-color-main)'}`,
                      }}
                    />
                    <Typography variant='body1' className='custom-text'>
                      {location?.name}, {location?.sys?.country}
                    </Typography>
                  </Box>
                </div>
              </div>

              <div className='weather__current'>
                <div className='weather__item'>
                  <img
                    className='weather__animate'
                    src={Icon(location.weather[0]?.main ?? '', false)}
                    alt='icon'
                  />
                  <span className='weather__temp'>
                    {location.main.temp?.toFixed()}&deg;<sup>c</sup>
                  </span>
                  <div className='weather-item__description'>
                    <span className='weather-description__span'>{location.weather[0]?.main}</span>
                    <p className='weather-description__feels'>
                      Feels like {location.main.feels_like?.toFixed()}&deg;C
                    </p>
                  </div>
                </div>
              </div>

              <p className='weather-description__text'>
                {capitalizeFirstLetter(location.weather[0]?.description)}
              </p>
            </div>
            <WeatherCard />
          </div>
        ) : (
          <ErrorComp />
        )}
      </>
    </>
  );
}
