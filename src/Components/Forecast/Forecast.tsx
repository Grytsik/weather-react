import { useGlobalContext } from '../../Context/Context';
import { useEffect, useState } from 'react';
import ForecastItem from './ForecastItem';
import Slider from '../Slider/Slider';

import 'moment/locale/uk';
import './Forecast.scss';

export default function Forecast() {
  const { forecast } = useGlobalContext();
  const [innerW, setInnerW] = useState(0);

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
    <div className='forecast'>
      <div className='forecast__title'>Forecast 5-days</div>
      <div className='forecast__body'>
        {innerW <= 668 ? (
          <Slider>
            {forecast.map((item, index) => (
              <ForecastItem key={index} item={item} />
            ))}
          </Slider>
        ) : (
          <>
            {forecast.map((item, index) => (
              <ForecastItem key={index} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
