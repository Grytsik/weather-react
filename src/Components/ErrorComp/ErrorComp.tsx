import './ErrorComp.scss';

export default function ErrorComp() {
  return (
    <div className='weather__error'>
      <div className='weather__error__text'>Oops, we couldn't find this city...</div>
      <span className='weather__error__span'>¯\_(ツ)_/¯</span>
    </div>
  );
}
