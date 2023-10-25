import './App.scss';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import { ColorRing } from 'react-loader-spinner';
import { useGlobalContext } from './Context/Context';
import Forecast from './Components/Forecast/Forecast';

function App() {
  const { loading, forecast } = useGlobalContext();

  return (
    <div className='App'>
      <div className='container'>
        {loading ? (
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
              {forecast.length > 0 && !null ? <Forecast /> : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
