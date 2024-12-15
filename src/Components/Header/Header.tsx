import SearchBar from '../SearchBar/SearchBar';
import headerLogo from '../../img/cloudy.png';
import { useGlobalContext } from '../../Context/Context';
import Button from '@mui/material/Button';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';

import './Header.scss';


export default function Header() {
  const { location } = useGlobalContext();

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__brand'>
          <img className='header__logo' src={headerLogo} alt='logo' />
          <h2 className='header__title'>Weather</h2>
        </div>
        <Box display='flex' alignItems='center'>
          <LocationOnIcon sx={{ marginRight: 1, color: 'action.active' }} />
          <Typography variant='body1' className='custom-text'>
            {location?.name}, {location?.sys?.country}
          </Typography>
        </Box>
        <SearchBar />
        <Button
          className='header__lightBtn'
          variant='contained'
          startIcon={<Brightness5OutlinedIcon />}
          sx={{
            bgcolor: '#0c182a',
          }}>
          Light
        </Button>
      </div>
    </div>
  );
}
