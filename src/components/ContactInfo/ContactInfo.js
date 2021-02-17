import React from "react";

const ContactInfo = ({ body, title }) => {
  let contact = body;

  return (
    <div className="contact_info">
      <div className="contact_info__title">{title}</div>
      <div className="contact_info__address">{contact.address}</div>
      <div className="contact_info__city_zip">{contact.city_zip}</div>
      <div className="contact_info__email">{contact.email}</div>
      <div className="contact_info__phone">{contact.phone}</div>
    </div>
  );
};

export default ContactInfo;
