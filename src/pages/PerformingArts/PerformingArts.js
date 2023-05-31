import React from "react";
import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";

const PerformingArts = ({ data }) => {
  if (!data) return null;
  else {
    const { title, body, performing_arts_list } = data.performing_arts;

    function isLink(title) {
      const options = ["phone", "cell", "email", "website"];
      return options.some((option) => title.toLowerCase() === option);
    }

    function generateLink(title, value) {
      const type = title.toLowerCase();
      if (type === "email") return `mailto:${value}`;
      if (type === "phone" || type === "cell") return `tel:${value}`;
      if (type === "website") return value;
      else return "";
    }

    function generatePanelsJSX(panels) {
      return panels.map((panel) => {
        const content = panel.content.map((group, i) => {
          const { name, contacts, other = [] } = group;

          const contactsArray = [
            ...(contacts || []).map((el) =>
              Object.entries(el).map(([title, value]) => ({ title, value }))
            ),
          ];

          return (
            <div key={i} className="panel__content">
              <h4>{name}</h4>
              {contactsArray.map((contact, i) => (
                <div className="performing-arts__contact" key={i}>
                  <p>
                    <strong>Contact: </strong>
                    {contact[0].value.trim() + ", " + contact[1].value}
                  </p>
                  {contact.slice(2).map(({ title, value }) => {
                    return !value ? null : (
                      <p>
                        <strong>{title}: </strong>
                        {isLink(title) ? (
                          <a
                            href={generateLink(title, value)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </p>
                    );
                  })}
                </div>
              ))}
              {(other || []).map(({ title, value }) => (
                <p>
                  <strong>{title}: </strong>
                  {value}
                </p>
              ))}
            </div>
          );
        });
        return { title: panel.title, content };
      });
    }
    const artsPanels = generatePanelsJSX(performing_arts_list);

    return (
      <Layout>
        <div className="performing-arts__container">
          <h2 position="left" className="performing-arts__title">
            {title}
          </h2>
          <div
            className="performing-arts__description"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="performing-arts__body">
            <Accordion panels={artsPanels}></Accordion>
          </div>
        </div>
      </Layout>
    );
  }
};
export default PerformingArts;
