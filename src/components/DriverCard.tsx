import React from 'react'
import type { FC } from 'react'

import './DriverCard.css'
import type { TDriver } from '../types/Driver'

type onOvertakeCB = (id: number) => void

interface Props {
  driver: TDriver
  onOvertake: onOvertakeCB
}

const DriverCard: FC<Props> = (props: {
  driver: TDriver
  onOvertake: onOvertakeCB
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
        <p>
          <strong>Team:</strong>
          {` ${props.driver.team}`}
        </p>
        <p>
          <strong>Place:</strong> {` ${props.driver.place}`}
        </p>
        <p>
          <strong>Code:</strong> {` ${props.driver.code}`}
        </p>
        <img
          src={`https://flagcdn.com/16x12/${props.driver.country.toLocaleLowerCase()}.png`}
          srcSet={`https://flagcdn.com/32x24/${props.driver.country.toLocaleLowerCase()}.png 2x,
                    https://flagcdn.com/48x36/ua.png 3x`}
          width='32'
          height='24'
          alt={props.driver.country}
        ></img>
      </div>
      <div className='action'>
        {props.driver.place > 1 && (
          <button
            className='button'
            title='overtake'
            onClick={() => {
              props.onOvertake(props.driver.id)
            }}
          >
            Overtake
          </button>
        )}
      </div>
    </div>
  )
}

export default DriverCard
