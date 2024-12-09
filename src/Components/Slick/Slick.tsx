import '../WeatherCard/WeatherCard.scss';
//@ts-ignore
import Slider from 'react-slick';

interface SlickProps<T> {
  settings: T;
  children?:React.ReactNode;
  humidity?: number;
  className?: string;
}

export default function Slick<T>({ children, settings }: SlickProps<T>) {
  return <Slider {...settings}>{children}</Slider>;
}
