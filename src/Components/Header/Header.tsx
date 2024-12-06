import SearchBar from '../SearchBar/SearchBar';
import headerLogo from '../../img/cloudy.png';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__brand'>
          <img className='header__logo' src={headerLogo} alt='logo' />
          <h2 className='header__title'>Weather</h2>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
