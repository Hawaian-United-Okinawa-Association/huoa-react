import React from 'react';

import Button from 'components/Button/Button';
import './DonateSectionOne.scss';
import { ReactComponent as TreePlanting } from 'assets/tree-planting.svg';
import { ReactComponent as CoinInHand } from 'assets/coin-in-hand.svg';
import { ReactComponent as Car } from 'assets/car.svg';


const DonateSectionOne = ({ data }) => {
  const columnArray = Object.keys(data.body).map(i => data.body[i]);
  const cols = columnArray.map((col, i) => {
    const icons = {
      'tree-planting': <TreePlanting className='donate-section-one__icon'/>,
      'coin-in-hand': <CoinInHand className='donate-section-one__icon'/>,
      'car': <Car className='donate-section-one__icon'/>
    }

    return (
      <div className='donate-section-one__col'>
        <div className='donate-section-one__icon-bg'>{icons[col.icon]}</div>
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
