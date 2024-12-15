import './SearchBar.scss';

import { useState } from 'react';
import { useGlobalContext } from '../../Context/Context';
import TextField from '@mui/material/TextField';
import { InputAdornment, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SearchBar() {
  const { setSearchValue } = useGlobalContext();
  const [shrink, setShrink] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchValue(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          variant='standard'
          label='Search location'
          type='search'
          className='searchBar__input'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={searchLocation}
          sx={{
            width: '300px',
          }}
        />
      </Box> */}
      <TextField
          label="Search location"
          type="search"
          autoComplete="current-password"
          size='small'
          variant='outlined'
          className='searchBar__input'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={searchLocation}
          sx={{
            width: '300px'
          }}
        />
    </>
  );
}
