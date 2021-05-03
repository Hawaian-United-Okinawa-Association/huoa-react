import React from "react";

const ClubContactInfo = ({ body }) => {
  let contact = body;

  return (
    <div className="club-contact-info">
      <div className="club-contact-info__title">Contact Information</div>
      <div className="club-contact-info__address">{contact.address}</div>
      <div className="club-contact-info__city_zip">{contact.city_zip}</div>
      <div className="club-contact-info__email">{contact.email}</div>
      <div className="club-contact-info__phone">{contact.phone}</div>
    </div>
  );
};

export default ClubContactInfo;
