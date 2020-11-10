import React from "react";
import PropTypes from "prop-types";
import Container from "../../components/Container/Container.js";


//make accepting the json better
//make this an actual page??
//add scss
//make scss better!
//check if BEM is correct.
//cant change markup with BEM plugin NEEDS UPPERCASE AND SUCH FOR H4!
//also make a seperate page not in about!!

import "./About.scss";

export const AboutMissionTemplate = ({
  section_one,
  section_two,
  section_three,
}) => (
  <div
    className="about-mission-purpose--content"
    style={{ textAlign: "left" }}
  ></div>
);

function createMarkup(body) {
  return { __html: body };
}

//This is really dependent on how the CMS delivers this
const aboutMission = () => {
  const data = {
    id: 312,
    date: "2020-10-12T19:40:21",
    date_gmt: "2020-10-12T19:40:21",
    guid: {
      rendered: "https://dev.huoa.org/?page_id=312",
    },

    modified: "2020-10-15T19:26:04",
    modified_gmt: "2020-10-15T19:26:04",
    slug: "mission-purpose",
    status: "publish",
    type: "page",
    link: "https://dev.huoa.org/about/mission-purpose/",
    title: {
      rendered: "Mission &#038; Purpose",
    },

    content: {
      rendered: "",
      protected: false,
    },

    excerpt: {
      rendered: "",
      protected: false,
    },

    author: 1,
    featured_media: 0,
    parent: 352,
    menu_order: 1,
    comment_status: "closed",
    ping_status: "closed",
    template: "",
    meta: [],

    acf: {
      description: "Mission and Purpose Page Description",
      mission_and_purpose: {
        section_one: {
          title: "Who We Are",
          body:
            "<p>The Hawaii United Okinawa Association (HUOA) is a non-profit organization serving as the umbrella organization for 50 member clubs statewide and comprises over 40,000 members. It is governed by a Board of Directors representing each HUOA Member Club, an elected Executive Council.<br /> HUOA employs an Executive Director and a staff of three full-time and two part-time employees. We are truly fortunate to have an extraordinary team of active volunteers who help run cultural and community events, and provide support to keep our organization running smoothly.<br /> The HUOA is also a charter member of the United Japanese Society of Hawaii.</p> <p>HUOA is proud to annually host the Okinawan Festival, our biggest event of the year, traditionally held on the Saturday and Sunday of Labor Day weekend at Kapiolani Park in Waikiki.</p> ",
        },

        section_two: {
          title: "Our Mission",
          body:
            "<p>The mission of the HUOA organization is to promote, perpetuate, and preserve the Okinawan culture here in Hawaii. The HUOA is a huge part of the Hawaii Okinawan community and allows its members to learn about the culture through various educators and practitioners, a central meeting place to share experiences, and a way to connect with the Okinawan government, organizations, and its people. </p> ",
        },

        section_three: {
          title: "Our Purpose",
          body:
            "<p>These guiding principles are the beliefs and values of our organization and through these principles, the purpose of HUOA can be achieved.</p> <p>Through these Eight Principles, we have the means of going &#8220;Back to the Future&#8221; to strengthen Yui Nu Kukuru and pass it on to future generations.</p> <h4>Guiding Philosophy &#8211; The Eight Principles</h4> <ul> <li>The Hawaii Okinawa Center is the home of HUOA which serves the purposes and goals of HUOA.</li> <li>We believe in and are committed to cultivating and perpetuating the &#8220;Uchinanchu Spirit&#8221;.</li> <li>We are committed to perpetuating and promoting Okinawan culture and the arts.</li> <li>We are committed to honoring our Issei whose legacy is the foundation of who we are.</li> <li>Our strength comes from our member associations. We believe that the stronger our member associations are, the stronger HUOA will be.</li> <li>We believe that the future of HUOA is dependent upon its youth. We are committed to encouraging the involvement of our children.</li> <li>Hawaii’s cultural diversity is its strength. We are committed to participating meaningfully in the wider Japanese and Hawaii community.</li> <li>We support and promote Hawaii’s relationship with Okinawa.</li> </ul> ",
        },
      },
    },
    blocks: [],
    _links: {
      self: [{}],
    },
  };
  const mission_and_purpose = data.acf.mission_and_purpose;
  console.log(mission_and_purpose);
  return (
    <Container>
      <AboutMissionTemplate
        section_one={mission_and_purpose.section_one}
        section_two={mission_and_purpose.section_two}
        section_three={mission_and_purpose.section_three}
      />
    </Container>
  );
};

export default aboutMission;

// https://dev.huoa.org/wp-json/wp/v2/pages/312
