import { useGlobalContext } from "../../Context/Context"
import { Card } from "react-bootstrap";
import Moment from 'react-moment';
import sunriseImg from '../../img/sunrise.png';
import sunsetImg from '../../img/sunset.png';

export default function SunriseSunsetCard() {
    const {location} = useGlobalContext();
    return (
        <Card className='sunrise'>
        <Card.Title>Sunrise and sunset</Card.Title>
        <Card.Body className='sunrise__body'>
          <div className='sunrise__container'>
            <div className='sunrise__item'>
              <img className='sunrise__img' src={sunriseImg} alt='sunrise' />
              <Card.Text className='sunrise__text'>Sunrise</Card.Text>
              <Moment unix className='descriptions__temp' format='HH:mm'>
                {location?.sys?.sunrise}
              </Moment>
            </div>
            <div className='sunrise__item'>
              <img className='sunrise__img' src={sunsetImg} alt='sunset' />
              <Card.Text className='sunrise__text'>Sunset</Card.Text>
              <Moment unix className='descriptions__temp' format='HH:mm'>
                {location?.sys?.sunset}
              </Moment>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
}