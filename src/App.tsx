import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import { ColorRing } from 'react-loader-spinner';
import { useGlobalContext } from './Context/Context';
import Forecast from './Components/Forecast/Forecast';
import { useEffect } from 'react';

import './App.scss';

function App() {
  const { loading, location, forecast, theme } = useGlobalContext();

  useEffect(() => {
    document.body.className = theme;

    return () => {
      document.body.className = '';
    };
  }, [theme]);

  return (
    <div className='app'>
      <div className='container'>
        {loading && !location ? (
          <ColorRing
            visible={true}
            height='100'
            width='100'
            ariaLabel='blocks-loading'
            wrapperClass='blocks-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : (
          <>
            <Header />
            <div className='app__main'>
              <Weather />
              {forecast.length > 0 ? <Forecast /> : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
