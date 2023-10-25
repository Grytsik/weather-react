import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Card } from 'react-bootstrap';

export default function HumidityCard({humidity}) {
  console.log(humidity);

  return (
    <Card className='humidity'>
      <Card.Title>Humidity</Card.Title>
      <Card.Body className='humidity__circle'>
        <CircularProgressbar
          value={humidity}
          text={`${humidity}%`}
          styles={buildStyles({
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransition: 'none',
            pathColor: `rgba(255, 184, 0, ${humidity / 100})`,
            textColor: '#ffffff',
            trailColor: 'white',
          })}
        />
      </Card.Body>
    </Card>
  );
}
