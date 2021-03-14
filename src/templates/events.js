import { graphql } from 'gatsby';
import React from 'react';
import Competition from '../components/competitions';
import Workshop from '../components/workshops';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';

export const eventsDataQuery = graphql`
  query EventsDataByPath($event: String!) {
    eventsDataJson(event: { eq: $event }) {
      dateAndTime
      eventName
      rules
      certificatePolicy
      prizes
      posterUrl
      description
      speakerName
      designation
      speakerImg
      type
    }
  }
`;

const EventsPage = ({ data }) => {
  const event = data.eventsDataJson;
  const PageComponent =
    event.type === 'workshop' ? (
      <Workshop
        dAndT={event.dateAndTime}
        eventTitle={event.eventName}
        desc={event.description}
        speaker={event.speakerName}
        desig={event.designation}
        sImg={event.speakerImg}
        pUrl={event.posterUrl}
      />
    ) : (
      <Competition
        dAndT={event.dateAndTime}
        eventTitle={event.eventName}
        desc={event.description}
        rules={event.rules}
        certificatePolicy={event.certificatePolicy}
        prizes={event.prizes}
        pUrl={event.posterUrl}
      />
    );

  return (
    <div>
      <SEO />
      <div className='base px-3 md:px-5 lg:px-10 bg-base'>
        {PageComponent}
        <Footer />
        <Header />
      </div>
    </div>
  );
};
export default EventsPage;