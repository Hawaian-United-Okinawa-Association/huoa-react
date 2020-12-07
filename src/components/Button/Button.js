import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg';

const Button = React.forwardRef(({ type, icon, children, link, onClick, disabled, shouldOpenNewTab }, ref) => {
  const hasIcon = () => icon ? <PlusIcon className='button__plus-icon'/> : null;

  const rootURL = new RegExp('huoa.org/')
  if (rootURL.test(link)) {
    link = link.slice(rootURL.exec(link).index + 8)
  }

  if (!onClick && !link) {
    throw new Error('Button requires a link or an onClick attribute');
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
        rel={shouldOpenNewTab ? "noopener noreferrer" : "external"}
        target={shouldOpenNewTab ? "_blank" : "_self"} 
        type={type} ref={ref} 
      >
        {hasIcon()}
        {children}
      </a>
    )
  }
});

export default Button;
