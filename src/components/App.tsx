import React, { useState, useEffect, useCallback, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import DriverCard from './DriverCard';

import { TDriver } from '../types/Driver';
const url = process.env.REACT_APP_DEV_URL;

const App: FC = () => {
  const [drivers, setDrivers] = useState<TDriver[]>([]);

  const overtake = (id: number) => {
    fetch(`${url}/api/drivers/${id}/overtake`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch(`${url}/api/drivers`)
      .then((response) => response.json())
      .then((data) => {
        data.data.sort((driverLhs: TDriver, driverRhs: TDriver) => {
          return driverLhs.place - driverRhs.place;
        });
        setDrivers(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [overtake]);

  return (
    <div className='App'>
      {drivers.map((driver: TDriver) => {
        return (
          <DriverCard key={uuidv4()} driver={driver} onOvertake={overtake} />
        );
      })}
    </div>
  );
};

export default App;
