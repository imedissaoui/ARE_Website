import Carousel from "../Components/CarouselItems/CarouselSection";
import React, { useRef } from "react";
import AboutSection2 from "../Components/AboutItems/AboutSection2";
import RealisationsSection from "../Components/RealisationsItems/RealisationsSection";
import FooterSection from '../Components/FooterItems/FooterSection';
import ActivitiesSection from "../Components/ActivitiesItems/cards";
import ContactSection from "../Components/ContactItems/ContactSection";
import LandingSection from "../Components/LandingItems/LandingSection";
import Services from "../Components/ServicesItems/Service1";
import HeaderSection from "../Components/NavbarItems/NavbarHomePage"; 
import ScrollToTop from '../Components/ScrollItems/ScrollToTop';



function HomePage (){
  const AboutSectionRef=useRef(null);
  const ServicesSectionRef=useRef(null);
  const ActivitiesSectionRef=useRef(null);
  const ContactSectionRef=useRef(null);
  const goToAboutSection=()=>window.scrollTo({top:(document.getElementById("Hard").offsetTop), behavior:"smooth"});
  const goToServicesSection=()=>window.scrollTo({top:(document.getElementsByClassName("sc-ieebsP fnKoge")[0].offsetTop),behavior:"smooth"})
  const goToActivitiesSection=()=>window.scrollTo({top:(document.getElementById("ActivitiesContainer").offsetTop),behavior:"smooth"})
  const goToContactSection=()=>window.scrollTo({top:(document.getElementById("contactus").offsetTop),behavior:"smooth"})

  
    return <>
    <ScrollToTop/>
    <HeaderSection fct1={goToAboutSection} fct2={goToActivitiesSection} fct3={goToServicesSection} fct4={goToContactSection}/>

      <LandingSection fct={goToAboutSection}/>
      <AboutSection2 id="About"ref={AboutSectionRef}/>    
      <RealisationsSection/>
      <ActivitiesSection ref={ActivitiesSectionRef}/>
      <Carousel/>
      <Services ref={ServicesSectionRef}/>
      <ContactSection ref={ContactSectionRef}/>
      <FooterSection/>
    </>
  }


export default HomePage;