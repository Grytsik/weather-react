import './WeatherCard.scss';
import { useGlobalContext } from '../../Context/Context';
import { useEffect, useState } from 'react';
import Slick from '../Slick/Slick';
import WindCard from './WindCard';
import HumidityCard from './HumidityCard';
import SunriseSunsetCard from './SunriseSunsetCard';

export default function WeatherCard() {
  const { location } = useGlobalContext();
  const [innerW, setInnerW] = useState(0);
  const locationWind =
    location?.wind?.speed !== undefined ? parseFloat(location.wind.speed.toFixed()) : 0;

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: 'linear',
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
    <>
      {innerW <= 668 ? (
        <Slick settings={settings} humidity={location?.main?.humidity ?? 0}>
          <HumidityCard humidity={location?.main?.humidity ?? 0} />
          <SunriseSunsetCard />
          <WindCard weatherData={locationWind} />
        </Slick>
      ) : (
        <div className='desc'>
          <HumidityCard humidity={location?.main?.humidity ?? 0} />
          <SunriseSunsetCard />
          <WindCard weatherData={locationWind} />
        </div>
      )}
    </>
  );
}
