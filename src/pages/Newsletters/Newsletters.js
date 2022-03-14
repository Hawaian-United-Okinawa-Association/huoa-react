import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import Container from 'components/Container/Container';
const Newsletters = ({ data }) => {
  const newsletters = useSelector(state => state.newsletters);
  const [filterYear, setFilterYear] = useState('all');
  
  if (!data) return null;
  const { builder } = data;
  const { title, body } = builder[0].title_body;
  const { title: adverstise_title, body: advertise_subtitle, button: adverstise_button } = builder[1].title_body_button;

  function filterByYear(newsletter) {
    if (filterYear === 'all') return true;
    return newsletter.slug === filterYear;
  }

  return (
    <Layout>
      <Container>
      <div className="newsletters">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <div className='newsletters__advertise'>
          <h4 className="title">{adverstise_title}</h4>
          <div 
          className="subtitle" dangerouslySetInnerHTML={{ __html: advertise_subtitle }} />
          <a
            className="button"
            type='filled'
            href={adverstise_button.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{adverstise_button.text}</span>
            <DownloadIcon />
          </a>
        </div>
        <div className="newsletters__filter">
          <h4>by year</h4>
          <select 
          className='select'
          onChange={e => setFilterYear(e.target.value)}>
            <option value="all">All</option>
            {newsletters.map((year, i) => (
              <option key={i} value={year.slug}>
                {year.slug}
              </option>
            ))}
          </select>
        </div>
        <div className="newsletters__years">
          {newsletters.filter(filterByYear).map((year, i) => (
            <div className="newsletters__year" key={i}>
              <h4>{year.slug}</h4>
              {year.acf.issues.map((issue, i) => (
                <a
                  href={issue.file.url}
                  className="newsletters__link"
                  key={i}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {issue.title}
                  <DownloadIcon />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      </Container>
    </Layout>
  );
};

export default Newsletters;
