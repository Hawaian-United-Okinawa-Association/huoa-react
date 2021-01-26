import React from "react";

const Contact = ({ parent, parentText }) => {
  let contact = parent;

  return (
    <div className="contact">
      <div className="contact__title">{parentText}</div>
      <div className="contact__address">{contact.address}</div>
      <div className="contact__city_zip">{contact.city_zip}</div>
      <div className="contact__email">{contact.email}</div>
      <div className="contact__phone">{contact.phone}</div>
    </div>
  );
};

export default Contact;
