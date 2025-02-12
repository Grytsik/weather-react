import Moment from 'react-moment';
import Icon from '../Icon/Icon';
import { Card } from 'react-bootstrap';
import { LocationData } from '../../types/types';

import './Forecast.scss';

interface ForecastProps {
  item: LocationData;
}

export default function ForecastItem({ item }: ForecastProps) {
  return (
    <div className='forecast__item'>
      <div className='forecast__locale'>
        <img className='forecast__icon' src={Icon(item?.weather[0]?.main, true)} alt='icon' />
        <div className='forecast__locale__main'>
          <Moment className='forecast__date' locale='en' format='ddd'>
            {item?.dt_txt}
          </Moment>
          <Card.Text className='forecast__text'>{item?.weather[0]?.main}</Card.Text>
        </div>
      </div>

      <div className='forecast__temp'>
        <span className='forecast__temp__text'>
          {item?.main?.temp.toFixed()}&deg;
        </span>
        <div className='forecast__bar'></div>
      </div>

      <div className='forecast__humidity'>
        <p>Wind {item?.wind?.speed.toFixed()}km</p>
        <p>Humidity {item?.main?.humidity?.toFixed()}%</p>
      </div>
    </div>
  );
}
