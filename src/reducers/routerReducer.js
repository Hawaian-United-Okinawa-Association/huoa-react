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
          linkTo: '/about/mission'
        },
        {
          name: 'History',
          linkTo: '/about/history'
        },
        {
          name: 'HO Center',
          linkTo: '/about/ho-center'
        },
        {
          name: 'Banquet Facility',
          linkTo: '/about/banquet'
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
          name: 'Okinawan Art Directory',
          linkTo: '/join/art'
        },
        {
          name: 'Club Sports',
          linkTo: '/join/sports'
        },
        {
          name: 'Scholarships',
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
          name: 'Exchange Programs',
          linkTo: '/events/exchanges'
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
          linkTo: '/news/uchinanchu'
        },
        {
          name: 'Purple Blast',
          linkTo: '/news/purple-blast'
        },
        {
          name: 'HOT Schedule & KZOO Radio',
          linkTo: '/news/hot-kzoo'
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
