import React, { useEffect, useState } from "react";

const DonorSnapForm = ({ dialogRef, handleBackdropClick, closeModal }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      style={{
        maxWidth: "90vw",
        width: "800px",
        padding: "0",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid #e5e5e5",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            margin: "0",
          }}
        >
          Make a Donation
        </h2>
        <button
          onClick={closeModal}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "4px",
            color: "#666",
            transition: "background-color 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
      <div
        style={{
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            border: "1px solid #CCC",
            display: "flex",
            flexDirection: "column",
            height: "75vh",
          }}
        >
          {isClient ? (
            <iframe
              src="https://forms.donorsnap.com/form?id=07dd50e2-c705-44f8-ad53-38881a916255"
              allow="payment"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ flexGrow: 1, display: "block", margin: "5px" }}
              title="DonorSnap Form"
            />
          ) : (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              Donation form will load here.
            </p>
          )}
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
      </div>
    </dialog>
  );
};

export default DonorSnapForm;
