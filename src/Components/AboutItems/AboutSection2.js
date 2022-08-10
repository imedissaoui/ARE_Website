import React from "react";
import {One, two } from '../../data/AboutData/infodata';
import InfoSection from './infosection';
import GlobalStyle from '../../global-style';


function AboutSection2() {
    return (
     <>
     <GlobalStyle/>
     <InfoSection data-aos="fade-right" data-aos-delay="300" data-aos-duration="3000" {...One}/>
     <InfoSection data-aos="fade-up-left" data-aos-delay="300" data-aos-duration="3000" {...two}/>
  
     </>
    );
  }
  
  export default AboutSection2;