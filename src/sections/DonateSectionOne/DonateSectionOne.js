import React, { useRef } from "react";

import Image from "components/Image/Image";
import Button from "components/Button/Button";
import DonorSnapForm from "sections/DonateSectionThree/DonorSnapForm";

const DonateSectionOne = ({ data }) => {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      closeModal();
    }
  };

  const createTextMarkup = () => {
    return { __html: data.text };
  };

  return (
    <div className="donate-section-one">
      <h2 className="donate-section-one__title">{data.title}</h2>
      <div className="donate-section-one__body">
        <div className="donate-section-one__content">
          <div
            className="donate-section-one__text"
            dangerouslySetInnerHTML={createTextMarkup()}
          />
          <Button onClick={() => openModal()} type="filled">
            {data.button_text}
          </Button>
          <DonorSnapForm
            closeModal={closeModal}
            dialogRef={dialogRef}
            handleBackdropClick={handleBackdropClick}
          />
        </div>
        <Image
          alt="Giving To HUOA"
          className="donate-section-one__image"
          img={data.image_link}
        />
      </div>
    </div>
  );
};

export default DonateSectionOne;
