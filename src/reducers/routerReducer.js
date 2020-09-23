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
          name: 'HO Center',
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
          name: 'Scholarships & Awards',
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
          name: 'Class Schedule',
          linkTo: '/events/classes'
        }
      ]
    },
    {
      name: 'Geneology',
      linkTo: '/geneology'
    },
    {
      name: 'News',
      linkTo: '/news',
      children: [
        {
          name: 'Join Our Newsletter',
          linkTo: '/news/newsletter'
        },
        {
          name: 'Watch and Listen',
          linkTo: '/news/watch-and-listen'
        }
      ]
    },
    {
      name: 'Contact Us',
      linkTo: '/contact'
    },
    {
      name: 'Donate',
      linkTo: '/donate'
    }
  ]
};
