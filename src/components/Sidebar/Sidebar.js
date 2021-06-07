import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from 'components/Button/Button';

import { ReactComponent as Ballroom } from 'assets/ballroom.svg';
import { ReactComponent as Newsletter1 } from 'assets/purple-blast.svg';
import { ReactComponent as Newsletter2 } from 'assets/uchinanchu.svg';

const Sidebar = () => {
  const { routes } = useSelector((state) => state.router);
  const { pathname } = useLocation();
  let current;
  let children;

  // TODO: fix sidebar to support children who have siblings
  if (!!routes) {
    let lastParent;

    routes.forEach((route) => {
      if (!route) {
        return
      }
      let findMe = `${pathname.split('/')[1]}`;

      lastParent = route;

      if (!!route && route.slug === findMe) {
        current = route.title;
        children = route.children;
        return;
      };

      if (lastParent.children.length > 0 && !children) {
        current = route.children.find((child) => {
          return child.slug === findMe;
        });
        if (current) {
          children = route.children;
        }
      }
    });
  }

  return !!current && (
    <div className="sidebar">
      {!!children.length && (
        <div className="sidebar__card">
        <div className="sidebar__parent">{ current.title }</div>
        { children.map((child, i) =>
          <Link to={ '/' + child.slug } key={ i }>
            <div className="sidebar__link"
              data-active={!!(pathname === `/${child.slug}`)}>
              { child.title }
            </div>
          </Link>
        )}
      </div>
      ) }
      <div className="sidebar__card sidebar__card--center">
        <h3>Rent Our Ballroom</h3>
        <Ballroom className="sidebar__icon" />
        <p>THE LEGACY BALLROOM is handled by A Catered Experience, a division of Zippy's Restaurants</p>
        <Button className="sidebar__button" type="text" link="/banquet-facility">
          Learn More
        </Button>
      </div>
      <div className="sidebar__card sidebar__card--center">
        <h3>Support HUOA</h3>
        <p>Your support is vital in promoting and preserving Okinawan culture.</p>
        <Button className="sidebar__button" type="text" link="/donate">
          Learn More
        </Button>
      </div>
      <div className="sidebar__card sidebar__card--center">
        <h3>Join Our Newsletters</h3>
        <Newsletter1 className="sidebar__icon" />
        <p className="sidebar__newsletters">Purple Blast</p>
        <Newsletter2 className="sidebar__icon" />
        <p className="sidebar__newsletters">Uchinanchu Newsletter</p>
        <a className="button" type="text" href="/#newsletters">Learn More</a>
      </div>
    </div>
  );
};

export default Sidebar;
