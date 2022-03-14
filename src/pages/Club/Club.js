import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Button from 'components/Button/Button';
import Image from 'components/Image/Image';

import { ReactComponent as Website } from '../../assets/website.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as MapPin } from '../../assets/map-pin.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

const Club = ({ match }) => {
  let club = useSelector(state => state.clubs);
  let currentClub = match.params.clubId;
  let clubData = club.find(object => object.slug === currentClub);

  if (!clubData) {
    return null;
  } else {
    let {
      club_description,
      club_image,
      club_contact,
      club_social_media,
      club_newsletter,
    } = clubData.acf.club;
    let { rendered } = clubData.title;

    const icons = {
      address: <MapPin />,
      email: <Mail />,
      phone: <Phone />,
      website: <Website />,
      facebook: <Facebook />,
      instagram: <Instagram />,
      twitter: <Twitter />,
    };

    function contactToArray(object) {
      return Array.from(Object.entries(object))
        .map(link => ({ title: link[0], url: link[1] }))
        .filter(link => link.url);
    }

    function generateURL(title, url) {
      switch (title) {
        case 'address':
          return MAPS_API + encodeURI(url);
        case 'email':
          return `mailto:${url}`;
        case 'phone':
          return `tel:${url}`;
        default:
          return '';
      }
    }

    const MAPS_API = 'https://www.google.com/maps/dir/?api=1&destination=';

    const contact_info = contactToArray(club_contact);
    const social_links = contactToArray(club_social_media);

    const hasInfo = contact_info.length > 0;
    const hasSocials = social_links.length > 0;
    const hasLinks = hasInfo || hasSocials;

    return (
      <Layout>
        <div className="club__container">
          <Breadcrumbs
            parent="clubs"
            parentText="Join a HUOA Club"
            rendered={rendered}
          />
          <div className="club__title-box">
            {!!club_image && (
              <Image className="club__image" img={club_image} alt="club logo" />
            )}
            <div className={`club__title`}>
              <h2>{rendered}</h2>
            </div>
          </div>
          {!!club_description && (
            <div
              className="club__description"
              dangerouslySetInnerHTML={{ __html: club_description }}
            />
          )}
          {!!club_newsletter && (
            <Button link={club_newsletter}>Newsletter</Button>
          )}
          {hasLinks && <h4>Contact Information</h4>}
          <div className="club__contact">
            {hasInfo && (
              <div className="club__links">
                {contact_info.map(({ title, url }, i) => {
                  return (
                    <a
                      key={i}
                      className="club__link"
                      href={generateURL(title, url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <p className="link-title">{title}</p>
                        <p className="link-url">{url}</p>
                      </div>
                      {icons[title]}
                    </a>
                  );
                })}
              </div>
            )}
            {hasSocials && (
              <div className="club__links">
                {social_links.map(({ title, url }, i) => (
                  <a
                    key={i}
                    className="club__link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <p>{title}</p>
                    </div>
                    {icons[title]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
