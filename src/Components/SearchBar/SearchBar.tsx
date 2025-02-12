import { useState } from 'react';
import { useGlobalContext } from '../../Context/Context';
import TextField from '@mui/material/TextField';

import './SearchBar.scss';

export default function SearchBar() {
  const { setSearchValue } = useGlobalContext();
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
      <TextField
        label='Search location'
        type='search'
        autoComplete='current-password'
        size='small'
        variant='outlined'
        className='searchBar__input'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={searchLocation}
        sx={(theme) => ({
          width: '300px',
          [theme.breakpoints.down('sm')]: {
            width: '120px',
          },
          [theme.breakpoints.down('xs')]: {
            width: '120px',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--input-border-black)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--text-color-blue)',
            },
          },
          '& .MuiInputBase-input': {
            color: 'var(--text-color-gray)',
          },
        })}
      />
    </>
  );
}
