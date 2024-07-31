import React, { useState, useRef, useEffect } from "react";
import jsonp from "jsonp";

import checkmark from "./check.svg";
import Button from "../Button/Button";
import { ReactComponent as Icon } from "./send.svg";

const CardBlast = ({ props }) => {
  const {
    title,
    body,
    first_name_placeholder,
    last_name_placeholder,
    email_placeholder,
    button_text,
    latest_purple_blast_message,
    list_of_the_previous_messages,
  } = props;

  const [firstName, setFirstName] = useState({});
  const [lastName, setLastName] = useState({});
  const [email, setEmail] = useState({});
  const [affiliationCode, setAffiliationCode] = useState({});
  const [formData, setFormData] = useState("");
  const [expanded, setExpanded] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    let api = `https://huoa.us10.list-manage.com/subscribe/post-json?u=fb4e3b9e255496f68e4d87e35&id=96858fbc3b&EMAIL=${email.MERGE0}&FNAME=${firstName.MERGE1}&LNAME=${lastName.MERGE2}&MERGE3=''&MERGE4=''&MERGE5=''&MERGE6=${affiliationCode.MERGE6}&MERGE7=''`;

    jsonp(
      api,
      {
        param: "c",
      },
      (error, data) => {
        if (error) {
          console.log(error);
        }
        setFormData(data.result);
        console.log(data);
      }
    );
  };

  // form expansion animation
  const otherFields = useRef(null);
  useEffect(() => {
    if (expanded) otherFields.current.style.maxHeight = "1000px";
    else otherFields.current.style.maxHeight = 0;
  }, [expanded]);

  return (
    <div className="card-blast">
      {formData === "" && (
        <div className="card-blast__form--wrapper">
          <div className="card-blast__text">
            <h3 className="card-blast__title">{title}</h3>
            <p className="card-blast__body">{body}</p>
          </div>
          <div className="card-blast__form">
            <form onSubmit={submit}>
              <input type="hidden" name="u" value="fb4e3b9e255496f68e4d87e35" />
              <input type="hidden" name="id" value="96858fbc3b" />
              <div className="card-blast__form__input-container">
                <label className="card-blast__label">Email Address</label>
                <input
                  className="card-blast__input"
                  type="email"
                  placeholder={email_placeholder}
                  autoCapitalize="none"
                  autoCorrect="off"
                  name="MERGE0"
                  id="MERGE0"
                  onChange={(e) =>
                    setEmail({ ...email, MERGE0: e.target.value })
                  }
                  required={true}
                />
                <p className="card-blast__input__error-message">
                  Please enter a valid Email Address*
                </p>
                {!expanded && (
                  <button
                    disabled={!email.MERGE0}
                    className="button"
                    onClick={() => setExpanded(true)}
                  >
                    Next
                  </button>
                )}
              </div>

              <div className="card-blast__other-fields" ref={otherFields}>
                <div className="card-blast__form__name-container">
                  <div className="card-blast__form__input-container">
                    <label className="card-blast__label">First Name</label>
                    <input
                      className="card-blast__input"
                      type="text"
                      placeholder={first_name_placeholder}
                      name="MERGE1"
                      id="MERGE1"
                      onChange={(e) =>
                        setFirstName({ ...firstName, MERGE1: e.target.value })
                      }
                      required={true}
                    />
                    <p className="card-blast__input__error-message">
                      Please enter first name*
                    </p>
                  </div>
                  <div className="card-blast__form__input-container">
                    <label className="card-blast__label">Last Name</label>
                    <input
                      className="card-blast__input"
                      type="text"
                      placeholder={last_name_placeholder}
                      name="MERGE2"
                      id="MERGE2"
                      onChange={(e) =>
                        setLastName({ ...lastName, MERGE2: e.target.value })
                      }
                      required={true}
                    />
                    <p className="card-blast__input__error-message">
                      Please enter last name*
                    </p>
                  </div>
                </div>
                <div className="card-blast__form__input-container">
                  <label className="card-blast__label">
                    HUOA Club Affiliation
                  </label>
                  <input
                    className="card-blast__input"
                    placeholder=" "
                    type="text"
                    name="MMERGE6"
                    id="mce-MMERGE6"
                    onChange={(e) =>
                      setAffiliationCode({
                        ...affiliationCode,
                        MERGE6: e.target.value,
                      })
                    }
                  />
                  <p className="card-blast__input__error-message">
                    Please enter a valid Email Address*
                  </p>
                </div>
                <div className="card-blast__button-container">
                  <Button type="submit" value={button_text} />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {formData === "success" && (
        <div className="card-blast__success">
          <div className="card-blast__success__header-container">
            <img
              className="card-blast__success__header-icon"
              src={checkmark}
              alt="success"
            />
            <p className="card-blast__success__header-title">
              You've Subscribed to Purple Blast
            </p>
          </div>
          <p className="card-blast__success__body">{}</p>
          <small className="card-blast__success__notice">
            Delivery Notice: Since HUOA uses Mailchimp’s email service, our
            messages may be delivered to your promotions or spam folder,
            depending on your email service. Please make sure to check those
            folders. Tips: Move our emails to your primary inbox and add
            info@huoa.org to your contacts list.
          </small>
        </div>
      )}
      <div className="card-blast__button-container">
        <a
          className="card-newsletter__link"
          target="_blank"
          rel="noopener noreferrer"
          href={latest_purple_blast_message}
        >
          <Icon />
          Latest Purple Blast
        </a>
        <a
          className="card-newsletter__link"
          target="_blank"
          rel="noopener noreferrer"
          href={list_of_the_previous_messages}
        >
          <Icon />
          See Previous Blasts
        </a>
      </div>
    </div>
  );
};

export default CardBlast;
