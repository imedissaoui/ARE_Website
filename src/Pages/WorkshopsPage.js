import React  from 'react';
import Hero from '../Components/WorkshopsItems/hero';
import {One, two , three} from '../data/WorkshopsData/infodata';
import InfoSection from '../Components/infosection';
import { SliderData } from '../data/WorkshopsData/SliderData';
import GlobalStyle from '../global-style';
import Footer from "../Components/FooterItems/FooterSection"
import HeaderSection from '../Components/NavbarItems/HeaderSection'


function WorkshopsPage() {
  return (
   <>
   <HeaderSection/>
   <GlobalStyle/>
   <Hero slides={SliderData}/>
   <InfoSection {...One}/>
   <InfoSection {...two}/>
   <InfoSection {...three}/>
   <Footer/>

   </>
  );
}

export default WorkshopsPage;