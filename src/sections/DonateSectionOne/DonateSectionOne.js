import React from 'react';

import Button from 'components/Button/Button';
import './DonateSectionOne.scss';
import { ReactComponent as TreePlanting } from 'assets/tree-planting.svg';
import { ReactComponent as CoinInHand } from 'assets/coin-in-hand.svg';
import { ReactComponent as Car } from 'assets/car.svg';


const DonateSectionOne = ({ data }) => {
  const columnArray = Object.keys(data.body).map(i => data.body[i]);
  const cols = columnArray.map((col, i) => {
    const icons = [
      <TreePlanting className='donate-section-one__icon'/>, 
      <CoinInHand className='donate-section-one__icon'/>, 
      <Car className='donate-section-one__icon'/>
    ]

    return (
      <div className='donate-section-one__col'>
        <div className='donate-section-one__icon-bg'>{icons[i]}</div>
        <h4 className='donate-section-one__subtitle'>{col.subtitle}</h4>
        <p className='donate-section-one__text'>{col.text}</p>
        <Button type='text' link={col.link}>Learn More</Button>
      </div>
    )
  })

  return (
    <div className='donate-section-one'>
      <h2 className='donate-section-one__title'>{data.title}</h2>
      <div className='donate-section-one__body'>
        {cols}
      </div>
    </div>
  )
}

export default DonateSectionOne;
