import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";

// TODO: connect to WP backend to fetch scholarships & page title.
// TODO: render html styling inside panels, instead of plain text. 
const Scholarships = ({ data }) => {
  const panels = [
    { label: "2021 Uchinaa Junior Study Program",
      content: "Program Dates - Tentative: 6/26/2021 to 9/11/2021." + 
       "\nYouth of Okinawan descent from around the world will learn about Okinawan history, culture, and nature while experiencing daily life with local Okinawan youths of the same age group. They will build strong bonds, deepen their understanding of their Okinawan roots, the local Okinawan students will broaden their international outlooks, and grow the generation that will shoulder the Uchinaa Network." + 
       "\n<a href='https://huoa.org/nuuzi/awards/2021UJS-YouthLeadersApplicationGuidelines.pdf'>Overseas Youth Leader Application Guidelines</a>",
      location: "Okinawa",
    },
    { label: "Okinawa Prefectural Government Scholarship (Kempi Program)",
    content: "Okinawan Prefectural Government offers a scholarship for young persons of Okinawan descent an opportunity to learn about Okinawan culture and other subjects of interest so that they can return to their communities and share what they have learned and experienced. Selected individuals will study at University of the Ryukyus or the Okinawan Prefectural Art Institute (Geidai). This annual award includes air transportation, tuition, books, room and board. For more information, please contact HUOA at 676-5400 or email to info@huoa.org." +
    "\n<b>The deadline for the 2022 Okinawa Prefectural Government Scholarship applications will be announced in the fall of 2021. Please see below for a sample of the prior application.</b>" +
    "\n<a href='https://huoa.org/nuuzi/awards/opg/guideline%20and%20information12.pdf'>Guideline & Information</a>" +
    "\n Application Form: <a href='https://huoa.org/nuuzi/awards/opg/OPG%20Scholarship%20App10-12.doc'>Word Doc</a> <a href='https://huoa.org/nuuzi/awards/opg/OPG%20Scholarship%20App10-12.pdf'>Adobe PDF</a> ",
    location: "Okinawa",
    },
    { label: "Hui O Laulima Cultural Grants",
    content: "Hui O Laulima has provided grants to individuals and organizations in our local Okinawan community with the greatest potential for the preservation, promotion, and perpetuation of the Okinawan culture. 2022 Cultural Grant Application deadline is July 31, 2021. Click here for information and application",
    location: "Local (Hawaii)",
    },
    { label: "Hui Makaala Scholarship",
    content: "Visit Hui Makaala's website for the latest update on the awarding of these scholarships to students going to college. Scholarship application forms may be found here , or through high schools around the State. The deadline for 2021 applicants is May 31, 2021.",
    location: "Local (Hawaii)",
    },
    { label: "HUOA With Love From Lorraine Cultural Grant",
    content: "Cultural Grant Program established to students pursue certification in Okinawa for their art form. Applications are available through qualified Okinawan performing arts school.",
    location: "Local (Hawaii)",
    },
    
  ];

  if (!data) return null;
  else {
    // const { title, body } = data.scholarships_page;

    return (
      <Layout>
        <div className="scholarships__container">
          <h2 position="left" className="scholarships__title">Scholarships and Grants</h2>
          <div className="scholarships__body">
            <Accordion panels={panels}></Accordion>
          </div>
        </div>
      </Layout>
    );
  }
};
export default Scholarships;
