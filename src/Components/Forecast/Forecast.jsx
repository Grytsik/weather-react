import { Card } from 'react-bootstrap';
import { useGlobalContext } from '../../Context/Context';
import { useEffect, useState } from 'react';
import ForecastItem from './ForecastItem';
import Slick from '../Slick/Slick';
import 'moment/locale/uk';
import './Forecast.scss';

export default function Forecast() {
  const { forecast } = useGlobalContext();
  const [innerW, setInnerW] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '10px',
    slidesToShow: 3,
    speed: 500,
  };

  useEffect(() => {
    const handleResize = () => {
      const widthUser = window.innerWidth;
      setInnerW(widthUser);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [innerW]);

  return (
    <Card className='forecast'>
      <Card.Title className='forecast__title'>Forecast 5-days</Card.Title>
      <Card.Body className='forecast__body'>
        {innerW <= 668 ? (
          <Slick className='slider-wrapper' settings={settings}>
            {forecast.map((item, index) => (
              <ForecastItem key={index} item={item} />
            ))}
          </Slick>
        ) : (
          <>
            {forecast.map((item, index) => (
              <ForecastItem key={index} item={item} />
            ))}
          </>
        )}
      </Card.Body>
    </Card>
  );
}
