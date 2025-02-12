import SearchBar from '../SearchBar/SearchBar';
import headerLogo from '../../img/cloudy.png';
import { useGlobalContext } from '../../Context/Context';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';

import './Header.scss';

export default function Header() {
  const { location, toggleTheme, theme } = useGlobalContext();

  const backToHome = () => {
    window.location.reload();
  };

  return (
    <div className={`header ${theme}`}>
      <div className='header__container'>
        <div className='header__brand' onClick={backToHome}>
          <img className='header__logo' src={headerLogo} alt='logo' />
          <h2 className='header__title'>Weather</h2>
        </div>
        <div className='desktop-location'>
          <Box display='flex' alignItems='center'>
            <LocationOnIcon
              sx={{
                marginRight: 1,
                color: `${theme === 'light' ? 'action.active' : 'var(--text-color-main)'}`,
              }}
            />
            <Typography variant='body1' className='custom-text'>
              {location?.name}, {location?.sys?.country}
            </Typography>
          </Box>
        </div>
        <SearchBar />
        <>
          <div className='toggleWrapper'>
            <input type='checkbox' className='dn anim' id='dn' />
            <label htmlFor='dn' className='toggle' onClick={toggleTheme}>
              <span className='toggle__handler'>
                <span className='crater crater--1'></span>
                <span className='crater crater--2'></span>
                <span className='crater crater--3'></span>
              </span>
              <span className='star star--1'></span>
              <span className='star star--2'></span>
              <span className='star star--3'></span>
              <span className='star star--4'></span>
              <span className='star star--5'></span>
              <span className='star star--6'></span>
            </label>
          </div>
        </>
      </div>
    </div>
  );
}
