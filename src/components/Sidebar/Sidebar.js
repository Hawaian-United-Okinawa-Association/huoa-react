import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Button from 'components/Button/Button';

import { ReactComponent as Document } from 'assets/file-text.svg';
import { ReactComponent as Mail } from 'assets/mail.svg';

const Sidebar = () => {
  const { routes } = useSelector(state => state.router);
  const { pathname } = useLocation();
  let findMe = `${pathname.split('/')[1]}`;
  let current;
  let children;
  let parentTitle;

  // TODO: fix sidebar to support children who have siblings
  if (!!routes) {
    let lastParent;

    routes.forEach(route => {
      if (!route) {
        return;
      }

      lastParent = route;

      lastParent.children.forEach(child => {
        if (findMe === child.slug) {
          parentTitle = lastParent.title;
        }
      });

      if (!!route && route.slug === findMe && !current) {
        current = route.title;
        children = route.children;
        return;
      }

      if (lastParent.children.length > 0 && !children) {
        current = route.children.find(child => {
          return child.slug === findMe;
        });
        if (current) {
          children = route.children;
        }
      }
    });
  }

  return (
    !!current && (
      <div className="sidebar">
        {!!children.length && (
          <div className="sidebar__card">
            <div className="sidebar__parent">{parentTitle}</div>
            {children.map((child, i) => { 
               if (child.slug === 'gallery')
               return (
                 <a
                   className="sidebar__link"
                   key={child.slug}
                   href='https://huoa.smugmug.com'
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                  {child.title}
                 </a>
               );
               if (child.slug === 'myhuoa')
               return (
                 <a
                   className="sidebar__link"
                   key={child.slug}
                   href="https://huoa.tradewing.com/home"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                 {child.title}
                 </a>
               );
              return (
              <Link
                to={'/' + child.slug}
                key={i}
                className="sidebar__link"
                data-active={!!pathname.includes(child.slug)}
              >
                {child.title}
              </Link>
              )})}
          </div>
        )}
        <div className="sidebar__card sidebar__card--center">
          <div className="group">
            <h3>Rent Our Ballroom</h3>
            <p>
              THE LEGACY BALLROOM is handled by A Catered Experience, a division
              of Zippy's Restaurants
            </p>
            <a className="sidebar__button" type="text" href="/banquet-facility">
              Learn More
            </a>
          </div>
          <div className="group">
            <h3>Support HUOA</h3>
            <p>
              Your support is vital in promoting and preserving Okinawan
              culture.
            </p>
            <a className="sidebar__button" type="text" href="/donate">
              Learn More
            </a>
          </div>
          <div className="group">
            <h3>Join Our Newsletters</h3>
            <div className="sidebar__newsletters">
              <Mail />
              <p> Purple Blast</p>
            </div>
            <div className="sidebar__newsletters">
              <Document />
              <p> Uchinanchu Newsletter</p>
            </div>
            <a className="sidebar__button" type="text" href="/#newsletters">
              Learn More
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
