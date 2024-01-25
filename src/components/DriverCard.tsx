import type { FC } from 'react';

import './DriverCard.css';
import { TDriver } from '../types/Driver';

type onOvertakeCB = (id: number) => void;

type Props = {
  driver: TDriver;
  onOvertake: onOvertakeCB;
};

const DriverCard: FC<Props> = (props: {
  driver: TDriver;
  onOvertake: onOvertakeCB;
}) => {
  return (
    <div className='card'>
      <img
        src={`${process.env.REACT_APP_DEV_URL}/${props.driver.imgUrl}`}
        alt='Avatar'
        className='avatar'
      />
      <div className='container'>
        <h1>{`${props.driver.firstname} ${props.driver.lastname}`}</h1>
        <p>{props.driver.team}</p>
        <p>{props.driver.place}</p>
      </div>
      <div className='action'>
        {props.driver.place > 1 && (
          <button
            className='button'
            title='overtake'
            onClick={() => props.onOvertake(props.driver.id)}
          >
            Overtake
          </button>
        )}
      </div>
    </div>
  );
};

export default DriverCard;