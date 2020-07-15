export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const INITIAL_STATE = {
  routes: [
    {
      name: 'About',
      linkTo: '/about',
      children: [
        {
          name: 'Mission and Values',
          linkTo: '/about/mission-and-values'
        },
        {
          name: 'History',
          linkTo: '/about/history'
        },
        {
          name: 'Hawaii Okinawan Center',
          linkTo: '/about/hawaii-okinawan-center'
        },
        {
          name: 'Banquet Facility',
          linkTo: '/about/banquet-facility'
        },
        {
          name: 'HUOA Team',
          linkTo: '/about/team'
        },
        {
          name: 'Gallery',
          linkTo: '/about/gallery'
        }
      ]
    },
    {
      name: 'Get Involved',
      linkTo: '/join',
      children: [
        {
          name: 'Join a HUOA Club',
          linkTo: '/join/clubs'
        },
        {
          name: 'Okinawan Performing Arts Directory',
          linkTo: '/join/performing-arts-directory'
        },
        {
          name: 'Club Sports',
          linkTo: '/join/sports'
        },
        {
          name: 'Scholarships & Grants',
          linkTo: '/join/scholarships'
        },
        {
          name: 'Volunteer',
          linkTo: '/join/volunteer'
        },
        {
          name: 'Donate',
          linkTo: '/donate'
        }
      ]
    },
    {
      name: 'Events',
      linkTo: '/events',
      children: [
        {
          name: 'Calendar',
          linkTo: '/events/calendar'
        },
        {
          name: 'Student Exchange Program',
          linkTo: '/events/student-exchange-program'
        },
        {
          name: 'Okinawan Classes',
          linkTo: '/events/classes'
        }
      ]
    },
    {
      name: 'Geneology',
      linkTo: '/geneology',
      children: []
    },
    {
      name: 'News',
      linkTo: '/news',
      children: [
        {
          name: 'Uchinanchu Newsletter',
          linkTo: '/news/newsletter'
        },
        {
          name: 'Purple Blast',
          linkTo: '/news/purple-blast'
        },
        {
          name: 'HOT Schedule & KZOO Radio',
          linkTo: '/news/hot-schedule-kzoo-radio'
        }
      ]
    },
    {
      name: 'Contact Us',
      linkTo: '/contact',
      children: []
    },
    {
      name: 'Donate',
      linkTo: '/donate',
      children: []
    }
  ]
};
