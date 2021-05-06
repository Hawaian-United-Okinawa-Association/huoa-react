import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg';

const Button = React.forwardRef(({ type, icon, children, link, onClick, disabled, value }, ref) => {
  const hasIcon = () => icon ? <PlusIcon className='button__plus-icon'/> : null;

  if (!onClick && !link && (type !== 'submit')) {
    throw new Error('Button requires a link or an onClick attribute');
  }
  else if (type === 'submit') {
    return (
      <input type='submit' className='button' name='submit' value={value} />
    )
  }
  else if (onClick) {
    return (
      <button 
        className='button' 
        disabled={disabled}
        onClick={onClick} 
        type={type} ref={ref} 
      >
        {hasIcon()}
        {children}
      </button>
    );
  }
  else if (link.charAt(0) === '/') {
    return (
      <Link 
        className='button' 
        ref={ref}
        to={link} 
        type={type} 
      >
        {hasIcon()}
        {children}
      </Link>
    )
  }
  else {
    return (
      <a 
        className='button' 
        href={link} 
        rel='noopener noreferrer'
        target='_blank' 
        type={type} ref={ref} 
      >
        {hasIcon()}
        {children}
      </a>
    )
  }
});

export default Button;
