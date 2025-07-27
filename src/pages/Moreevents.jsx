import Homefooter from './../Homefooter';
import Faq from './../Faq';
import { useEffect } from 'react';
import Allevents from './Allevents';

function Moreevents() {

    useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <Allevents/>
         <Faq />
        <Homefooter />
    </>
  )
}

export default Moreevents