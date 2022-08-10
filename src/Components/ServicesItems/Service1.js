import React from "react";
import {One, two , three} from '../../data/ServicesData/infodata';
import InfoSection from '../infosection';
import GlobalStyle from '../../global-style';

const styles=()=>{
  
}
function Services1() {
    return (
     <>
     <GlobalStyle/>
     <InfoSection id="services"{...three}/>
     <InfoSection {...two}/>
     <InfoSection {...One}/>
  
     </>
    );
  }
  
  export default Services1;