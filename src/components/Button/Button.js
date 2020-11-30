import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg';

const Button = React.forwardRef(({ type, icon, children, link, onClick, disabled }, ref) => {
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
      <button className='button' type={type} ref={ref} onClick={onClick} disabled={disabled}>
        {hasIcon()}
        {children}
      </button>
    );
  }
  else if (link.charAt(0) === '/') {
    return (
      <Link to={link} className='button' type={type} ref={ref}>
        {hasIcon()}
        {children}
      </Link>
    )
  }
  else {
    return (
      <a href={link} className='button' type={type} ref={ref}>
        {hasIcon()}
        {children}
      </a>
    )
  }
});

export default Button;
