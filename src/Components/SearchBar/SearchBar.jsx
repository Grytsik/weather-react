import './SearchBar.scss';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useGlobalContext } from '../../Context/Context';

export default function SearchBar() {
  const { setSearchValue } = useGlobalContext();
  const [inputValue, setInputValue] = useState('');

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setSearchValue(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Form.Control
      className='searchBar__input'
      type='text'
      placeholder='Location...'
      value={inputValue}
      onChange={handleChange}
      onKeyDown={searchLocation}
    />
  );
}
