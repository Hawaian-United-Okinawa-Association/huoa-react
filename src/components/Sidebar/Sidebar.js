import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from 'components/Button/Button';

import { ReactComponent as Ballroom } from 'assets/ballroom.svg';
import { ReactComponent as Newsletter1 } from 'assets/purple-blast.svg';
import { ReactComponent as Newsletter2 } from 'assets/uchinanchu.svg';

const Sidebar = (props) => {
  const { routes } = useSelector((state) => state.router);
  const { pathname } = useLocation();
  const current = routes.find((route) => route.linkTo === `/${pathname.split('/')[1]}`);
  const { children } = current;

  return (
    <div className="sidebar">
      {!!children && (
        <div className="sidebar__card">
          <div className="sidebar__parent">{current.name}</div>
          {children.map(
            (child, i) =>
              !!child.phase1 && (
                <Link to={child.linkTo} key={i}>
                  <div className="sidebar__link">{child.name}</div>
                </Link>
              )
          )}
        </div>
      )}
      <div className="sidebar__card sidebar__card--center">
        <h3>Rent Our Ballroom</h3>
        <Ballroom className="sidebar__icon" />
        <p>THE LEGACY BALLROOM is handled by A Catered Experience, a division of Zippy's Restaurants</p>
        <Button className="sidebar__button" type="text" link="#">
          Learn More
        </Button>
      </div>
      <div className="sidebar__card sidebar__card--center">
        <h3>Support HUOA</h3>
        <p>Your support is vital in promoting and preserving Okinawan culture.</p>
        <Button className="sidebar__button" type="text" link="#">
          Learn More
        </Button>
      </div>
      <div className="sidebar__card sidebar__card--center">
        <h3>Join Our Newsletters</h3>
        <Newsletter1 className="sidebar__icon" />
        <p>Purple Blast</p>
        <Newsletter2 className="sidebar__icon" />
        <p>Uchinanchu Newsletter</p>
        <Button className="sidebar__button" type="text" link="#">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
