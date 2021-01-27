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
      phase1: true,
      children: [
        {
          name: 'Mission and Purpose',
          linkTo: '/about/mission-and-purpose',
          phase1: true
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
          linkTo: '/about/banquet-facility',
          phase1: true
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
      linkTo: '/clubs',
      phase1: true,
      children: [
        {
          name: 'Join a HUOA Club',
          linkTo: '/clubs',
          phase1: true
        },
        {
          name: 'Okinawan Performing Arts Directory',
          linkTo: '/performing-arts-directory'
        },
        {
          name: 'Club Sports',
          linkTo: '/sports'
        },
        {
          name: 'Scholarships & Awards',
          linkTo: '/scholarships'
        },
        {
          name: 'Volunteer',
          linkTo: '/volunteer'
        },
        {
          name: 'Donate',
          linkTo: '/donate',
          phase1: true
        }
      ]
    },
    {
      name: 'Events',
      linkTo: '/events',
      phase1: true
      // TODO: this is commented out for Phase 1
      // children: [
      //   {
      //     name: 'Calendar',
      //     linkTo: '/events/calendar'
      //   },
      //   {
      //     name: 'Class Schedule',
      //     linkTo: '/events/classes'
      //   }
      // ]
    },
    {
      name: 'Shop',
      linkTo: '/shop'
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
      name: 'Shop',
      linkTo: '/shop',
      phase1: true
    },
    {
      name: 'Contact Us',
      linkTo: '/contact',
      phase1: true
    },
    {
      name: 'Donate',
      linkTo: '/donate',
      phase1: true
    }
  ]
};
