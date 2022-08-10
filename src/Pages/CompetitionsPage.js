import React  from 'react';
import Hero from '../Components/hero';
import {One, two } from '../data/CompetitionsData/infodata';
import InfoSection from '../Components/infosection';
import { SliderData } from '../data/CompetitionsData/SliderData';
import GlobalStyle from '../global-style';
import Footer from "../Components/FooterItems/FooterSection";
import HeaderSection from '../Components/NavbarItems/HeaderSection'

function CompetitionsPage() {
  return (
   <>
   <GlobalStyle/>
   <HeaderSection/>
   <Hero slides={SliderData}/>
   <InfoSection {...One}/>
   <InfoSection {...two}/>
   <Footer/>

   </>
  );
}

export default CompetitionsPage;