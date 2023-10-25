import Moment from 'react-moment';
import Icon from '../Icon/Icon';
import { Card } from 'react-bootstrap';
import './Forecast.scss';

export default function ForecastItem({ item }) {
  return (
    <div className='forecast__item'>
      <Moment locale='en' format='ddd'>{item?.dt_txt}</Moment>
      <div className='forecast__img'>
        <img className='forecast__icon' src={Icon(item?.weather[0]?.main, true)} alt='icon' />
        <Card.Text className='forecast__text'>{item?.weather[0]?.main}</Card.Text>
      </div>
      <div className='forecast__feels'>
        <Card.Text className='forecast__temp'>
          <span className='forecast__span'>{item?.main?.temp_max.toFixed()}&deg;</span>/
        </Card.Text>
        <Card.Text className='forecast__temp'>{item?.main?.temp_min.toFixed()}&deg;</Card.Text>
      </div>
    </div>
  );
}
