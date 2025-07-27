import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homemain from './Homemain';
import Homeabout from './Homeabout';
import Keyevents from './Keyevents';
import Glimpse from './Glimpse';
import Sponserscroll from './Sponserscroll';
import Homeconnect from './Homeconnect';
import Faq from './Faq';
import Homefooter from './Homefooter';
import Moreevents from './pages/Moreevents';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === "/" && location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Homemain />
            <Homeabout />
            <Keyevents />
            <Glimpse />
            <Sponserscroll />
            <Homeconnect />
            <Faq />
            <Homefooter />
          </>
        } />
        <Route path="/more-events" element={<Moreevents />} />
      </Routes>
    </>
  );
}

export default App;
