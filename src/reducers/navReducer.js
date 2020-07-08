import { SET_ACTIVE_MENU } from '../actions/actionTypes';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return { ...state, activeMenu: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  navItems: [
    {
      name: 'About',
      linkTo: '/about',
      children: []
    },
    {
      name: 'Get Involved',
      linkTo: '/join',
      children: [
        {
          name: 'Join a HUOA Club',
          linkTo: '/about/clubs'
        },
        {
          name: 'Okinawan Art Directory',
          linkTo: '/about/art'
        },
        {
          name: 'Club Sports',
          linkTo: '/about/sports'
        }
      ]
    },
    {
      name: 'Events',
      linkTo: '/events',
      children: []
    },
    {
      name: 'Geneology',
      linkTo: '/geneology',
      children: []
    },
    {
      name: 'News',
      linkTo: '/news',
      children: []
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
  ],
  activeMenu: null
};
