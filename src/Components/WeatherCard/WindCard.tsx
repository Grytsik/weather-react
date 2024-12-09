import ReactSpeedometer from 'react-d3-speedometer';
import { Card } from 'react-bootstrap';
import { FC } from 'react';

interface WindCardProps {
  weatherData: number;
}

export default function WindCard({ weatherData }: WindCardProps) {
  return (
    <Card className='wind'>
      <Card.Title>Wind</Card.Title>
      <Card.Body className='wind__body'></Card.Body>
    </Card>
  );
}
