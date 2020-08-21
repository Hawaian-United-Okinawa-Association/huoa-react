import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg';
import './Button.scss';

const Button = ({ type, icon, buttonRef, children, link, onClick, disabled }) => {
  const rootURL = new RegExp('huoa.org/')
  if (rootURL.test(link)) {
    let match = rootURL.exec(link);
    link = link.slice(match.index + 8)
  }

  if (!onClick && !link) {
    throw new Error('Button requires a link or an onClick attribute');
  } 
  else if (onClick) {
    return <button className='button' type={type} ref={buttonRef} onClick={onClick} disabled={disabled}>{icon ? <PlusIcon className='button__plus-icon'/> : null }{children}</button>;
  } 
  else if (link.charAt(0) === '/') {
    return <Link to={link} className='button' type={type}>{icon ? <PlusIcon className='button__plus-icon'/> : null }{children}</Link>;
  } 
  else {
    return <a href={link} className='button' type={type}>{icon ? <PlusIcon className='button__plus-icon'/> : null }{children}</a>;
  }
}

export default Button;
