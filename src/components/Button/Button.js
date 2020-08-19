import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg';
import './Button.scss';

const Button = ({ type, icon, children, link, onClick, disabled }) => {
  let plusIcon = icon ? <PlusIcon className='button__plus-icon'/> : null;

  if (link) {
    if (link.charAt(0) === '/') return <Link to={link} className='button' type={type}>{plusIcon}{children}</Link>;
    else return <a href={link} className='button' type={type}>{plusIcon}{children}</a>;
  }
  else if (onClick) return <button className='button' type={type} onClick={onClick} disabled={disabled}>{plusIcon}{children}</button>;
  else throw new Error('Button requires a link or an onClick attribute');
}

export default Button;
