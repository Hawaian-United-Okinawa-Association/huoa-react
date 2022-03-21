import React from 'react';
import Layout from 'components/Layout/Layout';
import Accordion from 'components/Accordion/Accordion';

const PerformingArts = ({ data }) => {
  if (!data) return null;
  else {
    const { title, body, performing_arts_list } = data.performing_arts;

    function isLink(title) {
      const options = ['phone', 'cell', 'email', 'website'];
      return options.some(option => title.toLowerCase() === option);
    }

    function generateLink(title, value) {
      const type = title.toLowerCase();
      if(type === 'email') return `mailto:${value}`;
      if(type === 'phone' || type === 'cell') return `tel:${value}`;
      if(type === 'website') return value;
      else return '';
    }

    function generatePanelsJSX(panels) {
      return panels.map(panel => {
        const content = panel.content.map((group, i) => {
          const { name, contact, other, ...rest } = group;
          // putting all links in one array
          const links = [
            ...Object.entries(rest).map(([title, value]) => 
            ({ title, value })),
            ...(other || []),
          ];

          return (
            <div key={i} className="panel__content">
              <h4>{name}</h4>
              <strong>{contact}</strong>
              {links.map(({ title, value }, i) => {
                if (!value) return null;
                if (isLink(title))
                  return (
                    <p key={i}>
                      <strong>{title} : </strong>
                      <a
                        href={generateLink(title, value)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value}
                      </a>
                    </p>
                  );
                return (<p key={i}><strong>{title} : </strong>{value}</p>);
              })}
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
