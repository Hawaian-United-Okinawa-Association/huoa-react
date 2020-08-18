import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from './../../actions/index';

import './Button.scss';

const Button = ({ type, icon, children, link, modal, click, disabled }) => {
  let plusIcon = icon ? <span>+ </span> : null;
  let dispatch = useDispatch();

  if (link) {
    if (link.charAt(0) === '/') return <Link to={link} className='button' type={type}>{plusIcon}{children}</Link>;
    else return <a className='button' href={link} type={type}>{plusIcon}{children}</a>;
  }
  else if (modal) return <button className='button' type={type} onClick={() => dispatch(openModal(modal))}>{plusIcon}{children}</button>;
  else if (click) return <button className='button' type={type} onClick={() => click()} disabled={disabled}>{plusIcon}{children}</button>;
  else throw new Error('Button requires link, modal or click attribute');
}

export default Button;
