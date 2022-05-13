//Dependencies
import React, {useLayoutEffect} from 'react';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

//Components
import Modal from 'components/Modal/Modal';
import Navbar from 'components/Navbar/Navbar';
import NavMobile from 'components/NavMobile/NavMobile';
import Footer from 'components/Footer/Footer';
import Routes from 'config/routes';

import { Init } from './Init';

const App = () => {
  Init();
  const scroll = useSelector(state => state.scroll);
  document.body.style.overflow = scroll ? 'scroll' : 'hidden';

  const location = useLocation();
  useLayoutEffect(() => {
    if(location.hash) return;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location.pathname, location.hash]);
  
  return (
    <main>
      <Modal />
      <Navbar />
      <NavMobile />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
