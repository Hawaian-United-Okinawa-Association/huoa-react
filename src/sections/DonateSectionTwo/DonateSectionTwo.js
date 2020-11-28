import React from 'react';

import Button from 'components/Button/Button';
import { ReactComponent as TreePlanting } from 'assets/tree-planting.svg';
import { ReactComponent as CoinInHand } from 'assets/coin-in-hand.svg';
import { ReactComponent as Car } from 'assets/car.svg';


const DonateSectionOne = ({ data }) => {
  const columnArray = Object.keys(data.body).map(i => data.body[i]);
  const cols = columnArray.map((col, i) => {
    const icons = {
      'tree-planting': <TreePlanting className='donate-section-two__icon'/>,
      'coin-in-hand': <CoinInHand className='donate-section-two__icon'/>,
      'car': <Car className='donate-section-two__icon'/>
    }

    return (
      <div className='donate-section-two__col' key={i}>
        <div className='donate-section-two__icon-bg'>{icons[col.icon]}</div>
        <h4 className='donate-section-two__subtitle'>{col.subtitle}</h4>
        <p className='donate-section-two__text'>{col.text}</p>
        <Button type='text' link={col.link}>Learn More</Button>
      </div>
    )
  })

  return (
    <div className='donate-section-two'>
      <h2 className='donate-section-two__title'>{data.title}</h2>
      <div className='donate-section-two__body'>
        {cols}
      </div>
    </div>
  )
}

export default DonateSectionOne;
