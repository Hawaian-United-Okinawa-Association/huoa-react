import React from "react";

const ClubContactInfo = ({ body }) => {
  let contact = body;

  return (
    <div className="contact-info">
      <div className="contact-info__title">Contact Information</div>
      <div className="contact-info__address">{contact.address}</div>
      <div className="contact-info__city_zip">{contact.city_zip}</div>
      <div className="contact-info__email">{contact.email}</div>
      <div className="contact-info__phone">{contact.phone}</div>
    </div>
  );
};

export default ClubContactInfo;
