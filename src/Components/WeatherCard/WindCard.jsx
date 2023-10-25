import ReactSpeedometer from 'react-d3-speedometer';
import { Card } from 'react-bootstrap';

export default function WindCard({ weatherData }) {
  return (
    <Card className='wind'>
      <Card.Title>Wind</Card.Title>
      <Card.Body className='wind__body'>
        <ReactSpeedometer
          width={170}
          value={Number(weatherData)}
          ringWidth={10}
          maxValue={100}
          labelFontSize={'12'}
          needleColor='#ffb800ed'
          needleTransitionDuration={6000}
          needleTransition='easeElasticOut'
          currentValueText={`${weatherData} m/s`}
          segmentColors={['#23b473', '#8ba247', '#f69220', '#c1262c']}
          segments={4}
          textColor='#9399a2'
        />
      </Card.Body>
    </Card>
  );
}
