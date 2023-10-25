import '../WeatherCard/WeatherCard.scss';
import Slider from 'react-slick';

export default function Slick({ children, settings }) {
  return <Slider {...settings}>{children}</Slider>;
}
