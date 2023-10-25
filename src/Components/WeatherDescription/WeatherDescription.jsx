import tempMax from '../../img/wi_thermometer-warmer.svg';
import barom from '../../img/barometer.svg';
import visibilityIcon from '../../img/eye.png';
import './WeatherDescription.scss';
import { useGlobalContext } from '../../Context/Context';
import { Card } from 'react-bootstrap';

export default function WeatherDescription({ tempIcon }) {
  const { location } = useGlobalContext();
  let visibMetr = location?.visibility;
  let visibKm = visibMetr / 1000;
  let hPa = location?.main?.pressure;
  let pressureHPA = hPa * 0.75006375541921;

  return (
    <Card className='feel'>
      <Card.Title>Feel</Card.Title>
      <Card.Body className='feel__body'>
        <div className='feel__item'>
          <Card.Text>
            Visibility : <span className='feel__span'>{visibKm}</span> km
          </Card.Text>
          <img className='feel__icon' src={visibilityIcon} alt='visibility' />
        </div>
        <div className='feel__item'>
          <Card.Text>
            Real feel :{' '}
            <span className='feel__span'>{location?.main?.feels_like.toFixed()}&deg;</span>
          </Card.Text>
          <img className='feel__icon' src={tempMax} alt='temp' />
        </div>
        <div className='feel__item'>
          <Card.Text>
            Pressure: <span className='feel__span'>{pressureHPA.toFixed()}</span>mm
          </Card.Text>
          <img className='feel__icon' src={barom} alt='barometer' />
        </div>
      </Card.Body>
    </Card>
  );
}
