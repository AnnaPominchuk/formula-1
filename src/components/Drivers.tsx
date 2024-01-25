import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Drivers.css'
import DriverCard from './DriverCard'

import type { TDriver } from '../types/Driver'
const url = process.env.REACT_APP_DEV_URL

const Drivers: FC = () => {
  const [drivers, setDrivers] = useState<TDriver[]>([])

  const overtake = (id: number): void => {
    fetch(`${url}/api/drivers/${id}/overtake`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status !== 200) return Promise.reject(response.statusText)
      })
      .then(() => {
        return fetch(`${url}/api/drivers`)
      })
      .then((response) => response.json())
      .then((data) => {
        data.data.sort((driverLhs: TDriver, driverRhs: TDriver) => {
          return driverLhs.place - driverRhs.place
        })
        setDrivers(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetch(`${url}/api/drivers`)
      .then((response) => response.json())
      .then((data) => {
        data.data.sort((driverLhs: TDriver, driverRhs: TDriver) => {
          return driverLhs.place - driverRhs.place
        })
        setDrivers(data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className='Drivers'>
      {drivers.map((driver: TDriver) => {
        return (
          <DriverCard key={uuidv4()} driver={driver} onOvertake={overtake} />
        )
      })}
    </div>
  )
}

export default Drivers
