import React from "react";

const DonorSnapForm = () => {
  return (
    <div style={{ border: "1px solid #CCC" }}>
      <iframe
        src="https://forms.donorsnap.com/form?id=07dd50e2-c705-44f8-ad53-38881a916255"
        allow="payment"
        height="1000"
        width="99%"
        frameBorder="0"
        style={{ margin: "5px" }}
        title="DonorSnap Form"
      ></iframe>
      <div style={{ margin: "5px", textAlign: "right" }}>
        <a
          href="http://www.donorsnap.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Online Forms Powered by DonorSnap"
        >
          <img
            src="https://www.donorsnap.com/graphics/badges/online-forms-by-donorsnap.png"
            style={{ borderStyle: "none" }}
            alt="Online Forms Powered by DonorSnap"
          />
        </a>
      </div>
    </div>
  );
};

export default DonorSnapForm;
